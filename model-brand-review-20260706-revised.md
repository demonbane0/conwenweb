# 型號廠牌查核結果（BRAND-REVIEW 補全版）

產出日期：2026-07-06  
修正日期：2026-07-06  
來源基準：使用者提供的 `BRAND-REVIEW.md`

## 0. 結論

這版已針對原檔「未填」清單與「建議特別確認」型號做品牌查核，並整理成可直接回填 `brand:` 的工作表。

修正紀錄：

- `KT200 / KT203` 已由 `Kewtech` 修正為 `Kyoritsu 共立`。Kewtech 保留為內部備註，不建議成為前台品牌篩選值。

重要限制：

1. 原檔的「已自動填入 174 項」只提供品牌摘要，沒有提供 174 筆逐項型號，因此本檔無法列出那 174 筆的逐項品牌。
2. 本檔已完整處理原檔中實際列出的未填型號與特別確認型號。
3. 「信心高」可直接回填；「中」建議抽查照片或舊型錄；「低 / 未確認」不要直接寫入網站資料。

---

## 1. 未填型號查核表

| 分類 | 型號 | 建議 brand: | 信心 | 回填建議 | 判斷依據摘要 | 備註 |
|---|---|---|---|---|---|---|
| 鉤式電錶 | AN 2050 / AN 2060 | LEM | 高 | 可回填 | LEM Analyst 2050/2060 電力鉤表系列資料 | 原表寫 AN，應為 Analyst 縮寫；前台可用 LEM。 |
| 鉤式電錶 | KT200 / KT203 | Kyoritsu 共立 | 高 | 可回填 | KYORITSU 官方產品頁與手冊列 KT 200、KT 203；Kewtech 官網亦列同型號 | 網站前台 brand 建議統一歸 `Kyoritsu 共立`，不要另拆 Kewtech；內部備註可寫 Kewtech / UK market model。 |
| 鉤式電錶 | LH 1050 | LEM | 高 | 可回填 | LEM Power Clamps LH1050/1060 系列資料 |  |
| 鉤式電錶 | PR20 / PR200 / PR1001 | LEM | 中-高 | 可回填但抽查 | LEM Analyst 系列 Current Probe 型號資料與校正資料庫 | PR20、PR200 證據較完整；PR1001 建議看照片確認。 |
| 鉤式電錶 | RR 3030 / RR 6030 | LEM | 中-高 | 可回填但抽查 | LEM~flex RR3030 資料與 LEM 校正清單 | RR3030 證據較強；RR6030 以同系列推定。 |
| 現場測試 | 3007 / 3009 / 3015 | NISHIZAWA | 高 | 可回填 | NISHIZAWA 官方 Analog Multimeter 產品列表列 MODEL 3007、3009、3015 |  |
| 現場測試 | 3001-02 | NISHIZAWA | 中 | 先抽查再回填 | 第三方資料列 NISHIZAWA 3001-02；官方現行頁較難直接找到 | 若有實機照片或舊型錄，建議補一眼。 |
| 電機電子 | 4049 | 未確認；可能 APLAB | 低 | 不要直接回填 | 只找到舊頁/標案片段，沒有足夠產品來源 | 需看舊產品圖、銘牌或型錄。 |
| 電機電子 | DS-603P | Pintek | 中 | 先抽查再回填 | Pintek DS-203/DS-303P 同系列示波器資料；DS-603P 直接證據不足 | 型號邏輯符合 Pintek DS-x03P 系列，但仍建議看圖。 |
| 電機電子 | HVC-803 | Pintek | 高 | 可回填 | Pintek 官方資料列 HVC-803 High Voltage Meter |  |
| 電機電子 | PALM T2 | Infratek | 低-中 | 不要直接回填 | 舊頁為掌上型電力計，與 Infratek 107A 電力分析器相鄰；未找到 PALM T2 直接來源 | 需照片/舊型錄確認。 |
| 電機電子 | SA3010 / SA3011 | ATTEN | 中-高 | 先抽查再回填 | ATTEN 型錄列 SA3010/SA3011 Spectrum Analyzer | 網上也有 APLAB SA3011 同名結果；若頁面圖片是 ATTEN 外觀再回填。 |
| 環境測量 | TM-601 | Kanetec | 高 | 可回填 | Kanetec TM-601 Tesla Meter / 高斯計資料 | 注意不要誤判成 TENMARS TM-601N；舊頁名稱是高斯計，對應 Kanetec。 |
| 環境測量 | 7890 / 7892 / 7898 | EUROTRON | 高 | 可回填 | Eurotron Mini GAS/CFC/CO Sniffer 目錄編號 7890/7892/7898 |  |
| 環境測量 | DP70 / DP90 | HIYOSHI | 高 | 可回填 | Hiyoshi DP70/DP90 Hybrid Anemometer 手冊 | 建議新增顯示名：HIYOSHI 或 Hiyoshi Electric。 |
| 環境測量 | 3116 / 3116A | ACO | 高 | 可回填 | ACO 小型振動計 TYPE 3116/3116A | 建議新增顯示名：ACO。 |
| 環境測量 | 5202 | Kyoritsu 共立 | 高 | 可回填 | KYORITSU 官方 MODEL 5202 Light Meter |  |
| 環境測量 | 6230 | ACO | 高 | 可回填 | ACO 6230 Series Sound Level Meter | 建議新增顯示名：ACO。 |
| 環境測量 | SV-511 | 未確認 | 未確認 | 不要直接回填 | 只確認舊頁為靜電高壓計 SV-511，未找到可靠廠牌來源 | 需舊型錄/照片。 |
| 環境測量 | TC-700 | Line Seiki | 中-高 | 先抽查再回填 | Line Seiki 停產品資料與代理頁列 TC-700 溫度計 | 舊頁用途為數字式溫度計；若實機是雙通道資料蒐集器，需再確認。 |
| 環境測量 | Micrologger 2 | EUROTRON | 中-高 | 可回填但抽查 | 研究/校正資料多次列 Eurotron Micrologger 2 | 避免與 Robertson Geo Micrologger2 混淆。 |
| 環境測量（轉速類） | 2000 系列 | 未確認；可能 ONO SOKKI | 低 | 不要直接回填 | 只找到 Ono Sokki NP-2000 轉速感測器相關資料，未能確認舊頁的「數字式轉速計 2000系列」 | 需型錄或圖。 |
| 環境測量（轉速類） | 8400 | 未確認 | 未確認 | 不要直接回填 | 未找到足夠可靠來源 | 需型錄或圖。 |
| 環境測量（轉速類） | EC-900 | ONO SOKKI | 中 | 先抽查再回填 | 校正資料庫列 ONO SOKKI EC-900 tachometer | 直接來源不是官方頁，建議看圖。 |
| 環境測量（轉速類） | Rolux | RHEIN TACHO | 高 | 可回填 | RHEINTACHO RT STROBE pocket rolux 產品資料 |  |
| 高壓維護 | 25H | 未確認 | 未確認 | 不要直接回填 | 未找到可對應舊商品的可靠來源 | 若是相序/高壓檢電相關，需照片確認是否 HD Electric 或其他品牌。 |
| 高壓維護 | 4183CP | SEW | 高 | 可回填 | SEW Cable Phasing Meter 4183CP 資料 | 建議顯示名：SEW。 |
| 高壓維護 | CDM-330 | DENSOKU | 中-高 | 先抽查再回填 | Densoku Techno 停產品與校正資料列 CDM-330 | 建議顯示名：DENSOKU / Densoku Techno。 |
| 高壓維護 | DHH | 未確認 | 未確認 | 不要直接回填 | 搜尋結果多為不相干產品，無法判定 | 需舊型錄/照片。 |
| 高壓維護 | HCL-9000S | Multi 萬用 | 高 | 可回填 | Multi Measuring Instruments 官方 HCL-9000S High Voltage Clamp Tester |  |
| 高壓維護 | HCTT | Himalayal | 中-高 | 先抽查再回填 | Himalayal HCTT AC Dielectric Test System 資料 | 建議顯示名：Himalayal。 |
| 高壓維護 | MT186 | 未確認 | 未確認 | 不要直接回填 | 未找到可靠產品來源；搜尋多為筆電電池料號 | 需舊型錄/照片。 |
| 高壓維護 | PORTATEST A-2 | Deltatronic Technology | 中-高 | 先抽查再回填 | Portatest A-2 dielectric oil tester 資料列 Deltatronic/Deltatronics | 建議顯示名：Deltatronic Technology。 |
| 高壓維護 | TR Jr | Raytech | 高 | 可回填 | Raytech TR-JR transformer turns ratio tester 資料 | 建議顯示名：Raytech。 |
| 高壓維護 | TR Spy Mark II | Raytech | 高 | 可回填 | Raytech TR-Spy Mark II Automatic Three Phase Ratiometer 資料 | 建議顯示名：Raytech。 |
| 高壓維護 | VCBT-01K | SOUKOU 双興 | 中-高 | 先抽查再回填 | 第三方產品頁列 VCBT-01K Soukou 斷路器測試器 | 公司代理線若有 SOUKOU，建議納入顯示名。 |
| 高壓維護 | WR50-2 | Raytech | 高 | 可回填 | Raytech WR50-2 winding resistance meter 資料 | 建議顯示名：Raytech。 |
| 高壓維護 | 5200 | 未確認 | 未確認 | 不要直接回填 | 高壓分類下的 5200 未找到可靠來源；不可與 KYORITSU 5202 或其他 5200 混用 | 需舊型錄/照片。 |
| 檢電/電源品質 | 2020E | 未確認 | 未確認 | 不要直接回填 | 未找到與舊商品可對應的可靠來源 | 需舊型錄/照片。 |
| 檢電/電源品質 | 5080 | 可能 F.W. Bell；需確認 | 低-中 | 不要直接回填 | 網上有 F.W. Bell Model 5080 Gauss/Tesla Meter，但與此分類不完全吻合 | 若舊頁商品其實是高斯計，可回 F.W. Bell；若是電源品質則需另查。 |
| 檢電/電源品質 | GAT-I / GAT-II | 未確認 | 未確認 | 不要直接回填 | 未找到電機測試儀器對應品牌 | 可能是產品簡稱或配件名，需照片。 |
| 檢電/電源品質 | GLOVE / GUM / SJBOOT / SJGLOVE | 未確認 | 未確認 | 不要直接回填 | 這些更像品名/配件類別，不像標準型號；未找到可靠品牌 | 疑似絕緣手套、絕緣靴、防護具；需看實品標籤。 |
| 電阻/記錄器 | CR06 | Brainchild | 高 | 可回填 | Brainchild paper recorder CR06 資料 |  |
| 電阻/記錄器 | TH-27R | ISUZU Seisakusho | 中-高 | 先抽查再回填 | 耗材資料列 ISUZU TH-27/TH-27R thermohygrograph | 建議顯示名：ISUZU Seisakusho。 |
| 溫度校正 | 5510 | Kyoritsu 共立 | 高 | 可回填 | KYORITSU 停產品清單列 MODEL 5510 為 Thermometer | 原分類寫溫度校正，但 MODEL 5510 實際較像紅外線溫度計；請確認分類是否要調整。 |

---

## 2. 原檔「建議特別確認」型號判定

| 型號 / 系列 | 建議 brand: | 信心 | 是否符合原推斷 | 判斷依據摘要 |
|---|---|---|---|---|
| 4000 / 4001 | CROPICO | 高 | 是 | CROPICO DO4000/DO4001 / Digital Ohmmeter 4000 series 資料。 |
| 005 / 006 / 008 | CROPICO | 高 | 是 | CROPICO 005/6/8 resistance decades & standards 資料。 |
| HMR-100G | SOUKOU 双興 | 高 | 不是 CROPICO | HMR-100G 是双興電機製作所高圧メガ校正抵抗器。 |
| 1071 | Time Electronics（若為電容十進箱） | 中 | 目前看起來不是 CROPICO | 搜尋到 1071 為 Time Electronics Capacitance Decade Box；若你們的 1071 不是電容箱，需照片確認。 |
| SK-4030 | Kaise | 高 | 是 | Kaise SK-4030 Digital Multimeter 資料。 |
| MMX3 | EUROTRON | 高 | 是 | Eurotron UniCal MMX3 Process Calibrator / True RMS Multimeter。 |
| DP6 | CROPICO | 中-高 | 不是 EUROTRON | 多個校正/二手資料列 CROPICO DP6 thermocouple calibrator。 |
| 3000 | 不確定；可能 EUROTRON 或其他 | 低 | 不可直接判定 | Eurotron 有 Unigas 3000+，但也有其他品牌 3000 series dry-block；需看商品名稱/圖片。 |
| 5000 | Kyoritsu 共立 | 高 | 是 | KYORITSU MODEL 5000 Leak Logger。 |
| 5361 | Kyoritsu 共立 | 高 | 是 | KYORITSU MODEL 5361 Recorder。 |
| 1018 | Kyoritsu 共立 | 高 | 是 | KYORITSU KEW 1018/1018H Digital Multimeter。 |
| 5510 | Kyoritsu 共立 | 高 | 是 | KYORITSU 停產品清單列 MODEL 5510 Thermometer。 |
| 880PL | Hipotronics | 高 | 是 | Hipotronics / Hubbell 880PL-HD DC Hipot Tester。 |
| ALT120/60 | High Voltage Inc（HVI） | 高 | 不是 Hipotronics | ALT-120/60 為 High Voltage Inc ALT Series AC Hipot。 |

---

## 3. 需要新增或調整的廠牌顯示名

原檔已有：`Kyoritsu 共立`、`Kaise`、`Hasegawa 長谷川`、`T&R`、`GE Druck`、`CROPICO`、`EUROTRON`、`RHEIN TACHO`、`IRtec`、`GW Instek 固緯`、`Picotest`、`Pintek`、`Infratek`、`OMICRON`、`HT Italia`、`Hipotronics`、`LEM`、`Yokogawa 橫河`、`Graphtec`、`Brainchild`、`SERVOGOR`、`IRISYS`、`Leica`、`TES 泰仕`、`SATO`、`F.W. Bell`、`NISHIZAWA`、`Multi 萬用`、`BW Technologies`、`ASAHI`。

建議補入或確認以下顯示名：

| 建議顯示名 | 使用情境 |
|---|---|
| Kewtech | 不建議新增為前台品牌；僅作 KT200/KT203 的內部備註或市場品牌註記。 |
| LEM | AN/LH/PR/RR 系列。原檔已有 LEM，沿用。 |
| Kanetec | TM-601 高斯計。 |
| HIYOSHI | DP70/DP90 風速風溫計。 |
| ACO | 3116/3116A、6230。 |
| Line Seiki | TC-700。 |
| ONO SOKKI | EC-900；2000 系列待確認。 |
| SEW | 4183CP。 |
| DENSOKU | CDM-330。 |
| Himalayal | HCTT。 |
| Raytech | TR Jr、TR Spy Mark II、WR50-2。 |
| Deltatronic Technology | PORTATEST A-2。 |
| SOUKOU 双興 | HMR-100G、VCBT-01K。 |
| ATTEN | SA3010/SA3011。 |
| Brainchild | CR06。 |
| ISUZU Seisakusho | TH-27R。 |
| Time Electronics | 1071 若為電容十進箱。 |
| High Voltage Inc | ALT120/60。 |

---

## 4. 優先人工確認清單

以下不要先批次回填，原因是網路證據不足、同型號撞名、或看起來不是標準型號：

- `4049`：可能 APLAB，但證據不足。
- `PALM T2`：疑似 Infratek，但缺直接來源。
- `SV-511`：舊頁只確認是靜電高壓計，未能確認廠牌。
- `2000 系列`、`8400`：轉速類資料不足。
- `25H`、`DHH`、`MT186`、`5200`：高壓維護類資料不足。
- `2020E`、`GAT-I/II`、`GLOVE`、`GUM`、`SJBOOT`、`SJGLOVE`：疑似配件/防護具/品名而非標準型號，需看圖或舊型錄。
- `5080`：若是 Gauss/Tesla Meter，可能是 `F.W. Bell`；若在電源品質分類，需重新確認。
- `3000`：同名撞型號，需看產品名稱或圖片。

---
## 4.1 人工確認結果
- `4049`：APLAB
- `PALM T2`：Elcotronic 
- `SV-511`：Nippon Static
 - `2000 系列`RHEINTACHO Rotaro 系列數位手持式轉速計
 、`8400`：Lucas Microtach 8400
 - `25H` STB 
DHH: Sibille Fameca Electric (SFE) 生產的 TAG8000 型數位核相系統
`MT186` :Motech MT 186
`5200`: PAN-GLOBE 5200 
`2020E`:HT Instruments 生產的 EnergyTest 2020E 
`GAT-I/II`: YOTSUGI 
`GLOVE`:YOTSUGI 
`GUM`:YOTSUGI
`SJBOOT`:YOTSUGI
`SJGLOVE`:YOTSUGI
`5080`:HT Italia Genius 5080 
`3000`:Isotech Cropico 3000

## 5. 回填建議

### 5.1 可直接回填

可直接回填的類型：

- 官方或可靠型錄直接對上的型號，例如 `KT200/KT203 = Kyoritsu 共立`、`3007/3009/3015 = NISHIZAWA`、`7890/7892/7898 = EUROTRON`、`5202 = Kyoritsu 共立`、`4183CP = SEW`、`TR Spy Mark II = Raytech`、`CR06 = Brainchild`。
- 原檔特別確認中已查明的型號，例如 `HMR-100G = SOUKOU 双興`，不是 CROPICO；`ALT120/60 = High Voltage Inc`，不是 Hipotronics。

### 5.2 批次改檔前建議流程

1. 先只回填「信心高」。
2. 「信心中」集中列出，逐一用舊商品照片或舊型錄抽查。
3. 「低 / 未確認」保留空白或 `brand: 未確認`，不要硬填。
4. 回填後跑一次網站品牌篩選，確認新增品牌不會造成篩選器空白或品牌名稱重複。
5. 新增品牌時，同步更新前台品牌篩選、資料驗證清單與搜尋索引。

---

## 6. 來源備註

> 這裡列來源類型，方便後續人工追溯。若要做可審計版，建議把每個來源頁截圖或 PDF 存進 `docs/brand_sources/`。

| 查核項目 | 來源備註 |
|---|---|
| KYORITSU KT200/KT203 | KYORITSU 官方產品頁：`https://www.kew-ltd.co.jp/en/products/detail/01094/`、`https://www.kew-ltd.co.jp/en/products/detail/00854/`；官方下載頁亦列 KT200 / KT203 手冊。 |
| Kewtech 與 KYORITSU 關係 | KYORITSU 官方沿革：`https://www.kew-ltd.co.jp/en/company/history/`；Kewtech 官網 Who We Are：`https://www.kewtechcorp.com/who-we-are/`。 |
| LEM Analyst / LH / PR / RR series | LEM Instruments Analyst / Power Clamp / LEM~flex datasheets; also manufacturer calibration lists. |
| NISHIZAWA 3007/3009/3015 | NISHIZAWA Electric Meters official Analog Multimeter product list. |
| Pintek HVC-803 | Pintek official product/news pages for HVC-803 high voltage meter. |
| ATTEN SA3010/SA3011 | ATTEN catalog / SA3010-SA3011 Spectrum Analyzer listing. |
| Kanetec TM-601 | Kanetec TM-601 Tesla Meter / Gauss Meter product references. |
| Eurotron 7890/7892/7898 | Eurotron Mini Sniffer datasheet: Mini GAS/CFC/CO Sniffer cat. 7890/7892/7898. |
| Hiyoshi DP70/DP90 | Hiyoshi DP90-AN1 / DP70-DN1 Hybrid Anemometer manuals. |
| ACO 3116/3116A / 6230 | ACO vibration meter TYPE 3116/3116A and ACO 6230 Series Sound Level Meter references. |
| KYORITSU 5202/5000/5361/1018/5510 | KYORITSU official product and discontinued-product pages. |
| Raytech TR-Jr / TR-Spy Mark II / WR50-2 | Raytech/Raytech USA transformer ratiometer and winding resistance meter references. |
| CROPICO 4000/4001 / 005/006/008 | Seaward/CROPICO DO4000 series and 00 series resistance decades datasheets. |
| SOUKOU HMR-100G | TechEyesOnline HMR-100G 高圧メガ校正抵抗器 双興電機製作所. |
| Hipotronics 880PL | Hubbell/Hipotronics 880PL-HD DC Hipot Tester. |
| High Voltage Inc ALT120/60 | High Voltage Inc ALT-120/60 AC Aerial Lift Dielectric Test Set manual/product pages. |
| Brainchild CR06 | Cascade recorders page: Brainchild paper recorder CR06. |
| ISUZU TH-27R | Thermohygrograph consumable listings for ISUZU TH-27/TH-27R. |

---

## 7. 原始檔未能逐項處理的部分

原始 `BRAND-REVIEW.md` 的「已自動填入 174 項」只有以下摘要，沒有提供每一筆實際產品檔名或型號列，因此不能在本檔逐項核對：

- Kyoritsu 共立：48
- EUROTRON：17
- T&R：14
- GE Druck：13
- IRtec：12
- Kaise：11
- CROPICO：11
- Hasegawa 長谷川：10
- GW Instek 固緯：6
- Picotest：3
- 其他：29

若要真正做「網站所有產品逐項品牌表」，需要提供 `src/content/products/` 目錄或匯出的產品 CSV。屆時可產出：

```csv
category,slug,model,name,current_brand,suggested_brand,confidence,evidence,action
```

並可直接生成批次修改用的 patch。
