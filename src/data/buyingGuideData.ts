export interface BuyingTip {
  step: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  corePrinciple: string;
  goodPractice: string;
  badPractice: string;
  scientificReason: string;
  expertChecklist: string[];
}

export const BUYING_TIPS: BuyingTip[] = [
  {
    step: '工法篇',
    stepNumber: '01',
    title: '壓榨工藝：認明「低溫物理冷壓初榨」',
    subtitle: 'Cold-Pressed Extra Virgin vs Chemical Solvent Extraction',
    corePrinciple: '物理慢磨壓榨不加化學溶劑，保留原果天然維生素 E、角鯊烯與抗氧化多酚活性。',
    goodPractice: '選購標示「第一道冷壓 (First Cold Pressed)」、「壓榨溫度低於 45℃~60℃」的初榨油品。',
    badPractice: '購買標示不清或採「正己烷 (Hexane) 化學溶劑浸出」、「高溫脫膠、脫酸、脫色、脫臭」的化學精煉油。',
    scientificReason: '化學溶劑浸出與高溫脫臭（>240℃）雖能提高出油率並延長保存期，但會破壞 90% 以上天然微量多酚，甚至在高溫處理下衍生微量反式脂肪酸與縮水甘油酯。',
    expertChecklist: [
      '外包裝明確標示「物理壓榨」或「冷壓初榨」字樣',
      '成分表僅有單一純原料（如 100% 亞麻仁籽、100% 油茶籽），無其他調和油種',
      '初榨油保留天然植物天然微沉澱與原始草木/堅果香'
    ]
  },
  {
    step: '容器篇',
    stepNumber: '02',
    title: '包裝材質：堅持「深色避光厚玻璃瓶」',
    subtitle: 'Dark Amber/Emerald Glass vs Transparent Plastic Bottling',
    corePrinciple: '光線（特別是紫外線與日光燈藍光）是油脂光敏光氧化 (Photo-oxidation) 的頭號推手。',
    goodPractice: '選用深琥珀色 (Dark Amber)、深墨綠色或全遮光金屬罐裝，且瓶口附帶阻絕空氣流速的導油嘴。',
    badPractice: '透明 PET 塑膠瓶裝（賣場強光直接穿透照射，塑膠分子亦有被油脂溶出塑化劑之疑慮）。',
    scientificReason: '油脂中的葉綠素在光照下會轉化為光敏增感劑，激發基態氧生成活性極高的單線態氧 (^1O2)，其引發脂質過氧化鏈反應的速度比一般常溫自氧化快 1,500 倍！',
    expertChecklist: [
      '瓶身為深色遮光玻璃瓶，透光率低於 10%',
      '非透明塑膠瓶，避免塑化劑鄰苯二甲酸酯 (DEHP) 溶出',
      '瓶蓋密封良好，開瓶時有充氮 (Nitrogen Flushed) 保鮮提示者尤佳'
    ]
  },
  {
    step: '檢驗篇',
    stepNumber: '03',
    title: '酸價指標與檢驗標章：看懂 SGS 關鍵檢驗',
    subtitle: 'Acid Value (AV) & Full-Spectrum Food Safety Reports',
    corePrinciple: '「酸價 (Acid Value)」是衡量油品新鮮度與游離脂肪酸多寡的國際公認黃金標準。',
    goodPractice: '初榨油酸價愈低愈好（國際初榨橄欖油標準 < 0.8 mg KOH/g，頂級冷壓苦茶油與亞麻仁油應 < 0.6 甚至 < 0.3）。',
    badPractice: '無第三方檢驗報告、酸價偏高（游離脂肪酸已開始裂解酸敗）或來自地下地下分裝無溯源工廠。',
    scientificReason: '新鮮原果壓榨之油脂游離脂肪酸極低；若原料採收後堆疊發霉或受潮，脂肪水解酶會迅速將三酸甘油酯分解為游離脂肪酸，大幅提高酸價並產生油耗劣變。',
    expertChecklist: [
      '酸價檢驗報告值 < 0.6 mg KOH/g（證明原料極度新鮮）',
      '通過 SGS 黃麴毒素 (Aflatoxin B1/B2/G1/G2) 未檢出檢驗（茶籽與堅果極為關鍵）',
      '通過四大重金屬（鉛、砷、鎘、汞）零殘留檢測',
      '通過 380+ 項農藥殘留零檢出與多環芳香烴 (Benzo[a]pyrene) 檢測'
    ]
  },
  {
    step: '保存篇',
    stepNumber: '04',
    title: '廚房保存四大天敵：避光、遠熱、密封、冷藏',
    subtitle: 'Storage Protocol: Light, Heat, Oxygen & Shelf-Life Management',
    corePrinciple: '買了好油若放錯位置，一週內即可氧化變質；廚房「瓦斯爐旁」是油品最快陣亡的禁區。',
    goodPractice: '亞麻仁油與紫蘇油開瓶後「立即放入冷藏冰箱」，4-6 週內食用完畢；苦茶油放在遠離火源之陰涼櫥櫃。',
    badPractice: '放在瓦斯爐正上方調味架、流理台窗台邊日曬、大瓶裝（>1000ml）使用超過半年未用畢。',
    scientificReason: '反應動力學中「阿瑞尼斯方程式」指出，溫度每升高 10℃，油脂氧化反應速率便加快 2 至 3 倍；瓦斯爐旁的高溫環境會急遽縮短油脂抗氧化壽命。',
    expertChecklist: [
      '亞麻仁油：嚴格 4℃~8℃ 冰箱冷藏保存，每次倒完立即旋緊蓋子',
      '苦茶油：陰涼乾燥處常溫保存即可（因富含穩定油酸，冷藏可能會產生雲霧狀結晶，回溫即化）',
      '採買時選擇 250ml~500ml 小容量，確保在黃金賞味期內吃完'
    ]
  },
  {
    step: '感官篇',
    stepNumber: '05',
    title: '感官品評心法：色澤清亮、清香微甘不刺喉',
    subtitle: 'Sensory Evaluation: Aroma, Clarity & Throat Feel',
    corePrinciple: '好油入口應該「滑順不黏膩，舌根清爽回甘」，絕不應有油耗黏稠感。',
    goodPractice: '亞麻仁油具清香生堅果與微甜草本味；苦茶油具清雅茶花籽香氣，生飲滴於手背迅速被皮膚吸收。',
    badPractice: '聞起來有油耗味、油炸陳年老味、刺鼻魚腥油氣，或入口舌根有強烈刮喉鎖喉感。',
    scientificReason: '氧化分解產生的過氧化氫物會裂解為揮發性低級醛類與酮類化合物（如己醛），刺激鼻腔與咽喉黏膜產生刺痛與令人反感的油耗耗味。',
    expertChecklist: [
      '手背試油法：滴一滴於手背輕輕抹勻，純淨好油約 1-2 分鐘內完全吸收不黏手',
      '聞香法：倒少許於杯中手心溫熱，深嗅應為天然植物種籽清香，絕無油耗腐味',
      '入口試飲：含於口中舌面感受質地，優質油品滑順輕盈，吞嚥後喉頭溫潤生津'
    ]
  }
];
