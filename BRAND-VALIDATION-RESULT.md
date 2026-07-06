# 廠牌驗證結果報告

- 原始檔案：`BRAND-FILLED.md`
- 原始筆數：174 筆
- 目的：依型號、產品線與公開資料，檢查自動填入的廠牌是否需修正或標記存疑。
- 產出日期：2026-07-06（Asia/Taipei）

## 驗證口徑

本報告採「網站前台可顯示品牌」與「後台製造商/歷史品牌」分層判斷。2008 年前後舊機種常遇到品牌併購、產品線品牌、代理品牌混用，因此未列為錯誤的項目，建議理解為「目前未發現明顯衝突，可暫保留」，不是保證所有型號都已有完整原廠舊型錄逐頁確認。

建議後台新增欄位：

| 欄位 | 用途 |
|---|---|
| `brand_display` | 前台顯示品牌，例如 `IRtec`、`Kyoritsu 共立` |
| `manufacturer` | 製造商或歷史公司，例如 `Eurotron`、`GE Druck / SI Pressure Instruments` |
| `brand_confidence` | `confirmed`、`corrected`、`legacy_brand`、`uncertain`、`no_issue_found` |
| `brand_note` | 放品牌併購、產品線、舊型錄不足等說明 |

## 需要修正的錯誤

| # | 型號 | 原廠牌 | 建議廠牌 | 判定 | 理由 |
|---:|---|---|---|---|---|
| 18 | PC6 IS | EUROTRON | GE Druck / SI Pressure Instruments | 需修正 | PC6 系列公開手冊與產品頁指向 SI Pressure Instruments / Druck；不應歸 EUROTRON。 |
| 19 | PC6 PRO | EUROTRON | GE Druck / SI Pressure Instruments | 需修正 | PC6 PRO 公開手冊與產品頁指向 SI Pressure Instruments / Druck；不應歸 EUROTRON。 |
| 65 | ALT120/60 | Hipotronics | High Voltage, Inc. / HVI | 需修正 | ALT Series / ALT-120/60 為 HVI（High Voltage, Inc.）aerial lift AC hipot test set。 |

## 建議標記存疑或統一口徑

| # | 型號 | 原廠牌 | 建議處理 | 判定 | 理由 |
|---:|---|---|---|---|---|
| 1 | ASAHI | ASAHI | SATO/ASAHI 或保留 ASAHI 待舊型錄確認 | 存疑 | 「ASAHI」同時出現在商標/朝日型描述中；公開資料可見 SATO/ASAHI 兩種商標，原列「廠牌=ASAHI、型號=ASAHI」不夠精確。 |
| 69–80 | IRtec Rayomatic / MicroRay / MS+ | IRtec | 前台保留 `IRtec`；後台 `manufacturer` 可填 `Eurotron` | 口徑需確認 | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 系列；若品牌欄位定義為產品線品牌，IRtec 不算錯。 |
| 157 | SERVOGOR 102 | SERVOGOR | SERVOGOR；或待舊型錄確認 Kipp & Zonen / LEM / Goerz 關係 | 存疑 | SERVOGOR 102 可查到作為記錄器型號，但公開資料同時可見 Kipp、LEM、Goerz 等關聯；若品牌欄位要求製造商，需舊型錄確認。 |

## 品牌群組判定摘要

| 品牌群 | 判定 | 補充 |
|---|---|---|
| Kyoritsu 共立 | 可保留 | 2002PA、2003A、2413F、3125、4105A、6300/6310 等 KEW/Kyoritsu 系列邏輯一致。 |
| Hasegawa 長谷川 | 可保留 | DF、HS、HSN、HSS、HST、HT、HX/HXW、V-500 等檢電器/活線警報器產品線邏輯一致。 |
| CROPICO | 可保留 | DO7/DO7e、DO5000、RBB/RH9/RS3 等低阻/電阻箱系列邏輯一致。 |
| EUROTRON | 部分修正 | MicroCal / UniCal / MMX 可保留；PC6 IS / PC6 PRO 應移到 GE Druck / SI Pressure Instruments。 |
| GE Druck | 可保留 | 壓力校正、deadweight tester、DPM/EPM/HTP1/LTP1/TP1-40 等產品線邏輯一致。 |
| IRtec | 可保留但需定義 | 作為前台產品線品牌可保留；如要填製造商，建議 Eurotron / IRtec。 |
| T&R | 可保留 | ADM、DVS、DMO、KV、PCU、VC、Z-OVR 等 T&R Test Equipment 產品線邏輯一致。 |
| SERVOGOR | 存疑/legacy | 可暫保留 SERVOGOR，但需用舊型錄或銘牌確認是否要歸到 Kipp & Zonen / LEM / Goerz。 |
| ASAHI | 存疑 | 乾濕度計可能為 SATO/ASAHI 商標或朝日型描述；建議確認實機商標。 |
| 其他品牌 | 暫可保留 | Brainchild、BW Technologies、F.W. Bell、Graphtec、GW Instek、HT Italia、Infratek、IRISYS、Kaise、Leica、LEM、Multi、NISHIZAWA、OMICRON、Picotest、Pintek、SATO、TES、Yokogawa 等，本次未發現需優先修正的品牌衝突。 |

## 逐項驗證狀態

| # | 原廠牌 | 型號 | 品名 | 驗證狀態 | 建議廠牌 | 信心/類型 | 理由/處理建議 |
|---:|---|---|---|---|---|---|---|
| 1 | ASAHI | ASAHI | 乾濕度計 | 存疑 | SATO/ASAHI 或保留 ASAHI 待舊型錄確認 | uncertain | 「ASAHI」同時出現在商標/朝日型描述中；公開資料可見 SATO/ASAHI 兩種商標，原列「廠牌=ASAHI、型號=ASAHI」不夠精確。 若依實機商標，確認銘牌後填 ASAHI 或 SATO；若依商品通稱，建議改為 SATO/ASAHI，brand_note 註記朝日型/商標不定。 |
| 2 | Brainchild | VR18 | 數位無紙記錄器 | 暫可保留 | Brainchild | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 3 | BW Technologies | Micro Clip | 四用氣體偵測器 | 暫可保留 | BW Technologies | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 4 | CROPICO | 4000/4001 | 數位電阻計 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 5 | CROPICO | DO5000 | 可程式電阻計 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 6 | CROPICO | DO7 | 低電阻計 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 7 | CROPICO | DO7e | 低電阻計 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 8 | CROPICO | 005/6/8 | 十進位電阻箱 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 9 | CROPICO | 1071 | 十進位電容箱 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 10 | CROPICO | HMR-100G | 高壓絕緣電阻校正器 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 11 | CROPICO | MTS | 多範圍標準電阻器 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 12 | CROPICO | RBB系列 | 十進位電阻箱 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 13 | CROPICO | RH9系列 | 十進位高阻箱 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 14 | CROPICO | RS3系列 | 標準電阻器 | 暫可保留 | CROPICO | no_issue_found | Cropico / Seaward Cropico 低電阻計、電阻箱、標準電阻器系列相符，未發現需修正項。 |
| 15 | EUROTRON | MicroCal P100 | 壓力校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 16 | EUROTRON | MicroCal P20 | 壓力校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 17 | EUROTRON | MicroCal P200 | 壓力校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 18 | EUROTRON | PC6 IS | 防爆型壓力校正器 | 需修正 | GE Druck / SI Pressure Instruments | corrected | PC6 系列公開手冊與產品頁指向 SI Pressure Instruments / Druck；不應歸 EUROTRON。 將廠牌由 EUROTRON 改為 GE Druck / SI Pressure Instruments。 |
| 19 | EUROTRON | PC6 PRO | 數字式壓力校正器 | 需修正 | GE Druck / SI Pressure Instruments | corrected | PC6 PRO 公開手冊與產品頁指向 SI Pressure Instruments / Druck；不應歸 EUROTRON。 將廠牌由 EUROTRON 改為 GE Druck / SI Pressure Instruments。 |
| 20 | EUROTRON | 3000 | 精密數字溫度計 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 21 | EUROTRON | DP6 | 熱電偶溫度校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 22 | EUROTRON | MicroCal 1/10+ | 溫度信號校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 23 | EUROTRON | MicroCal 20 DPC | 溫度壓力信號校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 24 | EUROTRON | MicroCal 200+/2000+ | 溫度信號校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 25 | EUROTRON | MicroCal 20T | 雙通道高精度溫度測量計 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 26 | EUROTRON | MicroCal T100/T500/T1100 | 乾式溫度校正爐 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 27 | EUROTRON | MicroCal T200 Fluid | 液槽式溫度校正爐 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 28 | EUROTRON | MicroCal T30 | 乾式溫度校正爐 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 29 | EUROTRON | MicroCal T350 | 乾式溫度校正爐 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 30 | EUROTRON | MMX3 | 多功能電錶校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 31 | EUROTRON | UniCal系列 | 溫度信號校正器 | 暫可保留 | EUROTRON | series_match | MicroCal、UniCal、MMX 等 Eurotron 溫度/信號校正系列可保留；但 PC6 IS / PC6 PRO 需移出。 |
| 32 | F.W. Bell | F.W. BELL 4090 | 電磁場測試器 | 暫可保留 | F.W. Bell | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 33 | GE Druck | 2000系列 | 重錘式液壓校正器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 34 | GE Druck | 2021P | 數字式差壓計 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 35 | GE Druck | 4740 | 壓力測試比較器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 36 | GE Druck | 6000 | 重錘式氣壓校正器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 37 | GE Druck | 9000系列 | 重錘式液壓校正器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 38 | GE Druck | DPM | 數位式壓力模組 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 39 | GE Druck | DTG-2K | 數字式壓力計 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 40 | GE Druck | EPM | 外部壓力模組 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 41 | GE Druck | HTP1 | 液壓壓力產生器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 42 | GE Druck | LTP1 | 空氣壓力幫浦 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 43 | GE Druck | Oxytester | 油水分離器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 44 | GE Druck | PDW | 攜帶式重錘液壓校正器 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 45 | GE Druck | TP1-40 | 空氣壓力幫浦 | 暫可保留 | GE Druck | no_issue_found | Druck / GE Druck / Pressurements 壓力校正與壓力模組系列可保留。 |
| 46 | Graphtec | GL400 | 多功能資料蒐集記錄器 | 暫可保留 | Graphtec | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 47 | Graphtec | WR300系列 | 高速記錄器 | 暫可保留 | Graphtec | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 48 | GW Instek 固緯 | GDS-2000系列 | 數位儲存式示波器 | 暫可保留 | GW Instek 固緯 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 49 | GW Instek 固緯 | GPI-825 | 絕緣耐壓安規測試器 | 暫可保留 | GW Instek 固緯 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 50 | GW Instek 固緯 | GSP-830 | 頻譜分析儀 | 暫可保留 | GW Instek 固緯 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 51 | GW Instek 固緯 | LCR-821 | 高精密 LCR 測試儀 | 暫可保留 | GW Instek 固緯 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 52 | GW Instek 固緯 | 交流變頻電源供應器系列 | 交流變頻電源供應器系列 | 暫可保留 | GW Instek 固緯 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 53 | GW Instek 固緯 | 直流電源供應器系列 | 直流電源供應器系列 | 暫可保留 | GW Instek 固緯 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 54 | Hasegawa 長谷川 | DF-6 | 高低壓檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 55 | Hasegawa 長谷川 | HS-20N | AC/DC 高壓檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 56 | Hasegawa 長谷川 | HSN-6A | AC/DC 高低壓檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 57 | Hasegawa 長谷川 | HSS-25 | 高低壓檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 58 | Hasegawa 長谷川 | HST 系列 | 高壓檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 59 | Hasegawa 長谷川 | HT-610α / HT-680D | 低壓檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 60 | Hasegawa 長谷川 | HX-6 | 高壓活線近接警報器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 61 | Hasegawa 長谷川 | HXW-1 | 高壓活線近接警報器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 62 | Hasegawa 長谷川 | MKK-1 | 檢溫檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 63 | Hasegawa 長谷川 | V-500 | 檢電器 | 暫可保留 | Hasegawa 長谷川 | no_issue_found | 長谷川電機工業檢電器/活線警報器系列型號相符，未發現需修正項。 |
| 64 | Hipotronics | 880PL-10MA | 直流耐壓試驗器 | 暫可保留 | Hipotronics | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 65 | Hipotronics | ALT120/60 | 移動式交流耐壓試驗器 | 需修正 | High Voltage, Inc. / HVI | corrected | ALT Series / ALT-120/60 為 HVI（High Voltage, Inc.）aerial lift AC hipot test set。 將廠牌由 Hipotronics 改為 High Voltage, Inc. / HVI。 |
| 66 | HT Italia | VEGA 76 | 電力分析儀 | 暫可保留 | HT Italia | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 67 | Infratek | 107A | 精密電力分析儀 | 暫可保留 | Infratek | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 68 | IRISYS | IRI 4000 | 紅外線熱像儀 | 暫可保留 | IRISYS | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 69 | IRtec | IRtec Rayomatic 10 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 70 | IRtec | IRtec Rayomatic 100 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 71 | IRtec | IRtec Rayomatic 12 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 72 | IRtec | IRtec Rayomatic 14 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 73 | IRtec | IRtec Rayomatic 20 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 74 | IRtec | IRtec Rayomatic 4 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 75 | IRtec | IRtec Rayomatic 40 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 76 | IRtec | IRtec Rayomatic 6 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 77 | IRtec | IRtec Rayomatic 60 | 工業製程監控用紅外線感測器 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 78 | IRtec | IRtec MicroRay Xtreme | 紅外線測溫計 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 79 | IRtec | IRtec Series | 紅外線測溫計 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 80 | IRtec | MS+ | 紅外線測溫儀 | 口徑需確認 | IRtec（前台產品線）或 Eurotron / IRtec（製造商/產品線） | legacy_brand/product_line | Rayomatic / MicroRay / MS+ 屬 Eurotron IRtec 非接觸式紅外線產品線；若網站品牌欄是前台產品線，IRtec 可保留。 建議前台保留 IRtec；後台 manufacturer 可填 Eurotron，brand_note 註記 IRtec product line。 |
| 81 | Kaise | SK-7640 | 數字式鉤錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 82 | Kaise | SK-7706 | AC/DC 數字式鉤錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 83 | Kaise | SK-7708 | AC/DC 數字式鉤錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 84 | Kaise | SK-7712 | AC/DC 數字式鉤錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 85 | Kaise | SK-7720 | AC/DC 數字式鉤錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 86 | Kaise | SK-4030 | 桌上型數字電錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 87 | Kaise | SK-3013 | 指針式高阻計 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 88 | Kaise | SK-3020 | 指針式高阻計 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 89 | Kaise | SK-6155 | 數字式三用電錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 90 | Kaise | SK-6555 | 口袋型三用電錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 91 | Kaise | SK-6592 | 筆式數字三用電錶 | 暫可保留 | Kaise | no_issue_found | Kaise SK 系列鉤錶、三用電錶、高阻計型號相符。 |
| 92 | Kyoritsu 共立 | 2002PA | 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 93 | Kyoritsu 共立 | 2003A | AC/DC 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 94 | Kyoritsu 共立 | 2004 | AC/DC 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 95 | Kyoritsu 共立 | 2006 | 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 96 | Kyoritsu 共立 | 2007A | 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 97 | Kyoritsu 共立 | 2009A | AC/DC 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 98 | Kyoritsu 共立 | 2027 | 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 99 | Kyoritsu 共立 | 2031 | 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 100 | Kyoritsu 共立 | 2033 | AC/DC 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 101 | Kyoritsu 共立 | 2037 | AC/DC 數字式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 102 | Kyoritsu 共立 | 2040 /2046R /2055 /2056R | 最新型 AC/DC鉤錶系列 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 103 | Kyoritsu 共立 | 2300R | 數字式叉型電流錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 104 | Kyoritsu 共立 | 2412 | 數字式洩漏電流鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 105 | Kyoritsu 共立 | 2413F | 數字式洩漏電流鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 106 | Kyoritsu 共立 | 2414/2415 | 數字式洩漏電流鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 107 | Kyoritsu 共立 | 2431 | 數字式洩漏電流鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 108 | Kyoritsu 共立 | 2432 | 數字式洩漏電流鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 109 | Kyoritsu 共立 | 2433 | 數字式洩漏電流鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 110 | Kyoritsu 共立 | 2608A | 指針式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 111 | Kyoritsu 共立 | 2805 | 指針式鉤錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 112 | Kyoritsu 共立 | 1009 | 數字式三用電錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 113 | Kyoritsu 共立 | 1018 | 口袋型三用電錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 114 | Kyoritsu 共立 | 1109 | 指針式三用電錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 115 | Kyoritsu 共立 | 1110 | 指針式三用電錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 116 | Kyoritsu 共立 | 1700 /1710 | 電壓檢測器 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 117 | Kyoritsu 共立 | 2000/2001 | 叉式三用電錶 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 118 | Kyoritsu 共立 | 3001B | 數字式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 119 | Kyoritsu 共立 | 3005A /3007A | 數字式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 120 | Kyoritsu 共立 | 3021 /3022 /3023 | 數字式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 121 | Kyoritsu 共立 | 3121 /3122 /3123 | 高壓高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 122 | Kyoritsu 共立 | 3124 | 高壓高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 123 | Kyoritsu 共立 | 3125 | 數字式高壓高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 124 | Kyoritsu 共立 | 3131A | 指針式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 125 | Kyoritsu 共立 | 3132A | 指針式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 126 | Kyoritsu 共立 | 3161A | 指針式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 127 | Kyoritsu 共立 | 3165 /3166 | 指針式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 128 | Kyoritsu 共立 | 3321A | 指針式高阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 129 | Kyoritsu 共立 | 4102A | 指針式接地電阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 130 | Kyoritsu 共立 | 4105A | 數字式接地電阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 131 | Kyoritsu 共立 | 4200 | 鉤式接地電阻計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 132 | Kyoritsu 共立 | 5409 | 漏電斷路器測試儀 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 133 | Kyoritsu 共立 | 8030 | 數位式相序計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 134 | Kyoritsu 共立 | 8031 | 轉盤式相序指示計 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 135 | Kyoritsu 共立 | 6300 | 最大需量電力分析儀 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 136 | Kyoritsu 共立 | 6310 | 數位電力品質分析儀 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 137 | Kyoritsu 共立 | 5000 | 洩漏電流記錄器 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 138 | Kyoritsu 共立 | 5020 | 數位電壓電流記錄器 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 139 | Kyoritsu 共立 | 5361 | 電壓電流記錄器 | 暫可保留 | Kyoritsu 共立 | no_issue_found | KYORITSU / KEW 系列型號相符，未發現需修正項。 |
| 140 | Leica | DISTO Lite 5 | 雷射測距儀 | 暫可保留 | Leica | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 141 | LEM | Geotest 2016 | 接地電阻計 | 暫可保留 | LEM | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 142 | LEM | Handy ISO | 掌上型高阻計 | 暫可保留 | LEM | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 143 | LEM | Isotest 2010 | 數字式絕緣高阻計 | 暫可保留 | LEM | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 144 | LEM | Unilap ISO5KV | 數字式高壓高阻計 | 暫可保留 | LEM | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 145 | Multi 萬用 | M-600 | 交直流洩漏電流計 | 暫可保留 | Multi 萬用 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 146 | Multi 萬用 | Multi 230 | AC/DC 數字式鉤錶 | 暫可保留 | Multi 萬用 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 147 | Multi 萬用 | Multi 240 | AC/DC 數字式鉤錶 | 暫可保留 | Multi 萬用 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 148 | Multi 萬用 | MCD-007 | 口袋型三用電錶 | 暫可保留 | Multi 萬用 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 149 | NISHIZAWA | NISHIZAWA 5127 | 指針式鉤錶 | 暫可保留 | NISHIZAWA | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 150 | OMICRON | CMC 256 | 數位電驛試驗器 | 暫可保留 | OMICRON | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 151 | Picotest | G5100A | 函數/任意波形產生器 | 暫可保留 | Picotest | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 152 | Picotest | M3500A | 61/2數位萬用電錶 | 暫可保留 | Picotest | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 153 | Picotest | U6200A | 汎用頻率計數器 | 暫可保留 | Picotest | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 154 | Pintek | DP-25/50/100 | 差動探針 | 暫可保留 | Pintek | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 155 | Pintek | HVP-40M/40DM | 直流高壓計 | 暫可保留 | Pintek | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 156 | SATO | SATO SK-L200TH | 數字溫濕度蒐集器 | 暫可保留 | SATO | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 157 | SERVOGOR | SERVOGOR 102 | 筆式記錄器 | 存疑 | SERVOGOR；或待舊型錄確認 Kipp & Zonen / LEM / Goerz 關係 | uncertain | SERVOGOR 102 可查到作為記錄器型號，但公開資料同時可見 Kipp、LEM、Goerz 等關聯；若品牌欄位要求製造商，需舊型錄確認。 前台可暫保留 SERVOGOR；後台加 legacy_brand_note，待舊型錄或銘牌確認。 |
| 158 | T&R | 100 ADM MK4 | 綜合電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 159 | T&R | 200 ADM-P | 綜合電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 160 | T&R | 200A-3PH/E | 三相電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 161 | T&R | 50A-3PH | 三相電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 162 | T&R | 750ADM | 大電流電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 163 | T&R | ART 3V | 三相電壓電驛測試器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 164 | T&R | DMO200 | 超輕量微低阻器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 165 | T&R | DMO600 | 超輕量微低阻器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 166 | T&R | DVS3 mk2 | 綜合電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 167 | T&R | KV30-40D MK2 | 交流耐壓試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 168 | T&R | PCU1-SP | 大電流電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 169 | T&R | PCU2/E | 大電流電驛試驗器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 170 | T&R | VC24-24 | 真空測試器 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 171 | T&R | Z-OVR | 電纜阻抗測試系統 | 暫可保留 | T&R | no_issue_found | T&R Test Equipment 電驛試驗器、DMO 微低阻計、VC24-24、Z-OVR 系列相符。 |
| 172 | TES 泰仕 | TES 1393 | 電磁場測試器 | 暫可保留 | TES 泰仕 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 173 | Yokogawa 橫河 | SR1006 | 打點式記錄器 | 暫可保留 | Yokogawa 橫河 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |
| 174 | Yokogawa 橫河 | μR 10000 | 可程式記錄器 | 暫可保留 | Yokogawa 橫河 | no_issue_found | 本次未發現需優先修正的品牌衝突；建議後續仍以原廠型錄/銘牌做最終確認。 |

## 建議直接套用的修正

```csv
no,model,old_brand,new_brand,status,note
"18","PC6 IS","EUROTRON","GE Druck / SI Pressure Instruments","需修正","PC6 系列公開手冊與產品頁指向 SI Pressure Instruments / Druck；不應歸 EUROTRON。"
"19","PC6 PRO","EUROTRON","GE Druck / SI Pressure Instruments","需修正","PC6 PRO 公開手冊與產品頁指向 SI Pressure Instruments / Druck；不應歸 EUROTRON。"
"65","ALT120/60","Hipotronics","High Voltage, Inc. / HVI","需修正","ALT Series / ALT-120/60 為 HVI（High Voltage, Inc.）aerial lift AC hipot test set。"
```

## 建議標記但不急著硬改的項目

```csv
no,model,old_brand,recommended_brand,status,note
"1","ASAHI","ASAHI","SATO/ASAHI 或保留 ASAHI 待舊型錄確認","存疑","「ASAHI」同時出現在商標/朝日型描述中；公開資料可見 SATO/ASAHI 兩種商標，原列「廠牌=ASAHI、型號=ASAHI」不夠精確。"
"157","SERVOGOR 102","SERVOGOR","SERVOGOR；或待舊型錄確認 Kipp & Zonen / LEM / Goerz 關係","存疑","SERVOGOR 102 可查到作為記錄器型號，但公開資料同時可見 Kipp、LEM、Goerz 等關聯；若品牌欄位要求製造商，需舊型錄確認。"
"69-80","IRtec Rayomatic / MicroRay / MS+","IRtec","IRtec or Eurotron / IRtec","口徑需確認","前台產品線品牌可保留 IRtec；後台 manufacturer 建議填 Eurotron。"
```

## 人工驗證結果
 "ASAHI"品牌是SATO
 SERVOGOR 102品牌是NGI
 

## 參考來源

- [S1] SI Pressure / Druck PC6-PRO operating manual: https://www.instrumart.com/assets/pc6proman.pdf
- [S2] Druck PC6-PRO Pressure Calibrator / Indicator product page: https://www.instrumart.com/products/4655/druck-pc6-pro-pressure-calibrator-indicator
- [S3] High Voltage, Inc. ALT-120 manual / ALT Series aerial lift AC test sets: https://hvinc.com/wp-content/uploads/2021/04/ALT-120-Manual-web-2k16.pdf
- [S4] High Voltage, Inc. ALT Series product page: https://hvinc.com/products/ac-dielectric-test-sets/alt-series/
- [S5] Eurotron IRtec Rayomatic 20/40/60/100 catalogue: https://www.arc.ro/userfiles/docs/AOIP/INFRARED/IRtec-RAYOMATIC-20-40-60-100_EN.pdf
- [S6] Kyoritsu MODEL 2002PA official product page: https://www.kew-ltd.co.jp/en/products/detail/00026/
- [S7] Hasegawa Electric voltage detector product page: https://www.hasegawa-elec.co.jp/archives/voltage-detector
- [S8] Hasegawa HST-20N catalogue: https://www.hasegawa-elec.co.jp/en/hasegawa_en/wp-content/uploads/2024/06/HST-20N_catalog.pdf
- [S9] Seaward Cropico catalogue: https://www.seaward.com/gb/downloads/Cropico%20Catalogue.pdf
- [S10] Cropico RBB decade resistance box page: https://www.seaward.com/us/products/resistance-testers/decade-resistance-boxes/rbb-series/
- [S11] SERVOGOR 102 compact flatbed recorder brochure: https://meter.hu/adatlap/regisztralo/pdf/kipp_brochure_servogor102_1049.pdf
- [S12] RS Online SERVOGOR 102 operating instructions: https://docs.rs-online.com/0ac8/0900766b8005249b.pdf
- [S13] SATO/ASAHI SK-1 dry & wet bulb hygrometer retail/reference page: https://www.kingtec.com.tw/product/s0204-1519-00/
- [S14] SATO SK-1 wet & dry bulb hygrometer instruction manual: https://static.sksato.co.jp/manual/en/manual_1519-00.pdf

## 後續建議

1. 先修正 #18、#19、#65。
2. 決定 `brand_display` 與 `manufacturer` 是否要分開；若不分開，IRtec、SERVOGOR、ASAHI 這類 legacy/product-line 品牌會反覆造成混亂。
3. 對 #1 ASAHI 與 #157 SERVOGOR 102，回頭找舊型錄、實機銘牌、舊報價單或進口文件。
4. 後續匯入網站時，建議不要只存一個 `brand` 欄位，至少保留 `brand_confidence` 與 `brand_note`。