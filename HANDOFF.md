# HANDOFF — Session 交接文件

> 每個 session 結束前更新本檔；新 session 開始先讀本檔 + CLAUDE.md。
> 最後更新：2026-07-06 21:30（第三波：設計/文案改版 + 廠牌篩選 + 資料修復）

## 專案目標

耕紋貿易舊 FrontPage 網站 → Astro 5 現代靜態站。美觀專業易操作、新增商品方便
（一個 .md + 一張圖）、詢價車功能。規格全在 `CLAUDE.md`（強制力）、實裝守則在
`AGENTS.md`。

## 已確認的業主決策（2026-07-06）

1. 詢價寄信：**Formspree 免費方案**（`src/data/site.ts` 的 `FORMSPREE_ENDPOINT`
   目前留空 → fallback mailto；**待業主到 formspree.io 用 conwencf@ms19.hinet.net
   註冊並提供 endpoint**，填入後 rebuild 即切換成站內送出）
2. 商品管理：Markdown 檔案工作流（會用文字檔的人維護）
3. 內容遷移：舊站 10 分類全部搬移，之後業主自行刪停售品
4. 語言：繁體中文 only
5. 分工：Fable 5 設計+驗證；codex 實裝（失敗改派 Sonnet 5）；git/GitHub 版控
6. 使用者流程偏好：用本檔交接；同指令權限確認 2 次以上就加 allowlist（已存長期記憶）

## 目前進度（全部 commit 在 main，已 push，線上為最新版）

- [x] 舊站移入 `legacy/`（唯讀），UTF-8 轉檔在 `legacy/utf8/`（抽取來源）
- [x] CLAUDE.md / AGENTS.md / GitHub repo（public）/ Pages（build_type=workflow）
- [x] **第一波**（7fb5781）：Astro 骨架 + 6 靜態頁 + 231 產品 .md（10 分類）
      + 232 產品圖 + 8 廠牌
- [x] **第二波**（8aecfdf）：/products 總覽 + 10 分類頁 + 231 詳細頁 + 詢價車
      + /inquiry 表單（Formspree POST / mailto fallback）
- [x] 設計驗收修正（5bc6524）：首頁優勢卡文案、英文眉標改繁中
- [x] **收尾驗證（本 session，2026-07-06 晚）全部通過**：
  - 漢堡選單「消失」＝**假警報**：用 CDP 正確模擬 390px 裝置後確認按鈕正常渲染、
    點擊展開選單正常（截圖驗證關/開兩態）。前 session 截圖看不到是因為
    headless `--window-size=390` 受 Windows DPI 縮放影響，排版 viewport 實為
    492px，靠右的按鈕落在截圖範圍外。**程式碼零修改**
  - 詢價流程 E2E（CDP 實測）：加入→localStorage 正確→徽章 1；同品再加→qty 2；
    跨頁徽章持續；/inquiry 兩列→改數量 5→徽章 6→移除一列→填表送出→
    mailto fallback 顯示「已開啟您的郵件軟體」通知。全部符合規格
  - 視覺巡檢：桌機 1280px + 手機 390px 截圖（首頁/產品列表/詳細頁/詢價頁）皆正常
  - 部署：5bc6524 的 Pages deploy 曾因 GitHub 暫時性錯誤失敗
    （"Deployment failed, try again later"），`gh run rerun` 後成功；
    線上 4 條路由 200、首頁已是新文案

- [x] **第三波（2026-07-06 晚，業主三項需求）**：
  1. **設計改版**：global.css 全面升級（LogoMark 標誌、header 漸層條、hero 深藍
     漸層+格線紋理+脈波線+統計面板、優勢卡 SVG 圖示、分類卡含產品數、服務流程
     四步、深色 footer 橙頂線）；CTA 橙改 `#c2410c`（AA 對比合格），CLAUDE.md
     設計系統章節已同步更新
  2. **文案升級**：首頁 hero/優勢卡/CTA 重寫、about 頁擴寫（用舊站真實資料：
     民國 77 年、資本額 1,600 萬、維修部門、8 代理廠牌 → 事實卡 + 服務項目清單）
  3. **廠牌功能**：231 項產品以型號系列推斷回填 174 項 brand（**清單與待確認項
     見 `BRAND-REVIEW.md`，待業主過目**，57 項未填）；/products 加廠牌下拉篩選
     （支援 `?brand=` URL 參數）；首頁廠牌 logo 與代理廠牌頁「查看代理產品」
     都連到對應篩選
  4. **【重要資料修復】environmental 分類 21 項產品中文全是亂碼且已上線**
     （第一波轉檔事故：`legacy/product_2.html` 原檔其實是 UTF-8，被當 Big5
     轉檔造成 `legacy/utf8/product_2.html` 損壞）→ 已從原檔重新抽取全部重建；
     另修 5 張中文檔名產品圖 → slug 檔名
  5. **修一個舊 bug**：`.product-card` 的 `display:grid` 蓋掉 `hidden` 屬性，
     搜尋/篩選只更新計數、卡片沒真的隱藏 → global.css 加 `[hidden]{display:none!important}`
  6. **產品頁燈箱**：詳細頁點產品圖開大圖（原生 `<dialog>`，Esc/點背景/按鈕可關，
     放大上限原圖 2 倍防模糊；圖片容器右下有「點圖放大」提示）。
     另產出 `BRAND-FILLED.md`（174 項逐項清單）供業主用 GPT-5 驗證廠牌中

## 網站已上線：https://demonbane0.github.io/conwenweb/

## 下一步（皆非阻塞，等業主）

1. **業主過目 `BRAND-REVIEW.md`**：確認自動填入的廠牌、補 57 項未填
2. 業主提供 Formspree endpoint → 填入 `src/data/site.ts` → commit push 即切換
3. 業主確認三據點地址電話（沿用舊站 2008 資料）；about 頁的資本額
   NT$1,600 萬與登記資料也請一併確認是否為現況
4. （可選）自有網域
5. （可選）補舊 news.html 其他消息（目前只遷 1 則 pmt-eva-625）

## 測試 know-how（本 session 新增）

- **headless 截圖手機版不可用 `--window-size`**（Windows DPI 縮放會讓 layout
  viewport 比截圖寬，右側元素被裁掉造成假警報）。正確做法：CDP
  `Emulation.setDeviceMetricsOverride {width:390, mobile:true}` 再
  `Page.captureScreenshot`。現成腳本：scratchpad 的 `cdp-e2e.mjs`
  （Node 24 內建 WebSocket + `--remote-debugging-port` 即可，無需 puppeteer）
- Edge 路徑：`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
- Pages deploy 偶發 "Deployment failed, try again later" → `gh run rerun <id> --failed`

## 監看 codex 的方法（保留）

- codex 包裝 subagent（codex:codex-rescue）是**轉發即結束**設計；輪詢由主控做
- 查狀態：`$env:CLAUDE_PLUGIN_DATA='C:\Users\herod\.claude\plugins\data\codex-openai-codex'` 後
  `node "C:/Users/herod/.claude/plugins/cache/openai-codex/codex/1.0.4/scripts/codex-companion.mjs" status`
  （或 `result <task-id>` 取完整回報）
- 監看背景命令要用 `@(...)` 包 Where-Object 再 .Count（PS 5.1 空集合陷阱）

## 驗收清單（每波必做）

1. `npm run build` 零錯誤（PS 執行政策擋 npm.ps1 時用 `npm.cmd`）
2. 產品 .md：schema、category slug、image 存在
3. dist 抽查 + `href="/(?!conwenweb)` 掃漏套 base
4. preview server curl 關鍵路由
5. 一波一 commit，訊息附驗證結果

## 已知注意事項

- **`legacy/utf8/product_2.html` 是壞檔**（Big5→UTF-8 二次轉換損壞；legacy/ 唯讀
  故未修）。要再抽 environmental 資料時，直接以 UTF-8 讀 `legacy/product_2.html`
  原檔（該原檔本來就是 UTF-8，與其他 Big5 原檔不同）

- `.claude/settings.local.json` 會被 harness 的「always allow」持續覆寫 —
  通用規則 merge 時**保留 harness 加的條目**（政策見長期記憶）
- 手機版詢價徽章在漢堡選單展開後才看得到（詢價單按鈕收在選單內）— 設計如此，
  業主若反映再改（可考慮 header 常駐購物車 icon）
- /products/ 一頁含全部 231 產品（243KB HTML）供客戶端搜尋 — 目前可接受
- git commit 時 CRLF 警告正常；PowerShell 跑 git 會把 stderr 警告誤標成
  exit 255/128，以 `git log`/`git status` 實查為準

## 待業主提供

- Formspree endpoint（未提供前詢價單走 mailto，不影響上線）
- 確認三據點地址電話是否為現況
- 自有網域（可選）
