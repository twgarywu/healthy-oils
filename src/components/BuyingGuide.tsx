import React, { useState } from 'react';
import { BUYING_TIPS } from '../data/buyingGuideData.ts';
import { CheckCircle2, XCircle, ShieldCheck, HelpCircle, ChevronRight, FlaskConical, Sun, FileCheck, ExternalLink, Heart } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface BuyingGuideProps {
  shopUrl?: string;
}

export const BuyingGuide: React.FC<BuyingGuideProps> = ({ shopUrl }) => {
  const [activeTipIndex, setActiveTipIndex] = useState<number>(0);

  const activeTip = BUYING_TIPS[activeTipIndex];

  return (
    <section id="buying-guide" className="py-12 md:py-16 bg-[#FBF9F5] border-b border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 md:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
            <span>採買與品質把關</span>
          </div>
          <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
            挑好油 看這 5 件事就夠了
          </h1>
          <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
            <p>
              市售油品琳瑯滿目，價格高低差異甚大。只要看懂壓榨工法、避光包裝、酸價檢驗、儲存方式與試飲口感，就不容易踩雷。
            </p>
            <p className="text-stone-500 text-sm sm:text-base md:text-lg">
              避開化學精煉與劣質調和油陷阱，用最清晰的眼光為全家人選一瓶安心好油。
            </p>
          </div>
        </div>

        {/* 5-Step Horizontal Tab Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {BUYING_TIPS.map((tip, idx) => {
            const isCurrent = idx === activeTipIndex;
            return (
              <button
                key={tip.stepNumber}
                onClick={() => setActiveTipIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer font-sans ${
                  isCurrent
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div
                  className={`text-xs sm:text-sm font-mono font-bold tracking-wider ${
                    isCurrent ? 'text-amber-200' : 'text-stone-400'
                  }`}
                >
                  STEP {tip.stepNumber} · {tip.step}
                </div>
                <div className="font-serif-tc font-bold text-sm sm:text-base mt-1.5 leading-snug truncate">
                  {tip.title.split('：')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tip Featured Card */}
        <div className="bg-white border border-stone-200 rounded-3xl p-7 sm:p-10 md:p-12 shadow-parchment">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-wider font-mono text-amber-800 font-bold block mb-1">
                  步驟 0{activeTipIndex + 1} · {activeTip.subtitle}
                </span>
                <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                  {activeTip.title}
                </h3>
                <p className="text-base sm:text-lg text-stone-800 font-medium mt-3.5 bg-amber-50/70 p-5 rounded-2xl border border-amber-200 leading-relaxed font-sans">
                  {activeTip.corePrinciple}
                </p>
              </div>

              {/* Good vs Bad comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>推薦做法</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {activeTip.goodPractice}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-red-900 font-bold text-sm sm:text-base">
                    <XCircle className="w-5 h-5 text-red-700 shrink-0" />
                    <span>應避免做法</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {activeTip.badPractice}
                  </p>
                </div>
              </div>

              {/* Scientific Rationale */}
              <div className="space-y-2 font-sans">
                <h4 className="text-sm uppercase tracking-wider font-bold text-stone-600 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-amber-700" />
                  <span>科學原理</span>
                </h4>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-stone-50 p-5 rounded-2xl border border-stone-200">
                  {activeTip.scientificReason}
                </p>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-7 space-y-5 font-sans">
              <div className="flex items-center gap-2.5 pb-3 border-b border-stone-200">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <h4 className="font-serif-tc font-bold text-stone-900 text-base sm:text-lg">
                  挑選檢查清單
                </h4>
              </div>

              <div className="space-y-3.5">
                {activeTip.expertChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-stone-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quality Seal Guide Note */}
              <div className="pt-4 border-t border-stone-200 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <div className="flex items-center gap-2 font-bold text-stone-800 mb-1">
                  <FileCheck className="w-4 h-4 text-amber-800" />
                  <span>小叮嚀：第三方檢驗報告看日期</span>
                </div>
                合規油廠應定期提供當期最新批次檢驗報告（非三年前舊報告），若標章模糊或無報告序號者應提高警覺。
              </div>
            </div>
          </div>
        </div>

        {/* Sensory Test Quick Guide Strip */}
        <div className="mt-8 p-7 rounded-3xl bg-white border border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans shadow-parchment">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base shrink-0">
              1
            </div>
            <div>
              <h5 className="font-bold text-base sm:text-lg text-stone-900">觀色：清透原色</h5>
              <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                好油色澤自然，苦茶油呈淡金黃或微帶翠綠；亞麻仁油呈晶亮金黃琥珀色，無灰暗渾濁雜質。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base shrink-0">
              2
            </div>
            <div>
              <h5 className="font-bold text-base sm:text-lg text-stone-900">聞香：植物清香</h5>
              <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                新鮮冷壓油自帶種籽清香或淡雅茶香果香，若聞到任何油脂酸敗、油耗味或刺鼻魚腥味切勿食用。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base shrink-0">
              3
            </div>
            <div>
              <h5 className="font-bold text-base sm:text-lg text-stone-900">品味：回甘不膩</h5>
              <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                入口輕盈滑順，滴於手背試抹應在 1-2 分鐘內被角質層吸收不殘留厚重黏膩感。
              </p>
            </div>
          </div>
        </div>

        {/* Brand Guarantee Trust Card */}
        {shopUrl && (
          <div className="mt-8 p-7 sm:p-9 rounded-3xl bg-[#1A382B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-parchment font-sans">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-300 text-xs sm:text-sm font-bold">
                <Heart className="w-4 h-4 fill-current" />
                <span>尋常人家的安心保證</span>
              </div>
              <h4 className="font-serif-tc font-bold text-xl sm:text-2xl text-white">
                「有米的日子」全面通過五大好油標準
              </h4>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-xl">
                澤禾嚴格堅持 100% 物理低溫冷壓慢榨、全避光深色厚玻璃瓶、低酸價與 SGS 定期檢驗。每一滴都經得起專業檢驗與家人餐桌的考驗。
              </p>
            </div>
            <a
              href={buildShopUrl(shopUrl, { medium: 'buying_guide_trust_card', campaign: 'buying_guide_5steps' })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#C08A3E] hover:bg-[#A8742F] text-white font-bold text-sm sm:text-base transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
            >
              <span>前往官方特惠賣場選購</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
