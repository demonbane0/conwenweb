# HANDOFF — Session 交接文件

> 每個 session 結束前更新本檔；新 session 開始先讀本檔 + CLAUDE.md。
> 最後更新：2026-07-06 20:26（第二波完成上線；剩收尾驗證，見「下一步」）

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

## 目前進度（全部 commit 在 main，已 push）

- [x] 舊站移入 `legacy/`（唯讀），UTF-8 轉檔在 `legacy/utf8/`（抽取來源）
- [x] CLAUDE.md / AGENTS.md / GitHub repo（public）/ Pages（build_type=workflow）
- [x] 分支改名 **main**（Pages 環境保護不允許 master 部署；舊 master 已刪）
- [x] **第一波**（commit 7fb5781）：Astro 骨架 + 6 靜態頁 + 231 產品 .md（10 分類）
      + 232 產品圖 + 8 廠牌。驗收通過：build 零錯、圖片引用零缺漏
- [x] **第二波**（commit 8aecfdf）：/products 總覽（分類 chips + 客戶端搜尋）、
      10 分類頁、231 產品詳細頁、詢價車（localStorage `conwen-inquiry` +
      `inquiry:change` 事件 + header 徽章 + 跨分頁同步）、/inquiry 表單
      （Formspree POST / mailto fallback）。驗收：build 249 頁、preview 9 條路由
      全 200、dist 無漏套 base path
- [x] **網站已上線**：https://demonbane0.github.io/conwenweb/
- [x] 設計驗收修正（本機已 commit，見 git log 最新）：首頁 4 張優勢卡原本同句
      複製 ×4 → 已改為各自文案；英文眉標（Service Strength 等）→ 改繁中

## 下一步（新 session 從這裡接手）

1. **［唯一未解問題］手機版漢堡選單疑似沒顯示**：
   - headless Edge 390px 截圖看不到漢堡按鈕；但 dist CSS 確認含
     `@media(max-width:768px){.nav-toggle-label{display:inline-flex;...}}`，
     HTML 也有 `input#nav-toggle` + `label.nav-toggle-label`（Layout.astro:47-50）
   - 可能只是 headless 截圖問題，**先用真瀏覽器開 DevTools 手機模擬確認**；
     若真的沒顯示，檢查 `.header-inner` flex 佈局是否把 label 擠出視口，
     或 `aria-hidden` 相關樣式；修好後截圖驗證
2. 最終視覺巡檢（桌機+手機截圖：首頁/產品列表/詳細頁/詢價頁），
   實測詢價流程（加入→徽章→調數量→mailto 開啟）
3. push 後確認 Actions 綠燈、線上抽查
4. 收尾：更新本檔、告知業主 Formspree 註冊步驟

## 監看 codex 的方法（重要 know-how）

- codex 包裝 subagent（codex:codex-rescue）是**轉發即結束**設計；輪詢由主控做
- 查狀態：`$env:CLAUDE_PLUGIN_DATA='C:\Users\herod\.claude\plugins\data\codex-openai-codex'` 後
  `node "C:/Users/herod/.claude/plugins/cache/openai-codex/codex/1.0.4/scripts/codex-companion.mjs" status`
  （或 `result <task-id>` 取完整回報）
- 狀態檔：`...\state\conwenweb-580de97d1e01a9f0\state.json` + `jobs\<id>.log`
- 或看程序：`codex-companion.mjs task-worker` 的 node 程序全部退出 = 全部完成
- 監看背景命令要用 `@(...)` 包 Where-Object 再 .Count（PS 5.1 空集合陷阱）

## 驗收清單（每波必做）

1. `npm run build` 零錯誤（PS 執行政策擋 npm.ps1 時用 `npm.cmd`）
2. 產品 .md：schema、category slug、image 存在（第一波已全查過）
3. dist 抽查 + `href="/(?!conwenweb)` 掃漏套 base
4. preview server curl 關鍵路由
5. 一波一 commit，訊息附驗證結果

## 已知注意事項

- `.claude/settings.local.json` 會被 harness 的「always allow」持續覆寫 —
  收尾時把通用規則（PowerShell/Bash 的 git/gh/node/npm/npx、Get-* 唯讀類）
  merge 回去，**保留 harness 加的條目**（政策見長期記憶 permission-allowlist-policy）
- news 只遷移出 1 則（pmt-eva-625）；舊 news.html 若還有可用內容可再補
- 首頁 /products/ 一頁含全部 231 產品（243KB HTML）供客戶端搜尋 — 目前可接受，
  未來產品變多可改建置期搜尋索引
- git commit 時 CRLF 警告是正常現象；PowerShell 工具跑 git 會把 stderr 警告
  誤標成錯誤（exit 255/128），以 `git log`/`git status` 實查為準

## 待業主提供

- Formspree endpoint（未提供前詢價單走 mailto，不影響上線）
- 確認三據點地址電話是否為現況（沿用舊站 2008 資料）
- 自有網域（可選；沒有就用 https://demonbane0.github.io/conwenweb/）
