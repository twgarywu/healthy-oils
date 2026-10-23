import React, { useState } from 'react';
import { FATTY_ACIDS_DATA, IMBALANCE_STATISTICS } from '../data/fattyAcids.ts';
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Activity, Zap, ShoppingBag } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface FattyAcidSectionProps {
  shopUrl?: string;
}

export const FattyAcidSection: React.FC<FattyAcidSectionProps> = ({ shopUrl }) => {
  const [selectedAcidId, setSelectedAcidId] = useState<string>('omega-3');

  const selectedAcid = FATTY_ACIDS_DATA.find((fa) => fa.id === selectedAcidId) || FATTY_ACIDS_DATA[0];

  return (
    <section id="fatty-acids" className="py-12 md:py-16 bg-[#FBF9F5] border-b border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 md:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
            <span>生物化學與人體生理</span>
          </div>
          <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
            油吃對了 身體才不發炎：<br className="hidden md:inline" />
            看懂 <span className="inline-block whitespace-nowrap text-[#C08A3E]">Omega-3、6、9</span>
          </h1>
          <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
            <p>
              人體細胞膜主要由脂肪酸構成。有的油脂能撫平微小發炎，有的油脂過量卻容易助長發炎反應。
            </p>
            <p className="text-stone-500 text-sm sm:text-base md:text-lg">
              吃油不是越少越好，維持體內脂肪酸的<span className="font-semibold text-stone-900">「動態平衡」</span>才是遠離慢性發炎的核心關鍵。
            </p>
          </div>
        </div>

        {/* Interactive Segmented Control Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-2xl max-w-2xl mb-8 border border-stone-200/80">
          {FATTY_ACIDS_DATA.map((fa) => {
            const isActive = fa.id === selectedAcidId;
            return (
              <button
                key={fa.id}
                onClick={() => setSelectedAcidId(fa.id)}
                className={`flex-1 py-3 px-4 text-sm sm:text-base font-bold rounded-xl transition-all duration-200 whitespace-nowrap text-center cursor-pointer font-sans ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <span>{fa.category}</span>
                <span className="hidden sm:inline text-xs sm:text-sm opacity-70 ml-1.5">
                  ({fa.type.split(' ')[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Acid Deep-Dive Card */}
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-7 sm:p-10 md:p-12 shadow-parchment transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Biochemical profile */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-900">
                  {selectedAcid.name}
                </span>
                <span className="text-sm sm:text-base font-mono text-stone-700 bg-stone-200/80 px-3 py-1 rounded-lg">
                  {selectedAcid.chemicalName}
                </span>
              </div>

              {/* Status and Action Tag Strip */}
              <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 text-sm sm:text-base text-stone-700 pt-1 border-b border-stone-200 pb-5 font-sans">
                <div>
                  <span className="text-stone-500">必需性：</span>
                  <strong className="text-stone-900 font-bold">
                    {selectedAcid.isEssential ? '人體必需（無法自行合成）' : '非必需（人體可自製，但膳食補充更佳）'}
                  </strong>
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <span className="text-stone-500">生理傾向：</span>
                  <strong className="text-amber-900 font-bold">{selectedAcid.biologicalAction}</strong>
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <span className="text-stone-500">現代現狀：</span>
                  <strong className="text-stone-900 font-bold">{selectedAcid.modernIntakeStatus}</strong>
                </div>
              </div>

              {/* Metabolic Pathway Explanation */}
              <div className="space-y-2.5 font-sans">
                <h3 className="text-sm uppercase tracking-wider font-bold text-stone-500">
                  體內生化代謝路徑
                </h3>
                <p className="text-base sm:text-lg text-stone-700 leading-relaxed bg-white p-5 rounded-2xl border border-stone-200/80">
                  {selectedAcid.metabolicPathway}
                </p>
              </div>

              {/* Key Health Benefits */}
              <div className="space-y-3 font-sans">
                <h3 className="text-sm uppercase tracking-wider font-bold text-stone-500">
                  核心生理機能效益
                </h3>
                <ul className="space-y-2.5">
                  {selectedAcid.healthBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-stone-800 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cooking Precaution */}
              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-sm sm:text-base text-amber-950 font-sans">
                <div className="font-bold flex items-center gap-2 mb-1.5 text-amber-900 text-base">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>烹調與化學穩定性注意：</span>
                </div>
                <p className="leading-relaxed">{selectedAcid.cookingPrecaution}</p>
              </div>
            </div>

            {/* Right Column: Key Sources & Intake Target */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-stone-200 lg:pl-8 font-sans">
              {/* Daily Target */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-xs sm:text-sm font-bold text-stone-500 uppercase tracking-wider block">
                  理想每日攝取建議
                </span>
                <span className="font-mono text-2xl font-bold text-stone-900 mt-1.5 block">
                  {selectedAcid.idealDailyIntake}
                </span>
                <p className="text-xs sm:text-sm text-stone-500 mt-2">
                  以成人每日總熱量 2,000 大卡估算之脂肪酸分配標準。
                </p>
              </div>

              {/* Food Sources */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <span className="text-xs sm:text-sm font-bold text-stone-500 uppercase tracking-wider block mb-3.5">
                  代表性富含油品與食材
                </span>
                <div className="space-y-2.5">
                  {selectedAcid.primaryFoodSources.map((source, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm sm:text-base text-stone-700 py-2 border-b border-stone-100 last:border-b-0"
                    >
                      <span className="font-semibold text-stone-900">{source}</span>
                      <span className="text-xs sm:text-sm text-amber-800 font-medium">推薦日常攝取</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Risk Summary */}
              <div className="p-6 rounded-2xl bg-stone-100/90 border border-stone-200">
                <span className="text-xs sm:text-sm font-bold text-stone-600 uppercase tracking-wider block mb-2">
                  失衡臨床風險警示
                </span>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {selectedAcid.clinicalRisksOfImbalance}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Imbalance Crisis & Solution Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 text-white p-7 sm:p-12 shadow-parchment-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-bold border border-amber-500/30">
                <Activity className="w-4 h-4" />
                <span>現代飲食危機警報</span>
              </div>
              <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                <span className="inline-block whitespace-nowrap">Omega-6 : Omega-3</span>
                <br />
                飲食比例嚴重崩盤
              </h3>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                理想的飲食攝取比例約為 <strong className="text-amber-300">1:1 至 2:1</strong>。然而現代高度加工食品與外食普遍使用大量精煉大豆沙拉油，使攝取比例飆高至{' '}
                <strong className="text-red-400 font-mono text-lg font-bold">1:15 ~ 1:20</strong>，導致體內長期處於促發炎狀態。
              </p>
            </div>

            {/* Ratio Comparison Gauge */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-stone-700 lg:pl-8">
              {/* Visual Bars */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm sm:text-base text-stone-200 mb-2">
                    <span className="font-medium">理想健康比率（抗發炎平衡狀態）</span>
                    <span className="font-mono text-emerald-400 font-bold text-base">1 : 1 ~ 4</span>
                  </div>
                  <div className="h-3.5 w-full bg-stone-700 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 h-full w-[25%]" title="Omega-3 (25%)" />
                    <div className="bg-amber-400 h-full w-[75%]" title="Omega-6 (75%)" />
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-stone-400 mt-1.5 font-medium">
                    <span className="text-emerald-400">Omega-3 (充足)</span>
                    <span className="text-amber-400">Omega-6 (適量)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm sm:text-base text-stone-200 mb-2">
                    <span className="font-medium">現代人實際飲食現狀（嚴重促發炎偏向）</span>
                    <span className="font-mono text-red-400 font-bold text-base">1 : 15 ~ 20</span>
                  </div>
                  <div className="h-3.5 w-full bg-stone-700 rounded-full overflow-hidden flex">
                    <div className="bg-red-400 h-full w-[5%]" title="Omega-3 (僅 5%)" />
                    <div className="bg-orange-500 h-full w-[95%]" title="Omega-6 (過量 95%)" />
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-stone-400 mt-1.5 font-medium">
                    <span className="text-red-400">Omega-3 (嚴重缺乏)</span>
                    <span className="text-orange-400">Omega-6 (過度氾濫超標)</span>
                  </div>
                </div>
              </div>

              {/* 3 Practical Action Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {IMBALANCE_STATISTICS.solutionSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5">
                    <span className="font-mono text-amber-400 text-sm font-bold block">
                      0{idx + 1}. {step.title}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {shopUrl && (
                <div className="pt-5 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm text-stone-300 font-sans text-center sm:text-left">
                    立即補充天然 Omega-3（黃金亞麻仁油）與 Omega-9（高山初榨苦茶油），重塑體內抗發炎平衡。
                  </span>
                  <a
                    href={buildShopUrl(shopUrl, { medium: 'fatty_acids_solution_cta', campaign: 'anti_inflammation' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap font-sans shrink-0"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>前往有米的日子官方特惠選購</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
