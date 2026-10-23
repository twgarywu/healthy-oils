export interface TabItem {
  id: string;
  name: string;
  shortName: string;
  badge?: string;
}

export const MAIN_TABS: TabItem[] = [
  { id: 'home', name: '生活選油指南', shortName: '選油指南' },
  { id: 'brand_story', name: '關於有米的日子', shortName: '品牌故事' },
  { id: 'dual_stars', name: '苦茶油與亞麻仁油', shortName: '雙星好油' },
  { id: 'smoke_points', name: '烹調發煙點圖鑑', shortName: '發煙點圖鑑' },
  { id: 'fatty_acids', name: 'Omega 3·6·9 密碼', shortName: '脂肪酸密碼' },
  { id: 'buying_guide', name: '安心選油 5 步驟', shortName: '選油 5 步驟' },
  { id: 'research_hub', name: '醫學科研實證', shortName: '科研實證' },
];
