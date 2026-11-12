import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// 產品內文的規格表（不需額外套件）：
// 1. 外包可橫向捲動的容器，手機上多欄表格不撐破版面；容器可聚焦以便鍵盤捲動，
//    名稱依所在 ## 段落與序號區分（同頁多張表不同名）
// 2. 每列第一格轉成 <th scope="row">、表頭加 scope="col"，讀屏軟體能把項目與數值對上
const textOf = (node) =>
  node.type === "text" ? node.value : (node.children ?? []).map(textOf).join("");

const markHeaders = (table) => {
  for (const section of table.children ?? []) {
    if (section.type !== "element") continue;
    for (const row of section.children ?? []) {
      if (row.type !== "element" || row.tagName !== "tr") continue;
      const cells = row.children.filter((cell) => cell.type === "element");
      if (section.tagName === "thead") {
        for (const cell of cells) cell.properties = { ...cell.properties, scope: "col" };
      } else if (cells[0]?.tagName === "td") {
        cells[0].tagName = "th";
        cells[0].properties = { ...cells[0].properties, scope: "row" };
      }
    }
  }
};

function rehypeSpecTables() {
  return (tree) => {
    let heading = "規格";
    const count = new Map();
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (child.type !== "element") return child;
        if (child.tagName === "h2") heading = textOf(child).trim() || heading;
        if (child.tagName === "table") {
          markHeaders(child);
          const n = (count.get(heading) ?? 0) + 1;
          count.set(heading, n);
          return {
            type: "element",
            tagName: "div",
            properties: {
              className: ["table-scroll"],
              tabIndex: 0,
              role: "region",
              ariaLabel: `${heading}表格${n > 1 ? ` ${n}` : ""}（可左右捲動）`,
            },
            children: [child],
          };
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}

export default defineConfig({
  site: "https://conwen.com.tw",
  base: "/",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeSpecTables],
  },
});
