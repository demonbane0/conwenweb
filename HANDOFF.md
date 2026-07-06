# HANDOFF — Session 交接文件

> 每個 session 結束前更新本檔；新 session 開始先讀本檔 + CLAUDE.md。
> 最後更新：2026-07-06 19:42（第一波完成並已 push；第二波 codex 執行中）

## 專案目標

耕紋貿易舊 FrontPage 網站 → Astro 5 現代靜態站。美觀專業易操作、新增商品方便
（一個 .md + 一張圖）、詢價車功能。規格全在 `CLAUDE.md`（強制力）、實裝守則在
`AGENTS.md`。

## 已確認的業主決策（2026-07-06）

1. 詢價寄信：**Formspree 免費方案**（`src/data/site.ts` 的 `FORMSPREE_ENDPOINT`
   目前留空 → fallback mailto；**待業主到 formspree.io 用 conwencf@ms19.hinet.net
   註冊並提供 endpoint**）
2. 商品管理：Markdown 檔案工作流（會用文字檔的人維護）
3. 內容遷移：舊站 10 分類全部搬移，之後業主自行刪停售品
4. 語言：繁體中文 only
5. 分工：Fable 5 設計+驗證；codex 實裝（失敗改派 Sonnet 5）；git/GitHub 版控

## 目前進度

- [x] 舊站檢視完畢（FrontPage frameset、Big5、Flash 選單全滅、Hinet 計數器死亡）
- [x] git init；baseline commit；舊站移入 `legacy/`；UTF-8 轉檔在 `legacy/utf8/`
- [x] `CLAUDE.md`（含設計系統、產品 schema、10 分類 slug、base path 規範）
- [x] `AGENTS.md`（codex 守則）
- [x] GitHub repo：https://github.com/demonbane0/conwenweb（public，remote origin 已設，**尚未 push**）
- [x] `.github/workflows/deploy.yml`（GitHub Pages，push master 觸發；**repo 的
      Pages 設定需切成 "GitHub Actions" 來源** — push 後到 Settings → Pages 確認）
- [x] **第一波 codex 完成並驗收**（commit 7fb5781，已 push）：
      骨架 + 6 靜態頁 + 231 產品（10 分類）+ 232 產品圖 + 8 廠牌；
      build 通過、全部圖片引用有效、零 placeholder；
      5 個含中文檔名的產品 .md 已改 ASCII slug
- [x] GitHub Pages 已啟用（build_type=workflow）；**分支已改名 main**（Pages 環境
      保護規則不允許 master 部署），deploy.yml 觸發分支同步改 main，舊 master 已刪
- [x] **第一波已上線**：https://demonbane0.github.io/conwenweb/ 回應 200
- [ ] **第二波 codex（執行中）**：codex job `task-mr95flj2-wl5le3` —
      /products 總覽（分類 chips+搜尋）、分類頁、產品詳細頁、ProductCard、
      詢價車（localStorage `conwen-inquiry`、事件 `inquiry:change`、header 徽章）、
      /inquiry 表單（Formspree 或 mailto fallback）
- [ ] 第二波驗收：build、抽查 dist 產品頁與 inquiry 頁、base path 檢查、
      用瀏覽器/curl 實測詢價車流程 → commit → push
- [ ] 最終視覺驗證與收尾（更新本檔、確認線上網址）

## 已知注意事項

- `.claude/settings.local.json` 會被 harness 的「always allow」覆寫 —
  session 結束前把通用規則（PowerShell/Bash 的 git/gh/node/npm/npx、Get-* 唯讀類）
  重新 merge 回去（使用者政策：同指令確認兩次以上就加 allowlist）
- news 只遷移出 1 則（pmt-eva-625）；舊 news.html 若還有可用內容可再補

## 監看 codex 的方法（重要 know-how）

- codex 包裝 subagent 是**轉發即結束**設計，不會等結果；輪詢要主控自己做
- 狀態檔：`C:\Users\herod\.claude\plugins\data\codex-openai-codex\state\conwenweb-580de97d1e01a9f0\state.json`（jobs 陣列 + `jobs\<id>.log`）
- 查狀態：`$env:CLAUDE_PLUGIN_DATA='C:\Users\herod\.claude\plugins\data\codex-openai-codex'` 後
  `node "C:/Users/herod/.claude/plugins/cache/openai-codex/codex/1.0.4/scripts/codex-companion.mjs" status`
- 或看程序：`codex-companion.mjs task-worker` 的 node 程序全部退出 = 全部完成
- 目前掛著一個背景監看器（20 秒輪詢 task-worker 數，歸零或 ~9 分鐘逾時會通知）

## 驗收清單（第一波完成後）

1. `npm install && npm run build` 零錯誤
2. 產品 .md 抽查：frontmatter schema、category slug 正確、image 檔案存在
3. 各分類產品數 vs 舊頁面 spot check（缺漏就補派 agent）
4. 所有內部連結/圖片經 `withBase()`（搜 `href="/` 與 `src="/` 抓漏網）
5. 通過後 commit（一波一 commit），再派第二波

## 待業主提供

- Formspree endpoint（未提供前詢價單走 mailto，不影響上線）
- 確認三據點地址電話是否為現況（沿用舊站資料）
- 自有網域（可選；沒有就用 https://demonbane0.github.io/conwenweb/）
