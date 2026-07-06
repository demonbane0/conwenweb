# 產品廠牌確認清單（請業主過目）

> 2026-07-06 由型號系列自動判定回填。舊網站沒有逐項標廠牌，以下依型號命名規則
> 與代理廠牌產品線推斷。**只需掃一眼有沒有填錯，以及補「未填」的部分**；
> 修改方式：打開 `src/content/products/<分類>/<型號>.md`，改 `brand:` 一行即可。

> **2026-07-06 更新（三輪查核後）**：
> 1. 依 GPT-5 查核（`model-brand-review-20260706-revised.md`）回填 30 項、
>    修正 3 項（HMR-100G→SOUKOU 双興、ALT120/60→High Voltage Inc、DP6→CROPICO）
> 2. 依 174 項驗證（`BRAND-VALIDATION-RESULT.md`）修正 4 項
>    （PC6 IS/PRO→GE Druck、ASAHI→SATO、SERVOGOR 102→NGI）
> 3. **以舊站產品照片逐張辨識商標**，補回「需照片確認」的 18 項：
>    Aplab（SA3010/3011、4049）、Pintek（DS-603P）、elcotronic（PALM T2）、
>    ONO SOKKI（EC-900）、LINE SEIKI（TC-700）、Nippon Static（SV-511）、
>    NISHIZAWA（3001-02）、SFE（DHH＝TAG8000）、PAN-GLOBE（5200）、
>    DENSOKU（CDM-330）、SOUKOU 双興（VCBT-01K）、Motech（MT186）、
>    HT Italia（2020E、5080）、ISUZU（TH-27R）、Time Electronics（1071）、
>    CROPICO（'3000'）
>
> 現況 **220/231 已填**。剩 11 項照片無商標可辨：25H、HCTT、PORTATEST A-2、
> 8400、2000系列（轉速類，疑 RHEIN TACHO）、GAT-I/II、GLOVE、GUM、
> SJBOOT、SJGLOVE（絕緣防護具，需看實品標籤）。
> 最新逐項清單見 `BRAND-FILLED.md`。

## 一、已自動填入（信心高，抽查即可）— 174 項

> 逐項完整清單（含品名與檔案路徑）見 **`BRAND-FILLED.md`**，可直接交給
> AI 或原廠型錄逐項核對。

| 廠牌 | 判定依據 | 數量 |
|---|---|---|
| Kyoritsu 共立 | KEW 型號系列（1009、2002PA、3125、4105A、5409、6310、8030…） | 48 |
| EUROTRON | MicroCal / UniCal / PC6 系列 | 17 |
| T&R | 舊資料已有，統一顯示名為「T&R」；另補 PCU1-SP、PCU2/E | 14 |
| GE Druck | 壓力類（重錘校正器、壓力幫浦、壓力模組等，見下方待確認） | 13 |
| IRtec | Rayomatic / MicroRay / MS+ | 12 |
| Kaise | SK- 系列 | 11 |
| CROPICO | 電阻類（DO、RBB、RH9、RS3、MTS…） | 11 |
| Hasegawa 長谷川 | 檢電器 HS/HSN/HST/HX/HT 系列 | 10 |
| GW Instek 固緯 | GDS/GPI/GSP/LCR + 電源供應器系列 | 6 |
| Picotest | M3500A、G5100A、U6200A | 3 |
| 其他 | OMICRON CMC 256、HT Italia VEGA 76、Yokogawa μR10000/SR1006、Graphtec GL400/WR300、Brainchild VR18、SERVOGOR 102、LEM（Unilap/Isotest/Geotest/Handy ISO）、Multi 萬用（Multi 230/240、M-600、MCD-007）、Pintek（DP/HVP 探針）、Infratek 107A、Hipotronics（880PL、ALT120/60）、NISHIZAWA 5127、Leica DISTO、TES 1393、F.W. Bell 4090、SATO、BW Micro Clip、ASAHI、IRISYS IRI-4000 | 29 |

**建議特別確認**（推斷依據較間接）：
壓力類 13 項是否全為 GE Druck；4000/4001、005/6/8、HMR-100G、1071 是否為 CROPICO；
交直流電源供應器系列是否為固緯；SK-4030 是否為 Kaise；MMX3、DP6、'3000' 是否為
EUROTRON；'5000'、'5361'、'1018' 是否為共立；880PL/ALT120 是否為 Hipotronics。

## 二、未填（57 項，需業主提供）

| 分類 | 型號 | 可能廠牌（僅供參考） |
|---|---|---|
| 鉤式電錶 | AN 2050/2060、KT200、KT203、LH 1050、PR20/PR200/PR1001、RR 3030/6030 | — |
| 現場測試 | 3001-02、3007、3009、3015（指針式三用電錶） | NISHIZAWA？ |
| 電機電子 | '4049'、DS-603P、HVC-803、PALM T2、SA3010/3011 | — |
| 環境測量 | TM-601、7890、7892、7898、DP70/DP90、3116/3116A、5202、6230、SV-511、TC-700、Micrologger 2 | — |
| 環境測量（轉速類） | 2000系列、8400、EC-900、Rolux | RHEIN TACHO？（代理線為轉速計/閃頻儀） |
| 高壓維護 | 25H、4183CP、CDM-330、DHH、HCL-9000S、HCTT、MT186、PORTATEST A-2、TR Jr、TR Spy Mark II、VCBT-01K、WR50-2、5200 | 相序計類疑 HD Electric |
| 檢電/電源品質 | 2020E、5080、GAT-I/II、GLOVE、GUM、SJBOOT、SJGLOVE | 絕緣防護具疑日系（YS 渡部？） |
| 電阻/記錄器 | CR06、TH-27R | CHINO？ |
| 溫度校正 | '5510' | — |

## 三、廠牌顯示名（統一格式）

產品卡與篩選用的顯示名如下，新增產品時請沿用：
`Kyoritsu 共立`、`Kaise`、`Hasegawa 長谷川`、`T&R`、`GE Druck`、`CROPICO`、
`EUROTRON`、`RHEIN TACHO`、`IRtec`、`GW Instek 固緯`、`Picotest`、`Pintek`、
`Infratek`、`OMICRON`、`HT Italia`、`Hipotronics`、`LEM`、`Yokogawa 橫河`、
`Graphtec`、`Brainchild`、`SERVOGOR`、`IRISYS`、`Leica`、`TES 泰仕`、`SATO`、
`F.W. Bell`、`NISHIZAWA`、`Multi 萬用`、`BW Technologies`、`ASAHI`
