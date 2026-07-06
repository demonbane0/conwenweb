# 耕紋貿易股份有限公司 — 公司網站重建

耕紋貿易（Conwen Trading Co., Ltd.）1988 年成立，專業代理進口電機電子測試測量儀器，
北（新北泰山總公司）、中（台中）、南（高雄）三據點。本 repo 將 2008 年的 FrontPage
frameset 舊站重建為現代靜態網站。

## 技術棧

- **Astro 5**（靜態輸出，`output: 'static'`），內容用 Content Collections
- 純 TypeScript/vanilla JS，**不引入 React/Vue 等框架**；互動只有搜尋篩選與詢價車
- CSS：單一 `src/styles/global.css` 設計代幣 + 各元件 scoped `<style>`；不用 Tailwind
- 字體：Noto Sans TC（Google Fonts），全站 UTF-8、繁體中文、`lang="zh-Hant-TW"`
- 部署：GitHub Actions → GitHub Pages

## 指令

```bash
npm install
npm run dev      # 開發伺服器
npm run build    # 建置到 dist/（驗證必跑，不得有錯誤）
npm run preview  # 預覽建置結果
```

## 目錄結構

```
legacy/           舊站原始檔（Big5）— 唯讀，禁止修改
legacy/utf8/      舊站 UTF-8 轉檔 — 資料抽取的唯一來源
src/
  content/
    products/     產品 Markdown（一個產品一個檔）
    news/         最新消息 Markdown
  data/
    categories.ts 10 大分類定義（slug、名稱、順序）
    brands.ts     代理廠牌
    site.ts       公司資訊（地址電話、Email、Formspree endpoint）
  layouts/        Layout.astro（header/footer/詢價車徽章）
  pages/          index、products/、brands、about、news、contact、inquiry
  components/     ProductCard、CategoryNav、InquiryButton …
  styles/global.css
public/
  images/products/   產品圖（由 legacy/ 複製並改為 slug 檔名）
  images/company/    公司照片
```

## 產品資料格式（Content Collection schema）

`src/content/products/<category-slug>/<product-slug>.md`：

```yaml
---
title: 61/2 數位萬用電錶        # 產品名稱（不含型號）
model: M3500A                  # 型號（顯示用、詢價單用）
category: electrical-testing   # 必須是 categories.ts 中的 slug
brand: Picotest                # 選填
image: /images/products/m3500a.jpg
features:                      # 特點列表（來自舊站 ◆ 項目）
  - 高精確度與穩定性
  - 19 種全方位量測功能
order: 10                      # 分類內排序，選填
---
（選填的補充說明內文）
```

**新增商品 = 新增一個上述格式的 .md 檔 + 一張圖到 public/images/products/，
push 後自動部署。** 所有設計決策不得破壞這個工作流程。

### 10 大分類 slug（固定，不可更動）

| slug | 名稱 | 舊站頁面 |
|---|---|---|
| electrical-testing | 電機電子測試測量 | product_1.html |
| environmental | 環境相關測量儀器 | product_2.html |
| pressure | 壓力測量與校正 | product_3.html |
| temperature | 溫度信號測量校正 | product_4.html |
| resistance-recorders | 電阻校正及記錄器 | product_5.html |
| clamp-meters | 鉤式電錶類儀器 | product_6.html |
| field-testing | 現場測試用儀器 | product_7.html |
| high-voltage | 高壓維護測試 | product_8.html |
| power-quality | 檢電及電源品質 | product_9.html |
| infrared | 工業用紅外線感測 | product_10.html |

## 詢價功能

- 產品卡與產品頁有「加入詢價單」按鈕；清單存 `localStorage`（key: `conwen-inquiry`，
  格式 `[{slug, model, title, qty}]`）
- Header 詢價車圖示顯示數量徽章，全頁同步（自訂事件 `inquiry:change`）
- `/inquiry/` 頁：清單表格（可調數量/移除）+ 表單（公司、姓名、電話、Email、留言）
- 送出：POST 到 `site.ts` 的 `FORMSPREE_ENDPOINT`；尚未設定時 fallback 為
  `mailto:` 組合信件。產品清單序列化為純文字放入隱藏欄位

## 設計系統（由 Fable 5 制定，實裝不得偏離）

- **色彩**：主色 `#14467b`（深藍）、深色 `#0d2f54`、CTA 強調 `#e8590c`（橙）、
  背景 `#ffffff` / 區塊底 `#f4f6f9`、文字 `#1f2933`、次要文字 `#5b6b7c`、邊框 `#dde3ea`
- **字級**：base 16px；h1 clamp(1.75rem,4vw,2.5rem)；行高 1.7；中文不用斜體
- **佈局**：max-width 1140px 置中；卡片圓角 8px、陰影極淡；間距 8px 的倍數
- **Header**：sticky，白底細底線；左 logo 文字「耕紋貿易」+ 副標；右導覽
  （產品介紹、代理廠牌、公司簡介、最新消息、聯絡我們）+ 詢價單按鈕（橙色、含數量）
- **手機**：≤768px 漢堡選單；產品格 1 欄、平板 2 欄、桌機 3 欄
- **產品圖**：舊圖解析度低 — 一律置於固定比例（4:3）白底容器內 `object-fit: contain`，
  不放大超過原始尺寸；`loading="lazy"`
- 禁止：跑馬燈、自動輪播、進場動畫等舊式效果；hover/focus 過渡 ≤150ms 即可
- 無障礙：所有互動元件可鍵盤操作，圖片有 alt，對比至少 AA

## 部署與 base path（重要）

- GitHub Pages 專案網址為 `https://demonbane0.github.io/conwenweb/`，因此
  `astro.config.mjs` 設 `site: 'https://demonbane0.github.io'`、`base: '/conwenweb'`
- **所有內部連結與圖片 src 一律經過 `src/utils/url.ts` 的 `withBase(path)`**
  （實作：`import.meta.env.BASE_URL` + 去重斜線），不得寫死 `/products/...`
- 產品 .md 的 `image` 欄位維持根相對路徑（`/images/products/x.jpg`），
  由顯示元件套 `withBase()`；資料檔不帶 base
- dev server 也會跑在 `/conwenweb/` 底下，漏套 withBase 會直接 404，驗證時可抓到

## 驗證要求（每個實裝任務完成前必做）

1. `npm run build` 零錯誤
2. 新增/修改頁面在 dev server 用 curl 或建置產物確認內容存在
3. 內部連結與圖片路徑有效（無 404 資源）
4. 產品 .md 必須通過 schema（build 會擋）

## Session 交接

- **每個 session 開始先讀 `HANDOFF.md`**（目前進度、業主決策、待辦、監看方法）
- 完成階段性工作或 session 結束前**必須更新 `HANDOFF.md`** 並隨工作一起 commit
- HANDOFF.md 記「狀態與決策」，CLAUDE.md 記「不變的規範」，不要混放

## Git 規範

- 訊息用英文祈使句，正文可中文；不 amend、不 force push
- `legacy/` 永不修改；`dist/`、`node_modules/` 不入版控
