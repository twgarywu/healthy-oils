import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Copy } from 'lucide-react';

interface ShareButtonProps {
  title?: string;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, className }) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://zeheart-oils.com';
  const shareTitle = title || '有米的日子 · 健康好油生活誌 | 苦茶油與黃金亞麻仁油 尋常餐桌首選';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareTitle}\n${currentUrl}`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLineShare = () => {
    const text = encodeURIComponent(`${shareTitle}\n${currentUrl}`);
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}&text=${text}`, '_blank');
    setOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className || ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-700 bg-white/90 hover:bg-stone-100 border border-[#EDE7DC] shadow-2xs transition-colors cursor-pointer"
        title="分享好油知識給家人"
      >
        <Share2 className="w-3.5 h-3.5 text-[#9E6B2C]" />
        <span>分享給家人</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-[#EDE7DC] shadow-parchment-lg z-50 p-2 space-y-1 text-sm font-sans">
          <div className="px-3 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100">
            分享健康給家人好友
          </div>

          <button
            type="button"
            onClick={handleLineShare}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors cursor-pointer text-left font-medium"
          >
            <div className="w-6 h-6 rounded-full bg-[#06C755] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>LINE 分享給家人群組</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer text-left font-medium"
          >
            <div className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </div>
            <span>{copied ? '已複製連結！' : '複製文章網址'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
