# HANDOFF — Session 交接文件

> 每個 session 開始先讀本檔 + CLAUDE.md；有變動時收尾前更新並 commit。
> 最後更新：2026-10-19（**產品資料更新專案啟動**：停產/後繼機種機制上線，
> 等業主回填廠牌決策表）

## 專案狀態：✅ 網站上線；🔄 產品資料更新進行中（見下方「產品資料更新」）

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
  格線紋理）與 SEO（廠牌+型號 title、meta description、BreadcrumbList
  JSON-LD、OG 分享圖）詳見 CLAUDE.md
- 最新消息：舊 2008 消息已移除，頁面留空狀態等新公告
- **停產/後繼機種機制**（2026-10-19）：frontmatter `status`／`replacedBy`／
  `lastReviewed`、`npm run audit:products` 報表，規格見 CLAUDE.md「停產與後繼機種」。
  上線時 0 項標停產，全站 265 個 HTML 與改動前逐檔比對一致（僅空白/CSS 差異）

## 產品資料更新（2026-10-19 起）

231 項多為 2008 年資料。流程：**廠牌層級先決 → 仍代理廠牌逐項審查 → 批次套用**。

- [ ] **第 1 步（等業主）**：`review/2026-10-brand-decisions.xlsx` 給業主填
  52 個廠牌的代理狀態（仍代理／已不代理／不確定）、能否取得最新型錄、原廠現名。
  收回後：「已不代理」→ 該廠牌全標 `status: discontinued`（備註寫「刪除」才刪檔，
  且要同步 `src/data/brands.ts` 的 logo 廠牌）；能拿到型錄 PDF 的廠牌優先用型錄比對。
  ⚠️ **repo 是 PUBLIC**：業主填好的版本（代理關係＝商業資訊）與原廠型錄**不得 commit**，
  放 repo 外；入庫的只有空白表
- [x] 第 2 步：schema／停產頁顯示／列表過濾／build 檢查／audit 報表（2026-10-19）
- [ ] **第 3 步**：「仍代理」廠牌逐項審查表，從 Kyoritsu 共立（52 項）開始。
  Claude 預填（型號是否停產、後繼型號、**查證來源網址**、可信度；查不到留空，
  寧缺勿錯，比照 BRAND-REVIEW 多輪查核）→ 業主只改狀態欄 → Claude 批次改 .md
  （`status`/`replacedBy`/`lastReviewed`）＋新增後繼機種頁（圖用原廠圖，
  特點由規格書草擬中文、業主審）
- [ ] 批次標停產上線前：發**里程碑紅隊審查**（對外發布節點）
- [ ] 現行品掉到 200 以下時改文案「兩百餘項」（`src/pages/index.astro` advantages、
  `src/pages/about.astro`）；首頁統計數字已自動計算，不用改
- 之後每年依 `npm run audit:products -- --list` 重確認一次（lastReviewed 超過 12 個月）
- 發包紀錄：`REVIEW-DISCONTINUED-20261019`｜Codex `gpt-5.6-sol xhigh` 唯讀盲審｜T2
  （部署）｜11 條（0 P0）：採納 9（詢價單標停產、只剩停產品的廠牌保留篩選、
  資料夾＝分類檢查、lastReviewed 嚴格格式、audit 日曆日截止與壞資料報錯、
  aria-live 計數、純停產結果文字、後繼縮圖 alt=""）；不採納 2（新樣式寫
  `#ffffff`＝沿用既有慣例；無 JS 找不到停產品＝既有搜尋本就需 JS，停產頁仍在
  sitemap）

## 剩餘待辦

- [ ] **約 2026-07-20 後**：確認新網域運作穩定 → **退租 Cloudways**
  （舊主機 139.162.121.129；退租前網站已完全不依賴它，僅作切換保險）
- [x] ~~Google Search Console~~：✅ **已完成**（2026-07-07 業主完成網域驗證
  與 sitemap 提交，狀態「成功」，網頁陸續收錄中）。之後到 GSC 看
  關鍵字曝光/點擊與收錄進度（「網頁」報表）；新增產品後 sitemap 會自動
  更新，不用重提交
- [ ]（可選）流量分析工具：業主若想看訪客數/來源，申請 GA4 取得
  評估 ID（G-XXXXXXX）給 Claude 接上即可；不裝也不影響 SEO

## SEO 現況（2026-07-07 強化後）

- sitemap（`/sitemap-index.xml`，248 URL）+ robots.txt + 全站 canonical
- 產品頁：廠牌+型號 title、逐頁 meta description、BreadcrumbList JSON-LD；
  首頁：Organization JSON-LD；全站 OG/Twitter 分享標籤 + 品牌分享圖
- **產品頁不放 Product JSON-LD**（2026-07-07 決策）：GSC 來信判定
  「必須指定 offers/review/aggregateRating」重大問題——Google 規定 Product
  標記要吃豐富結果必須三選一，詢價制無公開價格、無評論資料，填假的違反
  政策，故整段移除（本來也拿不到加成）。**日後勿再加回**，除非網站開始
  放公開價格。GSC 該問題頁面業主可按「驗證修正」加速清除，或等自然重爬
- **舊站網址轉址**：2008 年的 product_1~10.html、company/customer/news/
  contact/main.html 共 16 個舊網址做了 meta-refresh + canonical 轉址 stub
  （public/ 下的 .html），接住搜尋引擎裡的舊連結

## 業主日常維護指南

- **加產品**：`src/content/products/<分類slug>/<型號slug>.md` + 圖到
  `public/images/products/<slug>.jpg`（格式見 CLAUDE.md；`brand:` 顯示名
  要沿用 BRAND-REVIEW.md 第三節清單，拼法不同會變成兩個篩選項）→ push 自動上線
- **產品停產**：不刪檔，在該 .md 加 `status: discontinued`；有新款就加
  `replacedBy: "新款檔名"`（新款要先有自己的 .md）→ push。寫錯 build 會擋下並說明
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
2. 繁體中文 only；舊站 10 分類全遷。停售品**改為標 `status: discontinued`
   保留頁面、不刪檔**（2026-10-19 使用者同意；原決策為「業主後續自行刪」）——
   保住舊型號搜尋流量並導向後繼機種
3. 交接用本檔；同指令權限確認 2 次以上加 allowlist（存長期記憶）
4. 地址/電話/資本額沿用舊站資料，業主 2026-07-07 確認為現況
5. 舊消息移除；日後由業主加新消息（新產品追加等）

## 測試 know-how

- **headless 手機截圖不可用 `--window-size`**（Windows DPI 縮放會讓 layout
  viewport 比截圖寬 → 右側元素被裁掉造成假警報）。正確做法：CDP
  `Emulation.setDeviceMetricsOverride {width:390, mobile:true}` +
  `Page.captureScreenshot`；Node 24 內建 WebSocket 即可驅動 CDP，無需 puppeteer
- Edge 路徑：`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
- **改動不應影響外觀時的回歸驗證**：`git worktree add` 舊版到 scratchpad、
  junction node_modules、兩邊 build 後把 dist 的 HTML 去掉 `_astro/` hash、
  inline module script、`<style>`、cid、空白後逐檔比對（2026-10-19 用過，265 檔）
- **停產功能測試**：暫時把幾個 .md 加 `status`/`replacedBy`（含鏈與錯誤樣本）
  build＋CDP 實測，**測完務必還原**（先備份到 scratchpad 再改）
- Excel 驗證：本機有 Excel（無 LibreOffice）→ PowerShell COM 唯讀開檔
  `CalculateFull` 讀公式結果、`ExportAsFixedFormat` 出 PDF 再用 pymupdf 轉圖檢查
  版面。**.ps1 內不可有中文**（PS 5.1 以 cp950 讀無 BOM 檔會吞換行，L-094 實踩）；
  中文值用 `[string]::new([char[]](0x4ECD,…))` 組
- Python：PATH 上的 `python` 是別的專案 venv（L-037），用 `py -3 -m venv`
  在 scratchpad 建隔離環境裝 openpyxl/pymupdf
- Pages deploy 偶發 "Deployment failed, try again later"（本專案遇過 2 次）
  → `gh run rerun <id> --failed` 即可
- 驗收流程：`npm.cmd run build` 零錯誤 → preview + CDP 實測關鍵流程 →
  curl 線上路由 → 一事一 commit（訊息附驗證結果）

## 已知注意事項

- （小問題，未修）站上沒有 favicon，瀏覽器請求 `/favicon.ico` 會 404；
  詢價頁 `.inquiry-remove` 是 scoped 樣式，JS 產生的「移除」按鈕吃不到
  （仍有全域 `.btn` 外觀，不影響使用）——JS 產生的元素要用 `:global(...)`

- **2026-07-07 手機版圖片爆版已修**（業主 iOS Safari 回報，截圖存 `bug/`）：
  產品卡與產品內頁圖片原用「`aspect-ratio` flex 容器 + 圖片百分比
  max-width/max-height」，踩到 WebKit 已知 bug，圖片被排成超大尺寸撐破卡片、
  整頁橫向溢出。改為 `::before padding-top: 75%` 撐 4:3 + 圖片絕對定位置中
  （ProductCard.astro、[slug].astro），並把手機版 grid 的 `1fr` 全改
  `minmax(0, 1fr)` 當第二道防線。日後圖片容器一律沿用此寫法，
  **勿再用 aspect-ratio + flex + 百分比 max 尺寸的組合**

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
