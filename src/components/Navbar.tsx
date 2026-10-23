import React, { useState } from 'react';
import { Menu, X, Sparkles, Droplets, Flame, ShieldCheck, Heart, BookOpen, ExternalLink, Settings, ShoppingBag } from 'lucide-react';
import { MAIN_TABS, TabItem } from '../data/navData.ts';
import { buildShopUrl } from '../utils/utmHelper.ts';
import { ShareButton } from './ShareButton.tsx';

interface NavbarProps {
  currentTab: string;
  shopUrl: string;
  onSelectTab: (tabId: string) => void;
  onOpenStoreModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  shopUrl,
  onSelectTab,
  onOpenStoreModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/96 backdrop-blur-md border-b border-[#EDE7DC] shadow-parchment">
      {/* Top Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-[#EDE7DC]/70">
          {/* Brand Wordmark (Brightland / 茶籽堂 Minimalist Logo) */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-full bg-[#1A382B] text-[#D99B43] flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-[#12281E] transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div>
              <span className="font-serif-tc text-xl sm:text-2xl font-bold tracking-tight text-[#22201D] block leading-tight">
                有米的日子 · 澤禾
              </span>
              <span className="text-xs tracking-wide text-stone-500 font-sans block font-medium">
                Zeheart Natural Oil · 尋常餐桌上的安心好油
              </span>
            </div>
          </button>

          {/* Right Action: Share + Direct 1-Page Shop CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ShareButton />

            <a
              href={buildShopUrl(shopUrl, { medium: 'navbar_desktop_cta' })}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#C08A3E] hover:bg-[#A8742F] active:bg-[#8F6124] rounded-full shadow-xs transition-all duration-200 whitespace-nowrap cursor-pointer font-sans"
            >
              <ShoppingBag className="w-4 h-4 text-amber-100" />
              <span>有米的日子 官方特惠賣場</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {onOpenStoreModal && (
              <button
                type="button"
                onClick={onOpenStoreModal}
                title="自訂賣場網址"
                className="hidden md:inline-flex p-2 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
                aria-label="自訂賣場網址"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Big Navigation Bar */}
        <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 py-3">
          {MAIN_TABS.map((tab) => {
            const isActive = tab.id === currentTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer select-none font-sans ${
                  isActive
                    ? 'bg-[#1A382B] text-white shadow-xs'
                    : 'bg-white/90 text-stone-700 hover:text-stone-950 hover:bg-white border border-[#EDE7DC]'
                }`}
              >
                <span>{tab.name}</span>
                {tab.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-sans font-bold ${
                      isActive
                        ? 'bg-[#2C5744] text-[#D99B43]'
                        : tab.badge === '安心推薦'
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#EDE7DC] px-4 pt-3 pb-6 space-y-4 shadow-md">
          <a
            href={buildShopUrl(shopUrl, { medium: 'navbar_mobile_menu_cta' })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-[#C08A3E] hover:bg-[#A8742F] rounded-full shadow-xs"
          >
            <ShoppingBag className="w-4 h-4 text-amber-100" />
            <span>前往「有米的日子」官方特惠賣場</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="space-y-1 pt-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 block font-sans">
              全站專題章節導覽
            </span>
            <div className="grid grid-cols-1 gap-1.5 pt-1">
              {MAIN_TABS.map((tab) => {
                const isActive = tab.id === currentTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1A382B] text-white font-bold'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#EDE7DC]'
                    }`}
                  >
                    <span>{tab.name}</span>
                    {tab.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-[#2C5744] text-[#D99B43]'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {onOpenStoreModal && (
            <div className="pt-2 border-t border-[#EDE7DC]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStoreModal();
                }}
                className="w-full py-2 text-xs text-stone-500 hover:text-stone-800 flex items-center justify-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>設定官方賣場導流連結</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
