import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { MAIN_TABS } from './data/navData.ts';
import { CleanInteractiveLanding } from './components/CleanInteractiveLanding.tsx';
import { BrandStory } from './components/BrandStory.tsx';
import { FattyAcidSection } from './components/FattyAcidSection.tsx';
import { SmokePointGuide } from './components/SmokePointGuide.tsx';
import { DualStarSpotlight } from './components/DualStarSpotlight.tsx';
import { BuyingGuide } from './components/BuyingGuide.tsx';
import { ResearchHub } from './components/ResearchHub.tsx';
import { Footer } from './components/Footer.tsx';
import { StoreUrlModal } from './components/StoreUrlModal.tsx';
import { BRAND_INFO } from './data/brandData.ts';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { updatePageSeo } from './utils/seoHelper.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [shopUrl, setShopUrl] = useState<string>(BRAND_INFO.defaultShopUrl);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  useEffect(() => {
    const savedUrl = localStorage.getItem('zeheart_shop_url');
    if (savedUrl && savedUrl.includes('zeheart.com')) {
      setShopUrl(savedUrl);
    } else {
      setShopUrl(BRAND_INFO.defaultShopUrl);
      localStorage.setItem('zeheart_shop_url', BRAND_INFO.defaultShopUrl);
    }

    // Support deep linking via URL hash (e.g. #smoke-points)
    const hash = window.location.hash.replace('#', '');
    if (hash && MAIN_TABS.some((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  useEffect(() => {
    updatePageSeo(activeTab);
  }, [activeTab]);

  const handleSaveShopUrl = (newUrl: string) => {
    setShopUrl(newUrl);
    localStorage.setItem('zeheart_shop_url', newUrl);
  };

  const currentTabIndex = MAIN_TABS.findIndex((t) => t.id === activeTab);
  const prevTab = currentTabIndex > 0 ? MAIN_TABS[currentTabIndex - 1] : null;
  const nextTab = currentTabIndex < MAIN_TABS.length - 1 ? MAIN_TABS[currentTabIndex + 1] : null;

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    try {
      window.history.replaceState(null, '', `#${tabId}`);
    } catch {
      window.location.hash = tabId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1F1D1A] selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Top Bar with Prominent Big Tab Buttons and Direct Store Funnel */}
      <Navbar
        currentTab={activeTab}
        shopUrl={shopUrl}
        onSelectTab={handleSelectTab}
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
      />

      {/* Main Tab-Based Page Container */}
      <main className="flex-1">
        {/* TAB 1: CLEAN HUMAN INTERACTIVE LANDING PAGE */}
        {activeTab === 'home' && (
          <CleanInteractiveLanding
            shopUrl={shopUrl}
            onNavigateTab={handleSelectTab}
          />
        )}

        {/* TAB 2: BRAND STORY & 1-PAGE STORE PROFILE */}
        {activeTab === 'brand_story' && (
          <BrandStory
            shopUrl={shopUrl}
            onOpenStoreModal={() => setIsStoreModalOpen(true)}
            onNavigateTab={handleSelectTab}
          />
        )}

        {/* TAB 3: DUAL STARS SPOTLIGHT (FLAXSEED & CAMELLIA SEED OILS) */}
        {activeTab === 'dual_stars' && (
          <div>
            <DualStarSpotlight shopUrl={shopUrl} />
          </div>
        )}

        {/* TAB 4: SMOKE POINTS ATLAS & COOKING MATCHER */}
        {activeTab === 'smoke_points' && (
          <div>
            <SmokePointGuide shopUrl={shopUrl} />
          </div>
        )}

        {/* TAB 5: FATTY ACIDS BIOCHEMISTRY (OMEGA 3 / 6 / 9) */}
        {activeTab === 'fatty_acids' && (
          <div>
            <FattyAcidSection shopUrl={shopUrl} />
          </div>
        )}

        {/* TAB 6: 5-STEP EXPERT BUYING & INSPECTION GUIDE */}
        {activeTab === 'buying_guide' && (
          <div>
            <BuyingGuide shopUrl={shopUrl} />
          </div>
        )}

        {/* TAB 7: PEER-REVIEWED CLINICAL RESEARCH HUB */}
        {activeTab === 'research_hub' && (
          <div>
            <ResearchHub shopUrl={shopUrl} />
          </div>
        )}

        {/* Chapter Pagination Navigator (分頁快速翻頁列) */}
        <div className="border-t border-stone-200/80 bg-stone-100/70 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 font-sans">
            {prevTab ? (
              <button
                type="button"
                onClick={() => handleSelectTab(prevTab.id)}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-stone-200 text-sm sm:text-base font-bold text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-stone-500" />
                <span>上一章：{prevTab.shortName}</span>
              </button>
            ) : (
              <div />
            )}

            <div className="text-sm text-stone-500 font-mono font-medium hidden sm:block">
              章節進度：{currentTabIndex + 1} / {MAIN_TABS.length}
            </div>

            {nextTab ? (
              <button
                type="button"
                onClick={() => handleSelectTab(nextTab.id)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1A382B] text-white text-sm sm:text-base font-bold hover:bg-[#12281E] transition-all shadow-xs cursor-pointer"
              >
                <span>下一章：{nextTab.shortName}</span>
                <ChevronRight className="w-5 h-5 text-amber-300" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleSelectTab('home')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1A382B] text-white text-sm sm:text-base font-bold hover:bg-[#12281E] transition-all shadow-xs cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-amber-300" />
                <span>返回首頁</span>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Customizable Store URL Modal */}
      <StoreUrlModal
        isOpen={isStoreModalOpen}
        currentUrl={shopUrl}
        onClose={() => setIsStoreModalOpen(false)}
        onSaveUrl={handleSaveShopUrl}
      />

      {/* Footer with Medical Disclaimers & Brand Identity */}
      <Footer shopUrl={shopUrl} onSelectTab={handleSelectTab} />
    </div>
  );
}
