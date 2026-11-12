export interface Brand {
  /** 廠牌頁網址 /brands/<slug>/（ASCII，固定不改，改了會斷外部連結） */
  slug: string;
  name: string;
  /** 中文廠牌名的英文寫法，內文顯示為「日本共立儀器（KYORITSU）」 */
  latinName?: string;
  /** 必須與產品 .md 的 brand 欄位完全相同（/products/?brand= 篩選與廠牌頁產品清單都靠它） */
  filter: string;
  /** 代理關係有業主確認才填（例「台灣總代理」）；未填時頁面只寫「代理」 */
  role?: string;
  origin: string;
  image: string;
  description: string;
}

export const brands: readonly Brand[] = [
  {
    slug: "t-r",
    name: "T&R",
    filter: "T&R",
    origin: "英國",
    image: "/images/brands/t-r.jpg",
    description:
      "直流耐壓試驗器、交流耐壓試驗器、絕緣油耐壓試驗器、各式電驛測試器、無熔絲開關測試器、數位電驛測試器、大電流低阻計、大電流產生器等。",
  },
  {
    slug: "ge-druck",
    name: "GE Druck",
    filter: "GE Druck",
    origin: "英國",
    image: "/images/brands/ge-druck.jpg",
    description:
      "數字式壓力校正器、多功能壓力校正器、液壓式與空氣式重錘壓力校正器、壓力產生器、數字式微壓計與壓力錶頭等。",
  },
  {
    slug: "cropico",
    name: "CROPICO",
    filter: "CROPICO",
    origin: "英國",
    image: "/images/brands/cropico.gif",
    description:
      "各種範圍十進位電阻箱、RTD 模擬電阻箱、單體標準電阻器、多範圍標準電阻器、絕緣高電阻校正器、數字式低阻計等。",
  },
  {
    slug: "eurotron",
    name: "EUROTRON",
    filter: "EUROTRON",
    origin: "義大利",
    image: "/images/brands/eurotron.jpg",
    description:
      "製程儀控校正儀器、精密數字溫度計、高低溫溫度校正爐、多功能溫度信號校正器、壓力校正器、紅外線測溫器與熱像儀等。",
  },
  {
    slug: "rhein-tacho",
    name: "RHEIN TACHO",
    filter: "RHEIN TACHO",
    origin: "德國",
    image: "/images/brands/rhein-tacho.jpg",
    description: "數字式接觸 / 非接觸兩用光電轉速計、閃頻儀。",
  },
  {
    slug: "kyoritsu",
    name: "日本共立儀器",
    latinName: "KYORITSU",
    filter: "Kyoritsu 共立",
    // 業主 2026-11-12 確認耕紋為 KYORITSU 台灣總代理；其他廠牌未確認前不得寫「總代理」
    role: "台灣總代理",
    origin: "日本",
    image: "/images/brands/kyoritsu.jpg",
    description:
      "數字式與指針型三用電錶、高阻計、接地電阻計、電壓偵測器、漏電斷路器測試器、鉤錶、電力與電源品質分析儀、各式記錄器等。",
  },
  {
    slug: "hasegawa",
    name: "日本長谷川電機",
    latinName: "HASEGAWA",
    filter: "Hasegawa 長谷川",
    origin: "日本",
    image: "/images/brands/hasegawa.jpg",
    description: "各式高低壓檢電器、活線作業高壓近接警報器等。",
  },
  {
    slug: "kaise",
    name: "KAISE CORPORATION",
    filter: "Kaise",
    origin: "日本",
    image: "/images/brands/kaise.jpg",
    description: "數字式三用電錶、指針型三用電錶、名片型三用電錶、數字式高阻計、指針式高阻計、洩漏電流鉤錶等。",
  },
];

/** 內文用全名：中文名附英文（有的話） */
export const brandFullName = (brand: Brand) => (brand.latinName ? `${brand.name}（${brand.latinName}）` : brand.name);

export const brandPath = (brand: Brand) => `/brands/${brand.slug}/`;

/** 依產品 .md 的 brand 值找有獨立頁面的代理廠牌；找不到回傳 undefined */
export const findBrand = (productBrand?: string) => {
  const name = productBrand?.trim();
  return name ? brands.find((brand) => brand.filter === name) : undefined;
};
