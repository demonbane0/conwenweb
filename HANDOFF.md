# HANDOFF — Session 交接文件

> 每個 session 開始先讀本檔 + CLAUDE.md；有變動時收尾前更新並 commit。
> 最後更新：2026-07-07（**專案收尾**：網站全功能上線，唯一剩餘待辦見下）

## 專案狀態：✅ 完成

**正式網址：https://conwen.com.tw**（HTTPS 強制；舊網址
demonbane0.github.io/conwenweb 自動 301 轉址）

- 231 項產品全數遷移（10 分類），**廠牌 231/231 全數回填**（四輪查核：
  型號系列推斷 → GPT-5 網路查核 → 產品照商標辨識 → 業主人工確認；
  逐項清單見 `BRAND-FILLED.md`，查核紀錄見 `BRAND-REVIEW.md` 等三份 md）
- 產品搜尋 + 分類 chips + 廠牌下拉篩選（`?brand=` 參數）、產品頁燈箱、
  詢價車（localStorage + 跨頁徽章）
- 詢價表單**站內送出**（Formspree `f/mqevjpbn`，2026-07-07 實測成功、
  測試信寄達）；防濫用三層：蜜罐（不耗額度）、失敗自動退回 mailto（不漏單）、
  送出鎖定；輕量防呆：電話須含 7 位數字、欄位長度上限、數量上限 999
- 設計系統（深藍 #14467b + 橙 #c2410c、LogoMark、刻度尺眉標、等寬型號、
  格線紋理）與 SEO（廠牌+型號 title、meta description、JSON-LD Product、
  OG 分享圖）詳見 CLAUDE.md
- 最新消息：舊 2008 消息已移除，頁面留空狀態等新公告

## 剩餘待辦

- [ ] **約 2026-07-20 後**：確認新網域運作穩定 → **退租 Cloudways**
  （舊主機 139.162.121.129；退租前網站已完全不依賴它，僅作切換保險）
- [ ] **業主註冊 Google Search Console**（免費、強烈建議）：
  1. 用 Google 帳號到 search.google.com/search-console → 新增資源 →
     選「網域」輸入 conwen.com.tw
  2. Google 會給一組 TXT 驗證值 → 到 HiNet DNS 紀錄管理**新加一列**：
     Ldata 空白、類型 TXT、Rdata 貼上驗證值 → 儲存 → 回 GSC 按驗證
  3. 驗證後到「Sitemap」提交 `https://conwen.com.tw/sitemap-index.xml`
  4. 之後可在 GSC 看：哪些關鍵字帶來曝光/點擊、收錄狀況、行動裝置問題
- [ ]（可選）流量分析工具：業主若想看訪客數/來源，申請 GA4 取得
  評估 ID（G-XXXXXXX）給 Claude 接上即可；不裝也不影響 SEO

## SEO 現況（2026-07-07 強化後）

- sitemap（`/sitemap-index.xml`，248 URL）+ robots.txt + 全站 canonical
- 產品頁：廠牌+型號 title、逐頁 meta description、Product + BreadcrumbList
  JSON-LD；首頁：Organization JSON-LD；全站 OG/Twitter 分享標籤 + 品牌分享圖
- **舊站網址轉址**：2008 年的 product_1~10.html、company/customer/news/
  contact/main.html 共 16 個舊網址做了 meta-refresh + canonical 轉址 stub
  （public/ 下的 .html），接住搜尋引擎裡的舊連結

## 業主日常維護指南

- **加產品**：`src/content/products/<分類slug>/<型號slug>.md` + 圖到
  `public/images/products/<slug>.jpg`（格式見 CLAUDE.md；`brand:` 顯示名
  要沿用 BRAND-REVIEW.md 第三節清單，拼法不同會變成兩個篩選項）→ push 自動上線
- **加消息**：`src/content/news/xxx.md`，frontmatter 放 `title: "標題"`、
  `date: 2026-08-01`，內文 Markdown → push 自動上線（新到舊排序）
- **詢價信**：寄到 conwencf@ms19.hinet.net（寄件者 Formspree，建議設安全
  寄件者）；用量到 formspree.io 後台看（免費 50 封/月；超量時客戶端自動
  退回 mailto，不會漏單）
- **表單防濫用應變手冊**（平時不用做事）：
  1. **每月順手看一次 Formspree 後台用量**——收件匣正常但額度異常飆高
     ＝蜜罐已被繞過的唯一訊號
  2. 真被灌時的兩條升級路（都不用租主機）：
     a. Formspree 付費版開 reCAPTCHA（約 US$10/月，含額度 1000 封）
     b. DNS 從 HiNet 搬到 Cloudflare 免費版 + 開 Bot Fight Mode
        （順便拿到 WAF；搬 NS 在 HiNet「DNS異動&查詢」頁改，
        記得先在 Cloudflare 把現有 A/CNAME/TXT 記錄照抄）
- **DNS**：HiNet 代管（dnmgt.hinet.net「DNS 紀錄管理」）；apex 四筆 A →
  185.199.108-111.153、www CNAME → demonbane0.github.io，**不要動**

## 開發歷程摘要（詳情看 git log）

1. **第一波**（7fb5781）：Astro 骨架、6 靜態頁、231 產品 .md、232 圖、8 廠牌
2. **第二波**（8aecfdf）：產品瀏覽 UI、詢價車、/inquiry 表單
3. **第三波**（9ff3d51）：設計/文案全面改版、廠牌篩選、
   **修復 environmental 21 項亂碼**（轉檔事故，自原檔重抽）、
   修 `[hidden]` 被 display:grid 蓋掉的篩選 bug、燈箱、SEO
4. **收尾**（2026-07-07）：廠牌 231/231、frontend-design plugin 最終美化
   （刻度尺/等寬字/導覽指示/OG）、自訂網域切換、Formspree 接線、表單防呆

## 已確認的業主決策

1. 詢價寄信走 Formspree 免費方案（已上線）；商品管理用 Markdown 工作流
2. 繁體中文 only；舊站 10 分類全遷、停售品業主後續自行刪
3. 交接用本檔；同指令權限確認 2 次以上加 allowlist（存長期記憶）
4. 地址/電話/資本額沿用舊站資料，業主 2026-07-07 確認為現況
5. 舊消息移除；日後由業主加新消息（新產品追加等）

## 測試 know-how

- **headless 手機截圖不可用 `--window-size`**（Windows DPI 縮放會讓 layout
  viewport 比截圖寬 → 右側元素被裁掉造成假警報）。正確做法：CDP
  `Emulation.setDeviceMetricsOverride {width:390, mobile:true}` +
  `Page.captureScreenshot`；Node 24 內建 WebSocket 即可驅動 CDP，無需 puppeteer
- Edge 路徑：`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
- Pages deploy 偶發 "Deployment failed, try again later"（本專案遇過 2 次）
  → `gh run rerun <id> --failed` 即可
- 驗收流程：`npm.cmd run build` 零錯誤 → preview + CDP 實測關鍵流程 →
  curl 線上路由 → 一事一 commit（訊息附驗證結果）

## 已知注意事項

- **`legacy/utf8/product_2.html` 是壞檔**（原檔本來就是 UTF-8、被當 Big5 二次
  轉換；legacy/ 唯讀故未修）。要再抽 environmental 資料時直接以 UTF-8 讀
  `legacy/product_2.html` 原檔
- HCTT＝Megger 550005B、PORTATEST A-2＝Schleich（業主 2026-07-07 確認，
  網路難查，留此備忘）
- `.claude/settings.local.json` 會被 harness「always allow」持續覆寫，
  merge 通用規則時保留 harness 條目（政策見長期記憶）
- 手機版詢價徽章收在漢堡選單內，業主若反映不好找可改 header 常駐 icon
- /products/ 單頁含全部 231 產品（~250KB）供客戶端搜尋，量再大時改建置期索引
- git 的 CRLF 警告正常；PowerShell 會把 git stderr 誤標成錯誤，
  以 `git log`/`git status` 實查為準
- 舊 DNS TTL 86400：切換後最長一天內少數使用者仍可能解析到舊 IP（過渡正常，
  2026-07-08 後即無此問題）
