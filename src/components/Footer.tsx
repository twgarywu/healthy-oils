import React from 'react';
import { ShieldCheck, Heart, ExternalLink, ArrowUp, ShoppingBag } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface FooterProps {
  shopUrl?: string;
  onSelectTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ shopUrl, onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tabId: string) => {
    onSelectTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <span className="font-serif-tc text-xl font-bold text-white block">
                  有米的日子 · 健康好油生活誌
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-sans block">
                  Zeheart Oil Life · 澤禾有限公司
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              堅持第一道物理冷壓初榨。以苦茶油與黃金亞麻仁油，陪伴全家人吃得健康純粹。
            </p>
            {shopUrl && (
              <div className="pt-1">
                <a
                  href={buildShopUrl(shopUrl, { medium: 'footer_cta' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-colors shadow-2xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>前往「有米的日子」官方特惠賣場</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-stone-400 font-sans">
              全站章節分頁
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm">
              <button
                type="button"
                onClick={() => handleNav('home')}
                className="text-left text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                生活選油指南
              </button>
              <button
                type="button"
                onClick={() => handleNav('brand_story')}
                className="text-left text-amber-300 hover:text-amber-200 font-medium transition-colors cursor-pointer"
              >
                🌿 關於有米的日子
              </button>
              <button
                type="button"
                onClick={() => handleNav('dual_stars')}
                className="text-left text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                苦茶油與亞麻仁油
              </button>
              <button
                type="button"
                onClick={() => handleNav('smoke_points')}
                className="text-left text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                烹調發煙點圖鑑
              </button>
              <button
                type="button"
                onClick={() => handleNav('fatty_acids')}
                className="text-left text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                Omega 3·6·9 密碼
              </button>
              <button
                type="button"
                onClick={() => handleNav('buying_guide')}
                className="text-left text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                安心選油 5 步驟
              </button>
              <button
                type="button"
                onClick={() => handleNav('research_hub')}
                className="text-left text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                醫學科研實證
              </button>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-right md:text-right">
            <h4 className="text-sm uppercase tracking-wider font-bold text-stone-400 font-sans">
              頂部快速跳轉
            </h4>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg border border-stone-700 transition-colors cursor-pointer"
            >
              <span>回到頁面頂端</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Official Medical Disclaimer (衛教聲明與免責宣告) */}
        <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 text-xs sm:text-sm text-stone-400 space-y-2 leading-relaxed font-sans">
          <div className="flex items-center gap-2 text-stone-200 font-bold text-sm sm:text-base">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>健康衛教資訊免責聲明 (Health & Medical Disclaimer)</span>
          </div>
          <p>
            本網站所提供之脂肪酸解析、食用油發煙點圖鑑、科研摘要及相關衛教內容，僅供一般大眾營養健康知識普及與家庭烹調參考，不可替代專業醫師、註冊營養師之個別診斷、醫療建議或處方。
          </p>
          <p>
            若您患有特定急性或慢性疾病（如急性膽囊炎、嚴重高血脂症、特殊凝血功能障礙或腸道吸收不良症候群），在對日常食用油攝取量或膳食補充品進行重大調整前，請務必諮詢合格主治醫師或臨床營養師之專業建議。
          </p>
        </div>

        {/* Bottom copyright and standard citations */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-500 font-sans">
          <div>
            © {new Date().getFullYear()} 健康好油百科 (Health Oil Encyclopedia). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>參考標準：衛福部國健署飲食脂質指引 · WHO · AHA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
