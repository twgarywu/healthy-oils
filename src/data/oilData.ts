export interface OilProfile {
  id: string;
  name: string;
  englishName: string;
  smokePointC: number;
  smokePointF: number;
  sfaPercent: number; // 飽和脂肪酸
  mufaPercent: number; // 單元不飽和脂肪酸 (Omega-9)
  pufaPercent: number; // 多元不飽和脂肪酸 (Omega-3 & 6)
  omega3Percent: number;
  omega6Percent: number;
  thermalStability: '極低 (嚴禁加熱)' | '中等 (低溫水炒)' | '良好 (一般煎炒)' | '極高 (高溫大火油炸)';
  suitableCooking: ('raw' | 'water_fry' | 'medium_saute' | 'high_fry')[];
  cookingDescriptions: string[];
  tasteProfile: string;
  healthHighlights: string[];
  caution: string;
  storageRequirement: string;
  isSpotlight: boolean; // 雙星主角標記
}

export const OILS_DATABASE: OilProfile[] = [
  {
    id: 'flaxseed-oil',
    name: '冷壓亞麻仁油',
    englishName: 'Cold-Pressed Flaxseed Oil',
    smokePointC: 107,
    smokePointF: 225,
    sfaPercent: 9,
    mufaPercent: 18,
    pufaPercent: 73,
    omega3Percent: 55,
    omega6Percent: 18,
    thermalStability: '極低 (嚴禁加熱)',
    suitableCooking: ['raw'],
    cookingDescriptions: ['生飲養生 (晨間空腹 10ml)', '涼拌沙拉與油醋汁', '拌入溫熱米飯或燕麥粥 (起鍋後)', '調配精力湯與蔬果昔'],
    tasteProfile: '清香淡雅，帶有天然生堅果仁香與微甘草香，劣質品會有刺鼻魚腥味',
    healthHighlights: [
      '植物性 Omega-3 (ALA) 之王，含量高達 50%~60%',
      '純素食者補充抗發炎脂肪酸的最佳首選',
      '促進細胞膜柔韌度，降低心血管栓塞危險因子',
      '富含木酚素 (Lignans)，具抗氧化與植物雌激素活性'
    ],
    caution: '發煙點僅 107℃，受熱極易迅速聚合併生成有毒聚合物與反式脂肪；嚴禁任何熱炒與油炸。',
    storageRequirement: '冷壓初榨、充氮裝填、深色避光玻璃瓶、開瓶後必須冷藏並於 4-6 週內食用完畢。',
    isSpotlight: true
  },
  {
    id: 'camellia-oil',
    name: '冷壓苦茶油 (茶花籽油)',
    englishName: 'Extra Virgin Camellia Seed Oil',
    smokePointC: 252,
    smokePointF: 485,
    sfaPercent: 9,
    mufaPercent: 82,
    pufaPercent: 9,
    omega3Percent: 1,
    omega6Percent: 8,
    thermalStability: '極高 (高溫大火油炸)',
    suitableCooking: ['raw', 'water_fry', 'medium_saute', 'high_fry'],
    cookingDescriptions: ['晨間生飲保護胃黏膜 (5-10ml)', '傳統苦茶油拌麵線與雞湯', '中式大火爆香煸薑片', '高溫煎魚、炸物與烘焙料理'],
    tasteProfile: '清爽不膩，帶有天然清幽的高山茶籽果香與溫潤回甘',
    healthHighlights: [
      '單元不飽和脂肪酸 (油酸 Omega-9) 高達 82%，媲美甚至超越特級橄欖油',
      '發煙點高達 252℃，極端高溫下幾無油煙，油脂不易裂解變質',
      '富含茶多酚 (Tea Polyphenols)、角鯊烯 (Squalene) 與山茶皂苷',
      '臨床證實能增強胃黏膜防禦能力，改善胃酸過多與消化道不適',
      '適合亞洲人高溫烹調習慣的全方位健康神油'
    ],
    caution: '市售常有以大豆油調和之劣質低價苦茶油，選購需確認 100% 物理冷壓純度與酸價檢驗。',
    storageRequirement: '置於常溫陰涼避光處，遠離廚房瓦斯爐熱源，開瓶後鎖緊瓶蓋並於 3 個月內用畢。',
    isSpotlight: true
  },
  {
    id: 'evoo',
    name: '特級初榨橄欖油',
    englishName: 'Extra Virgin Olive Oil (EVOO)',
    smokePointC: 195,
    smokePointF: 383,
    sfaPercent: 14,
    mufaPercent: 73,
    pufaPercent: 13,
    omega3Percent: 1,
    omega6Percent: 12,
    thermalStability: '良好 (一般煎炒)',
    suitableCooking: ['raw', 'water_fry', 'medium_saute'],
    cookingDescriptions: ['生飲或搭配巴薩米克醋沾麵包', '低溫慢煎海鮮與義大利麵', '低溫水炒青菜'],
    tasteProfile: '清新鮮草香、微苦與喉間辛辣胡椒感 (橄欖多酚特徵)',
    healthHighlights: [
      '富含橄欖苦苷 (Oleuropein) 與羥基酪醇 (Hydroxytyrosol)',
      '地中海飲食基石，降低心肌梗塞與中風罹患風險',
      '抗 LDL 低密度膽固醇氧化'
    ],
    caution: '不可超過發煙點過度熱炒，過熱會破壞珍貴多酚類活性物質。',
    storageRequirement: '深色避光玻璃瓶，常溫 15-20℃ 保存，不可置於窗邊日曬。',
    isSpotlight: false
  },
  {
    id: 'avocado-oil',
    name: '特級初榨酪梨油',
    englishName: 'Extra Virgin Avocado Oil',
    smokePointC: 271,
    smokePointF: 520,
    sfaPercent: 12,
    mufaPercent: 70,
    pufaPercent: 18,
    omega3Percent: 1,
    omega6Percent: 17,
    thermalStability: '極高 (高溫大火油炸)',
    suitableCooking: ['raw', 'water_fry', 'medium_saute', 'high_fry'],
    cookingDescriptions: ['高溫煎牛排上色', '大火熱炒與烘烤蔬菜', '自製健康美乃滋'],
    tasteProfile: '溫潤滑順，帶有濃郁奶油與成熟酪梨香氣',
    healthHighlights: [
      '所有食用植物油中發煙點最高之一 (達 271℃)',
      '富含葉黃素 (Lutein)，有助眼睛黃斑部抗藍光保護',
      '極佳的高溫化學穩定性與單元不飽和脂肪酸'
    ],
    caution: '未精煉初榨酪梨油顏色深綠，若經化學精煉則營養流失。',
    storageRequirement: '避光常溫保存。',
    isSpotlight: false
  },
  {
    id: 'perilla-oil',
    name: '冷壓紫蘇籽油',
    englishName: 'Cold-Pressed Perilla Seed Oil',
    smokePointC: 105,
    smokePointF: 221,
    sfaPercent: 8,
    mufaPercent: 14,
    pufaPercent: 78,
    omega3Percent: 62,
    omega6Percent: 16,
    thermalStability: '極低 (嚴禁加熱)',
    suitableCooking: ['raw'],
    cookingDescriptions: ['晨間空腹生飲', '韓式涼拌小菜與沙拉', '淋在燉湯起鍋時提香'],
    tasteProfile: '濃郁紫蘇與烤堅果芳香，香氣優雅獨特',
    healthHighlights: [
      '植物界 Omega-3 (ALA) 最高含量，高達 60%~65%',
      '舒緩氣管過敏與抑制肥大細胞組織胺釋放',
      '保護腦神經髓鞘流動性'
    ],
    caution: '極度不耐熱，遇高溫產生致癌游離基，開瓶後氧化極快。',
    storageRequirement: '小容量包裝、避光深色瓶、嚴格放冰箱冷藏並於 30 天內吃完。',
    isSpotlight: false
  },
  {
    id: 'walnut-oil',
    name: '冷壓核桃油',
    englishName: 'Cold-Pressed Walnut Oil',
    smokePointC: 160,
    smokePointF: 320,
    sfaPercent: 9,
    mufaPercent: 20,
    pufaPercent: 71,
    omega3Percent: 12,
    omega6Percent: 59,
    thermalStability: '中等 (低溫水炒)',
    suitableCooking: ['raw', 'water_fry'],
    cookingDescriptions: ['涼拌法式沙拉', '西點烘焙出爐後點綴', '嬰幼兒副食品油脂補充'],
    tasteProfile: '優雅豐厚的濃郁烤核桃香氣',
    healthHighlights: [
      '含豐富卵磷脂與微量元素鋅、硒',
      '提供適度天然 Omega-3 (ALA 10%~14%)',
      '促進兒童神經系統與認知發育'
    ],
    caution: '不適合中高溫爆香與油炸。',
    storageRequirement: '密封冷藏保存。',
    isSpotlight: false
  },
  {
    id: 'sesame-oil',
    name: '傳統壓榨黑/白芝麻油',
    englishName: 'Pressed Sesame Oil',
    smokePointC: 177,
    smokePointF: 350,
    sfaPercent: 15,
    mufaPercent: 41,
    pufaPercent: 44,
    omega3Percent: 1,
    omega6Percent: 43,
    thermalStability: '中等 (低溫水炒)',
    suitableCooking: ['raw', 'water_fry', 'medium_saute'],
    cookingDescriptions: ['麻油雞起鍋前溫熱慢煸', '涼拌豆腐與小黃瓜', '韓式拌飯與沾醬'],
    tasteProfile: '濃烈焙炒芝麻焦香氣息',
    healthHighlights: [
      '富含芝麻素 (Sesamin) 與芝麻酚 (Sesamol) 強效抗氧化物',
      '天然抗氧化多酚使油脂本身保存期較長'
    ],
    caution: '麻油容易過度高溫焦化發苦，傳統爆香老薑宜用小火或苦茶油替代以防致癌物。',
    storageRequirement: '常溫陰涼處密閉。',
    isSpotlight: false
  },
  {
    id: 'canola-oil',
    name: '低芥酸菜籽油 (芥花油)',
    englishName: 'Canola Oil',
    smokePointC: 220,
    smokePointF: 428,
    sfaPercent: 7,
    mufaPercent: 63,
    pufaPercent: 30,
    omega3Percent: 9,
    omega6Percent: 21,
    thermalStability: '良好 (一般煎炒)',
    suitableCooking: ['water_fry', 'medium_saute', 'high_fry'],
    cookingDescriptions: ['日常家庭家常炒菜', '麵包與蛋糕烘焙烹調', '淺層油煎炸'],
    tasteProfile: '清淡無特殊氣味',
    healthHighlights: [
      '飽和脂肪酸比例極低 (僅 7%)',
      '兼具適量 Omega-3 與較高 Omega-9'
    ],
    caution: '市售廉價品牌多採用化學正己烷高溫溶劑萃取與脫臭，建議選「物理初榨壓榨款」。',
    storageRequirement: '常溫陰涼處避光。',
    isSpotlight: false
  },
  {
    id: 'peanut-oil',
    name: '傳統花生油',
    englishName: 'Peanut Oil',
    smokePointC: 225,
    smokePointF: 437,
    sfaPercent: 18,
    mufaPercent: 48,
    pufaPercent: 34,
    omega3Percent: 0,
    omega6Percent: 34,
    thermalStability: '良好 (一般煎炒)',
    suitableCooking: ['medium_saute', 'high_fry'],
    cookingDescriptions: ['中式高溫熱炒', '高溫香脆油炸料理', '蔥油餅與煎餃爆香'],
    tasteProfile: '濃烈香醇的花生堅果滋味',
    healthHighlights: [
      '單元不飽和脂肪酸接近半數，熱耐受性佳',
      '耐煎炒不易起泡沫與發黑'
    ],
    caution: '必須選購通過黃麴毒素 (Aflatoxin) 嚴格檢測之合格油廠產品。',
    storageRequirement: '避光常溫保存。',
    isSpotlight: false
  },
  {
    id: 'coconut-oil',
    name: '特級初榨椰子油',
    englishName: 'Virgin Coconut Oil',
    smokePointC: 177,
    smokePointF: 350,
    sfaPercent: 90,
    mufaPercent: 7,
    pufaPercent: 3,
    omega3Percent: 0,
    omega6Percent: 3,
    thermalStability: '良好 (一般煎炒)',
    suitableCooking: ['raw', 'water_fry', 'medium_saute'],
    cookingDescriptions: ['防彈咖啡攪打', '南洋風味咖哩燉煮', '生酮烘焙糕點取代奶油'],
    tasteProfile: '濃郁天然椰香與奶甜香',
    healthHighlights: [
      '含 60% 中鏈三酸甘油酯 (MCT)，主要為月桂酸 (Lauric Acid)',
      '經門靜脈直接運送至肝臟快速產能代謝，不易堆積為體脂肪',
      '天生極高飽和度，不易被自由基氧化'
    ],
    caution: '雖然高飽和但未精煉款發煙點僅 177℃，且大量攝取仍會提高部分族群之 ApoB 與 LDL 指標。',
    storageRequirement: '低於 24℃ 會凝固為乳白固態屬正常物理現象。',
    isSpotlight: false
  },
  {
    id: 'soybean-oil',
    name: '精煉大豆沙拉油',
    englishName: 'Refined Soybean Oil',
    smokePointC: 232,
    smokePointF: 450,
    sfaPercent: 15,
    mufaPercent: 23,
    pufaPercent: 62,
    omega3Percent: 7,
    omega6Percent: 55,
    thermalStability: '中等 (低溫水炒)',
    suitableCooking: ['water_fry', 'medium_saute'],
    cookingDescriptions: ['餐飲外食通用基底油', '一般低溫炒菜'],
    tasteProfile: '中性無味',
    healthHighlights: ['取得成本低，富含維生素 E'],
    caution: 'Omega-6 佔比超過 50%，長期過量是導致現代人慢性發炎與心血管負擔的隱形元凶；且多為化學溶劑浸出精煉。',
    storageRequirement: '密封陰涼處。',
    isSpotlight: false
  },
  {
    id: 'sunflower-oil',
    name: '傳統葵花籽油',
    englishName: 'Standard Sunflower Oil',
    smokePointC: 227,
    smokePointF: 440,
    sfaPercent: 11,
    mufaPercent: 20,
    pufaPercent: 69,
    omega3Percent: 1,
    omega6Percent: 68,
    thermalStability: '中等 (低溫水炒)',
    suitableCooking: ['water_fry', 'medium_saute'],
    cookingDescriptions: ['西點烘焙', '中溫家庭煎炒'],
    tasteProfile: '清淡無特殊氣味',
    healthHighlights: ['天然維生素 E (α-生育酚) 含量豐富'],
    caution: '傳統葵花油 Omega-6 比例極高 (近 70%)，反覆加熱極易裂解出氧化膽固醇與過氧化脂質。',
    storageRequirement: '陰涼處避光。',
    isSpotlight: false
  },
  {
    id: 'ghee',
    name: '草飼無水奶油 (Ghee)',
    englishName: 'Grass-Fed Clarified Butter (Ghee)',
    smokePointC: 250,
    smokePointF: 482,
    sfaPercent: 65,
    mufaPercent: 30,
    pufaPercent: 5,
    omega3Percent: 1,
    omega6Percent: 4,
    thermalStability: '極高 (高溫大火油炸)',
    suitableCooking: ['medium_saute', 'high_fry'],
    cookingDescriptions: ['高溫煎牛排與香煎羊排', '印度香料料理', '烘烤焦化香氣'],
    tasteProfile: '濃郁太妃糖與堅果焦化奶香',
    healthHighlights: [
      '去除酪蛋白與乳糖，乳糖不耐者可安心享用',
      '富含共軛亞麻油酸 (CLA) 與短鏈丁酸 (Butyrate)，守護腸道屏障',
      '高溫極端穩定不易變質'
    ],
    caution: '飽和脂肪比例較高，心血管高血脂患者宜總量控管。',
    storageRequirement: '常溫避光避濕，避免乾淨湯匙受潮。',
    isSpotlight: false
  },
  {
    id: 'lard',
    name: '純黑豬豬油 (傳統古法自榨)',
    englishName: 'Traditional Lard',
    smokePointC: 190,
    smokePointF: 374,
    sfaPercent: 40,
    mufaPercent: 48,
    pufaPercent: 12,
    omega3Percent: 1,
    omega6Percent: 11,
    thermalStability: '良好 (一般煎炒)',
    suitableCooking: ['medium_saute', 'high_fry'],
    cookingDescriptions: ['傳統中式酥皮點心', '豬油拌飯', '爆炒青江菜'],
    tasteProfile: '濃醇肉香與傳統懷舊鑊氣',
    healthHighlights: [
      '單元不飽和脂肪 (油酸) 佔比近 50%，高於一般刻板印象',
      '耐煎炒，不含氫化植物油之人工反式脂肪酸'
    ],
    caution: '含膽固醇與較高飽和脂肪，現代運動量不足之族群不宜餐餐攝取。',
    storageRequirement: '密封冷藏保存。',
    isSpotlight: false
  }
];

export interface CookingTechnique {
  id: 'raw' | 'water_fry' | 'medium_saute' | 'high_fry';
  label: string;
  nameZh: string;
  tempRange: string;
  maxSafeTempC: number;
  description: string;
  exampleDishes: string;
  recommendedOilIds: string[];
}

export const COOKING_TECHNIQUES: CookingTechnique[] = [
  {
    id: 'raw',
    label: '生飲 / 涼拌 / 起鍋後淋醬',
    nameZh: '冷拌生飲',
    tempRange: '常溫 ~ 45℃',
    maxSafeTempC: 45,
    description: '完全不加熱，完整保留 100% 熱敏性活性多酚、木酚素、角鯊烯與脆弱的 Omega-3 脂肪酸。',
    exampleDishes: '晨間空腹生飲養生、油醋生菜沙拉、精力湯果昔、煮好之飯麵起鍋淋油',
    recommendedOilIds: ['flaxseed-oil', 'camellia-oil', 'evoo', 'perilla-oil', 'walnut-oil']
  },
  {
    id: 'water_fry',
    label: '低溫水炒 / 溫火燉煮',
    nameZh: '水炒燉煮',
    tempRange: '100℃ ~ 130℃',
    maxSafeTempC: 130,
    description: '先於鍋中加入少許水或高湯，再倒入油加熱（水沸點 100℃ 形成天然控溫屏障），大幅降低油煙產生。',
    exampleDishes: '水炒時令青菜、溫火燉湯、洋蔥低溫慢炒至透明、清蒸魚淋油',
    recommendedOilIds: ['camellia-oil', 'evoo', 'avocado-oil', 'canola-oil', 'sesame-oil']
  },
  {
    id: 'medium_saute',
    label: '中溫快炒 / 香煎',
    nameZh: '熱炒香煎',
    tempRange: '140℃ ~ 180℃',
    maxSafeTempC: 180,
    description: '一般家庭常見熱鍋烹調，鍋內溫度多落在 160-180℃。油品發煙點至少需高於 190℃ 方能確保安全無致癌油煙。',
    exampleDishes: '家常肉絲炒菜、香煎豆腐、荷包蛋、蒜蓉炒蝦',
    recommendedOilIds: ['camellia-oil', 'avocado-oil', 'canola-oil', 'peanut-oil', 'ghee']
  },
  {
    id: 'high_fry',
    label: '高溫大火爆炒 / 油炸烘烤',
    nameZh: '大火高溫煎炸',
    tempRange: '190℃ ~ 230℃+',
    maxSafeTempC: 240,
    description: '大火煸香、酥脆深層油炸或高溫烤箱烘烤。發煙點必須達到 220℃~250℃ 以上，且脂肪酸必須具備高抗氧化單元不飽和特性。',
    exampleDishes: '高溫香煎厚切牛排、中式大火煸老薑、炸雞塊炸天婦羅、烘烤高溫肉排',
    recommendedOilIds: ['camellia-oil', 'avocado-oil', 'ghee', 'peanut-oil']
  }
];
