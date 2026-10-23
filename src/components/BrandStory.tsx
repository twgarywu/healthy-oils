import React from 'react';
import { BRAND_INFO, BrandProduct } from '../data/brandData.ts';
import { buildShopUrl } from '../utils/utmHelper.ts';
import {
  Heart,
  Droplets,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageCircleHeart,
  ArrowRight,
  HelpCircle,
  Award,
  ShoppingBag
} from 'lucide-react';

interface BrandStoryProps {
  shopUrl: string;
  onOpenStoreModal?: () => void;
  onNavigateTab: (tabId: string) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({
  shopUrl,
  onOpenStoreModal,
  onNavigateTab
}) => {
  return (
    <section id="brand-story" className="py-12 md:py-16 bg-[#FBF9F5] border-b border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ---------------- 1. BRAND HERO STORY (Unified Top Header + Story Card) ---------------- */}
        <div>
          <div className="max-w-4xl mb-10 md:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
              <Heart className="w-4 h-4 text-[#9E6B2C] fill-current" />
              <span>品牌故事 · 澤禾 有米的日子</span>
            </div>

            <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
              {BRAND_INFO.founderStory.title}
            </h1>

            <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
              <p>
                尋常餐桌上的安心好油，源自一位父親對全家人健康最純粹的執著。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-[#EDE7DC] shadow-parchment relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="space-y-5 text-stone-700 text-base sm:text-lg md:text-xl leading-loose font-sans">
                {BRAND_INFO.founderStory.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EDE7DC]">
                <blockquote className="font-serif-tc italic text-[#9E6B2C] text-lg sm:text-xl md:text-2xl font-bold">
                  {BRAND_INFO.founderStory.quote}
                </blockquote>
              </div>

              {/* Direct CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={buildShopUrl(shopUrl, { medium: 'brandstory_hero_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#9E6B2C] hover:bg-[#855720] text-white font-bold text-base transition-all shadow-xs flex items-center gap-2.5 cursor-pointer font-sans"
                >
                  <ShoppingBag className="w-5 h-5 text-amber-200" />
                  <span>前往「有米的日子」官方特惠賣場</span>
                  <ExternalLink className="w-4 h-4 opacity-90" />
                </a>
              </div>
            </div>
          </div>
        </div>

      {/* ---------------- 2. OUR FOUR PROMISES ---------------- */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-sm uppercase tracking-wider font-bold text-[#9E6B2C] font-sans">
            OUR PROMISE
          </span>
          <h2 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1D1A]">
            四個不退讓的安心承諾
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans">
            不談複雜的化學式，只用透明的良心，替每一口料理把關。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BRAND_INFO.promises.map((promise, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-[#9E6B2C] flex items-center justify-center font-bold text-sm font-serif-tc">
                0{idx + 1}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif-tc font-bold text-base sm:text-lg text-stone-900">
                  {promise.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 3. FLAGSHIP PRODUCTS ---------------- */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-sm uppercase tracking-wider font-bold text-[#9E6B2C] font-sans">
            SIGNATURE OILS
          </span>
          <h2 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] leading-tight">
            有米的日子：兩瓶尋常餐桌的核心好油
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            一瓶晨起冷拌，一瓶高溫熱炒，冷熱分工、各司其職。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BRAND_INFO.products.map((prod) => {
            const isFlax = prod.id === 'brand-flaxseed';
            return (
              <div
                key={prod.id}
                className="rounded-3xl p-7 sm:p-9 border bg-white border-[#E8E2D8] shadow-parchment flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  {/* Badge & Title */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold font-sans ${
                          isFlax
                            ? 'bg-amber-100 text-[#9E6B2C]'
                            : 'bg-emerald-100 text-emerald-900'
                        }`}
                      >
                        {prod.badge}
                      </span>
                      <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#1F1D1A]">
                        {prod.name}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-500 font-sans">
                        {prod.subtitle}
                      </p>
                    </div>

                    <div
                      className={`w-13 h-13 rounded-2xl text-white flex items-center justify-center font-serif-tc font-bold text-base shadow-xs shrink-0 ${
                        isFlax ? 'bg-[#9E6B2C]' : 'bg-[#1A362B]'
                      }`}
                    >
                      {isFlax ? 'Ω3' : 'Ω9'}
                    </div>
                  </div>

                  {/* Highlights Card */}
                  <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-2.5 text-sm sm:text-base font-sans">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                      <span className="text-stone-500">脂肪酸特徵</span>
                      <strong className="text-stone-900 font-mono font-bold">{prod.omegaProfile}</strong>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                      <span className="text-stone-500">發煙點溫控</span>
                      <strong
                        className={`font-mono font-bold ${isFlax ? 'text-red-700' : 'text-emerald-800'}`}
                      >
                        {prod.smokePoint}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">包裝容量</span>
                      <span className="text-stone-800 font-medium">{prod.volume}</span>
                    </div>
                  </div>

                  {/* Taste description */}
                  <div className="space-y-1.5">
                    <div className="text-sm sm:text-base font-bold text-stone-800 font-sans">風味品鑑：</div>
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E2D8] font-sans">
                      {prod.tasteDescription}
                    </p>
                  </div>

                  {/* Best uses */}
                  <div className="space-y-2 font-sans">
                    <div className="text-sm sm:text-base font-bold text-stone-800">推薦家庭日常食用方式：</div>
                    <ul className="space-y-1.5 text-sm sm:text-base text-stone-700">
                      {prod.bestUses.map((use, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-1 ${
                              isFlax ? 'text-[#9E6B2C]' : 'text-emerald-700'
                            }`}
                          />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="pt-5 border-t border-[#E8E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm text-stone-600 font-medium font-sans whitespace-nowrap">
                    {prod.priceNote || '新鮮冷壓初榨製作'}
                  </span>
                  <a
                    href={buildShopUrl(shopUrl, { medium: 'brandstory_product_card', content: prod.id })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-[#1A362B] hover:bg-[#13271F] text-white font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer font-sans whitespace-nowrap shrink-0"
                  >
                    <span>前往官方特惠選購</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- 4. REAL CUSTOMER REVIEWS ---------------- */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-sm uppercase tracking-wider font-bold text-[#9E6B2C] font-sans">
            TESTIMONIALS
          </span>
          <h2 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1D1A]">
            尋常餐桌上的真實改變
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans">
            來自每日常煮家庭、外食族與上班族的真實反饋。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_INFO.testimonials.map((testi, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-[#E8E2D8] shadow-parchment space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-bold text-[#9E6B2C] bg-amber-50 px-3 py-1 rounded-md inline-block font-sans border border-amber-100">
                  {testi.highlight}
                </span>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic font-sans">
                  「{testi.feedback}」
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-sm text-stone-500 font-sans">
                <strong className="text-stone-900 font-bold">{testi.name}</strong>
                <span>{testi.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 5. NAVIGATION PROMPT TO SCIENCE CHAPTERS ---------------- */}
      <section className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif-tc font-bold text-base text-stone-900">
            想要更深入了解食用油的發煙點與生化結構？
          </h4>
          <p className="text-xs text-stone-500 font-sans">
            歡迎查閱全站完整的「食用油發煙點圖鑑」或「Omega 3-6-9 脂肪酸全解析」
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigateTab('smoke_points')}
            className="px-4 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            查發煙點圖鑑
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab('dual_stars')}
            className="px-4 py-2 rounded-xl bg-[#1A362B] hover:bg-[#13271F] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            看雙星深度對比
          </button>
        </div>
      </section>
      </div>
    </section>
  );
};
