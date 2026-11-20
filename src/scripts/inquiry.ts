import { withBase } from "../utils/url";

const STORAGE_KEY = "conwen-inquiry";
const SETUP_FLAG = "__conwenInquirySetup";

export interface InquiryItem {
  slug: string;
  model: string;
  title: string;
  qty: number;
}

// 寫入類操作回傳 true＝已確實存進 localStorage；false＝瀏覽器拒絕儲存（無痕模式、封鎖網站資料、容量已滿），
// 呼叫端必須提示使用者，不可當成功處理（否則客戶以為已加入，到詢價單才發現是空的）
interface InquiryApi {
  add: (slug: string, model: string, title: string) => boolean;
  remove: (slug: string) => boolean;
  setQty: (slug: string, qty: number) => boolean;
  count: () => number;
  getItems: () => InquiryItem[];
  clear: () => boolean;
  removeSent: (sent: InquiryItem[]) => boolean;
}

declare global {
  interface Window {
    ConwenInquiry?: InquiryApi;
    [SETUP_FLAG]?: boolean;
  }
}

const MAX_QTY = 999;

const normalizeQty = (qty: unknown) => {
  const value = typeof qty === "number" ? qty : Number.parseInt(String(qty), 10);

  if (!Number.isFinite(value) || value < 1) {
    return 1;
  }

  return Math.min(Math.floor(value), MAX_QTY);
};

const normalizeItem = (item: Partial<InquiryItem>): InquiryItem | null => {
  const slug = String(item.slug ?? "").trim();
  const model = String(item.model ?? "").trim();
  const title = String(item.title ?? "").trim();

  if (!slug || !model || !title) {
    return null;
  }

  return {
    slug,
    model,
    title,
    qty: normalizeQty(item.qty),
  };
};

const readItems = (): InquiryItem[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((item) => normalizeItem(item))
      .filter((item): item is InquiryItem => Boolean(item));
  } catch {
    return [];
  }
};

const emitChange = () => {
  window.dispatchEvent(
    new CustomEvent("inquiry:change", {
      detail: {
        count: count(),
        items: readItems(),
      },
    }),
  );
};

const writeItems = (items: InquiryItem[]) => {
  const normalized = items
    .map((item) => normalizeItem(item))
    .filter((item): item is InquiryItem => Boolean(item));
  let saved = false;

  try {
    if (normalized.length > 0) {
      const serialized = JSON.stringify(normalized);
      window.localStorage.setItem(STORAGE_KEY, serialized);
      // 讀回比對：有些環境 setItem 不丟錯卻沒存進去
      saved = window.localStorage.getItem(STORAGE_KEY) === serialized;
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
      saved = window.localStorage.getItem(STORAGE_KEY) === null;
    }
  } catch {
    // 無痕模式／封鎖網站資料／容量已滿：回傳 false 由呼叫端提示，不吞掉
    saved = false;
  }

  // 失敗也發事件：讓徽章與詢價單依實際儲存內容重繪（數量欄會回到原值）
  emitChange();
  return saved;
};

export const getItems = () => readItems();

export const count = () => readItems().reduce((total, item) => total + item.qty, 0);

export const add = (slug: string, model: string, title: string) => {
  const item = normalizeItem({ slug, model, title, qty: 1 });

  if (!item) {
    return false;
  }

  const items = readItems();
  const existing = items.find((entry) => entry.slug === item.slug);

  if (existing) {
    existing.qty += 1;
  } else {
    items.push(item);
  }

  return writeItems(items);
};

export const remove = (slug: string) => writeItems(readItems().filter((item) => item.slug !== slug));

export const setQty = (slug: string, qty: number) => {
  const nextQty = Math.floor(qty);

  if (!Number.isFinite(nextQty) || nextQty < 1) {
    return remove(slug);
  }

  return writeItems(readItems().map((item) => (item.slug === slug ? { ...item, qty: nextQty } : item)));
};

export const clear = () => writeItems([]);

// 送出成功後只扣掉「送出當下」的品項與數量：送出途中在其他分頁新增或加量的部分保留，不會沒送出就被清掉
export const removeSent = (sent: InquiryItem[]) => {
  const sentQty = new Map(sent.map((item) => [item.slug, item.qty]));

  return writeItems(
    readItems()
      .map((item) => ({ ...item, qty: item.qty - (sentQty.get(item.slug) ?? 0) }))
      .filter((item) => item.qty > 0),
  );
};

export const STORAGE_ERROR_TEXT = "無法加入詢價單：您的瀏覽器目前不允許網站儲存資料（例如無痕模式或已封鎖網站資料）。";

const inquiryApi: InquiryApi = { add, remove, setQty, count, getItems, clear, removeSent };

window.ConwenInquiry = inquiryApi;

const feedbackTimers = new WeakMap<HTMLButtonElement, number>();

const showAddedFeedback = (button: HTMLButtonElement) => {
  const originalText = button.dataset.defaultText ?? button.textContent ?? "加入詢價單";
  const previousTimer = feedbackTimers.get(button);

  if (previousTimer) {
    window.clearTimeout(previousTimer);
  }

  button.dataset.defaultText = originalText;
  button.textContent = "已加入 ✓";

  const timer = window.setTimeout(() => {
    button.textContent = button.dataset.defaultText ?? "加入詢價單";
    feedbackTimers.delete(button);
  }, 1200);

  feedbackTimers.set(button, timer);
};

// 加入失敗時在按鈕所在區塊顯示常駐錯誤（不自動消失），並給替代管道；JS 產生的元素樣式寫在 global.css
const errorFor = (button: HTMLButtonElement) =>
  button.parentElement?.querySelector<HTMLElement>(":scope > [data-inquiry-error]") ?? null;

const showStorageError = (button: HTMLButtonElement) => {
  const container = button.parentElement;

  // 前一次成功的「已加入 ✓」還在倒數時又失敗：先還原按鈕，避免成功字樣與錯誤並存
  const previousTimer = feedbackTimers.get(button);

  if (previousTimer) {
    window.clearTimeout(previousTimer);
    feedbackTimers.delete(button);
  }

  if (button.dataset.defaultText) {
    button.textContent = button.dataset.defaultText;
  }

  if (!container) {
    return;
  }

  errorFor(button)?.remove();

  const error = document.createElement("p");
  error.className = "inquiry-error";
  error.dataset.inquiryError = "";
  error.setAttribute("role", "alert");

  const link = document.createElement("a");
  link.href = withBase("/contact/");
  link.textContent = "改用電話或 Email 詢價";

  error.append(`${STORAGE_ERROR_TEXT}請`, link, "。");
  container.append(error);
};

const updateBadge = () => {
  const badge = document.querySelector<HTMLElement>("#inquiry-count");

  if (!badge) {
    return;
  }

  const total = count();
  badge.textContent = String(total);
  badge.hidden = total === 0;
  badge.setAttribute("aria-label", `詢價單共 ${total} 件產品`);
};

const setup = () => {
  if (window[SETUP_FLAG]) {
    window.ConwenInquiry = inquiryApi;
    updateBadge();
    return;
  }

  window[SETUP_FLAG] = true;
  window.ConwenInquiry = inquiryApi;

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest<HTMLButtonElement>("[data-inquiry-add]");

    if (!button) {
      return;
    }

    event.preventDefault();

    if (add(button.dataset.slug ?? "", button.dataset.model ?? "", button.dataset.title ?? "")) {
      errorFor(button)?.remove();
      showAddedFeedback(button);
    } else {
      showStorageError(button);
    }
  });

  window.addEventListener("inquiry:change", updateBadge);
  window.addEventListener("storage", (event) => {
    // 其他分頁改了詢價單（key 為 null＝對方清空整個 storage）：轉發成 inquiry:change，
    // 本頁徽章與詢價單表格一起重繪，畫面才會跟實際送出的內容一致
    if (event.key === STORAGE_KEY || event.key === null) {
      emitChange();
    }
  });

  updateBadge();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup, { once: true });
} else {
  setup();
}
