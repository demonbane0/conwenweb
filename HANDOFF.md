# HANDOFF — Session 交接文件

> 每個 session 開始先讀本檔 + CLAUDE.md；有變動時收尾前更新並 commit。
> 最後更新：2026-11-12（SEO 曝光強化：8 個廠牌獨立頁、全站逐頁 description、Organization 三據點；
> 業主確認耕紋為 KYORITSU 台灣總代理）
> 前次：2026-11-12（Kyoritsu 依價格表全面更新：新品 62 頁、停產 26 頁、既有 27 頁換官網內容）

## 專案狀態：✅ 網站上線；🔄 產品資料更新進行中（見下方「產品資料更新」）

**正式網址：https://conwen.com.tw**（HTTPS 強制；舊網址
demonbane0.github.io/conwenweb 自動 301 轉址）

- 產品 294 頁（現行 268、停產 26；2026-11-12 Kyoritsu 更新後）。原 231 項全數遷移（10 分類），**廠牌 231/231 全數回填**（四輪查核：
  型號系列推斷 → GPT-5 網路查核 → 產品照商標辨識 → 業主人工確認；
  逐項清單見 `BRAND-FILLED.md`，查核紀錄見 `BRAND-REVIEW.md` 等三份 md）
- 產品搜尋 + 分類 chips + 廠牌下拉篩選（`?brand=` 參數）、產品頁燈箱、
  詢價車（localStorage + 跨頁徽章）
- 詢價表單**站內送出**（Formspree `f/mqevjpbn`，2026-07-07 實測成功、
  測試信寄達）；具防濫用與輸入防呆機制，Formspree 失敗時自動改走 mailto
  不漏單。防護細節見本機 `HANDOFF.local.md`（不入版控）
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
    文字已寫好暫存在本機 `KY價格表/官網抽取工具/staging/`，有實品照或型錄圖再上架
    （圖放 `public/images/products/5200-kyoritsu.jpg`／`5201.jpg`，md 搬回
    `src/content/products/environmental/`；5200 檔名避開 PAN-GLOBE 的 high-voltage/5200）；
    ② 3312（原廠 1995 停產，疑為 3442 誤植）、4113（查無）向原廠確認型號後再建頁
    （耕紋即 KYORITSU 台灣總代理，見決策第 7 點）；
    ③ 選配件 6 項（8241、8115、8161、9189、8008、8112）業主決定這次不建頁
  - 價格表上有、原廠已停產者照價格表當現行（2027、2608A、8030、5510、3021A/3023A、
    4500），公開頁面**不寫**「原廠停產／價格表」等內部資訊
  - **工具與中間資料一律本機**：`KY價格表/`（`.git/info/exclude` 排除）。11-04 比對腳本在
    `比對工具/`；11-12 官網抽取全套在 `官網抽取工具/`：`ky_plan.py`（處置對照表，L-067
    單一來源）→ `plan_check.py`（對帳：價格表型號全有處置、無撞名）→ `crawl_index.py`
    （分類頁含分頁，與官網宣稱總數對帳）→ `ky_detail.py`（只抽主內容區、h1 型號不符即拒）
    → `ky_images.py`（白底 JPG、不放大）→ `ky_bundles.py`（每頁資料包＋固定欄位）→
    子代理依 `bundles/GUIDE.md` 中譯 → `ky_md_check.py`（驗收）→ `collapse_common.py`
    （多欄表相同列移到「共通規格」表）。日後其他廠牌可沿用此管線
  - 原廠官網停產頁的圖蓋有「販売終了品／Discontinued products」大章，**不可用於現行品**；
    乾淨圖原廠已刪，只能從型錄 PDF 取（`pdf_img_mask.py` 套 smask 去背）
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

## 剩餘待辦

- [ ] **Kyoritsu 待業主／代理商**（詳見上方產品資料更新）：5200／5201 產品照、
  3312／4113 型號確認
- [ ] （建議）`KY價格表/` 移到 repo 外（CLAUDE.md 規範；目前靠 `.git/info/exclude`
  擋，排除規則不隨 repo 傳遞）。`bug/` 的 4 張舊截圖同理，勿 `git add .`
- [ ]（既有缺口，審查發現，未修）① `replacedBy` 只能單一後繼（原廠有時指定多個）；
  ② 停產品產品卡以後繼連結取代詢價按鈕（產品頁仍有「詢問替代機種」）；③ 詢價頁
  不會跟著其他分頁的詢價車變動重繪（徽章會更新、送出內容以 storage 為準）
  （原 ④ 舊站 `index.htm`、`map1~3.html` 無轉址 stub → 2026-11-12 已補，見 SEO 現況）

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
  用量異常時的判讀與升級做法見本機 `HANDOFF.local.md`（不入版控；
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
- /products/ 單頁含全部產品供客戶端搜尋（2026-11-12：294 項、~350KB），量再大時改建置期索引
- git 的 CRLF 警告正常；PowerShell 會把 git stderr 誤標成錯誤，
  以 `git log`/`git status` 實查為準
- 舊 DNS TTL 86400：切換後最長一天內少數使用者仍可能解析到舊 IP（過渡正常，
  2026-07-08 後即無此問題）
