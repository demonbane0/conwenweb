// 產品列表的關鍵字比對（/products/ 與分類頁共用，於瀏覽器端執行）
// 客戶常照原廠寫法輸入「KEW 2007R」「KEW MATE 2000A」「KT 170」或少打空格的「KM2000A」，
// 網站型號欄則是「2007R」「KM 2000A」「KT170」——去掉原廠前綴、比對時忽略空白與連字號，兩種寫法都找得到
// （「TR MARK III」「TRMARKIII」找得到「TR-MARK III 250V」）
const VENDOR_PREFIX = /^(kew\s*mate|kew|model)\s*(?=[a-z]*\d)/;

const squash = (text: string) => text.replace(/[\s\-‐‑–—－]+/g, "");

export const normalizeKeyword = (raw: string) => raw.trim().toLowerCase().replace(VENDOR_PREFIX, "");

// searchText 已是小寫；keyword 需先經 normalizeKeyword
export const matchesKeyword = (searchText: string, keyword: string) => {
  if (!keyword || searchText.includes(keyword)) {
    return true;
  }

  const target = squash(searchText);
  const whole = squash(keyword);

  if (whole && target.includes(whole)) {
    return true;
  }

  // 多個詞時逐詞比對、不限順序：「RAYTECH TR-MARK III」（索引是「型號 品名 廠牌」）、「三相 匝比」
  const terms = keyword.split(/\s+/).map(squash).filter(Boolean);
  return terms.length > 1 && terms.every((term) => target.includes(term));
};
