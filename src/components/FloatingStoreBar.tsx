import React, { useState } from 'react';
import { ShoppingBag, ExternalLink, X, Heart } from 'lucide-react';

interface FloatingStoreBarProps {
  shopUrl: string;
}

export const FloatingStoreBar: React.FC<FloatingStoreBarProps> = ({ shopUrl }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 right-4 z-30 p-3.5 rounded-full bg-[#1A382B] text-white shadow-lg hover:bg-[#12281E] transition-all cursor-pointer flex items-center gap-2.5 text-sm font-bold"
        title="開啟有米的日子購物專區"
      >
        <ShoppingBag className="w-4 h-4 text-amber-300" />
        <span className="hidden sm:inline">有米的日子 賣場</span>
      </button>
    );
  }

  return (
    <aside aria-label="有米的日子專屬推薦" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 max-w-sm w-[calc(100%-2rem)] bg-stone-900 text-white rounded-2xl p-5 shadow-2xl border border-stone-700/80 transition-all duration-300 font-sans">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-amber-300 text-sm font-bold">
          <Heart className="w-4 h-4 fill-current" />
          <span>尋常餐桌安心推薦</span>
        </div>
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="text-stone-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          aria-label="關閉提示"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-sm text-stone-200 mt-2 leading-relaxed">
        想直接入手真正新鮮的<strong>冷壓黃金亞麻仁油</strong>與<strong>特級苦茶油</strong>嗎？
      </p>

      <div className="mt-3.5 flex items-center gap-2">
        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>有米的日子 · 官方特惠賣場</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
