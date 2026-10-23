import React, { useState } from 'react';
import { X, ExternalLink, Check, RefreshCw, Link as LinkIcon } from 'lucide-react';

interface StoreUrlModalProps {
  isOpen: boolean;
  currentUrl: string;
  onClose: () => void;
  onSaveUrl: (newUrl: string) => void;
}

export const StoreUrlModal: React.FC<StoreUrlModalProps> = ({
  isOpen,
  currentUrl,
  onClose,
  onSaveUrl
}) => {
  const [urlInput, setUrlInput] = useState(currentUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let formatted = urlInput.trim();
    if (formatted && !formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = 'https://' + formatted;
    }
    onSaveUrl(formatted || 'https://www.zeheart.com');
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleResetDefault = () => {
    setUrlInput('https://www.zeheart.com');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-5 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 rounded-lg"
          aria-label="關閉視窗"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 font-sans">
          <div className="flex items-center gap-2 text-amber-800 text-xs sm:text-sm font-bold">
            <LinkIcon className="w-4 h-4" />
            <span>自訂推廣賣場連結</span>
          </div>
          <h2 className="font-serif-tc text-2xl font-bold text-stone-900">
            設定「有米的日子」賣場網址
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            您可以隨時在此貼上太太的專屬賣場、官方一頁式特惠頁、7-11 賣貨便或官網連結，全站的購買按鈕都將自動導流至此網址。
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4 font-sans">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">
              官方特惠賣場網址 (URL)：
            </label>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://www.zeheart.com 或專屬特惠頁"
              className="w-full px-4 py-3 text-sm sm:text-base bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-700 font-mono"
            />
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm text-stone-500 pt-1">
            <button
              type="button"
              onClick={handleResetDefault}
              className="hover:text-stone-800 underline flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>恢復預設官網</span>
            </button>
            <a
              href={urlInput || 'https://www.zeheart.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1.5"
            >
              <span>測試連結開啟</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-amber-200" />
                  <span>已成功儲存！</span>
                </>
              ) : (
                <span>儲存並套用全站</span>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs transition-colors"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
