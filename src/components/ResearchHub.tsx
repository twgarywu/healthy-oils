import React, { useState, useMemo } from 'react';
import { RESEARCH_ARTICLES, ResearchArticle } from '../data/researchData.ts';
import { BookOpen, ExternalLink, Calendar, Users, Award, X, ChevronRight, FileText, ShoppingBag } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface ResearchHubProps {
  shopUrl?: string;
}

export const ResearchHub: React.FC<ResearchHubProps> = ({ shopUrl }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalArticle, setSelectedModalArticle] = useState<ResearchArticle | null>(null);

  const categories = [
    { id: 'all', label: '全部科研文獻' },
    { id: 'cardio', label: '心血管健康' },
    { id: 'anti_inflam', label: '抗發炎抗氧化' },
    { id: 'gastro', label: '消化道修復' },
    { id: 'thermal', label: '烹飪熱穩定' },
  ];

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return RESEARCH_ARTICLES;
    return RESEARCH_ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="research-hub" className="py-12 md:py-16 bg-[#FBF9F5] border-b border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 md:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
            <span>國際醫學與科研文獻</span>
          </div>
          <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
            油怎麼吃才健康？ 看醫學研究怎麼說
          </h1>
          <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
            <p>
              我們嚴選刊登於《新英格蘭醫學期刊 (NEJM)》、《刺胳針 (The Lancet)》與美國心臟協會 (AHA) 等權威同儕審查文獻。
            </p>
            <p className="text-stone-500 text-sm sm:text-base md:text-lg">
              杜絕未經證實的網路流言與偏方，以嚴謹的生化數據透視日常油脂的真實健康效益。
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 pb-6 border-b border-stone-200 mb-8 font-sans">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm sm:text-base font-bold rounded-xl transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="text-sm font-medium text-stone-500 ml-auto hidden sm:inline">
            共收錄 {filteredArticles.length} 篇權威文獻
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-700/40 hover:shadow-parchment transition-all group"
            >
              <div className="space-y-4">
                {/* Journal & Year (Unboxed Metadata per Zero-Pill rule) */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-sans">
                  <span className="font-bold text-amber-900">{article.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.journal.split('(')[0].trim()}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono font-medium">{article.year}</span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif-tc font-bold text-lg sm:text-xl text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Abstract summary */}
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed line-clamp-3">
                  {article.abstractSummary}
                </p>

                {/* Sample Size */}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-600 pt-3 border-t border-stone-200">
                  <Users className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="truncate">{article.sampleSize}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-5 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">
                  {article.doiOrSource.split('/')[0]}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedModalArticle(article)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
                >
                  <span>閱讀重點</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Article Clinical Detail */}
        {selectedModalArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs font-sans">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-7 sm:p-10 relative">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedModalArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-sans mb-1.5">
                    <span className="font-bold text-amber-900">
                      {selectedModalArticle.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedModalArticle.journal}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{selectedModalArticle.year} 年發表</span>
                  </div>
                  <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                    {selectedModalArticle.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-2 font-sans">
                    研究學者：{selectedModalArticle.authors}
                  </p>
                </div>

                {/* Cohort / Sample Size */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-700">
                  <strong className="text-stone-900 font-bold">研究樣本：</strong>{' '}
                  {selectedModalArticle.sampleSize}
                </div>

                {/* Clinical Key Findings */}
                <div className="space-y-2.5">
                  <h4 className="text-sm uppercase tracking-wider font-bold text-stone-600 font-sans">
                    核心研究發現
                  </h4>
                  <div className="space-y-2.5">
                    {selectedModalArticle.clinicalKeyFindings.map((finding, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-sm sm:text-base text-stone-800 leading-relaxed font-sans"
                      >
                        {finding}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Takeaway */}
                <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-sm sm:text-base text-amber-950 font-sans">
                  <div className="font-bold text-amber-900 text-base mb-1.5">日常飲食建議：</div>
                  <p className="leading-relaxed">{selectedModalArticle.takeawayForDailyDiet}</p>
                </div>

                {/* Footer source */}
                <div className="pt-3 flex items-center justify-between text-xs sm:text-sm text-stone-500 border-t border-stone-100">
                  <span>文獻來源：{selectedModalArticle.doiOrSource}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedModalArticle(null)}
                    className="px-5 py-2.5 text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    關閉視窗
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {shopUrl && (
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE7DC] shadow-parchment flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-bold text-[#9E6B2C] font-sans">
                EVIDENCE-BASED NUTRITION · 科研實證好油
              </span>
              <h4 className="font-serif-tc font-bold text-xl sm:text-2xl text-[#1F1D1A]">
                將國際期刊的健康實證，落實在全家人的尋常餐桌
              </h4>
              <p className="text-sm text-stone-600 font-sans max-w-xl">
                有米的日子堅持物理初榨、不炒籽無化學溶劑，完整保存天然活性茶多酚與高濃度 Omega-3 ALA。
              </p>
            </div>
            <a
              href={buildShopUrl(shopUrl, { medium: 'research_hub_bottom', campaign: 'science_backed_nutrition' })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#1A382B] hover:bg-[#12281E] text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap font-sans shrink-0"
            >
              <ShoppingBag className="w-4 h-4 text-amber-200" />
              <span>前往官方特惠選購</span>
              <ExternalLink className="w-4 h-4 opacity-90" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
