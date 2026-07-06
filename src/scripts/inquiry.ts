const STORAGE_KEY = "conwen-inquiry";
const SETUP_FLAG = "__conwenInquirySetup";

export interface InquiryItem {
  slug: string;
  model: string;
  title: string;
  qty: number;
}

interface InquiryApi {
  add: (slug: string, model: string, title: string) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  count: () => number;
  getItems: () => InquiryItem[];
  clear: () => void;
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

  try {
    if (normalized.length > 0) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Storage can fail in private browsing; the UI still receives the change event.
  }

  emitChange();
};

export const getItems = () => readItems();

export const count = () => readItems().reduce((total, item) => total + item.qty, 0);

export const add = (slug: string, model: string, title: string) => {
  const item = normalizeItem({ slug, model, title, qty: 1 });

  if (!item) {
    return;
  }

  const items = readItems();
  const existing = items.find((entry) => entry.slug === item.slug);

  if (existing) {
    existing.qty += 1;
  } else {
    items.push(item);
  }

  writeItems(items);
};

export const remove = (slug: string) => {
  writeItems(readItems().filter((item) => item.slug !== slug));
};

export const setQty = (slug: string, qty: number) => {
  const nextQty = Math.floor(qty);

  if (!Number.isFinite(nextQty) || nextQty < 1) {
    remove(slug);
    return;
  }

  writeItems(readItems().map((item) => (item.slug === slug ? { ...item, qty: nextQty } : item)));
};

export const clear = () => {
  writeItems([]);
};

const inquiryApi: InquiryApi = { add, remove, setQty, count, getItems, clear };

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
    add(button.dataset.slug ?? "", button.dataset.model ?? "", button.dataset.title ?? "");
    showAddedFeedback(button);
  });

  window.addEventListener("inquiry:change", updateBadge);
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      updateBadge();
    }
  });

  updateBadge();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup, { once: true });
} else {
  setup();
}
