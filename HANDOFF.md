# HANDOFF — Session 交接文件

> 每個 session 結束前更新本檔；新 session 開始先讀本檔 + CLAUDE.md。
> 最後更新：2026-07-06 19:10（第一波 codex 執行中）

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
- [ ] **第一波 codex（5 個，19:03 起跑，執行中）**：
  - S 骨架+靜態頁：codex job `task-mr942n32-he0yxc`
  - E1 抽取 electrical-testing/environmental/infrared：`task-mr942n3q-155f26`
  - E2 抽取 pressure/temperature/resistance-recorders：`task-mr942n5m-go9uwe`
  - E3 抽取 clamp-meters/power-quality：`task-mr942n5i-pvmgdw`
  - E4 抽取 field-testing/high-voltage：`task-mr942n4e-2cx4q1`
- [ ] 第二波 codex（未派）：/products 列表（分類篩選+搜尋）、產品詳細頁、
      詢價車（localStorage `conwen-inquiry` + 自訂事件 `inquiry:change`）、
      /inquiry 表單頁、header 徽章接線
- [ ] 最終驗證（build、連結、視覺）→ commit → push → Pages 上線

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
