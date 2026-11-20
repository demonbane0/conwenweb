# HANDOFF — Session 交接文件

> 每個 session 開始先讀本檔 + CLAUDE.md；有變動時收尾前更新並 commit。
> 最後更新：2026-11-20（依 Notion「官網型號更新表」：7 個型號標停產、6 個替代機種新頁、HT-680D 從合併頁拆出；
> 全站對外文案「後繼機種」改「替代機種」）
> 前次：2026-11-18（新增 Raytech TR-MARK III 250V 頁、TR Spy Mark II 連後繼；搜尋忽略連字號＋逐詞比對；
> TR Jr 標停產、新增後繼 TR-1 / TR-1P 頁）
> 前次：2026-11-12（SEO 曝光強化：8 個廠牌獨立頁、全站逐頁 description、Organization 三據點；
> 業主確認耕紋為 KYORITSU 台灣總代理）

## 專案狀態：✅ 網站上線；🔄 產品資料更新進行中（見下方「產品資料更新」）

**正式網址：https://conwen.com.tw**（HTTPS 強制；舊網址
demonbane0.github.io/conwenweb 自動 301 轉址）

- 產品 303 頁（現行 266、停產 37；2026-11-20 Notion 型號更新表套用後）。原 231 項全數遷移（10 分類），**廠牌 231/231 全數回填**（四輪查核：
  型號系列推斷 → GPT-5 網路查核 → 產品照商標辨識 → 業主人工確認；
  逐項清單見 `BRAND-FILLED.md`，查核紀錄見 `BRAND-REVIEW.md` 等三份 md）
- 產品搜尋 + 分類 chips + 廠牌下拉篩選（`?brand=` 參數）、產品頁燈箱、
  詢價車（localStorage + 跨頁徽章）
- 詢價表單**站內送出**（Formspree `f/mqevjpbn`，2026-07-07 實測成功、
  測試信寄達）；具防濫用與輸入防呆機制，Formspree 失敗時自動改走 mailto
  不漏單。防護細節見 `E:\Project\conwenweb-private\HANDOFF.local.md`（repo 外）
- 設計系統（深藍 #14467b + 橙 #c2410c、LogoMark、刻度尺眉標、等寬型號、
  格線紋理）與 SEO（廠牌+型號 title、meta description、BreadcrumbList
  JSON-LD、OG 分享圖）詳見 CLAUDE.md
- 最新消息：舊 2008 消息已移除；2026-10-20「台中、高雄分公司遷址公告」、2026-11-12「Kyoritsu 共立產品資料更新」
- **停產/後繼機種機制**（2026-10-19）：frontmatter `status`／`replacedBy`／
  `lastReviewed`、`npm run audit:products` 報表，規格見 CLAUDE.md「停產與後繼機種」。
  上線時 0 項標停產，全站 265 個 HTML 與改動前逐檔比對一致（僅空白/CSS 差異）

## 產品資料更新（2026-10-19 起）

231 項多為 2008 年資料。流程：**廠牌層級先決 → 仍代理廠牌逐項審查 → 批次套用**。

- [ ] **第 1 步（等業主）**：`review/2026-10-brand-decisions.xlsx` 給業主填
  52 個廠牌的代理狀態（仍代理／已不代理／不確定）、能否取得最新型錄、原廠現名。
  紙本手寫用 `review/2026-10-brand-decisions-print.pdf`（A4 共 8 頁：說明直式 1 頁＋
  表格橫式 7 頁，選項印成 ☐ 勾選、列出全部型號、表頭每頁重複）；xlsx 本身也已設
  A4 列印（電子版直接印的備案）。兩者由同一支 scratchpad 產生器產出，Excel COM 轉 PDF
  收回後：「已不代理」→ 該廠牌全標 `status: discontinued`（備註寫「刪除」才刪檔，
  且要同步 `src/data/brands.ts` 的 logo 廠牌）；能拿到型錄 PDF 的廠牌優先用型錄比對。
  ⚠️ **repo 是 PUBLIC（且必須維持 public，見下方事件紀錄）**：業主填好的版本
  （代理關係＝商業資訊）與原廠型錄**不得 commit**，放 repo 外；入庫的只有空白表
- [x] 第 2 步：schema／停產頁顯示／列表過濾／build 檢查／audit 報表（2026-10-19）
- [ ] **第 3 步**：「仍代理」廠牌逐項審查表，從 Kyoritsu 共立（52 項）開始。
  Claude 預填（型號是否停產、後繼型號、**查證來源網址**、可信度；查不到留空，
  寧缺勿錯，比照 BRAND-REVIEW 多輪查核）→ 業主只改狀態欄 → Claude 批次改 .md
  （`status`/`replacedBy`/`lastReviewed`）＋新增後繼機種頁（圖用原廠圖，
  特點由規格書草擬中文、業主審）
  - ✅ **2026-11-12 Kyoritsu 完成**（使用者指示「先以價格表為準」，取代 11-04
    比對報告的逐項勾選）：價格表 104 個儀器型號全數處置——既有 27 頁換官網特點／
    規格表／原廠圖（網址不變）、新增 62 頁、25 頁標停產＋新增 2040 停產頁（從
    2040/2046R/2055/2056R 系列頁拆出）。決策見下方「已確認的業主決策」第 6 點。
    內容來源：Kyoritsu 官網 EN 優先（台灣用外銷版）、無 EN 才用 JA；子代理中譯後以
    驗收腳本逐頁比對原廠數字（不漏不杜撰），91/91 PASS
  - [ ] **待業主／代理商**：① 5200、5201 照度計原廠只剩蓋「販売終了品」章的圖，
    文字已寫好暫存在 `E:\Project\conwenweb-private\KY價格表\官網抽取工具\staging\`，有實品照或型錄圖再上架
    （圖放 `public/images/products/5200-kyoritsu.jpg`／`5201.jpg`，md 搬回
    `src/content/products/environmental/`；5200 檔名避開 PAN-GLOBE 的 high-voltage/5200）；
    ② 3312（原廠 1995 停產，疑為 3442 誤植）、4113（查無）向原廠確認型號後再建頁
    （耕紋即 KYORITSU 台灣總代理，見決策第 7 點）；
    ③ 選配件 6 項（8241、8115、8161、9189、8008、8112）業主決定這次不建頁
  - 價格表上有、原廠已停產者照價格表當現行（2027、2608A、8030、5510、3021A/3023A、
    4500），公開頁面**不寫**「原廠停產／價格表」等內部資訊
  - **工具與中間資料一律放 repo 外**：`E:\Project\conwenweb-private\KY價格表\`（2026-11-18 從 repo 內搬出）。11-04 比對腳本在
    `比對工具/`；11-12 官網抽取全套在 `官網抽取工具/`：`ky_plan.py`（處置對照表，L-067
    單一來源）→ `plan_check.py`（對帳：價格表型號全有處置、無撞名）→ `crawl_index.py`
    （分類頁含分頁，與官網宣稱總數對帳）→ `ky_detail.py`（只抽主內容區、h1 型號不符即拒）
    → `ky_images.py`（白底 JPG、不放大）→ `ky_bundles.py`（每頁資料包＋固定欄位）→
    子代理依 `bundles/GUIDE.md` 中譯 → `ky_md_check.py`（驗收）→ `collapse_common.py`
    （多欄表相同列移到「共通規格」表）。日後其他廠牌可沿用此管線
  - 原廠官網停產頁的圖蓋有「販売終了品／Discontinued products」大章，**不可用於現行品**；
    乾淨圖原廠已刪，只能從型錄 PDF 取（`pdf_img_mask.py` 套 smask 去背）
  - ✅ **2026-11-18 Raytech TR Jr**（使用者告知停產並提供型錄掃描 `20261118_104506.pdf`；它和官網 Flyer 4.00、
    說明書 1.12 都放在 `E:\Project\conwenweb-private\原廠型錄\Raytech\`）：`tr-jr.md` 標停產 →
    新增 `high-voltage/tr-1-tr-1p.md`（圖用 raytech.ch 官網 PNG 轉白底 JPG）。內容來源優先序：官網現行頁
    raytech.ch/products/detail/tr-1 ＞ 官網 Flyer 4.00（2025）＞ 說明書 1.12（2020）＞ 使用者掃描型錄（Raytech GmbH
    時期舊版，使用溫度、輸入電壓、電池容量與現行不一致，只當佐證不單獨採用）。原廠沒有指定 TR-Jr 後繼，後繼依使用者提供的型錄
  - ✅ **2026-11-18 TR-Spy Mark II、WR50-2 標停產、不連後繼**（使用者裁決「只標停產」）：raytechusa.com
    「Retired Products」頁（同日親驗）列為停產、原廠未指定後繼。現行同類機 TR4（三相匝比）、
    WR50-12／WR50-13（線圈電阻）站上尚無頁面；業主若要上架再建頁並補 `replacedBy`（TR-Spy Mark II 已連，見下條）
  - ✅ **2026-11-18 新增 TR-MARK III 250V**（使用者：「TR-MARK III 也有代理…跟停產品有關係的話也加上去」）：
    `high-voltage/tr-mark-iii-250v.md`（order 270.1）＋官網 PNG 轉白底 JPG；`tr-spy-mark-ii.md` 補
    `replacedBy: "tr-mark-iii-250v"`——依據說明書 2.20 第 3.1 節沿革 TR-Spy → TR-Spy MARK II → TR-MARK III
    （原廠沒逐字寫 replaced by；機箱尺寸、測試電壓組、電流／相位規格一脈相承）。原無 250V 的舊 TR-Mark III 已列
    Raytech USA Retired，現行只有 250V 版（另有機架式 TR-MARK III R 250V，未建頁）。來源優先序同 TR-1：
    官網現行頁 ＞ Flyer 3.07 ＞ 說明書 2.20（兩份 PDF 已歸檔 `conwenweb-private\原廠型錄\Raytech\`）。來源衝突的取捨：
    匝比上限寫 40000（官網另一處孤立寫 45'000，與同頁精度表、型錄、說明書不符）；尺寸重量用官網 472×368×196mm／10.5kg
    （2020 文件 470×371×190／9.5kg）；10V 分段精度官網與說明書互相矛盾 → 不列，只在備註寫各電壓量程上限並請客戶索取說明書。
    至此站上 Raytech 現行品：TR-1 / TR-1P、TR-MARK III 250V
  - ✅ **2026-11-20 Notion「官網型號更新表｜停產與替代」**（業主內部表，11 列皆「已無庫存」；Notion 頁
    `41dc106abae1814799b3df6a4cf55ed9`）：3123、3125、TR-Jr 三列先前已處理。本次：
    - 標停產＋連替代：EC-900→`ec-2100`、TM-601→`tm-901exp`、HX-6→`hxa-6-hxa-6s`、DF-6→`hsf-11`、
      DHH→`etcr1600`（**跨廠牌**，SFE→ETCR，公司曾對客戶報此替代）；只標停產：MT186、DO5000
    - **HT-680D 從 `ht-610-ht-680d.md` 拆出**成 `ht-680d.md`（停產→`hte-700d-hte-700dl`，圖用原廠停產頁未蓋章的
      stop_img_05.png），原頁改只列 HT-610α 並加備註（比照 2040 拆頁）
    - 新頁內容來源：長谷川 EN 站（外銷版優先）＋JP 站交叉核對，兩邊矛盾的不寫（HXA-6 頻率 JP「50/60Hz 共用」vs
      EN「訂購時指定」→ 備註請詢價確認；HTE-700D 發光 JP「斷續」vs EN「連續」→ 只寫紅色發光）；HSF-11 只有 EN 站
      （外銷專用、11.4kV 配電標準機）；ONO SOKKI EN/簡中頁＋型錄；**Kanetec 原廠站 11-20 連線被拒**（本機與遠端皆
      ECONNREFUSED）→ 用網頁時光機 2026-08 存檔＋原廠英文型錄（2023.03），官網頁本身多處筆誤（DC×1 0-2000.0、
      30mm 厚、250g），以型錄與數值連續性為準；ETCR 原廠簡中型錄。型錄／規格圖已歸檔 `conwenweb-private\原廠型錄\`
      （Hasegawa、ONO SOKKI、Kanetec、ETCR）
    - 盲審後補：EC-2100「1000 m/min 以上不得手持」「±1 count 不含手震」、HTE-700D/DL「僅限裸線」、
      ETCR1600 品名照原廠「核相儀」＋補 DL/T 971-2005 等規範
- [x] 批次標停產上線前：發**里程碑紅隊審查**（2026-11-12 Kyoritsu 批次，結果見發包紀錄）
- [ ] 現行品掉到 200 以下時改文案「兩百餘項」（`src/pages/index.astro` advantages、
  `src/pages/about.astro`）；首頁統計數字已自動計算，不用改
- 之後每年依 `npm run audit:products -- --list` 重確認一次（lastReviewed 超過 12 個月）
- 發包紀錄：`REVIEW-DISCONTINUED-20261019`｜Codex `gpt-5.6-sol xhigh` 唯讀盲審｜T2
  （部署）｜11 條（0 P0）：採納 9（詢價單標停產、只剩停產品的廠牌保留篩選、
  資料夾＝分類檢查、lastReviewed 嚴格格式、audit 日曆日截止與壞資料報錯、
  aria-live 計數、純停產結果文字、後繼縮圖 alt=""）；不採納 2（新樣式寫
  `#ffffff`＝沿用既有慣例；無 JS 找不到停產品＝既有搜尋本就需 JS，停產頁仍在
  sitemap）
- 發包紀錄：`KY-PRICELIST-20261112`｜T2（資料大改＋部署）
  - 中譯 9 包 `[sonnet-5.5 high]`（sonnet-implementer，寫入檔案互不相交）→ 主模型驗收
    91/91（`ky_md_check.py` 親跑）＋人工修正：子代理把「價格表／原廠停產／官網註記」
    寫進公開內文 10 頁（已刪，資料包 notes 是給子代理看的背景，日後 GUIDE 要明寫
    「notes 不得原樣公開」）、2062 誤列藍牙（原廠頁錯）、KT200 CAT 筆誤、5410 精度
    第二列實為測試電流、5510 發射率／瞄準拆列；多欄表相同列移到「共通規格」表
  - 盲審 Codex `gpt-5.6-sol xhigh` 唯讀：0 P0／2 P1／6 P2。採納 4（5510 區間順序、
    DUTY 譯名統一為「工作週期」〔「占空比」為大陸用語，未照建議〕、表格容器依段落
    命名、第一欄轉 `th scope="row"`）；不採納 2 P1（3021 系列連 3021A/3023A 而非原廠建議的
    3551＝決策「價格表有即現行」下 3021A 為直接改版；3125 沿鏈 3125A→3125B＝停產鏈機制
    本意）；記入既有缺口 2（見剩餘待辦）
  - 里程碑紅隊 Codex `gpt-6-astra xhigh` 唯讀：0 P0／1 P1／5 P2。採納 2（2040 系列頁加
    停產備註；搜尋支援「KEW 2007R／KEW MATE 2000A／KT 170／KM2000A」寫法——
    `src/utils/search.ts` 去原廠前綴＋忽略空白，兩個列表頁共用，注音選字回歸測試通過）；
    其餘為既有缺口或本機資料位置，記入剩餘待辦

- 發包紀錄：`REVIEW-TRJR-TR1-20261118`｜T2（部署）｜主模型直做
  - 盲審 A/B（GPT-6.1 Sol 試用協定第 1 次）Codex 唯讀 `gpt-6.1-sol xhigh`＋`gpt-5.6-sol xhigh`：皆 0 P0。
    採納：精度補註適用模式（CT 模式只到 100）、兩機種改多欄表＋共通規格表、電源單位照原廠寫 VAC/VDC、
    尺寸改用現行官網 246×124mm、刪掉只有舊型錄有的電池容量；不採納：「16 台變壓器比對」（現行來源皆無）、
    原廠產品編號（站內不列）、Raytech 無廠牌頁（設計如此，只有 8 個 logo 廠牌有獨立頁）。
    擴權題抓到 TR-Spy Mark II／WR50-2 已停產（使用者裁決只標停產，增量只改兩行 frontmatter、沿用本包判級未另發盲審）
  - 主模型驗收：build 321 頁 0 錯誤；audit 報表 TR Jr 停產→tr-1-tr-1p；CDP 手機 390／桌機 1280 無橫向溢出、
    停產提示與後繼卡片正常；列表頁 TR Jr 卡片 hidden＋data-discontinued

- 發包紀錄：`REVIEW-TRMARK3-20261118`｜T2（部署）｜主模型直做
  - 盲審 A/B（GPT-6.1 Sol 試用協定第 2 次）Codex 唯讀 `gpt-6.1-sol xhigh`（285s，5 條）＋`gpt-5.6-sol xhigh`
    （290s，6 條）：皆 0 P0。採納：說明書註腳的 >45°C 連續量測降額（50W／0.5A@100V／0.2A@250V）寫進備註、
    各測試電壓量程上限（10V 4000、1V 400）、ST-105 移出選購配件（官網列 Related Products）、
    **搜尋忽略連字號＋多詞逐詞比對**（「RAYTECH TR-MARK III」「TR MARK III」「TRMARKIII」「TR-Spy Mark II」原本 0 筆；
    `src/utils/search.ts`，兩個列表頁共用，新集合是舊集合的超集）。不採納：新增 Raytech 廠牌頁（只有 logo 廠牌有獨立頁，
    要不要加交業主決定）、`<0.05VA` 改 `<0.05 VA`（站內慣例數字單位不空格，非數值變動）。記入既有缺口 1（見剩餘待辦 ④）
  - 主模型驗收：build 322 頁 0 錯誤（首次 build 的 Duplicate id 為內容快取，第二次即消失）；audit 報表 TR Spy Mark II
    停產→tr-mark-iii-250v；搜尋比對測試 19 例（用 dist 實際索引，含 KEW／KM／KT 舊寫法與注音）全過；CDP 搜尋框實測
    4 種新寫法命中、注音選字中卡片數不變；CDP 手機 390／桌機 1280 無橫向溢出、TR Spy Mark II 頁後繼卡片正常

- 發包紀錄：`REVIEW-NOTION-DISC-20261120`｜T2（資料刪改＋部署）｜主模型直做
  - 盲審 A/B（GPT-6.1 Sol 試用協定第 3 次）Codex 唯讀 `gpt-6.1-sol xhigh`（428s）＋`gpt-5.6-sol xhigh`（513s）。
    首次同時背景跑被 Claude Code 因記憶體不足回收（零交付），經使用者同意**依序**重跑。採納：EC-2100 高速限制、
    HTE-700D 僅限裸線、ETCR1600 品名與規範；**模板「後繼機種」違反 Notion「不等於原廠後繼」→ 業主裁決全站改
    「替代機種」**；DO5000「本型號已停產」違反「不據此宣稱全球停產」→ **業主裁決維持「已停產」**。不採納：
    3121/3122 整頁停產（原廠 sell_end 列 MODEL 3121/3122、3123 皆停產）、TM-901 探棒相容矛盾（型錄 ※ 註記為
    圖片文字，明寫可用於舊機）、HX-6S 無頁（舊站從未上架）；5.6 一條與檔案矛盾（稱漏列 LED 5 小時，實已列）。
    記入既有缺口 ⑤⑥
  - **試用結案**：A/B 3 次累計屬實 6.1 Sol 14 < 5.6 Sol 17 → 依 11-13 授權**自動退回，T2 盲審改回 gpt-5.6-sol**
    （vault `1b071ad`；6.1 屬實率 82% 較高、零捏造，但抓得較少）
  - 主模型驗收：build 329 頁 0 錯誤 0 警告；audit 303 項（現行 266、停產 37），7 條替代對應正確；dist 停產頁
    替代連結與「詢問替代機種」按鈕、詢價單備註「已停產，替代機種 X」；公開頁「後繼」只剩 HTE-700D／HXA-6 特點
    （原廠自己的宣稱）；CDP 手機 390／桌機 1280 共 16 畫面無橫向溢出、無破圖

## 剩餘待辦

- [ ] **HT-610α 是否仍現行（待業主）**：長谷川 JP／EN 現行目錄都沒有 HT-610α（低壓檢電器現行為 HTE-610 系列、
  HTE-700D/DL、HT-670），停產頁也沒列。`ht-610-ht-680d.md` 目前仍當現行、未填 lastReviewed
- [ ]（可選）HX-6S 舊型號搜尋入口：Notion 表列 HX-6S→HXA-6S，但舊站從未上架 HX-6S；搜尋只比對型號＋品名＋廠牌，
  搜「HX-6S」0 筆（搜「HX-6」可找到停產頁）。業主要的話再建 HX-6S 停產頁
- [ ] **Kyoritsu 待業主／代理商**（詳見上方產品資料更新）：5200／5201 產品照、
  3312／4113 型號確認
- [x] ~~非公開檔案移到 repo 外~~：✅ 2026-11-18 建 `E:\Project\conwenweb-private\`（使用者指示；規則見其
  README），`KY價格表/`、`bug/`、`2026-07-07*.png`、兩份型錄／報告 PDF、`HANDOFF.local.md` 全數搬入
  （132 檔數量核對一致）。**使用者之後給的資料也放那裡的根目錄**。`.git/info/exclude` 的 `KY價格表/`、
  `.gitignore` 的 `HANDOFF.local.md` 規則保留當防線
- [ ]（既有缺口，審查發現，未修）① `replacedBy` 只能單一後繼（原廠有時指定多個）；
  ② 停產品產品卡以後繼連結取代詢價按鈕（產品頁仍有「詢問替代機種」）；③ 詢價頁
  不會跟著其他分頁的詢價車變動重繪（徽章會更新、送出內容以 storage 為準）；
  ④ localStorage 寫入失敗（隱私模式／容量滿）時 `inquiry.ts` 的 `writeItems` 吞掉錯誤，按鈕仍顯示「已加入 ✓」，
  客戶到詢價單才發現是空的（2026-11-18 REVIEW-TRMARK3 盲審 6.1 Sol 擴權題）；
  ⑤ 詢價車存「加入當下」的型號：合併頁拆出停產型號後（2040、HT-680D），之前已加入的「HT-610α / HT-680D」
  仍掛在現行 slug 下、不會標停產（REVIEW-NOTION-DISC 6.1 擴權題）；⑥ 停產狀態以整頁為單位，合併頁只有部分型號
  停產時只能拆頁（REVIEW-NOTION-DISC 5.6 擴權題）
  （原 ④ 舊站 `index.htm`、`map1~3.html` 無轉址 stub → 2026-11-12 已補，見 SEO 現況）
- [ ] **Raytech 廠牌頁**（待業主決定）：使用者 2026-11-18 確認有代理 Raytech，但 `brands.ts` 只有 8 個 logo 廠牌，
  Raytech 沒有 `/brands/raytech/` 與代理廠牌總覽入口。要加就照「加廠牌頁」流程（logo、slug、filter `Raytech`、
  `role` 不填）；另機架式 TR-MARK III R 250V、TR4、WR50-12／-13 是否上架也待業主

- [x] ~~退租舊主機~~：✅ **已完成**（2026-10-20 業主告知已退租）。
  同日確認 DNS 已無任何紀錄指向舊主機（apex/www 皆為 GitHub Pages、
  無 MX——公司信箱是 hinet.net，不依賴網域）
- [x] ~~Google Search Console~~：✅ **已完成**（2026-07-07 業主完成網域驗證
  與 sitemap 提交，狀態「成功」，網頁陸續收錄中）。之後到 GSC 看
  關鍵字曝光/點擊與收錄進度（「網頁」報表）；新增產品後 sitemap 會自動
  更新，不用重提交
- [ ] **請業主用 iPhone 驗證注音搜尋**：iOS Safari 在 /products/ 搜尋框打注音
  （例「電錶」），確認選字過程中產品卡不會閃成「找不到符合產品」。2026-11-11
  的修正只在 Chromium（Edge headless＋CDP 模擬 composition 事件，含 Safari 事件順序）
  驗證過，**iOS/WebKit 未真機驗證**（L-032）
- [ ]（可選）流量分析工具：業主若想看訪客數/來源，申請 GA4 取得
  評估 ID（G-XXXXXXX）給 Claude 接上即可；不裝也不影響 SEO
- [ ] **SEO 站外（業主自己做，Claude 無法代辦）**：
  ① **Google 商家檔案**三據點各建一個（泰山／台中／高雄；地圖搜尋「儀器行」「鉤錶」排在
  一般結果前面，B2B 在地曝光主力）；② **Bing Webmaster Tools** 從 GSC 匯入（Yahoo 奇摩搜尋
  用 Bing 索引）；③ 請 KYORITSU 原廠在海外代理商列表放 `https://conwen.com.tw` 連結
  （高權重外連，對「Kyoritsu 台灣」類搜尋最有效）；④ 產業目錄（台灣經貿網等）登錄網址
- 看成效：GSC「成效」→查詢（曝光高點閱低＝改標題描述；平均排名 8–20＝最值得加強）、
  「網頁」報表看收錄數 vs sitemap 319；新頁可用「網址檢查」→要求建立索引加速

## SEO 現況（2026-07-07 強化、2026-11-12 第二輪）

- **2026-11-12 第二輪**：
  - **廠牌獨立頁** `/brands/<slug>/`（8 個代理廠牌，`src/pages/brands/[slug].astro`）：
    title「Kyoritsu 共立 台灣總代理」／「T&R 代理產品」，現行產品依分類分組（多的在前）＋
    分類跳轉 chips、BreadcrumbList。代理廠牌頁卡片、首頁 logo、產品頁「品牌」欄都連過去
    （`?brand=` 篩選照常可用）。`brands.ts` 的 slug 不合法／重複、filter 對不到任何產品
    → build 失敗（防靜默空頁）
  - **全站逐頁 description**：分類頁（品項數＋前 3 品牌，資料驅動）、產品總覽、廠牌、
    公司簡介、聯絡、消息、詢價單各自一段；全站 320 頁 0 重複（驗證腳本見測試 know-how）
  - 首頁 Organization JSON-LD：三據點地址（拆縣市／區／街道＋郵遞區號）＋三個
    ContactPoint（電話傳真帶 +886）；分類頁補 BreadcrumbList
  - **Layout 的 `description` 必填**（無預設值，漏傳 build 失敗並列出網址）；`noindex` 選項
    （404 頁使用）
  - **favicon**：`public/favicon.svg`（LogoMark 衍生，波形加粗）＋`favicon.ico`（16/32/48 PNG-in-ICO，
    Google 搜尋結果要 48 倍數）＋`apple-touch-icon.png`（180 滿版）。改 LogoMark 時要重產：
    Edge headless CDP 透明底截圖再打包 ICO（腳本為 session 暫存，照此規格重寫即可）
- 發包紀錄：`SEO-20261112`｜T2（部署＋對外宣稱「總代理」）｜主模型直做
  - 盲審 1 Codex `gpt-5.6-sol xhigh` 唯讀：0 P0／2 P1，採納 2（404 頁專屬 description＋noindex、
    Layout description 改必填；廠牌頁跳轉錨點改經 `withBase()`）；既有缺口：無
  - 盲審 2（增量：favicon／舊站轉址／description 必填）同模型唯讀：0 發現
  - 主模型驗收：build 320 頁 0 錯誤；負向測試 3 組（filter 拼錯、slug 重複／大寫、漏傳
    description）皆 build 失敗且訊息指名；CDP 桌機＋手機 390 截圖無橫向溢出；舊網址轉址實測
  - 上線：`a95ed70`，部署 run 43157191759 success（CI 冷建置通過）。線上 curl：8 廠牌頁 title 正確、
    favicon 三檔 200、8 個舊網址 refresh 目標正確、首頁 JSON-LD 3 地址、不存在網址 404＋noindex、
    sitemap 319 URL。**iOS／WebKit 未真機驗證**（新頁沿用既有 ProductCard 圖片容器）
- **站外曝光（業主待辦，影響比站內大）**：見剩餘待辦「SEO 站外」
- sitemap（`/sitemap-index.xml`，2026-11-12 為 319 URL）+ robots.txt + 全站 canonical
- 產品頁：廠牌+型號 title、逐頁 meta description、BreadcrumbList JSON-LD；
  首頁：Organization JSON-LD；全站 OG/Twitter 分享標籤 + 品牌分享圖
- **產品頁不放 Product JSON-LD**（2026-07-07 決策）：GSC 來信判定
  「必須指定 offers/review/aggregateRating」重大問題——Google 規定 Product
  標記要吃豐富結果必須三選一，詢價制無公開價格、無評論資料，填假的違反
  政策，故整段移除（本來也拿不到加成）。**日後勿再加回**，除非網站開始
  放公開價格。GSC 該問題頁面業主可按「驗證修正」加速清除，或等自然重爬
- **舊站網址轉址**：2008 年的 product_1~10.html、company/customer/news/
  contact/main.html 共 16 個舊網址做了 meta-refresh + canonical 轉址 stub
  （public/ 下的 .html），接住搜尋引擎裡的舊連結。2026-11-12 補齊剩餘 7 個：
  `index.htm`／`left.htm`／`up.htm`／`newfile.html` → 首頁；`map1~3.html`（舊站地圖頁）→
  `/contact/#headquarters`／`#taichung`／`#kaohsiung`（聯絡頁卡片 id＝`site.ts` 據點 slug）。
  舊站 HTML 頁面至此全部有轉址（legacy/ 共 23 個 .htm(l)）

## 業主日常維護指南

- **加產品**：`src/content/products/<分類slug>/<型號slug>.md` + 圖到
  `public/images/products/<slug>.jpg`（格式見 CLAUDE.md；`brand:` 顯示名
  要沿用 BRAND-REVIEW.md 第三節清單，拼法不同會變成兩個篩選項）→ push 自動上線
- **產品停產**：不刪檔，在該 .md 加 `status: discontinued`；有新款就加
  `replacedBy: "新款檔名"`（新款要先有自己的 .md）→ push。寫錯 build 會擋下並說明
- **加廠牌頁**：`src/data/brands.ts` 加一筆（`slug` 小寫 ASCII、`filter` 與產品 .md 的
  `brand:` 完全相同、logo 放 `public/images/brands/`）→ 自動產生 `/brands/<slug>/` 並出現在
  代理廠牌頁與首頁 logo 列。`role`（如「台灣總代理」）**只有業主確認過才填**
- **加消息**：`src/content/news/xxx.md`，frontmatter 放 `title: "標題"`、
  `date: 2026-08-01`，內文 Markdown → push 自動上線（新到舊排序）
- **詢價信**：寄到 conwencf@ms19.hinet.net（寄件者 Formspree，建議設安全
  寄件者）；用量到 formspree.io 後台看（免費 50 封/月；超量時客戶端自動
  退回 mailto，不會漏單）
- **表單防濫用**（平時不用做事）：每月順手看一次 Formspree 後台用量。
  用量異常時的判讀與升級做法見 `E:\Project\conwenweb-private\HANDOFF.local.md`（repo 外；
  repo 是 public，防護細節不公開）
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
5. **2026-11-11**：裝 `modern-web-guidance` 外掛（Google Chrome 團隊，專案範圍；
   `legacy-scan` 0 項）＋依其指南四項小修：注音選字期間不篩選、產品頁主圖
   `fetchpriority="high"`（不 lazy）、燈箱 `overscroll-behavior` 防背景捲動
   （Safari 不生效，漸進增強）、段落 `text-wrap: pretty`（標題試過 balance 會拆中文詞，已撤）

## 已確認的業主決策

1. 詢價寄信走 Formspree 免費方案（已上線）；商品管理用 Markdown 工作流
2. 繁體中文 only；舊站 10 分類全遷。停售品**改為標 `status: discontinued`
   保留頁面、不刪檔**（2026-10-19 使用者同意；原決策為「業主後續自行刪」）——
   保住舊型號搜尋流量並導向後繼機種
3. 交接用本檔；同指令權限確認 2 次以上加 allowlist（存長期記憶）
4. 地址/電話/資本額沿用舊站資料，業主 2026-07-07 確認為現況。
   **2026-10-20 台中、高雄分公司遷址**（業主提供新址含 6 碼郵遞區號，改 `site.ts`；
   地址顯示改為「郵遞區號＋地址」，地圖查詢不帶郵遞區號）。電話/傳真業主未提及變更，
   沿用原號碼——**待業主確認**；總公司 6 碼郵遞區號待業主提供（`postalCode` 留空）
5. 舊消息移除；日後由業主加新消息（新產品追加等）
6. **Kyoritsu 以代理商價格表為準**（2026-11-11 使用者）：價格表有、網站無＝新品；
   網站有、價格表無＝停產並連後繼。細則：①價格表有但原廠已停產→照價格表當現行；
   ②後繼機種：原廠指定且在價格表上→連；原廠未指定→Claude 挑價格表上功能最接近者
   （2004→2033、2006→2031、2805→2608A、2414/2415→2432、5409→5410）；原廠指定但不在
   價格表（6300→6305、6310→6315、5000→5001）→不連；③選配件不建頁；④仍現行的既有頁
   一併換官網特點、規格表與原廠圖。停產提示文案改中性「可改選下列後繼機種」（因部分
   後繼非原廠指定）。介紹文字不受舊站字數限制，業主日後會再追加
7. **耕紋貿易是 KYORITSU（日本共立）台灣總代理**（2026-11-12 使用者確認：「KYORITSU 代理商
   就是我們」）。網站可公開寫「台灣總代理」——由 `src/data/brands.ts` 的 `role` 欄位驅動
   （首頁 hero／description、公司簡介、廠牌頁、Kyoritsu 產品頁品牌標籤）。**其他廠牌代理關係
   未確認，`role` 一律不填、不得寫「總代理」**；要加須業主逐一確認
8. **對外一律寫「替代機種」**（2026-11-20 使用者裁決）：`replacedBy` 也用於公司推薦與跨廠牌替代（如 DHH→ETCR1600），
   產品頁、產品卡、詢價單、列表說明都改「替代機種」（取代決策 6 的「可改選下列後繼機種」）；原廠自己宣稱的接替關係
   （HTE-700D「HT-680 系列後繼機種」）可寫在特點
9. **DO5000 維持「已停產」**（2026-11-20 使用者裁決）：Notion 表註記「不據此對外宣稱全球停產」（原廠 Seaward 仍有
   產品頁），但業主選擇照一般停產處理

## 測試 know-how

- ⚠️ **commit＝push＝上線**：使用者全域 `~/.claude/settings.json` 有 PostToolUse hook
  （`auto-push after commit`），Bash 指令含 `git commit` 即自動 `git push` → 觸發 Pages 部署。
  要「先本機 commit 不上線」時不能靠不 push；只改 HANDOFF 等文件的 commit 訊息加 `[skip ci]`。
  2026-11-12 Kyoritsu 批次（`ddf00cd`）即由此 hook 推送，部署 run 43136762857 success，
  線上 curl 驗證新品／停產／換圖頁 200、5201（未上架）404

- **改 `astro.config.mjs` 的 rehype／remark 外掛後，本機要先刪
  `node_modules/.astro/data-store.json` 再 build**：內容層快取不會因外掛函式改動失效，
  舊的 markdown 渲染結果會沿用（2026-11-12 實踩；CI 每次全新 build 不受影響）。
  大量檔案異動後首次 build 出現 `Duplicate id` 警告也是同一快取，第二次即消失
- **CDP 測試腳本**：建立 WebSocket 後要立刻掛 `open` 監聽（或先檢查 `readyState`），
  中間若 `await sleep()`，`open` 早已觸發會永遠等不到（2026-11-12 實踩）

- **Codex 唯讀審查在本機**：`~/.codex/config.toml` 的 `[windows] sandbox = "elevated"`，
  沙盒首次初始化要 UAC 提權——背景執行時 UAC 沒人按會失敗（`ShellExecuteExW ... 1223`，
  審查員讀不到 repo、回「審查受阻」）。解法：先在前景跑一個小 `codex exec` 讓使用者按
  UAC，之後背景審查即正常（2026-11-12 實證）。呼叫一律 `-s read-only`、prompt 寫檔後
  `"$(cat file)"` 傳入、`< /dev/null`

- **headless Edge 一律加 `--disable-extensions --disable-sync`**：新設定檔會被 Windows 帳號自動登入並同步使用者的
  擴充功能（feebee、Tampermonkey…會開分頁），CDP 腳本抓第一個 page 會抓到擴充的歡迎頁而卡住；腳本改用
  `PUT /json/new` 開自己的分頁（2026-11-20 實踩）
- **Git Bash 傳 `/products/...` 給 node 會被 MSYS 轉成 `C:/Program Files/Git/products/...`**：CDP 截圖腳本收到
  壞網址、量到空白頁卻 exit 0。指令前加 `MSYS_NO_PATHCONV=1`（2026-11-20 實踩）
- **兩個 Codex 盲審同時背景跑可能被記憶體不足回收**（本機 16GB，2026-11-20 兩個都零交付）：記憶體緊時依序跑
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
- **SEO 產物驗證**：scratchpad 的 `verify-seo.mjs <dist>`（session 專用、會清掉；要再用時照
  此規格重寫）——掃 dist 全部 HTML（略過 meta-refresh 舊站 stub）：每頁有 description、
  description 不重複、JSON-LD 皆可 parse、`href`/`src` 根相對路徑對得到檔案。2026-11-12：
  320 頁、313 段 JSON-LD、0 重複、0 斷鏈
- bash 的 `sed` 替換字串裡 `&` 代表「整段匹配」，測資含 `T&R` 要寫 `\&`（2026-11-12 實踩，
  負向測試因此誤炸成語法錯誤）；Node 24 從 stdin（heredoc）讀的腳本走 evalTypeScript 路徑，
  同日一次多行字串比對莫名對不到（原因未查明）——改原始碼一律用 Edit 工具
- **注音篩選測法**：CDP 對搜尋框依序派 `compositionstart` → `input`（isComposing、值為注音）
  → `compositionend` → `input`（isComposing:false，模擬 Safari 順序），斷言選字中卡片數不變、
  不顯示「找不到」（2026-11-11 修正前的正式站可重現閃空）
- 驗收流程：`npm.cmd run build` 零錯誤 → preview + CDP 實測關鍵流程 →
  curl 線上路由 → 一事一 commit（訊息附驗證結果）

## 已知注意事項

- **2026-10-19 事件：repo 改 private → 全站下線**。免費方案 private repo 不能用
  Pages，GitHub 當下撤銷 Pages 設定，conwen.com.tw／www／github.io 全部 404。
  已改回 public 恢復。**恢復程序**（日後若再發生）：
  1. `gh repo edit --visibility public --accept-visibility-change-consequences`
  2. `gh api -X POST "repos/{owner}/{repo}/pages" -f build_type=workflow`
  3. `gh api -X PUT "repos/{owner}/{repo}/pages" -f cname=conwen.com.tw`
     （**不要**同時帶 `https_enforced`，憑證未就緒會 404 整筆失敗；當次憑證沿用、
     自動 approved＋強制 HTTPS）
  4. `gh workflow run "Deploy to GitHub Pages" --ref main` → 盯到 success
  5. curl 驗 apex／www／github.io／http 轉址
  6. **若 `https://www` 仍回 404「Site not found」**（`http://www` 卻正常 301）：
     強制 HTTPS 關→開——`gh api -X PUT "repos/{owner}/{repo}/pages" -F https_enforced=false`，
     等 20 秒再 `-F https_enforced=true`，約 2 分鐘後 www 恢復 301（2026-10-19 實證；
     單純重存 cname、重新部署各等 30 分鐘都無效）。主網域全程不中斷

- （小問題，未修）詢價頁 `.inquiry-remove` 是 scoped 樣式，JS 產生的「移除」按鈕吃不到
  （仍有全域 `.btn` 外觀，不影響使用）——JS 產生的元素要用 `:global(...)`

- **2026-07-07 手機版圖片爆版已修**（業主 iOS Safari 回報，截圖存 `E:\Project\conwenweb-private\截圖\bug\`）：
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
- /products/ 單頁含全部產品供客戶端搜尋（2026-11-12：294 項、~350KB），量再大時改建置期索引
- git 的 CRLF 警告正常；PowerShell 會把 git stderr 誤標成錯誤，
  以 `git log`/`git status` 實查為準
- 舊 DNS TTL 86400：切換後最長一天內少數使用者仍可能解析到舊 IP（過渡正常，
  2026-07-08 後即無此問題）
