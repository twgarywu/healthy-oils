import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  Heart,
  Flame,
  Droplets,
  ExternalLink,
  ShieldCheck,
  Award,
  Coffee,
  CheckCircle2,
  Utensils,
  Leaf,
  ShoppingBag,
  Star,
  FileCheck,
  XCircle,
  HelpCircle,
  CheckCircle,
  Sun,
  Shield
} from 'lucide-react';
import { BRAND_INFO } from '../data/brandData.ts';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface QuestionItem {
  id: string;
  emoji: string;
  tag: string;
  title: string;
  quote: string;
  insight: string;
  recommendation: {
    oilName: string;
    advice: string;
    targetBottleId: string;
  };
}

const HUMAN_DIAGNOSTIC_QUESTIONS: QuestionItem[] = [
  {
    id: 'eating_out',
    emoji: '🍱',
    tag: '三餐外食',
    title: '三餐經常依賴外食、外送便當？',
    quote: '「吃完油膩便當，身體沉重、口渴想喝手搖飲。」',
    insight:
      '外食多用反覆高溫油炸的沙拉油，Omega-6 嚴重過量，容易誘發體內低度發炎。',
    recommendation: {
      oilName: '澤禾黃金亞麻仁油 (250ml)',
      advice:
        '早晨空腹生飲一匙（約 10ml）或拌入優格、豆漿。富含 55% Omega-3，幫助平衡外食負擔。',
      targetBottleId: 'brand-flaxseed'
    }
  },
  {
    id: 'stomach',
    emoji: '🍵',
    tag: '消化道關懷',
    title: '吃稍微油膩容易脹氣、消化慢？',
    quote: '「只要吃得稍微油一點，胃就悶脹不適。」',
    insight:
      '化學精煉油容易刺激胃黏膜，引發消化不適。',
    recommendation: {
      oilName: '澤禾 100% 苦茶油 (500ml)',
      advice:
        '改用低溫初榨苦茶油熱炒，或晨起空腹 5-10ml。富含 82% 油酸與山茶多酚，溫和護胃。',
      targetBottleId: 'brand-camellia'
    }
  },
  {
    id: 'cooking_smoke',
    emoji: '🍳',
    tag: '廚房油煙呼吸',
    title: '下廚熱炒或煎魚時，油煙大且刺鼻？',
    quote: '「大火爆炒時抽油煙機開最大還是嗆咳，廚房牆壁黏膩難清。」',
    insight:
      '鍋溫已超過油品發煙點，裂解產生刺鼻油煙，吸入傷呼吸道。',
    recommendation: {
      oilName: '澤禾 100% 苦茶油 (500ml)',
      advice:
        '發煙點達 252℃，大火熱炒煎魚幾乎無油煙，告別嗆咳，維護呼吸健康。',
      targetBottleId: 'brand-camellia'
    }
  },
  {
    id: 'single_oil',
    emoji: '🧂',
    tag: '餐桌雙油觀念',
    title: '廚房只有「一罐油」，煎煮炒炸用到底？',
    quote: '「習慣只買一大桶油，冷拌或大火爆炒都用同一瓶。」',
    insight:
      '沒有任何一種油能同時兼顧「超高 Omega-3 營養」與「250℃ 高溫爆炒」。',
    recommendation: {
      oilName: '【有米的日子】餐桌雙油守護組',
      advice:
        '冷熱分工：亞麻仁油負責低溫生飲冷拌（補 Omega-3），苦茶油負責高溫大火熱炒（耐熱護胃）。',
      targetBottleId: 'bundle-duo'
    }
  }
];

interface CleanInteractiveLandingProps {
  shopUrl: string;
  onNavigateTab: (tabId: string) => void;
}

export const CleanInteractiveLanding: React.FC<CleanInteractiveLandingProps> = ({
  shopUrl,
  onNavigateTab
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const toggleQuestion = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scrollToDiagnostic = () => {
    document.getElementById('lifestyle-diagnostic')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFlagship = () => {
    document.getElementById('zeheart-flagship')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-28 pb-32">
      {/* ---------------- 1. BRIGHTLAND-STYLE EDITORIAL HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#FBF9F5] border-b border-[#EDE7DC] py-12 md:py-16">
        {/* Soft Organic Background Glows */}
        <div className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/5 w-[480px] h-[480px] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-10 md:mb-12">
            {/* Minimalist Botanical Eyebrow */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C08A3E]" />
              <span className="font-serif-tc font-bold tracking-wider text-[#1A382B]">
                有米的日子 · 澤禾
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600 font-sans">尋常餐桌上的安心好油</span>
            </div>

            {/* Poetic & Confident Serif Headline */}
            <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
              <span>把最好的油</span> <span className="inline-block">留給最愛的人</span>
            </h1>

            {/* Approachable, Warm Human Copy */}
            <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
              <p className="text-stone-800 font-medium">
                少吃油不等於比較健康，吃對好油才是關鍵。
              </p>
              <p>
                我們嚴選<strong className="text-[#1F1D1A] font-bold">高山成熟小果</strong>與<strong className="text-[#1F1D1A] font-bold">加拿大黃金亞麻籽</strong>。第一道冷壓初榨，不炒籽、不加化學溶劑。
              </p>
            </div>

            {/* 3 Real Brand Sourcing & Safety Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone-700 font-sans font-medium">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#EDE7DC] shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>高山小果 · 拒用發霉落地籽</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#EDE7DC] shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>第一道初榨 · 不炒籽不燥熱</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#EDE7DC] shadow-xs">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>410項農藥 / 黃麴毒素 / 苯駢芘 零檢出</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={scrollToDiagnostic}
                className="px-8 py-3.5 rounded-full bg-[#1A382B] hover:bg-[#12281E] text-white font-bold text-base transition-all shadow-parchment hover:shadow-parchment-lg flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>30 秒家庭用油生活自測</span>
              </button>

              <a
                href={buildShopUrl(shopUrl, { medium: 'landing_hero_cta' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#C08A3E] hover:bg-[#A8742F] text-white font-bold text-base transition-all shadow-parchment flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <ShoppingBag className="w-5 h-5 text-amber-100" />
                <span>前往「有米的日子」官方特惠賣場</span>
                <ExternalLink className="w-4 h-4 opacity-90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. BRIGHTLAND-STYLE "THE DUO" PRODUCT STAGE (雙星油品藝術展台) ---------------- */}
      <section id="zeheart-flagship" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#C08A3E] uppercase tracking-wider font-sans">
            <Award className="w-4 h-4" />
            <span>THE ESSENTIAL DUO · 尋常餐桌核心雙星</span>
          </div>
          <h2 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] leading-tight">
            兩瓶好油 守護全家餐桌<br className="hidden md:inline" />
            <span className="inline-block text-[#1A382B]">100% 苦茶油</span> 與 <span className="inline-block text-[#C08A3E]">黃金亞麻仁油</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans max-w-2xl mx-auto">
            一瓶負責高溫熱炒，一瓶負責生飲涼拌，冷熱分工、各司其職。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BOTTLE 1: 澤禾 100% 苦茶油 (The Sizzle / 煎煮炒炸) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EDE7DC] shadow-parchment hover:shadow-parchment-lg transition-all flex flex-col justify-between space-y-8 relative group">
            <div className="space-y-6">
              {/* Product Badge & Head */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full inline-block font-sans">
                    中式大火熱炒 252℃ 零油煙
                  </span>
                  <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-[#22201D]">
                    澤禾 100% 苦茶油
                  </h3>
                  <p className="text-sm sm:text-base text-stone-500 font-sans">
                    大容量 500 ml 避光加厚深色玻璃瓶裝 · 台灣製造
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#1A382B] text-white flex items-center justify-center font-serif-tc font-bold text-lg shadow-xs shrink-0">
                  Ω9
                </div>
              </div>

              {/* Exact Features matching zeheart.com */}
              <div className="space-y-3 font-sans">
                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1.5">
                  <div className="font-bold text-base text-[#1A382B] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>原料與工藝：</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    嚴選高山成熟小果（拒用落地籽）。第一道低溫初榨，不炒籽、無化學溶劑。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1.5">
                  <div className="font-bold text-base text-emerald-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>安心檢驗：</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    SGS 檢驗：410 項農藥殘留、黃麴毒素、苯駢芘皆未檢出。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1.5">
                  <div className="font-bold text-base text-stone-800 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#C08A3E]" />
                    <span>推薦用法：</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    發煙點 252℃。適合家常熱炒、煎蛋、拌麵線，或晨起空腹生飲 5-10ml 護胃。
                  </p>
                </div>
              </div>
            </div>

            {/* Price & Official Checkout Button */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs sm:text-sm text-stone-500 block font-sans">官方特惠參考價</span>
                <span className="font-serif-tc font-bold text-2xl sm:text-3xl text-[#1A382B]">NT$950 起</span>
              </div>

              <a
                href={buildShopUrl(BRAND_INFO.camelliaShopUrl || shopUrl, { medium: 'landing_camellia_card', content: 'camellia' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#1A382B] hover:bg-[#12281E] text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-xs font-sans whitespace-nowrap"
              >
                <span>前往官網特惠選購</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* BOTTLE 2: 澤禾黃金亞麻仁油 (The Drizzle / 生飲冷拌) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EDE7DC] shadow-parchment hover:shadow-parchment-lg transition-all flex flex-col justify-between space-y-8 relative group">
            <div className="space-y-6">
              {/* Product Badge & Head */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3.5 py-1.5 rounded-full inline-block font-sans">
                    生飲涼拌首選 · 植物性 Omega-3
                  </span>
                  <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-[#22201D]">
                    澤禾黃金亞麻仁油
                  </h3>
                  <p className="text-sm sm:text-base text-stone-500 font-sans">
                    250 ml 避光加厚深色玻璃瓶裝 · 冷壓保鮮
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#C08A3E] text-white flex items-center justify-center font-serif-tc font-bold text-lg shadow-xs shrink-0">
                  Ω3
                </div>
              </div>

              {/* Exact Features matching zeheart.com */}
              <div className="space-y-3 font-sans">
                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1.5">
                  <div className="font-bold text-base text-[#C08A3E] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-700" />
                    <span>原料與工藝：</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    特選加拿大非基改黃金亞麻籽，100% 物理冷壓初榨，無防腐劑與香料。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1.5">
                  <div className="font-bold text-base text-amber-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>核心營養：</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    Omega-3 (ALA) 高達 55%~60%，素食者的天然深海魚油。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1.5">
                  <div className="font-bold text-base text-stone-800 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#C08A3E]" />
                    <span>推薦用法：</span>
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    適合生飲，或拌入豆漿、優格、沙拉。<strong className="text-red-700">發煙點 107℃，嚴禁加熱烹調。</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Price & Official Checkout Button */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs sm:text-sm text-stone-500 block font-sans">官方特惠參考價</span>
                <span className="font-serif-tc font-bold text-2xl sm:text-3xl text-[#C08A3E]">NT$285 起</span>
              </div>

              <a
                href={buildShopUrl(BRAND_INFO.flaxseedShopUrl || shopUrl, { medium: 'landing_flaxseed_card', content: 'flaxseed' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#C08A3E] hover:bg-[#A8742F] text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-xs font-sans whitespace-nowrap"
              >
                <span>前往官網特惠選購</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. INTERACTIVE LIFESTYLE DIAGNOSTIC (乾淨、互動、生活化自測) ---------------- */}
      <section id="lifestyle-diagnostic" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-12 shadow-parchment space-y-9">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-100">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#C08A3E] uppercase tracking-wider font-sans">
                <Coffee className="w-4 h-4" />
                <span>30 秒生活用油自測 · 尋常餐桌用油諮詢室</span>
              </div>
              <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-[#22201D] leading-tight">
                聊聊你的餐桌日常，找回身體的油脂平衡
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-sans">
                點選符合您或家人的生活狀況（可複選），立刻了解適合的用油搭配。
              </p>
            </div>
            <div className="text-sm font-mono text-stone-700 bg-stone-100 px-4 py-2.5 rounded-xl shrink-0 border border-stone-200">
              已標記：<strong className="text-[#C08A3E] font-bold text-base">{selectedIds.length}</strong> / {HUMAN_DIAGNOSTIC_QUESTIONS.length} 項
            </div>
          </div>

          {/* 4 Clean Interactive Cards */}
          <div className="space-y-4">
            {HUMAN_DIAGNOSTIC_QUESTIONS.map((q) => {
              const isChecked = selectedIds.includes(q.id);
              return (
                <div
                  key={q.id}
                  onClick={() => toggleQuestion(q.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'bg-[#FAF6F0] border-[#D99B43] shadow-xs ring-1 ring-[#D99B43]/40'
                      : 'bg-[#FBF9F5]/70 border-[#EDE7DC] hover:bg-white hover:border-[#D5CDBD]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Minimalist Checkbox */}
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-1 transition-colors ${
                        isChecked
                          ? 'bg-[#1A382B] text-white'
                          : 'border border-stone-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{q.emoji}</span>
                        <h3 className="font-serif-tc font-bold text-lg sm:text-xl md:text-2xl text-[#22201D]">
                          {q.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-stone-700 italic bg-white/85 px-4 py-2.5 rounded-xl border border-stone-200/80 font-sans leading-relaxed">
                        {q.quote}
                      </p>

                      {isChecked && (
                        <div className="mt-4 pt-4 border-t border-[#EDE7DC] space-y-3 font-sans">
                          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                            <strong className="text-stone-900 font-bold">生活生理解析：</strong>
                            {q.insight}
                          </p>
                          <div className="p-4 rounded-xl bg-white border border-[#EDE7DC] text-[#1A382B] font-medium leading-relaxed flex items-start gap-3">
                            <span className="text-amber-700 font-bold text-base shrink-0">💡 專屬建議：</span>
                            <div>
                              <strong className="text-base sm:text-lg font-bold text-[#1A382B] underline decoration-[#C08A3E]/40 underline-offset-4 block mb-1">
                                {q.recommendation.oilName}
                              </strong>
                              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{q.recommendation.advice}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setShowFeedback(true);
                setTimeout(() => {
                  document.getElementById('prescription-result')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#1A382B] hover:bg-[#12281E] text-white font-bold text-base transition-all shadow-parchment flex items-center justify-center gap-2.5 cursor-pointer font-sans"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>生成專屬餐桌用油分析與處方建議</span>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- 4. PRESCRIPTION RESULT BRIDGE ---------------- */}
      {showFeedback && (
        <section id="prescription-result" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1B1917] text-stone-100 p-8 sm:p-12 shadow-parchment-lg space-y-7 border border-stone-800 relative overflow-hidden">
            <div className="space-y-2 pb-5 border-b border-stone-700">
              <span className="text-xs sm:text-sm font-mono text-amber-400 tracking-wider font-bold">
                PERSONALIZED PRESCRIPTION · 澤禾尋常餐桌好油處方
              </span>
              <h3 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {selectedIds.length === 0
                  ? '您的日常用油維持得非常棒！'
                  : '你的餐桌有些失衡訊號，建議改用「冷熱雙油分工」'}
              </h3>
            </div>

            <div className="space-y-3 text-base sm:text-lg text-stone-200 leading-relaxed font-sans">
              <p>
                多數家庭的負擔，不是吃得不夠好，而是在外食中不知不覺吃進太多精煉 Omega-6 油脂，或是大火炒菜時油溫超過發煙點而冒出刺鼻油煙。
              </p>
              <p className="text-stone-300">
                最簡單的改善，是替廚房換上這兩瓶清白純粹的好油：
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-2.5">
                <div className="text-amber-300 font-serif-tc font-bold text-base sm:text-lg flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  <span>晨起與冷拌：澤禾黃金亞麻仁油</span>
                </div>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                  早起一湯匙生飲、或拌入豆漿、優格、地瓜泥。嚴禁加熱！富含 55% Omega-3 ALA，為細胞築起天然抗發炎屏障。
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-2.5">
                <div className="text-emerald-300 font-serif-tc font-bold text-base sm:text-lg flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  <span>中式大火熱炒：澤禾 100% 苦茶油</span>
                </div>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                  煎蛋、煎豆腐、炒青菜、拌麵線。發煙點高達 252℃，高溫熱炒完全不起油煙，高山小果第一道初榨溫潤護胃。
                </p>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={buildShopUrl(shopUrl, { medium: 'landing_diagnostic_result', content: 'duo' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-base transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer font-sans"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>前往「有米的日子」官方特惠賣場選購</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onNavigateTab('brand_story')}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <span>閱讀品牌故事與安心承諾</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- 5. TRANSPARENT COMPARISON MATRIX (極致乾淨的市場對照表) ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-sm font-bold text-[#C08A3E] uppercase tracking-wider font-sans">
            CLEAR COMPARISON · 一目了然
          </span>
          <h2 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] leading-tight">
            市售大桶油 vs 澤禾「有米的日子」
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans">
            不說誇大的話，只用真實原料與檢驗數據，讓您安心比較。
          </p>
        </div>

        <div className="bg-white border border-[#EDE7DC] rounded-3xl overflow-hidden shadow-parchment">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              <thead>
                <tr className="border-b border-[#EDE7DC] bg-[#FBF9F5] text-stone-700 font-sans">
                  <th className="py-5 px-6 font-bold text-stone-900 text-base sm:text-lg w-1/4">比較指標</th>
                  <th className="py-5 px-6 font-semibold text-stone-600 text-sm sm:text-base w-3/8">
                    一般市售大桶油 / 平價精煉油
                  </th>
                  <th className="py-5 px-6 font-bold text-[#1A382B] text-base sm:text-lg w-3/8 bg-emerald-50/60">
                    🌿 澤禾「有米的日子」冷壓好油
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE7DC] text-stone-700 font-sans">
                {BRAND_INFO.comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-5 px-6 font-bold text-stone-900 font-serif-tc text-lg sm:text-xl">
                      {row.aspect}
                      <span className="block text-xs sm:text-sm font-sans font-normal text-stone-500 mt-1 leading-normal">
                        {row.why}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-stone-600 text-sm sm:text-base leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.marketStandard}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm sm:text-base font-semibold text-stone-900 leading-relaxed bg-emerald-50/25">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="font-bold text-[#1A382B]">{row.zeheartStandard}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- 6. POPULAR BUNDLES (太太一頁式熱銷組合方案) ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-sm font-bold text-[#C08A3E] uppercase tracking-wider font-sans">
            OFFICIAL BUNDLES · 人氣熱銷推薦
          </span>
          <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-[#22201D]">
            尋常餐桌人氣推薦組合
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans">
            依家庭料理習慣精心搭配，一鍵直達官方專屬特惠賣場。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_INFO.bundles.map((bundle, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={bundle.id}
                className={`p-7 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between space-y-6 ${
                  isFeatured
                    ? 'bg-white border-[#D99B43] shadow-parchment-lg ring-2 ring-[#D99B43]/30 relative'
                    : 'bg-white border-[#EDE7DC] shadow-parchment'
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C08A3E] text-white text-xs sm:text-sm font-bold shadow-xs whitespace-nowrap">
                    👑 新手家庭回購首選
                  </span>
                )}

                <div className="space-y-5">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#C08A3E] bg-amber-50 px-3 py-1 rounded-full inline-block mb-2 font-sans border border-amber-200/60">
                      {bundle.tag}
                    </span>
                    <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#22201D]">
                      {bundle.name}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-500 font-sans mt-1">
                      {bundle.subtitle}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-2 font-sans">
                    <div className="font-bold text-sm sm:text-base text-stone-900">內含項目：</div>
                    <ul className="space-y-1.5 text-sm sm:text-base text-stone-700">
                      {bundle.items.map((it, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
                    💡 <strong className="text-stone-900 font-bold">推薦：</strong>{bundle.bestFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-500 font-sans">組合特惠</span>
                    <span className="font-serif-tc font-bold text-[#C08A3E] text-base sm:text-lg">
                      {bundle.priceDisplay}
                    </span>
                  </div>

                  <a
                    href={shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full text-white font-bold text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer font-sans ${
                      isFeatured
                        ? 'bg-[#1A382B] hover:bg-[#12281E]'
                        : 'bg-[#C08A3E] hover:bg-[#A8742F]'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-100" />
                    <span>前往官方特惠賣場選購</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- 7. REAL TESTIMONIALS (尋常餐桌上的真實口碑) ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-sm font-bold text-[#C08A3E] uppercase tracking-wider font-sans">
            REAL FEEDBACK · 真實口碑
          </span>
          <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-[#22201D]">
            尋常餐桌上的真實改變
          </h3>
          <p className="text-base sm:text-lg text-stone-600 font-sans">
            聽聽跟您一樣重視家人健康的煮夫、媽媽與上班族怎麼說。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_INFO.testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-white border border-[#EDE7DC] shadow-parchment space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-bold text-[#C08A3E] bg-amber-50 px-3 py-1 rounded-md inline-block font-sans border border-amber-100">
                  {t.highlight}
                </span>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic font-sans">
                  「{t.feedback}」
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-sm text-stone-500 font-sans">
                <strong className="text-stone-900 font-bold">{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 8. FINAL BOTTOM CALL TO ACTION ---------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1A382B] text-white p-9 sm:p-14 text-center space-y-8 shadow-parchment-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C08A3E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-sm font-bold text-amber-300 uppercase tracking-widest font-sans">
              BRING PEACE OF MIND HOME
            </span>
            <h3 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              給家人最好的陪伴，從換上一瓶安心好油開始
            </h3>
            <div className="space-y-1.5 text-base sm:text-lg text-stone-200 leading-relaxed font-sans">
              <p>
                100% 物理低溫初榨、高山小果成熟果、深色避光瓶封存，410 項農藥零檢出。
              </p>
              <p className="text-stone-300 text-sm sm:text-base">
                點擊前往官方專屬特惠賣場，讓純淨鮮榨的好油直送到您的餐桌。
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-[#C08A3E] hover:bg-[#A8742F] text-white font-bold text-base sm:text-lg transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer font-sans"
            >
              <ShoppingBag className="w-5 h-5 text-amber-100" />
              <span>進入「有米的日子」官方特惠賣場</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onNavigateTab('brand_story')}
              className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-stone-800/90 hover:bg-stone-800 text-stone-200 font-bold text-sm sm:text-base transition-colors border border-stone-700 flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>了解品牌起源與檢驗報告</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
