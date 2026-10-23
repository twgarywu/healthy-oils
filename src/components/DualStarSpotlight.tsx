import React, { useState } from 'react';
import { Droplets, ShieldAlert, Sparkles, CheckCircle, Flame, Heart, Utensils, AlertTriangle, Snowflake, ExternalLink, ArrowRight, ShoppingBag } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface DualStarSpotlightProps {
  shopUrl?: string;
}

export const DualStarSpotlight: React.FC<DualStarSpotlightProps> = ({ shopUrl }) => {
  const [activeStarTab, setActiveStarTab] = useState<'both' | 'flax' | 'camellia'>('both');

  return (
    <section id="dual-stars" className="py-12 md:py-16 bg-[#FBF9F5] border-b border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 md:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
            <span>餐桌雙星核心剖析</span>
          </div>
          <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
            兩瓶好油 各管一半的餐桌：<br className="hidden md:inline" />
            <span className="inline-block text-[#C08A3E]">黃金亞麻仁油</span> 與 <span className="inline-block text-[#1A382B]">100% 苦茶油</span>
          </h1>
          <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
            <p>
              亞麻仁油是冷拌的<span className="font-semibold text-stone-900">「植物性 Omega-3 之王」</span>，苦茶油是耐高溫的<span className="font-semibold text-stone-900">「東方液體黃金」</span>。
            </p>
            <p className="text-stone-500 text-sm sm:text-base md:text-lg">
              從晨起生飲、涼拌冷盤，到熱鍋爆炒煎魚，完整照顧全家從早到晚的健康用油需求。
            </p>
          </div>
        </div>

        {/* View Filter Switch */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xl max-w-md mb-10 border border-stone-200">
          <button
            onClick={() => setActiveStarTab('both')}
            className={`flex-1 py-2 px-3 text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeStarTab === 'both' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            雙星並行對照
          </button>
          <button
            onClick={() => setActiveStarTab('flax')}
            className={`flex-1 py-2 px-3 text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeStarTab === 'flax' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            亞麻仁油專題
          </button>
          <button
            onClick={() => setActiveStarTab('camellia')}
            className={`flex-1 py-2 px-3 text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeStarTab === 'camellia' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            苦茶油專題
          </button>
        </div>

        {/* Dual Star Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* STAR 1: FLAXSEED OIL */}
          {(activeStarTab === 'both' || activeStarTab === 'flax') && (
            <div className="bg-[#FAF8F5] border border-amber-900/20 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-parchment hover:border-amber-900/40 transition-all">
              <div className="space-y-6">
                {/* Header Tag */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider font-bold text-amber-800 font-sans mb-1.5">
                      Omega-3 之王 · 植物抗發炎冠軍
                    </div>
                    <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-900">
                      冷壓亞麻仁油
                    </h3>
                    <p className="text-sm text-stone-500 font-sans mt-0.5">
                      Flaxseed Oil (Linum usitatissimum)
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white flex items-center justify-center font-serif-tc text-xl font-bold shadow-xs shrink-0">
                    ALA
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-stone-200 text-center font-sans">
                  <div>
                    <span className="text-xs sm:text-sm text-stone-500 block mb-0.5 font-medium">α-亞麻酸 (ALA)</span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-amber-900 tabular-nums">
                      55% ~ 60%
                    </span>
                  </div>
                  <div className="border-x border-stone-200">
                    <span className="text-xs sm:text-sm text-stone-500 block mb-0.5 font-medium">發煙點 (極低)</span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-red-700 tabular-nums">
                      107℃
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-stone-500 block mb-0.5 font-medium">每日建議量</span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-stone-900 tabular-nums">
                      10 ~ 15 ml
                    </span>
                  </div>
                </div>

                {/* Biochemical Role & Vegetarian Benefits */}
                <div className="space-y-2 font-sans">
                  <h4 className="text-sm uppercase tracking-wider font-bold text-stone-500">
                    核心營養與抗發炎價值
                  </h4>
                  <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                    亞麻仁油是植物中 α-亞麻酸（ALA）濃度最高的天然來源。體內可轉化為 EPA 與 DHA，幫助抑制發炎，是不吃魚油者的首選。
                  </p>
                  <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                    同時富含木酚素多酚，具抗氧化作用，有助維持心血管彈性與女性生理調節。
                  </p>
                </div>

                {/* Usage Rules & Strict Cautions */}
                <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200 space-y-3 text-stone-800 font-sans">
                  <div className="flex items-center gap-2 text-red-900 font-bold text-base sm:text-lg">
                    <ShieldAlert className="w-5 h-5 text-red-700 shrink-0" />
                    <span>三大保存守則與加熱禁忌</span>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-stone-800">
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-red-700 shrink-0">1. 嚴禁任何熱鍋烹調：</span>
                      <span>發煙點僅 107℃，加熱極易聚合產生反式脂肪與過氧化自由基。</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-red-700 shrink-0">2. 開瓶必須冷藏：</span>
                      <span>存放於 4℃~8℃ 冰箱冷藏室，避免常溫氧化變質產生魚腥味。</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-red-700 shrink-0">3. 4-6 週內盡速用畢：</span>
                      <span>採買建議選擇 250ml 小瓶裝，開瓶後一個半月內食用完畢最為新鮮。</span>
                    </li>
                  </ul>
                </div>

                {/* Culinary Recipe Pairing */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2 text-sm sm:text-base font-sans">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-base">
                    <Utensils className="w-4 h-4 text-amber-800" />
                    <span>日常營養師推薦食譜：陽光活力溫燕麥優格碗</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    煮好溫熱的無糖燕麥粥或希臘優格盛碗，<strong className="text-stone-900 font-bold">起鍋稍降溫後</strong>，淋入 1 湯匙冷壓亞麻仁油，撒上藍莓與核桃碎。堅果香氣融於燕麥，既不破壞好油活性，更能吸收脂溶性維生素。
                  </p>
                </div>

                {/* Brand Showcase Link */}
                {shopUrl && (
                  <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300/80 flex items-center justify-between gap-3 font-sans">
                    <div>
                      <span className="font-bold text-amber-950 text-sm sm:text-base block">尋常餐桌好油推薦</span>
                      <span className="text-xs sm:text-sm text-stone-700">有米的日子 · 澤禾黃金亞麻仁油（特選加拿大原果 · 55% ALA）</span>
                    </div>
                    <a
                      href={shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm transition-colors shrink-0 flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>官網特惠選購</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STAR 2: CAMELLIA SEED OIL */}
          {(activeStarTab === 'both' || activeStarTab === 'camellia') && (
            <div className="bg-[#FAF8F5] border border-emerald-900/20 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-parchment hover:border-emerald-900/40 transition-all">
              <div className="space-y-6">
                {/* Header Tag */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider font-bold text-emerald-800 font-sans mb-1.5">
                      東方橄欖油 · 高溫護胃全能神油
                    </div>
                    <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-900">
                      冷壓苦茶油 (茶花籽油)
                    </h3>
                    <p className="text-sm text-stone-500 font-sans mt-0.5">
                      Camellia Seed Oil (Camellia oleifera)
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-serif-tc text-xl font-bold shadow-xs shrink-0">
                    Ω9
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-stone-200 text-center font-sans">
                  <div>
                    <span className="text-xs sm:text-sm text-stone-500 block mb-0.5 font-medium">單元油酸 (MUFA)</span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-emerald-900 tabular-nums">
                      80% ~ 83%
                    </span>
                  </div>
                  <div className="border-x border-stone-200">
                    <span className="text-xs sm:text-sm text-stone-500 block mb-0.5 font-medium">發煙點 (極耐溫)</span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-emerald-800 tabular-nums">
                      252℃
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-stone-500 block mb-0.5 font-medium">抗胃黏膜修復</span>
                    <span className="font-mono text-base sm:text-lg font-bold text-stone-900 tabular-nums">
                      茶多酚+角鯊烯
                    </span>
                  </div>
                </div>

                {/* Biochemical Role & Gastrointestinal Benefits */}
                <div className="space-y-2 font-sans">
                  <h4 className="text-sm uppercase tracking-wider font-bold text-stone-500">
                    核心營養與護胃益處
                  </h4>
                  <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                    單元不飽和脂肪酸（Omega-9 油酸）高達 82% 以上，超越特級初榨橄欖油。能調節血脂平衡，維護心血管健康。
                  </p>
                  <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                    富含天然茶多酚、角鯊烯與山茶苷。研究顯示其成分能促進胃黏膜保護層分泌，溫和滋潤消化道。
                  </p>
                </div>

                {/* All-round Cooking Advantages */}
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3 text-stone-800 font-sans">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-base sm:text-lg">
                    <Flame className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>耐熱發煙點 252℃：中式高溫烹調首選</span>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-stone-800">
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-emerald-800 shrink-0">1. 大火熱炒不冒油煙：</span>
                      <span>252℃ 傲視絕大多數植物油，大火煸老薑、煎魚、炸物皆不裂解致癌油煙。</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-emerald-800 shrink-0">2. 清香回甘易吸收：</span>
                      <span>無橄欖油強烈辛辣苦澀感，清爽甘醇，非常契合台灣與亞洲飲食文化。</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-emerald-800 shrink-0">3. 避開調和油陷阱：</span>
                      <span>市售低價苦茶油常摻入大量精煉大豆油，選購務必認明 100% 原果初榨與酸價報告。</span>
                    </li>
                  </ul>
                </div>

                {/* Culinary Recipe Pairing */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2 text-sm sm:text-base font-sans">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-base">
                    <Utensils className="w-4 h-4 text-emerald-800" />
                    <span>古法養生名菜：老薑苦茶油拌手工麵線 / 鮮魚湯</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    冷鍋倒入苦茶油，中小火慢煸老薑絲至金黃微卷，香氣四溢且完全不冒嗆鼻油煙。將煮熟之熱麵線趁熱拌入，或倒入燉煮鮮魚湯中。溫潤甘美，暖胃而不燥熱。
                  </p>
                </div>

                {/* Brand Showcase Link */}
                {shopUrl && (
                  <div className="p-4 rounded-2xl bg-emerald-100/70 border border-emerald-300/80 flex items-center justify-between gap-3 font-sans">
                    <div>
                      <span className="font-bold text-emerald-950 text-sm sm:text-base block">尋常餐桌好油推薦</span>
                      <span className="text-xs sm:text-sm text-stone-700">有米的日子 · 澤禾特級初榨苦茶油（82% 油酸 · 252℃ 煎炸護胃）</span>
                    </div>
                    <a
                      href={shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm transition-colors shrink-0 flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>官網特惠選購</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Side-by-Side Comprehensive Matrix Table */}
        <div className="mt-12 bg-[#FAF8F5] border border-stone-200 rounded-3xl p-7 sm:p-10 shadow-parchment">
          <div className="mb-6 space-y-1.5">
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              亞麻仁油 vs 苦茶油：<span className="inline-block">全方位指標直觀對照表</span>
            </h3>
            <p className="text-sm sm:text-base text-stone-600 font-sans">
              一表完整掌握兩大名油的植物來源、關鍵理化指標、主要保健價值與廚房禁忌。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b border-stone-200 text-stone-700 font-sans text-sm sm:text-base font-bold">
                  <th className="py-4 px-4 sm:px-5 w-1/4">比較指標</th>
                  <th className="py-4 px-4 sm:px-5 text-amber-900 w-3/8 bg-amber-50/40">
                    冷壓亞麻仁油 (Flaxseed Oil)
                  </th>
                  <th className="py-4 px-4 sm:px-5 text-emerald-900 w-3/8 bg-emerald-50/40">
                    冷壓苦茶油 (Camellia Seed Oil)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">植物原料來源</td>
                  <td className="py-4 px-4 sm:px-5">亞麻科亞麻種籽 (Linum usitatissimum)</td>
                  <td className="py-4 px-4 sm:px-5">山茶科油茶樹成熟果實種仁 (Camellia oleifera)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">主導脂肪酸光譜</td>
                  <td className="py-4 px-4 sm:px-5 font-mono">
                    <strong className="text-amber-900 font-bold text-base">Omega-3 (ALA 55%~60%)</strong>
                    <br />
                    <span className="text-stone-500 text-xs sm:text-sm">多元不飽和 (PUFA 73%)</span>
                  </td>
                  <td className="py-4 px-4 sm:px-5 font-mono">
                    <strong className="text-emerald-900 font-bold text-base">Omega-9 (油酸 80%~83%)</strong>
                    <br />
                    <span className="text-stone-500 text-xs sm:text-sm">單元不飽和 (MUFA 82%)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">發煙點與熱穩定度</td>
                  <td className="py-4 px-4 sm:px-5 font-mono font-bold text-red-700">
                    107℃（極低 · 嚴禁加熱）
                  </td>
                  <td className="py-4 px-4 sm:px-5 font-mono font-bold text-emerald-800">
                    252℃（極高 · 耐高溫大火油炸）
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">核心機能成分</td>
                  <td className="py-4 px-4 sm:px-5">α-亞麻酸 (ALA)、木酚素、天然植物固醇</td>
                  <td className="py-4 px-4 sm:px-5">高油酸、茶多酚、角鯊烯、維生素 E、山茶苷</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">主要保健訴求</td>
                  <td className="py-4 px-4 sm:px-5 leading-relaxed">
                    全身抗發炎、降低心血管血栓、大腦認知、素食補充
                  </td>
                  <td className="py-4 px-4 sm:px-5 leading-relaxed">
                    修復保護胃黏膜、保護心血管降低 LDL、減少烹調油煙致癌風險
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">建議烹飪場景</td>
                  <td className="py-4 px-4 sm:px-5 leading-relaxed">
                    晨間空腹生飲 10ml、涼拌沙拉、果昔精力湯、溫燕麥起鍋淋拌
                  </td>
                  <td className="py-4 px-4 sm:px-5 leading-relaxed">
                    生飲護胃、苦茶油拌麵線、老薑煸炒、大火炒菜、煎魚、燉雞湯
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-5 font-bold text-stone-900">保存與保存期</td>
                  <td className="py-4 px-4 sm:px-5 text-red-800 font-bold leading-relaxed">
                    深色玻璃瓶、必須放冰箱冷藏、開瓶 4-6 週用畢
                  </td>
                  <td className="py-4 px-4 sm:px-5 text-emerald-800 font-bold leading-relaxed">
                    深色玻璃瓶、陰涼避光常溫保存、遠離瓦斯爐、開瓶 3 個月用畢
                  </td>
                </tr>
              </tbody>
            </table>

            {shopUrl && (
              <div className="p-6 bg-[#FBF9F5] border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="font-serif-tc font-bold text-stone-900 text-base sm:text-lg block">
                    雙油搭配 · 守護全家餐桌冷熱健康
                  </span>
                  <span className="text-xs sm:text-sm text-stone-600 font-sans">
                    堅持第一道低溫物理初榨，不炒籽、無化學溶劑，通過 SGS 零檢出。
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildShopUrl(shopUrl, { medium: 'dualstars_flax_btn', content: 'flaxseed' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#C08A3E] hover:bg-[#A8742F] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5 cursor-pointer font-sans"
                  >
                    <span>選購黃金亞麻仁油</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={buildShopUrl(shopUrl, { medium: 'dualstars_camellia_btn', content: 'camellia' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#1A382B] hover:bg-[#12281E] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5 cursor-pointer font-sans"
                  >
                    <span>選購特級苦茶油</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
