import React, { useState, useMemo } from 'react';
import { OILS_DATABASE, COOKING_TECHNIQUES, OilProfile, CookingTechnique } from '../data/oilData.ts';
import { Search, Filter, Flame, Thermometer, Check, AlertCircle, Info, Sparkles, ChefHat, ArrowRight, ExternalLink, ShoppingBag } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface SmokePointGuideProps {
  shopUrl?: string;
}

export const SmokePointGuide: React.FC<SmokePointGuideProps> = ({ shopUrl }) => {
  // Interactive Matcher State
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<'raw' | 'water_fry' | 'medium_saute' | 'high_fry'>('medium_saute');
  const [selectedHealthPriority, setSelectedHealthPriority] = useState<string>('all');

  // Table Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'mufa' | 'pufa' | 'sfa'>('all');
  const [tempThreshold, setTempThreshold] = useState<number>(100);

  // Active cooking technique info
  const activeTechnique = COOKING_TECHNIQUES.find((t) => t.id === selectedTechniqueId) || COOKING_TECHNIQUES[0];

  // Matcher recommended oils
  const matchedOils = useMemo(() => {
    return OILS_DATABASE.filter((oil) => {
      // Must be physically safe for this cooking method
      const isSuitable = oil.suitableCooking.includes(selectedTechniqueId);
      if (!isSuitable) return false;

      // Filter by health priority
      if (selectedHealthPriority === 'anti_inflam') {
        return oil.omega3Percent >= 10 || oil.id === 'flaxseed-oil' || oil.id === 'perilla-oil';
      }
      if (selectedHealthPriority === 'cardio') {
        return oil.mufaPercent >= 60; // High oleic Omega-9
      }
      if (selectedHealthPriority === 'stomach') {
        return oil.id === 'camellia-oil' || oil.id === 'evoo';
      }
      if (selectedHealthPriority === 'low_smoke') {
        return oil.smokePointC >= 220;
      }
      return true;
    }).sort((a, b) => {
      // Prioritize spotlight oils
      if (a.isSpotlight && !b.isSpotlight) return -1;
      if (!a.isSpotlight && b.isSpotlight) return 1;
      return b.smokePointC - a.smokePointC;
    });
  }, [selectedTechniqueId, selectedHealthPriority]);

  // Table filtered oils
  const tableOils = useMemo(() => {
    return OILS_DATABASE.filter((oil) => {
      // Search text
      const matchesSearch =
        oil.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        oil.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        oil.tasteProfile.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      // Category
      if (categoryFilter === 'mufa' && oil.mufaPercent < 50) return false;
      if (categoryFilter === 'pufa' && oil.pufaPercent < 40) return false;
      if (categoryFilter === 'sfa' && oil.sfaPercent < 30) return false;

      // Temp threshold slider
      if (oil.smokePointC < tempThreshold) return false;

      return true;
    }).sort((a, b) => b.smokePointC - a.smokePointC);
  }, [searchQuery, categoryFilter, tempThreshold]);

  return (
    <section id="smoke-points" className="py-12 md:py-16 bg-[#FBF9F5] border-b border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 md:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] mb-3 font-sans">
            <span>廚房溫控與料理實用</span>
          </div>
          <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] tracking-tight leading-tight">
            哪種油適合幾度的鍋？<br className="hidden md:inline" />
            <span className="text-[#C08A3E] inline-block">發煙點圖鑑</span> 與 <span className="text-[#1A382B] inline-block">配油小幫手</span>
          </h1>
          <div className="mt-3 sm:mt-4 space-y-2 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl">
            <p>
              油加熱一旦超過其<span className="font-semibold text-stone-900">「發煙點」</span>，便會裂解產生刺激性油煙與有害氧化物。
            </p>
            <p className="text-stone-500 text-sm sm:text-base md:text-lg">
              依料理溫度正確選油：低溫冷拌、高溫爆炒各司其職，是守護全家人呼吸道與健康的第一步。
            </p>
          </div>
        </div>

        {/* ----------------- INTERACTIVE MATCHER TOOL ----------------- */}
        <div className="mb-16 bg-white border border-amber-900/15 rounded-3xl p-7 sm:p-10 md:p-12 shadow-parchment relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* Tool Title */}
          <div className="flex items-center gap-3.5 pb-6 border-b border-stone-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center shadow-xs shrink-0">
              <ChefHat className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-stone-900">
                料理配油小幫手
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-sans mt-0.5">
                選擇烹調方式與健康需求，快速找到適合的好油。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Step 1 & Step 2 Controls */}
            <div className="lg:col-span-5 space-y-7">
              {/* Step 1: Cooking Technique */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-stone-700 font-sans mb-3">
                  步驟一：選擇預計的烹調方式
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COOKING_TECHNIQUES.map((tech) => {
                    const isSelected = tech.id === selectedTechniqueId;
                    return (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => setSelectedTechniqueId(tech.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                            : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100/80'
                        }`}
                      >
                        <div className="font-bold text-base leading-tight">{tech.nameZh}</div>
                        <div
                          className={`text-sm mt-1 font-mono font-medium ${
                            isSelected ? 'text-amber-200' : 'text-stone-500'
                          }`}
                        >
                          {tech.tempRange}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3.5 p-4 rounded-xl bg-stone-50 border border-stone-200 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  <span className="font-bold text-stone-900">{activeTechnique.nameZh}特點：</span>
                  {activeTechnique.description}
                </div>
              </div>

              {/* Step 2: Health Priority */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-stone-700 font-sans mb-3">
                  步驟二：選擇您的首要健康訴求
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'all', label: '全部兼顧' },
                    { id: 'anti_inflam', label: '抗發炎 / 補充 Omega-3' },
                    { id: 'cardio', label: '心血管保護 (高油酸)' },
                    { id: 'stomach', label: '保護胃黏膜 (山茶多酚)' },
                    { id: 'low_smoke', label: '穩定耐高溫無油煙' },
                  ].map((pri) => (
                    <button
                      key={pri.id}
                      type="button"
                      onClick={() => setSelectedHealthPriority(pri.id)}
                      className={`py-2.5 px-3.5 text-sm font-bold rounded-xl border transition-all text-left truncate cursor-pointer ${
                        selectedHealthPriority === pri.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {pri.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results: Recommended Oils */}
            <div className="lg:col-span-7 lg:border-l lg:border-stone-200 lg:pl-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-wider font-bold text-stone-600 font-sans">
                  計算推薦油品清單（{matchedOils.length} 種合適）
                </span>
                <span className="text-sm text-amber-800 font-bold flex items-center gap-1.5 font-sans">
                  <Sparkles className="w-4 h-4" />
                  安全發煙點高於烹調溫度
                </span>
              </div>

              {matchedOils.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-stone-50 border border-stone-200 text-stone-600 font-sans">
                  <AlertCircle className="w-9 h-9 text-amber-700 mx-auto mb-2" />
                  <p className="text-base font-bold">此特定健康條件下，此高溫烹調法無推薦油品。</p>
                  <p className="text-sm text-stone-500 mt-1">
                    提示：Omega-3 油品（如亞麻仁油）極不耐熱，請切換為「冷拌生飲」方式。
                  </p>
                </div>
              ) : (
                <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                  {matchedOils.map((oil) => (
                    <div
                      key={oil.id}
                      className={`p-5 rounded-2xl border transition-all font-sans ${
                        oil.isSpotlight
                          ? 'bg-amber-50/60 border-amber-300 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif-tc font-bold text-lg sm:text-xl text-stone-900">
                              {oil.name}
                            </h4>
                            {oil.isSpotlight && (
                              <span className="text-xs font-bold text-amber-900 bg-amber-200 px-2.5 py-0.5 rounded-full font-sans">
                                焦點推薦
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-stone-500 font-sans">{oil.englishName}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs sm:text-sm text-stone-500 font-medium">發煙點</div>
                          <div className="text-lg sm:text-xl font-bold font-mono text-stone-900 tabular-nums">
                            {oil.smokePointC}℃
                          </div>
                        </div>
                      </div>

                      {/* Fatty acid balance mini pills */}
                      <div className="mt-3 flex items-center gap-3 text-xs sm:text-sm text-stone-600">
                        <span>
                          單元 (Ω9): <strong className="font-mono text-stone-900 font-bold">{oil.mufaPercent}%</strong>
                        </span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span>
                          多元 (Ω3/6): <strong className="font-mono text-stone-900 font-bold">{oil.pufaPercent}%</strong>
                        </span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span>
                          飽和: <strong className="font-mono text-stone-900 font-bold">{oil.sfaPercent}%</strong>
                        </span>
                      </div>

                      {/* Best Culinary Application for this method */}
                      <p className="mt-2.5 text-sm sm:text-base text-stone-700 bg-white/80 p-3 rounded-xl border border-stone-200/60 leading-relaxed">
                        <strong className="text-amber-900 font-bold">推薦用法：</strong>
                        {oil.cookingDescriptions[0]}。{oil.healthHighlights[0]}
                      </p>

                      {oil.isSpotlight && shopUrl && (
                        <div className="mt-3 pt-2.5 border-t border-amber-200/70 flex items-center justify-between gap-2">
                          <span className="text-xs text-amber-900 font-medium">有米的日子 · 100% 第一道冷壓初榨</span>
                          <a
                            href={buildShopUrl(shopUrl, { medium: 'smokepoint_spotlight_card', content: oil.id })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A382B] hover:bg-[#12281E] text-white text-xs font-bold transition-all shadow-2xs"
                          >
                            <span>前往官方特惠選購</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Store CTA */}
              {shopUrl && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-amber-950 block">尋找適合居家烹調的安心冷壓油？</span>
                    <span className="text-[11px] text-stone-600">有米的日子 · 澤禾黃金亞麻仁油（涼拌生飲）與特級苦茶油（252℃ 煎炒無油煙）</span>
                  </div>
                  <a
                    href={buildShopUrl(shopUrl, { medium: 'smokepoint_matcher_bottom', campaign: 'kitchen_cooking_guide' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1 shadow-2xs"
                  >
                    <span>官網特惠選購</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ----------------- COMPREHENSIVE SMOKE POINT TABLE ----------------- */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="space-y-1">
              <h3 className="font-serif-tc text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                14 種常見食用油發煙點圖鑑
              </h3>
              <p className="text-sm text-stone-600 font-sans">
                整理各油品的發煙點、脂肪酸組成與適合的料理方式。
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜尋油品名稱或風味..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>
          </div>

          {/* Filters Bar & Temp Slider */}
          <div className="py-4 border-b border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-stone-500 mr-1">脂肪酸過濾：</span>
              {[
                { id: 'all', label: '全部油品' },
                { id: 'mufa', label: '高單元不飽和 (Omega-9)' },
                { id: 'pufa', label: '高多元不飽和 (Omega-3/6)' },
                { id: 'sfa', label: '高飽和脂肪' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setCategoryFilter(btn.id as any)}
                  className={`px-2.5 py-1.5 rounded-md font-medium transition-colors ${
                    categoryFilter === btn.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Minimum Temperature Slider */}
            <div className="flex items-center gap-3 text-xs text-stone-600 w-full sm:w-auto">
              <Thermometer className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="whitespace-nowrap">最低發煙點門檻：</span>
              <input
                type="range"
                min="100"
                max="250"
                step="10"
                value={tempThreshold}
                onChange={(e) => setTempThreshold(Number(e.target.value))}
                className="w-28 accent-amber-800 cursor-pointer"
              />
              <span className="font-mono font-bold text-stone-900 tabular-nums min-w-[50px]">
                ≥ {tempThreshold}℃
              </span>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b border-stone-200 text-stone-600 font-sans text-xs sm:text-sm font-bold">
                  <th className="py-4 px-3.5">食用油品名稱</th>
                  <th className="py-4 px-3.5">發煙點 (℃ / ℉)</th>
                  <th className="py-4 px-3.5">單元不飽和 (MUFA)</th>
                  <th className="py-4 px-3.5">多元不飽和 (PUFA)</th>
                  <th className="py-4 px-3.5">飽和脂肪 (SFA)</th>
                  <th className="py-4 px-3.5">適合料理</th>
                  <th className="py-4 px-3.5">烹飪禁忌與注意事項</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 font-sans">
                {tableOils.map((oil) => {
                  return (
                    <tr
                      key={oil.id}
                      className={`hover:bg-stone-50/80 transition-colors ${
                        oil.isSpotlight ? 'bg-amber-50/40' : ''
                      }`}
                    >
                      {/* Name */}
                      <td className="py-4 px-3.5">
                        <div className="font-bold text-stone-900 text-sm sm:text-base">
                          {oil.name}
                        </div>
                        <div className="text-xs text-stone-400 font-sans">
                          {oil.englishName}
                        </div>
                      </td>

                      {/* Smoke Point */}
                      <td className="py-4 px-3.5">
                        <span
                          className={`font-mono text-base font-bold tabular-nums ${
                            oil.smokePointC >= 230
                              ? 'text-emerald-800'
                              : oil.smokePointC >= 180
                              ? 'text-amber-800'
                              : 'text-red-700'
                          }`}
                        >
                          {oil.smokePointC}℃
                        </span>
                        <span className="text-xs text-stone-400 block font-mono">
                          {oil.smokePointF}℉
                        </span>
                      </td>

                      {/* MUFA */}
                      <td className="py-4 px-3.5 font-mono font-medium tabular-nums text-sm sm:text-base">
                        <span className={oil.mufaPercent >= 70 ? 'text-emerald-800 font-bold' : ''}>
                          {oil.mufaPercent}%
                        </span>
                      </td>

                      {/* PUFA */}
                      <td className="py-4 px-3.5 font-mono font-medium tabular-nums text-sm sm:text-base">
                        <span>{oil.pufaPercent}%</span>
                        {oil.omega3Percent > 10 && (
                          <span className="text-xs text-amber-800 font-bold block">
                            (Ω3: {oil.omega3Percent}%)
                          </span>
                        )}
                      </td>

                      {/* SFA */}
                      <td className="py-4 px-3.5 font-mono font-medium tabular-nums text-stone-500 text-sm sm:text-base">
                        {oil.sfaPercent}%
                      </td>

                      {/* Suitable Cooking */}
                      <td className="py-4 px-3.5">
                        <div className="flex flex-wrap gap-1.5">
                          {oil.suitableCooking.includes('raw') && (
                            <span className="px-2 py-0.5 rounded text-xs bg-stone-100 text-stone-700 font-medium">
                              涼拌生飲
                            </span>
                          )}
                          {oil.suitableCooking.includes('water_fry') && (
                            <span className="px-2 py-0.5 rounded text-xs bg-stone-100 text-stone-700 font-medium">
                              水炒
                            </span>
                          )}
                          {oil.suitableCooking.includes('medium_saute') && (
                            <span className="px-2 py-0.5 rounded text-xs bg-stone-100 text-stone-700 font-medium">
                              熱炒香煎
                            </span>
                          )}
                          {oil.suitableCooking.includes('high_fry') && (
                            <span className="px-2 py-0.5 rounded text-xs bg-emerald-100 text-emerald-800 font-bold">
                              耐大火油炸
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Caution */}
                      <td className="py-4 px-3.5 text-xs sm:text-sm text-stone-700 max-w-xs leading-relaxed">
                        {oil.caution}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
