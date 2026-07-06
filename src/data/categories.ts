export const categories = [
  { slug: "electrical-testing", name: "電機電子測試測量", order: 1 },
  { slug: "environmental", name: "環境相關測量儀器", order: 2 },
  { slug: "pressure", name: "壓力測量與校正", order: 3 },
  { slug: "temperature", name: "溫度信號測量校正", order: 4 },
  { slug: "resistance-recorders", name: "電阻校正及記錄器", order: 5 },
  { slug: "clamp-meters", name: "鉤式電錶類儀器", order: 6 },
  { slug: "field-testing", name: "現場測試用儀器", order: 7 },
  { slug: "high-voltage", name: "高壓維護測試", order: 8 },
  { slug: "power-quality", name: "檢電及電源品質", order: 9 },
  { slug: "infrared", name: "工業用紅外線感測", order: 10 },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
