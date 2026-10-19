import type { CollectionEntry } from "astro:content";

export type Product = CollectionEntry<"products">;

export const productPath = (id: string) => {
  const [category, slug] = id.split("/");
  return `/products/${category}/${slug}/`;
};

export const isDiscontinued = (product: Product) => product.data.status === "discontinued";

// replacedBy 可寫檔名 slug（`2200r`）或完整 id（`clamp-meters/2200r`）
const findByRef = (ref: string, products: Product[]) => {
  const key = ref.trim().replace(/^\/+|\/+$/g, "").toLowerCase();
  const matches = key.includes("/")
    ? products.filter((item) => item.id.toLowerCase() === key)
    : products.filter((item) => item.id.split("/")[1]?.toLowerCase() === key);
  return matches;
};

// 停產品的後繼機種：沿 replacedBy 往下找到第一個現行產品；鏈尾仍停產則視為無後繼
export const resolveSuccessor = (product: Product, products: Product[]): Product | undefined => {
  const seen = new Set<string>([product.id]);
  let current = product;

  while (current.data.replacedBy) {
    const [next] = findByRef(current.data.replacedBy, products);

    if (!next || seen.has(next.id)) {
      return undefined;
    }

    if (!isDiscontinued(next)) {
      return next;
    }

    seen.add(next.id);
    current = next;
  }

  return undefined;
};

// build 時做 schema 無法做的跨檔檢查（資料夾＝分類、replacedBy），有誤就讓 build 失敗並列出全部問題
export const assertValidProducts = (products: Product[]) => {
  const problems: string[] = [];

  for (const product of products) {
    const file = `src/content/products/${product.id}.md`;
    const folder = product.id.split("/")[0];

    // 網址與麵包屑用資料夾、列表用 category 欄位，兩者不一致會讓產品出現在錯的分類
    if (folder !== product.data.category) {
      problems.push(`${file}：放在 ${folder}/ 資料夾，但 category 寫 ${product.data.category}`);
    }

    const ref = product.data.replacedBy;

    if (!ref) {
      continue;
    }

    if (!isDiscontinued(product)) {
      problems.push(`${file}：有 replacedBy 但沒有 status: discontinued`);
      continue;
    }

    const matches = findByRef(ref, products);

    if (matches.length === 0) {
      problems.push(`${file}：replacedBy「${ref}」找不到對應產品檔`);
    } else if (matches.length > 1) {
      problems.push(`${file}：replacedBy「${ref}」對應到多個產品，請改寫成「分類/檔名」`);
    } else if (matches[0].id === product.id) {
      problems.push(`${file}：replacedBy 指向自己`);
    }
  }

  for (const product of products) {
    const seen = new Set<string>();
    let current: Product | undefined = product;

    while (current?.data.replacedBy && isDiscontinued(current)) {
      if (seen.has(current.id)) {
        problems.push(`src/content/products/${product.id}.md：replacedBy 形成循環（${[...seen].join(" → ")}）`);
        break;
      }

      seen.add(current.id);
      const matches = findByRef(current.data.replacedBy, products);
      current = matches.length === 1 ? matches[0] : undefined;
    }
  }

  if (problems.length > 0) {
    throw new Error(`產品資料設定有誤：\n${[...new Set(problems)].join("\n")}`);
  }
};

// 列表排序：分類內 order → 型號；停產品一律排在現行產品之後
export const compareProducts = (a: Product, b: Product) => {
  const statusDiff = Number(isDiscontinued(a)) - Number(isDiscontinued(b));

  if (statusDiff !== 0) {
    return statusDiff;
  }

  const orderDiff = (a.data.order ?? Number.MAX_SAFE_INTEGER) - (b.data.order ?? Number.MAX_SAFE_INTEGER);

  if (orderDiff !== 0) {
    return orderDiff;
  }

  return a.data.model.localeCompare(b.data.model, "zh-Hant-TW");
};
