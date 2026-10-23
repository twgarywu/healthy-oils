export interface FattyAcid {
  id: string;
  name: string;
  chemicalName: string;
  category: 'Omega-3' | 'Omega-6' | 'Omega-9';
  type: '多元不飽和 (PUFA)' | '單元不飽和 (MUFA)';
  isEssential: boolean;
  idealDailyIntake: string;
  biologicalAction: '強效抗發炎 / 降血栓' | '促發炎防禦 / 調控免疫' | '心血管維護 / 抗氧化穩定';
  modernIntakeStatus: '嚴重攝取不足（平均不足 30%）' | '嚴重過量（超標 3~5 倍）' | '攝取偏低或適中';
  metabolicPathway: string;
  keyMolecules: string[];
  primaryFoodSources: string[];
  healthBenefits: string[];
  clinicalRisksOfImbalance: string;
  cookingPrecaution: string;
}

export const FATTY_ACIDS_DATA: FattyAcid[] = [
  {
    id: 'omega-3',
    name: 'Omega-3 脂肪酸',
    chemicalName: 'α-亞麻酸 (ALA) / EPA / DHA',
    category: 'Omega-3',
    type: '多元不飽和 (PUFA)',
    isEssential: true,
    idealDailyIntake: '約 1.6 ~ 2.2 克 / 天',
    biologicalAction: '強效抗發炎 / 降血栓',
    modernIntakeStatus: '嚴重攝取不足（平均不足 30%）',
    metabolicPathway: '經人體酵素轉化為抗發炎前列腺素 (PGE3) 與消退素 (Resolvins、Protectins)，阻斷慢性發炎級聯反應。',
    keyMolecules: ['ALA (α-亞麻酸)', 'EPA (二十碳五烯酸)', 'DHA (二十二碳六烯酸)'],
    primaryFoodSources: ['亞麻仁油 (55% ALA)', '紫蘇籽油 (60% ALA)', '印加果油', '核桃', '深海富脂魚類 (鮭魚/鯖魚)'],
    healthBenefits: [
      '降低血液中三酸甘油酯，減少動脈粥狀硬化斑塊沉積',
      '抑制促發炎細胞激素 (TNF-α, IL-6)，緩解關節炎與過敏反應',
      '維持大腦皮質神經突觸流動性，提升認知敏銳度與視網膜健康',
      '調節心律，降低心室性心律不整及心因性猝死風險'
    ],
    clinicalRisksOfImbalance: '缺乏時易誘發全身性低度慢性發炎、加速血管硬化、皮膚乾燥脫屑、情緒焦慮與注意力衰退。',
    cookingPrecaution: '化學結構含 3 個不飽和雙鍵，極度不耐熱且極易氧化酸敗。嚴禁高溫煎炸，僅限低溫生飲或冷盤淋拌。'
  },
  {
    id: 'omega-6',
    name: 'Omega-6 脂肪酸',
    chemicalName: '亞麻油酸 (LA) / 花生四烯酸 (AA)',
    category: 'Omega-6',
    type: '多元不飽和 (PUFA)',
    isEssential: true,
    idealDailyIntake: '約 6 ~ 10 克 / 天（建議與 Omega-3 控制在 1:1 ~ 4:1）',
    biologicalAction: '促發炎防禦 / 調控免疫',
    modernIntakeStatus: '嚴重過量（超標 3~5 倍）',
    metabolicPathway: '經環氧合酶 (COX-2) 代謝為促發炎前列腺素 (PGE2) 與白三烯素 (LTB4)，誘導血管收縮與血小板凝集。',
    keyMolecules: ['LA (亞麻油酸)', 'GLA (γ-次亞麻油酸)', 'AA (花生四烯酸)'],
    primaryFoodSources: ['大豆沙拉油', '玉米油', '葵花籽油', '各類油炸加工食品', '商業調和油'],
    healthBenefits: [
      '適量攝取時負責維持細胞膜構造完整與皮膚屏障保水',
      '在急性外傷或感染時啟動必要之免疫防禦與發炎反應促使組織癒合',
      '調節血壓與血液凝固初始機制'
    ],
    clinicalRisksOfImbalance: '過量會與 Omega-3 競爭同一套去飽和酶 (Delta-6 Desaturase)，使人體長期處於「慢性促發炎」體質，引發心血管硬化、自體免疫亢進與代謝症候群。',
    cookingPrecaution: '含 2 個不飽和雙鍵，高溫連續油炸易裂解產生有毒醛類 (Aldehydes) 與過氧化物。'
  },
  {
    id: 'omega-9',
    name: 'Omega-9 脂肪酸',
    chemicalName: '油酸 (Oleic Acid, OA 18:1)',
    category: 'Omega-9',
    type: '單元不飽和 (MUFA)',
    isEssential: false,
    idealDailyIntake: '佔每日總脂肪攝取量 50% ~ 70%',
    biologicalAction: '心血管維護 / 抗氧化穩定',
    modernIntakeStatus: '攝取偏低或適中',
    metabolicPathway: '不參與二十碳酸前列腺素發炎級聯，中性穩定；直接結合於低密度脂蛋白外膜，顯著增強抗脂質過氧化能力。',
    keyMolecules: ['油酸 (Oleic Acid, C18:1 cis-9)', '芥酸 (Erucic Acid - 苦茶油無毒不含芥酸)'],
    primaryFoodSources: ['苦茶油 (80%~83% 油酸)', '特級初榨橄欖油 (70%~75% 油酸)', '酪梨油 (70% 油酸)', '杏仁堅果'],
    healthBenefits: [
      '顯著降低壞膽固醇 (LDL-C) 且不損害好膽固醇 (HDL-C)',
      '卓越的熱氧化穩定性，高溫加熱不易產生致癌油煙',
      '豐富的山茶多酚與角鯊烯能促進胃部黏膜血流與胃壁保護',
      '改善周邊組織對胰島素之敏感度，有助控制飯後血糖波動'
    ],
    clinicalRisksOfImbalance: '若單元不飽和脂肪比例過低，且被飽和脂肪或反式脂肪取代，心血管疾病死亡率顯著攀升。',
    cookingPrecaution: '僅含 1 個不飽和雙鍵，化學性質極其穩定。苦茶油發煙點高達 252℃，為耐高溫料理之首選。'
  }
];

export const IMBALANCE_STATISTICS = {
  modernRatio: '1 : 15 ~ 20',
  idealRatio: '1 : 1 ~ 4',
  dangerFactor: 'Omega-6 過量導致促發炎前列腺素 PGE2 大量分泌，抑制抗發炎轉換路徑',
  solutionSteps: [
    {
      title: '替換精煉種子油',
      desc: '減少大豆沙拉油、玉米油與葵花油的日常使用，切斷高量 Omega-6 來源。'
    },
    {
      title: '每日定額補充 Omega-3',
      desc: '早餐或溫涼餐點中加入 1 湯匙（約 10-15ml）冷壓亞麻仁油或紫蘇油。'
    },
    {
      title: '熟食熱炒全面改用高單元油',
      desc: '中式大火料理選用發煙點高達 252℃ 且富含 82% 油酸的苦茶油。'
    }
  ]
};
