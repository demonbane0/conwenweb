export const COMPANY = {
  name: "耕紋貿易股份有限公司",
  englishName: "Conwen Trading Co., Ltd.",
  establishedMinguoYear: 77,
  establishedYear: 1988,
  tagline: "專業代理電機電子測試測量儀器",
  email: "conwencf@ms19.hinet.net",
  branches: [
    {
      slug: "headquarters",
      name: "總公司",
      postalCode: "", // 6 碼郵遞區號待業主提供
      address: "新北市泰山區福興二街38號",
      phone: "(02)2297-3128",
      fax: "(02)2297-3165",
    },
    {
      slug: "taichung",
      name: "台中分公司",
      postalCode: "406036",
      address: "台中市北屯區中清路2段808巷17號2樓",
      phone: "(04)2425-5159",
      fax: "(04)2425-4469",
    },
    {
      slug: "kaohsiung",
      name: "高雄分公司",
      postalCode: "813341",
      address: "高雄市左營區自由二路6巷77號7樓",
      phone: "(07)550-8287",
      fax: "(07)550-9817",
    },
  ],
} as const;

// 顯示用完整地址（郵遞區號 + 地址）；地圖查詢用不含郵遞區號的 address
export const formatAddress = (branch: { postalCode: string; address: string }) =>
  [branch.postalCode, branch.address].filter(Boolean).join(" ");

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqevjpbn";
