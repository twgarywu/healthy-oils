import React from 'react';
import { ArrowDown, Flame, ShieldCheck, HeartHandshake, BookOpen } from 'lucide-react';

interface HeroProps {
  onExploreMatcher: () => void;
  onExploreDualStars: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMatcher, onExploreDualStars }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EB] to-[#FAF8F5]">
      {/* Subtle organic botanical background accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800">
              <span>現代營養生化科學</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>全方位食用油指南</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>2026 權威實證版</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 tracking-tight leading-[1.18] [text-wrap:balance]">
              打破「少油」迷思，
              <br />
              用<span className="text-amber-800 underline decoration-amber-600/30 decoration-wavy underline-offset-8">科學選好油</span>啟動全身抗發炎防禦
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              現代人外食充斥過量 Omega-6，促使體內長期處於慢性微發炎狀態。
              深入探討植物性 Omega-3 之王「<strong className="text-stone-900 font-semibold">亞麻仁油</strong>」與東方耐高溫液體黃金「<strong className="text-stone-900 font-semibold">苦茶油</strong>」，掌握人體脂肪酸黃金平衡與烹調發煙點，為全家人挑選真正安心的健康油脂。
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMatcher}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 active:bg-amber-950 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-300" />
                <span>立即體驗智慧配油速配器</span>
              </button>
              <button
                onClick={onExploreDualStars}
                className="px-6 py-3.5 text-sm font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-300/80 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>深入探索雙星主角</span>
              </button>
            </div>

            {/* Claim-to-proof mini trust markers */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>國際權威醫學期刊實證（NEJM / Lancet）</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-amber-700 shrink-0" />
                <span>衛福部國健署飲食脂質衛教依據</span>
              </div>
            </div>
          </div>

          {/* Right Column: Handcrafted Botanical Oil Showcase Illustration */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-br from-white to-[#F9F7F3] rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              {/* Botanical badge */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span className="font-display font-semibold text-sm text-stone-800">
                    雙星主角核心指標對照
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-mono">EDITION 2026</span>
              </div>

              {/* Graphic Botanical Drops Card */}
              <div className="py-6 space-y-4">
                {/* Flaxseed Oil Card */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 transition-all hover:bg-amber-50">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-800 text-white flex items-center justify-center font-display font-bold text-base shadow-xs">
                        Ω3
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-stone-900 text-base">
                          冷壓亞麻仁油
                        </h2>
                        <p className="text-xs text-stone-500">
                          植物性 Omega-3 (ALA) 之王
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold font-mono text-amber-900 tabular-nums">
                        55%
                      </span>
                      <span className="text-[11px] text-stone-500">α-亞麻酸含量</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-900/80">
                    <span>發煙點：<strong className="font-mono text-stone-900">107℃</strong>（嚴禁高溫加熱）</span>
                    <span className="text-amber-800 font-medium">適合：生飲涼拌</span>
                  </div>
                </div>

                {/* Camellia Oil Card */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 transition-all hover:bg-emerald-50">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-display font-bold text-base shadow-xs">
                        Ω9
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-stone-900 text-base">
                          冷壓苦茶油
                        </h2>
                        <p className="text-xs text-stone-500">
                          東方液體黃金 / 護胃高溫全能
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold font-mono text-emerald-900 tabular-nums">
                        252℃
                      </span>
                      <span className="text-[11px] text-stone-500">極高發煙點</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-900/80">
                    <span>單元油酸：<strong className="font-mono text-stone-900">82%</strong>（勝橄欖油）</span>
                    <span className="text-emerald-800 font-medium">適合：煎炒炸生飲</span>
                  </div>
                </div>
              </div>

              {/* Bottom Botanical Note */}
              <div className="pt-2 text-center">
                <p className="text-xs text-stone-500 italic">
                  「選對好油，讓每一餐烹調都是對血管與細胞膜的深層滋養。」
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Full-Width Key Science Proof Strips (Section Rhythm & Claim-to-Proof) */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs uppercase tracking-wider text-stone-500 font-sans mb-1">
              脂肪酸攝取警訊
            </div>
            <div className="text-2xl font-bold font-mono text-amber-900 tabular-nums">
              1 : 15 ~ 20
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              現代人日常飲食中 Omega-6 與 Omega-3 比例嚴重失衡，理想健康黃金比例應為 <strong className="text-stone-900">1:1 ~ 1:4</strong>。
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs uppercase tracking-wider text-stone-500 font-sans mb-1">
              中式料理耐溫極限
            </div>
            <div className="text-2xl font-bold font-mono text-emerald-900 tabular-nums">
              252℃ (485℉)
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              苦茶油具備植物油中罕見的超高發煙點與 82% 穩定油酸，大火熱炒與煎炸幾無致癌油煙。
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs uppercase tracking-wider text-stone-500 font-sans mb-1">
              純植物性抗發炎關鍵
            </div>
            <div className="text-2xl font-bold font-mono text-amber-900 tabular-nums">
              55% ~ 60% ALA
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              亞麻仁油為全素食者補充 Omega-3 必需脂肪酸的最高效天然來源，晨間生飲一匙即可達標。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
