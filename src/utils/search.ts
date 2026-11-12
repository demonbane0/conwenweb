// 產品列表的關鍵字比對（/products/ 與分類頁共用，於瀏覽器端執行）
// 客戶常照原廠寫法輸入「KEW 2007R」「KEW MATE 2000A」「KT 170」或少打空格的「KM2000A」，
// 網站型號欄則是「2007R」「KM 2000A」「KT170」——去掉原廠前綴、比對時忽略空白，兩種寫法都找得到
const VENDOR_PREFIX = /^(kew\s*mate|kew|model)\s*(?=[a-z]*\d)/;

const squash = (text: string) => text.replace(/\s+/g, "");

export const normalizeKeyword = (raw: string) => raw.trim().toLowerCase().replace(VENDOR_PREFIX, "");

// searchText 已是小寫；keyword 需先經 normalizeKeyword
export const matchesKeyword = (searchText: string, keyword: string) =>
  !keyword || searchText.includes(keyword) || squash(searchText).includes(squash(keyword));
