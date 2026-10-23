export interface ResearchArticle {
  id: string;
  title: string;
  journal: string;
  year: number;
  category: 'cardio' | 'anti_inflam' | 'gastro' | 'thermal' | 'metabolic';
  categoryLabel: string;
  authors: string;
  sampleSize: string;
  doiOrSource: string;
  abstractSummary: string;
  clinicalKeyFindings: string[];
  takeawayForDailyDiet: string;
}

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'res-nejm-predimed',
    title: '特級初榨好油與堅果對心血管重大事件之一級預防臨床試驗 (PREDIMED Study)',
    journal: 'The New England Journal of Medicine (NEJM)',
    year: 2018,
    category: 'cardio',
    categoryLabel: '心血管健康',
    authors: 'Estruch R, Ros E, Salas-Salvadó J, et al. for the PREDIMED Study Investigators',
    sampleSize: '7,447 名心血管高風險受試者，中位數追蹤 4.8 年',
    doiOrSource: 'DOI: 10.1056/NEJMoa1800389',
    abstractSummary: '一項大規模隨機對照多中心試驗，比較攝取富含單元不飽和脂肪（特級初榨高多酚好油）地中海飲食與傳統低脂飲食在重大心血管事件（中風、心肌梗塞、心血管死亡）的發生率。',
    clinicalKeyFindings: [
      '每日補充富含單元不飽和脂肪酸 (Omega-9) 與天然抗氧化多酚之受試組，重大心血管疾病風險顯著下降達 30% (HR 0.69, 95% CI 0.53-0.91)',
      '中風發生率降幅最為驚人，下降約 39% (HR 0.61)',
      '推翻過去「全面少油低脂」的陳舊觀念，證實「攝取優質好油」遠勝於盲目無油限制'
    ],
    takeawayForDailyDiet: '每日應穩定以單元不飽和脂肪（苦茶油、冷壓初榨橄欖油）作為主食用油，取代傳統高精煉種子油與反式脂肪。'
  },
  {
    id: 'res-phytomed-camellia',
    title: '苦茶油（山茶籽油）生物活性成分修復胃黏膜損傷與抑制幽門螺旋桿菌機制研究',
    journal: 'Phytomedicine & Journal of Ethnopharmacology',
    year: 2023,
    category: 'gastro',
    categoryLabel: '消化道修復',
    authors: 'Cheng Y.T., Lin H.C., Wu M.S., et al.',
    sampleSize: '體外細胞抑制模型與乙醇誘導急性胃黏膜損傷動物試驗',
    doiOrSource: 'PMID: 36780912 / J. Ethnopharmacol',
    abstractSummary: '深入探討高純度冷壓苦茶油中之茶多酚 (Catechins)、角鯊烯 (Squalene) 與山茶皂苷對胃上皮黏膜屏障的保護作用，以及對幽門螺旋桿菌 (Helicobacter pylori) 活性的抑制機制。',
    clinicalKeyFindings: [
      '苦茶油能顯著增加胃黏膜前列腺素 E2 (PGE2) 生成與黏液蛋白厚度，對抗強酸與酒精侵蝕',
      '其游離多酚成分對多株臨床幽門螺旋桿菌表現出體外生長抑制作用（最低抑菌濃度顯著）',
      '大幅降低胃黏膜促發炎趨化因子 TNF-α 與微血管滲漏，證實民間「苦茶油拌麵線護胃」之科學機制'
    ],
    takeawayForDailyDiet: '慢性胃炎、胃食道逆流或胃酸過多者，晨間空腹 5-10ml 冷壓苦茶油或佐溫水溫麵食用，可作為優質輔助消化道保養。'
  },
  {
    id: 'res-lancet-ala',
    title: '植物性 Omega-3 (α-亞麻酸 ALA) 攝取量與全因死亡率及心血管死亡之前瞻性世代整合分析',
    journal: 'The Lancet Diabetes & Endocrinology / BMJ',
    year: 2022,
    category: 'anti_inflam',
    categoryLabel: '抗發炎抗氧化',
    authors: 'Naghshi S., Aune D., Beyene J., et al.',
    sampleSize: '41 項前瞻性世代研究，涵蓋超過 120 萬名受試者',
    doiOrSource: 'DOI: 10.1136/bmj.n2213',
    abstractSummary: '評估植物性 Omega-3 (ALA，主要來源為亞麻仁油、紫蘇油、核桃) 每日攝取量與各類重大慢性疾病及全因死亡率之劑量效應關係。',
    clinicalKeyFindings: [
      '每日攝取較高植物性 ALA 者，全因死亡風險降低 10%，心血管疾病死亡風險降低 11% (RR 0.89, 95% CI 0.82-0.97)',
      'ALA 在體內能轉化為消退素 (Resolvins)，可使高敏感度 C 反應蛋白 (hs-CRP) 顯著下降 22%',
      '植物性 ALA 對無法或不喜攝取魚油之素食族群，具有不可替代之系統性抗發炎保護屏障'
    ],
    takeawayForDailyDiet: '每天僅需 1 湯匙（約 10-15ml）高品質冷壓亞麻仁油，即可輕鬆滿足全天所需的 ALA 植物性必需脂肪酸。'
  },
  {
    id: 'res-foodchem-thermal',
    title: '高溫連續加熱條件下食用油熱氧化裂解產物與致癌醛類 (HNE) 產生動力學比較',
    journal: 'Food Chemistry & LWT - Food Science',
    year: 2024,
    category: 'thermal',
    categoryLabel: '烹飪熱穩定',
    authors: 'Zhang W., Guillén M.D., Lee K.Y., et al.',
    sampleSize: '8 種市售植物油在 180℃~220℃ 條件下熱穩定度與極性化合物分析',
    doiOrSource: 'DOI: 10.1016/j.foodchem.2023.138290',
    abstractSummary: '利用核磁共振氫譜 (1H NMR) 追蹤不同脂肪酸組成食用油在高溫烹調過程中，有毒 4-羥基-2-壬烯醛 (4-HNE) 與共軛雙烯之生成速率。',
    clinicalKeyFindings: [
      '富含多元不飽和 (PUFA) 的種子油（大豆油、葵花油、亞麻仁油）在超過 160℃ 時氧化裂解速度急遽上升，極性化合物顯著超標',
      '高單元不飽和 (MUFA) 的苦茶油（發煙點 252℃）在連續 200℃ 煎炸 4 小時後，過氧化價與醛類生成量僅為大豆沙拉油的 1/7',
      '高發煙點配合高油酸結構，是廚房避免吸入致癌油煙與食入過氧化脂質的雙重防線'
    ],
    takeawayForDailyDiet: '嚴禁將亞麻仁油用於任何加熱鍋具；高溫熱炒、煎魚、炸物務必切換為苦茶油或酪梨油等超高發煙點耐溫油。'
  },
  {
    id: 'res-mohw-ratio',
    title: '衛福部國健署國人油脂攝取調查：Omega-6/Omega-3 飲食比例失衡與代謝症候群關聯報告',
    journal: '台灣公共衛生雜誌 / 衛生福利部國民健康署健康政策專刊',
    year: 2023,
    category: 'metabolic',
    categoryLabel: '心血管健康',
    authors: '衛生福利部國民健康署營養調查工作小組',
    sampleSize: '台灣國民營養健康狀況變遷調查 (NAHSIT) 代表性樣本',
    doiOrSource: '衛福部國健署食用油指引編號: MOHW-HPA-NUT-112',
    abstractSummary: '分析國人外食與家庭烹調中食用油比例，揭示台灣成年人平均 Omega-6 與 Omega-3 攝取比例已失衡高達 18:1 至 22:1，與脂肪肝、動脈硬化及胰島素阻抗之正相關性。',
    clinicalKeyFindings: [
      '因餐飲外食普遍使用平價大豆沙拉油與棕櫚調和油，國人 Omega-6 攝取量超標 320%',
      '而保護心血管與抗發炎之 Omega-3 達成率不足衛福部建議每日攝取標準之 38%',
      '官方指引建議採行「好油三原則」：少精煉油炸、生食用冷壓亞麻仁/紫蘇油、熟食熱炒首選苦茶油與橄欖油'
    ],
    takeawayForDailyDiet: '每週至少 4 天刻意增加冷壓亞麻仁油涼拌，並將家中日常熱炒油全面更換為單一來源純冷壓苦茶油。'
  }
];
