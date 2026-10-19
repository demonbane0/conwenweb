// 產品資料維護報表（唯讀，不改任何檔案）
//
//   npm run audit:products                              各廠牌現行／停產／待確認數量
//   npm run audit:products -- --brand "Kyoritsu 共立"     列出該廠牌每一項的確認狀態
//   npm run audit:products -- --list                    列出全部待確認產品
//   npm run audit:products -- --months 6                「待確認」門檻改為 6 個月（預設 12）
//
// 「待確認」＝ lastReviewed 未填或早於門檻。只讀 frontmatter 的單行欄位做統計；
// 欄位格式與 replacedBy 是否存在由 npm run build 把關。

import { readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const productsDir = join(projectRoot, "src", "content", "products");

const args = process.argv.slice(2);
const argValue = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
};

const months = Number.parseInt(argValue("--months") ?? "12", 10);
const brandFilter = argValue("--brand");
const listAll = args.includes("--list");

if (!Number.isFinite(months) || months < 1) {
  console.error("--months 必須是正整數");
  process.exit(1);
}

// 以日曆日比較：今天往前推 N 個月的同一天（月底夾限，3/31 往前 1 個月＝2/28 或 2/29）
const parseDay = (text) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text ?? "");
  if (!match) return undefined;
  const time = Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return new Date(time).toISOString().startsWith(text) ? time : undefined;
};
const today = new Date();
const target = new Date(Date.UTC(today.getFullYear(), today.getMonth() - months, 1));
const lastDay = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
const cutoff = Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), Math.min(today.getDate(), lastDay));

const listMarkdown = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return listMarkdown(path);
    return entry.name.endsWith(".md") ? [path] : [];
  });

const readFrontmatter = (path) => {
  const text = readFileSync(path, "utf8").replace(/^﻿/, "");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return undefined;
  const fields = {};

  for (const line of match?.[1].split(/\r?\n/) ?? []) {
    const field = line.match(/^([A-Za-z]+):\s*(.*?)\s*$/);
    if (!field || field[2] === "") continue;

    const quoted = field[2].match(/^"(.*)"(?:\s+#.*)?$/) ?? field[2].match(/^'(.*)'(?:\s+#.*)?$/);
    fields[field[1]] = quoted ? quoted[1].replace(/\\"/g, '"') : field[2].replace(/\s+#.*$/, "");
  }

  return fields;
};

// 報表不能把壞資料靜默算進統計：讀不懂的檔案列出來並以非零結束
const problems = [];
const products = listMarkdown(productsDir).flatMap((path) => {
  const file = relative(projectRoot, path).split(sep).join("/");
  const data = readFrontmatter(path);

  if (!data) {
    problems.push(`${file}：找不到 --- 包住的 frontmatter`);
    return [];
  }

  const fileProblems = [];
  if (!data.model) fileProblems.push("缺 model");
  if (!data.title) fileProblems.push("缺 title");
  if (data.status && !["active", "discontinued"].includes(data.status)) {
    fileProblems.push(`status「${data.status}」只能是 active 或 discontinued`);
  }
  const reviewed = parseDay(data.lastReviewed);
  if (data.lastReviewed && reviewed === undefined) {
    fileProblems.push(`lastReviewed「${data.lastReviewed}」須為有效的 YYYY-MM-DD`);
  }
  if (fileProblems.length > 0) {
    problems.push(`${file}：${fileProblems.join("、")}`);
    return [];
  }

  return [
    {
      file,
      id: relative(productsDir, path).split(sep).join("/").replace(/\.md$/, ""),
      model: data.model,
      title: data.title,
      brand: data.brand ?? "（未填廠牌）",
      discontinued: data.status === "discontinued",
      replacedBy: data.replacedBy,
      reviewed,
    },
  ];
});

if (problems.length > 0) {
  console.error(`產品資料有誤，報表未產生（修正後再跑；npm run build 也會擋）：\n${problems.join("\n")}`);
  process.exit(1);
}

const isStale = (product) => product.reviewed === undefined || product.reviewed < cutoff;
const formatDate = (time) => (time === undefined ? "未確認" : new Date(time).toISOString().slice(0, 10));

// 中日韓全形字在終端機佔 2 格
const width = (text) => [...String(text)].reduce((sum, char) => sum + (/[ᄀ-￿]/.test(char) ? 2 : 1), 0);
const pad = (text, size) => `${text}${" ".repeat(Math.max(0, size - width(text)))}`;
const printTable = (headers, rows) => {
  const sizes = headers.map((header, column) => Math.max(width(header), ...rows.map((row) => width(row[column]))));
  const line = (cells) => cells.map((cell, column) => pad(cell, sizes[column])).join("  ").trimEnd();
  console.log(line(headers));
  console.log(sizes.map((size) => "-".repeat(size)).join("  "));
  for (const row of rows) console.log(line(row));
};

const active = products.filter((product) => !product.discontinued);
const discontinued = products.filter((product) => product.discontinued);
const stale = products.filter(isStale);

console.log(`產品 ${products.length} 項：現行 ${active.length}、停產 ${discontinued.length}`);
console.log(`待確認（${months} 個月內未確認或從未確認）${stale.length} 項\n`);

if (brandFilter) {
  const items = products.filter((product) => product.brand === brandFilter);

  if (items.length === 0) {
    const names = [...new Set(products.map((product) => product.brand))].sort();
    console.error(`找不到廠牌「${brandFilter}」。現有廠牌：\n${names.join("\n")}`);
    process.exit(1);
  }

  printTable(
    ["型號", "品名", "狀態", "後繼", "最後確認", "檔案"],
    items
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((product) => [
        product.model,
        product.title,
        product.discontinued ? "停產" : "現行",
        product.replacedBy ?? "",
        formatDate(product.reviewed),
        product.file,
      ]),
  );
  process.exit(0);
}

const byBrand = new Map();
for (const product of products) {
  const row = byBrand.get(product.brand) ?? { active: 0, discontinued: 0, stale: 0, latest: undefined };
  row[product.discontinued ? "discontinued" : "active"] += 1;
  if (isStale(product)) row.stale += 1;
  if (product.reviewed !== undefined && (row.latest === undefined || product.reviewed > row.latest)) {
    row.latest = product.reviewed;
  }
  byBrand.set(product.brand, row);
}

printTable(
  ["廠牌", "現行", "停產", "待確認", "最近確認"],
  [...byBrand.entries()]
    .sort((a, b) => b[1].active + b[1].discontinued - (a[1].active + a[1].discontinued) || a[0].localeCompare(b[0]))
    .map(([brand, row]) => [brand, String(row.active), String(row.discontinued), String(row.stale), formatDate(row.latest)]),
);

const orphans = discontinued.filter((product) => !product.replacedBy);
if (orphans.length > 0) {
  console.log(`\n停產但未指定後繼機種 ${orphans.length} 項（可接受，僅供參考）：`);
  for (const product of orphans) console.log(`  ${product.model}  ${product.title}  (${product.file})`);
}

if (listAll && stale.length > 0) {
  console.log("\n待確認產品：");
  printTable(
    ["廠牌", "型號", "品名", "最後確認", "檔案"],
    stale
      .sort((a, b) => a.brand.localeCompare(b.brand) || a.id.localeCompare(b.id))
      .map((product) => [product.brand, product.model, product.title, formatDate(product.reviewed), product.file]),
  );
} else if (stale.length > 0) {
  console.log("\n加 --list 列出全部待確認產品，或 --brand \"廠牌名\" 看單一廠牌明細");
}
