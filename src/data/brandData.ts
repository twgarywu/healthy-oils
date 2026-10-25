export interface BrandProduct {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  volume: string;
  capacityNumber: string;
  priceDisplay: string;
  keyFeature: string;
  originDetail: string;
  pressingProcess: string;
  safetyProof: string;
  omegaProfile: string;
  smokePoint: string;
  bestUses: string[];
  tasteDescription: string;
  priceNote?: string;
}

export interface PopularBundle {
  id: string;
  tag: string;
  name: string;
  subtitle: string;
  items: string[];
  bestFor: string;
  highlightBenefit: string;
  priceDisplay: string;
  specialPriceNote: string;
}

export const BRAND_INFO = {
  name: '有米的日子',
  companyName: '澤禾有限公司 (Zeheart)',
  tagline: '讓好油走入尋常百姓家，陪伴家人健康的每一天',
  shortIntro: '源自澤禾。嚴選高山成熟小果與加拿大黃金亞麻籽，堅持第一道物理冷壓初榨，不炒籽、無化學溶劑，提供安心平實的好油。',
  defaultShopUrl: 'https://www.zeheart.com/categories/all',
  camelliaShopUrl: 'https://www.zeheart.com/categories/%E6%BE%A4%E7%A6%BE%E8%8B%A6%E8%8C%B6%E6%B2%B9',
  flaxseedShopUrl: 'https://www.zeheart.com/categories/%E9%BB%83%E9%87%91%E4%BA%9E%E9%BA%BB%E4%BB%81%E6%B2%B9',
  founderStory: {
    title: '一瓶為家人親手準備的安心油',
    paragraphs: [
      '走進超市，架上多是化學精煉油或昂貴進口油；回到廚房熱炒，嗆人的油煙更讓人難受。我們常想：能不能有一瓶原料乾淨、製程純粹的好油？',
      '「有米的日子」堅持選用高山成熟小果與加拿大黃金亞麻籽，不採發霉落地籽、不高溫炒籽、不加化學溶劑，只做第一道物理冷壓初榨。',
      '410 項農藥殘留、黃麴毒素與苯駢芘全數零檢出。以平實合理的價格，讓全家人天天吃得安心踏實。'
    ],
    quote: '「給家人最好的愛，往往藏在每一餐看不見的細節裡。」'
  },
  promises: [
    {
      title: '嚴選高山成熟小果',
      description: '人工親採成熟果實，拒用發霉受潮落地籽；亞麻籽特選加拿大非基改品種。',
      icon: 'sparkles'
    },
    {
      title: '低溫物理初榨',
      description: '全程物理慢榨，不經高溫炒籽、無化學溶劑，保留天然多酚活性，溫潤不燥。',
      icon: 'droplet'
    },
    {
      title: '加厚深色玻璃瓶',
      description: '深色遮光玻璃瓶封存，阻隔光敏射線，完整鎖住不飽和脂肪酸活性。',
      icon: 'shield'
    },
    {
      title: '410項檢驗零檢出',
      description: '410 項農藥殘留、黃麴毒素與苯駢芘皆未檢出，守護每一餐健康。',
      icon: 'check'
    }
  ],
  products: [
    {
      id: 'brand-camellia',
      name: '澤禾 100% 苦茶油',
      subtitle: '高山小果 · 第一道初榨不炒籽 · 溫潤不燥',
      badge: '中式熱炒煎煮首選',
      volume: '500 ml 避光加厚深色玻璃瓶',
      capacityNumber: '500ml',
      priceDisplay: 'NT$950 起',
      keyFeature: '嚴選高山成熟小果（拒用落地籽）。低溫初榨不炒籽，溫潤清爽不苦澀。',
      originDetail: '嚴選高山成熟小果（人工採收，非落地籽）',
      pressingProcess: '低溫物理第一道初榨，不炒籽、無化學溶劑',
      safetyProof: '第三方檢驗：410項農藥、黃麴毒素、苯駢芘皆未檢出',
      omegaProfile: '單元不飽和脂肪酸（Omega-9 油酸）80%~82%',
      smokePoint: '252℃（耐高溫，煎炸熱炒不起嗆煙）',
      bestUses: [
        '家常熱炒、煎蛋、煎豆腐、炒青菜',
        '老薑苦茶油拌麵線',
        '晨起空腹生飲 5-10ml 溫潤護胃'
      ],
      tasteDescription: '質地清透，帶有自然茶籽微甜清香，不焦苦、不油膩。',
      priceNote: '台灣在地生產 · 官方限定特惠'
    },
    {
      id: 'brand-flaxseed',
      name: '澤禾黃金亞麻仁油',
      subtitle: '特選加拿大黃金亞麻籽 · 100% 冷壓初榨',
      badge: '生飲涼拌 · 素食魚油首選',
      volume: '250 ml 避光加厚深色玻璃瓶',
      capacityNumber: '250ml',
      priceDisplay: 'NT$285 起',
      keyFeature: '加拿大黃金亞麻籽 100% 冷壓初榨。無防腐劑與香料，含 55% Omega-3 (ALA)。',
      originDetail: '加拿大非基因改造優質黃金亞麻籽',
      pressingProcess: '物理第一道低溫冷壓，不經烘炒，未精煉',
      safetyProof: 'SGS 重金屬、黃麴毒素皆未檢出，酸價優異',
      omegaProfile: '多元不飽和脂肪酸（Omega-3 ALA）55% ~ 60%',
      smokePoint: '107℃（低發煙點，嚴禁高溫加熱）',
      bestUses: [
        '早晨空腹直接生飲（約 10ml）',
        '拌入豆漿、優格或燕麥粥',
        '生菜沙拉冷拌，或料理起鍋後淋入'
      ],
      tasteDescription: '金黃透亮，散發柔和新鮮生堅果與草本微甘香氣，滑順不卡喉。',
      priceNote: '100% 植物性素食魚油 · 官方優惠熱銷中'
    }
  ],
  bundles: [
    {
      id: 'bundle-duo',
      tag: '尋常餐桌冠軍推薦',
      name: '【餐桌雙油守護組】冷熱分工經典搭配',
      subtitle: '澤禾苦茶油 500ml ＋ 澤禾黃金亞麻仁油 250ml',
      items: [
        '澤禾 100% 苦茶油 (500ml) × 1 瓶（熱炒煎煮）',
        '澤禾黃金亞麻仁油 (250ml) × 1 瓶（生飲冷拌）'
      ],
      bestFor: '新手家庭、重視三餐全方位油脂健康的廚房必備組合',
      highlightBenefit: '早晨一匙黃金亞麻仁油補足 Omega-3 抗發炎；晚餐熱炒用 500ml 苦茶油 252℃ 護胃不起油煙。',
      priceDisplay: '官網人氣熱銷組合',
      specialPriceNote: '冷熱雙油兼備 · 享官方組合特惠'
    },
    {
      id: 'bundle-camellia-double',
      tag: '長輩養生 / 媽媽最愛',
      name: '【高山小果苦茶油】大容量 500ml 雙瓶超值組',
      subtitle: '澤禾 100% 苦茶油 500ml × 2 瓶',
      items: [
        '澤禾 100% 苦茶油 (500ml) × 2 瓶（大容量玻璃瓶裝）'
      ],
      bestFor: '天天在家熱炒做飯的家庭、腸胃敏感長輩、產後月子溫補',
      highlightBenefit: '人工摘採高山小果、不炒籽不燥熱，410項農藥與黃麴毒素零檢出，抽油煙機乾淨不黏垢。',
      priceDisplay: 'NT$1,790 起',
      specialPriceNote: '定期料理家庭囤貨首選'
    },
    {
      id: 'bundle-flax-multi',
      tag: '外食族活力必備',
      name: '【黃金亞麻仁油】植物 Omega-3 多瓶保鮮組',
      subtitle: '澤禾黃金亞麻仁油 250ml 多入分享裝',
      items: [
        '澤禾黃金亞麻仁油 250ml 多入裝（冷壓初榨）'
      ],
      bestFor: '外食上班族、生酮低碳族、純素無法吃魚油者的日常補充',
      highlightBenefit: '55% ALA 迅速調節外食 Omega-6 炸油失衡，滑順不苦澀，早起拌豆漿優格最方便。',
      priceDisplay: 'NT$1,049 起',
      specialPriceNote: '買多更划算 · 官網現省優惠'
    }
  ],
  comparison: [
    {
      aspect: '茶籽原料選用',
      marketStandard: '商業大宗多採機械混合採收，成熟度與顆粒均勻度存在天然落差',
      zeheartStandard: '嚴選高山成熟小果（細葉山茶），人工親採熟果，細心剔除不良種籽',
      why: '人工嚴選成熟種籽能大幅維持新鮮低酸價，確保第一道初榨香氣溫潤甘醇'
    },
    {
      aspect: '壓榨烘焙工藝',
      marketStandard: '傳統深烘重炒工法，出油率高且香氣濃郁，性質較濃烈',
      zeheartStandard: '全程物理低溫慢榨、不炒籽不焦化、無化學溶劑，性質溫潤不燥',
      why: '完整保留茶籽天然多酚、角鯊烯與維生素E，入口清雅順喉，適合天天料理'
    },
    {
      aspect: '亞麻仁籽品種與風味',
      marketStandard: '常見一般棕色亞麻仁籽，草本與堅果苦澀味較厚重，適口性較具挑戰',
      zeheartStandard: '嚴選頂級黃金亞麻仁籽（Golden Flaxseed），金黃透亮、口感甘甜無草腥味',
      why: '黃金亞麻籽皮薄且單寧較低，適口性極佳，長輩與小朋友皆能輕鬆生飲佐餐'
    },
    {
      aspect: '第三方食安檢驗',
      marketStandard: '符合法規基礎檢驗標準，提供原廠出廠規格',
      zeheartStandard: '定期自主送檢 SGS 410項農藥殘留、黃麴毒素與重金屬全數零檢出',
      why: '為全家人安心嚴格把關，透明公開檢驗數據，食用更踏實'
    },
    {
      aspect: '烹調耐熱與發煙點',
      marketStandard: '大宗精煉植物油發煙點約 180~200℃，大火快炒需適度控溫避免油煙',
      zeheartStandard: '澤禾苦茶油發煙點高達 252℃，高溫熱穩定性極佳，大火爆炒油煙極少',
      why: '保護料理掌廚者的呼吸道健康，同時維持廚房乾淨不黏膩'
    }
  ],
  testimonials: [
    {
      name: '林小姐 (台北 · 全職媽媽)',
      role: '全家每天在家開伙',
      feedback: '以前在有機店買過其他牌子亞麻仁油，有一股很重的魚腥腐味，先生小孩根本不敢吞。換了澤禾黃金亞麻仁油，味道真的好溫和清爽，拌在地瓜泥跟優格裡小孩超愛吃！',
      highlight: '「完全沒有奇怪魚腥味，口感清爽回甘！」'
    },
    {
      name: '張先生 (新竹 · 竹科工程師)',
      role: '三餐外食上班族',
      feedback: '平常外食吃很油，下午精神常斷電、身體很重。照著建議每天早上一匙澤禾亞麻仁油，兩三週下來真的覺得身體好輕盈，下午工作專注力明顯變好。',
      highlight: '「外食族早上一匙，找回輕盈好精神。」'
    },
    {
      name: '陳媽媽 (台中 · 退休長輩)',
      role: '腸胃敏感注重養生',
      feedback: '我胃很敏感，稍微吃油一點就脹氣泛酸。女兒買了澤禾苦茶油給我，炒菜煎魚真的完全不冒嗆煙，廚房抽油煙機乾淨好多，吃完胃也很溫暖舒服！',
      highlight: '「252℃ 耐高溫不起嗆煙，胃好舒服。」'
    }
  ]
};
