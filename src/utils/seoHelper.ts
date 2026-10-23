/**
 * 動態 SEO 中繼標籤與社群分享輔助工具
 * 當訪客在各分頁之間切換時，自動同步更新網頁 Title、Meta Description、Canonical 與 Open Graph 標籤，
 * 確保 Google 爬蟲與 LINE/FB 分享時能呈現最具點擊率與相關性的內容。
 */

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const TAB_SEO_MAP: Record<string, SeoMetadata> = {
  home: {
    title: '有米的日子 · 健康好油生活誌 | 苦茶油與黃金亞麻仁油 尋常餐桌首選',
    description: '澤禾有米的日子無添加安心冷壓好油百科，全方位解析黃金亞麻仁油與特級初榨苦茶油，提供日常飲食自測、發煙點圖鑑與一頁式專屬訂購指南。',
    keywords: '苦茶油, 亞麻仁油, 黃金亞麻仁油, 冷壓苦茶油, 苦茶油發煙點, 亞麻仁油怎麼吃, 有米的日子, 澤禾',
    canonicalPath: '/',
    ogTitle: '有米的日子 · 健康好油生活誌 | 尋常餐桌上的安心好油',
    ogDescription: '少吃油不等於健康，吃對好油才是關鍵。高山小果特級苦茶油與加拿大黃金亞麻仁油，第一道冷壓初榨無化學溶劑。'
  },
  brand_story: {
    title: '有米的日子品牌故事 | 堅持第一道冷壓初榨 · 澤禾安心初衷',
    description: '尋常餐桌上的安心好油，源自一位父親對全家人健康最純粹的執著。嚴選高山熟果與黃金亞麻仁籽，絕不炒籽、絕無化學溶劑。',
    keywords: '有米的日子品牌故事, 澤禾, 苦茶油安心承諾, 冷壓初榨苦茶油推薦, 無添加好油',
    canonicalPath: '/brand-story',
    ogTitle: '有米的日子品牌故事 | 把最好的油，留給最愛的人',
    ogDescription: '不談複雜的化學式，只用透明的良心替每一口料理把關。堅持 410 項農藥與黃麴毒素零檢出。'
  },
  dual_stars: {
    title: '黃金亞麻仁油 vs 特級苦茶油 深度對比 | 植物性Omega-3與高發煙點油首選',
    description: '兩瓶好油各管一半餐桌：黃金亞麻仁油是冷拌的植物性Omega-3之王，苦茶油是高溫爆炒的東方液體黃金。完整食用方式與成分比較。',
    keywords: '黃金亞麻仁油比較, 苦茶油發煙點, 亞麻仁油Omega-3, 苦茶油單元不飽和脂肪酸, 冷熱用油搭配',
    canonicalPath: '/dual-stars',
    ogTitle: '兩瓶好油各管一半的餐桌：黃金亞麻仁油與100%苦茶油',
    ogDescription: '晨起生飲、涼拌冷盤選亞麻仁油；熱鍋爆炒、煎魚顧胃選苦茶油。滿足全家從早到晚的健康用油需求。'
  },
  smoke_points: {
    title: '食用油發煙點完整圖鑑 2026 | 哪種油適合幾度的鍋？廚房配油指南',
    description: '超過20種常用食用油發煙點溫控圖鑑！低溫涼拌、中溫水炒、高溫爆炒對照表，搭配料理配油小幫手，守護家人呼吸道與健康。',
    keywords: '食用油發煙點, 苦茶油發煙點252度, 亞麻仁油發煙點107度, 橄欖油發煙點, 炒菜用什麼油, 高溫油炸好油',
    canonicalPath: '/smoke-points',
    ogTitle: '哪種油適合幾度的鍋？食用油發煙點圖鑑與配油小幫手',
    ogDescription: '油加熱一旦超過發煙點就會產生刺激性油煙與致癌物。依照料理溫度正確選油，讓烹調既美味又安心。'
  },
  fatty_acids: {
    title: 'Omega-3、6、9 脂肪酸抗發炎比例全解析 | 生物化學與家庭健康',
    description: '看懂Omega-3、6、9黃金比例！現代外食Omega-6過量達20:1易致慢性發炎，如何補充亞麻仁油ALA與苦茶油Omega-9修復細胞膜。',
    keywords: 'Omega-3脂肪酸, Omega-6發炎, Omega-9苦茶油, ALA轉換EPA, 脂肪酸黃金比例, 抗發炎油脂',
    canonicalPath: '/fatty-acids',
    ogTitle: '油吃對了身體才不發炎：看懂 Omega-3、6、9 脂肪酸',
    ogDescription: '吃油不是越少越好！維持體內脂肪酸動態平衡，才是改善現代外食慢性發炎的核心關鍵。'
  },
  buying_guide: {
    title: '挑好油看這 5 件事就夠了 | 避開化學精煉與劣質調和油陷阱 · 專家指南',
    description: '專家教你挑選特級初榨冷壓油：壓榨工法、深色遮光瓶、酸價檢驗、低溫儲存與品油口感。杜絕低價化學調和油與發霉烘焙油。',
    keywords: '如何挑選苦茶油, 亞麻仁油挑選方法, 第一道初榨差別, 苦茶油酸價, 避光玻璃瓶油品',
    canonicalPath: '/buying-guide',
    ogTitle: '挑好油 看這 5 件事就夠了！專家避坑指南',
    ogDescription: '市售油品價差大，看懂冷壓初榨、避光包裝與酸價檢驗，用清晰眼光為全家人選一瓶安心好油。'
  },
  research_hub: {
    title: '苦茶油與亞麻仁油國際同儕審查醫學研究 | NEJM、Lancet 生化驗證',
    description: '精選新英格蘭醫學期刊(NEJM)、刺胳針(The Lancet)、美國心臟協會(AHA)臨床研究，以科學文獻驗證Omega-3心血管保護與苦茶油消化道修復。',
    keywords: '苦茶油醫學研究, 亞麻仁油心血管文獻, 苦茶油顧胃臨床, Omega-3抗氧化研究, NEJM好油研究',
    canonicalPath: '/research-hub',
    ogTitle: '油怎麼吃才健康？權威國際醫學與科研文獻解析',
    ogDescription: '杜絕網路未經證實的偏方，以權威同儕審查期刊數據透視日常冷壓好油的真實健康效益。'
  }
};

export function updatePageSeo(tabId: string): void {
  const meta = TAB_SEO_MAP[tabId] || TAB_SEO_MAP.home;

  // 1. Update Title
  document.title = meta.title;

  // 2. Helper to set/update meta tag
  const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Update standard meta
  setMeta('name', 'description', meta.description);
  setMeta('name', 'keywords', meta.keywords);

  // 4. Update OpenGraph (LINE / Facebook)
  setMeta('property', 'og:title', meta.ogTitle || meta.title);
  setMeta('property', 'og:description', meta.ogDescription || meta.description);
  setMeta('property', 'og:site_name', '有米的日子 · 健康好油生活誌');
  setMeta('property', 'og:type', 'website');

  // 5. Update Canonical link
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', window.location.origin + meta.canonicalPath);
}
