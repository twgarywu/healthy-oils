import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Droplets, HelpCircle, ChevronDown, ChevronUp, ExternalLink, Award, HeartHandshake } from 'lucide-react';
import { buildShopUrl } from '../utils/utmHelper.ts';

interface FlaxseedSelectionGuideProps {
  shopUrl: string;
}

export const FlaxseedSelectionGuide: React.FC<FlaxseedSelectionGuideProps> = ({ shopUrl }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  const FAQS = [
    {
      q: '為什麼有些市售亞麻仁油喝起來有很重的一股草腥味或魚腥味？',
      a: '亞麻仁油的氣味主要取決於「種籽品種」與「新鮮度」。棕色亞麻仁籽天然單寧與草本風味較厚重，若壓榨過程控溫不佳或包裝未完全避光，脆弱的 Omega-3 (ALA) 接觸高溫與氧氣後會快速氧化，產生類似魚腥油耗的酸敗氣味。高品質新鮮冷壓的黃金亞麻仁籽，初榨時應當呈現澄澈金黃色，入口是溫潤清淡的微堅果清香，絕無刺鼻草腥感。'
    },
    {
      q: '黃金亞麻仁籽（Golden Flax）和棕色亞麻仁籽（Brown Flax）營養有差別嗎？',
      a: '從營養學實證來看，兩者的多元不飽和脂肪酸 Omega-3 (ALA) 含量非常相近，皆高達 50%～57% 左右。最大的客觀差異在於「風味適口性」：黃金亞麻仁籽種皮較薄、單寧苦味極低，榨出的油脂柔和甘甜；棕色亞麻仁籽則氣味較為濃烈。因此，若目的是「每日晨起生飲一匙」或「拌入豆漿優格給家人小孩吃」，食品營養專家普遍推薦優先選擇適口性極佳的黃金亞麻仁油。'
    },
    {
      q: '亞麻仁油可以加熱炒菜或煮湯嗎？',
      a: '客觀建議：嚴禁高溫加熱炒菜。黃金亞麻仁油的發煙點僅約 107℃，高溫熱炒會造成高活性的 Omega-3 結構斷裂並產生自由基與有害致癌物。亞麻仁油的最佳食用方式是「涼拌、生飲、拌入微溫飯菜或溫湯」。若家庭料理需要大火熱炒、煎蛋、煎魚，建議搭配發煙點高達 252℃ 且富含 Omega-9 的「100% 特級初榨苦茶油」，落實冷熱分工。'
    },
    {
      q: '台灣市面上注重純淨高品質的冷壓黃金亞麻仁油，有推薦的選購標的嗎？',
      a: '若追求生飲級的溫和口感與純淨品質，推薦關注台灣在地品牌「有米的日子 · 澤禾黃金亞麻仁油」。其特色在於嚴選加拿大非基改頂級黃金亞麻籽，堅持 40℃ 以下全程溫控第一道物理冷壓，並採用深色加厚遮光玻璃瓶與充氮密封包裝隔絕光熱，定期具備 SGS 410 項農藥與重金屬未檢出報告，是重視全家適口性與安心品質的優質首選。'
    }
  ];

  return (
    <section id="flaxseed-guide" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans">
          <Award className="w-4 h-4 text-amber-700" />
          <span>CONSUMER SELECTION GUIDE · 客觀選油指引</span>
        </div>
        <h2 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1D1A] leading-tight">
          市售亞麻仁油推薦與挑選指南
        </h2>
        <p className="text-base sm:text-lg text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed">
          少吃油不等於比較健康，吃對好油才是關鍵。透過客觀的原料品種、壓榨溫控與保存工藝，為全家人挑選最純淨的植物性 Omega-3。
        </p>
      </div>

      {/* 4 Objective Science Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1 */}
        <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-8 shadow-parchment space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 font-bold font-mono text-lg shrink-0">
              01
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block">原料品種差異</span>
              <h3 className="font-serif-tc font-bold text-xl text-[#22201D]">黃金亞麻籽 vs 棕色亞麻籽</h3>
            </div>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
            兩者 Omega-3 營養價值相近，但<strong className="text-stone-900 font-semibold">口感適口性差異顯著</strong>。棕色籽種皮較厚、草本氣息與單寧澀味較重，較適合烘焙加入麵包；<strong className="text-stone-900 font-semibold">黃金亞麻仁籽</strong>種皮薄、微甘不苦澀，壓榨油品金黃透亮且無草腥感，是晨起生飲與全家佐餐的首選。
          </p>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs sm:text-sm text-stone-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>挑選關鍵：注重生飲口感者，優先指名加拿大頂級黃金亞麻籽。</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-8 shadow-parchment space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 font-bold font-mono text-lg shrink-0">
              02
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block">壓榨溫控標準</span>
              <h3 className="font-serif-tc font-bold text-xl text-[#22201D]">嚴格 40℃ 以下第一道物理冷壓</h3>
            </div>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
            植物性 Omega-3 (α-次亞麻油酸) 屬於熱敏感多不飽和脂肪酸。超過 40℃ 的傳統高溫榨法極易造成脂肪酸變性與過氧化。<strong className="text-stone-900 font-semibold">全程低溫溫控初榨（Extra Virgin Cold-Pressed）</strong>能完整鎖住 55% 以上高活性 ALA，維持極低酸價與純淨營養。
          </p>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs sm:text-sm text-stone-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>挑選關鍵：確認標註低溫物理初榨，避免化學萃取與高溫精煉。</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-8 shadow-parchment space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 font-bold font-mono text-lg shrink-0">
              03
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block">光與氧氣阻隔</span>
              <h3 className="font-serif-tc font-bold text-xl text-[#22201D]">加厚深色遮光玻璃瓶 ＋ 充氮保鮮</h3>
            </div>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
            光線照射與空氣氧化是好油變質的兩大隱形殺手。高品質亞麻仁油應採用深色避光厚玻璃瓶包裝，徹底阻隔紫外線光敏反應，並在裝瓶製程中充填氮氣排擠瓶頂氧氣，確保開瓶前的每一滴油維持如產地出榨般的純粹。
          </p>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs sm:text-sm text-stone-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>挑選關鍵：拒絕透明塑膠瓶裝，開瓶後務必放入冰箱冷藏保存。</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-8 shadow-parchment space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 font-bold font-mono text-lg shrink-0">
              04
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block">客觀公信力報告</span>
              <h3 className="font-serif-tc font-bold text-xl text-[#22201D]">第三方檢驗農藥與毒素零檢出</h3>
            </div>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
            食用油是天天入口的尋常基礎。進口原料與榨油品管必須主動送交 SGS 等國際公信力檢驗機構，包含 <strong className="text-stone-900 font-semibold">410 項常見農藥殘留、黃麴毒素與重金屬全數零檢出</strong>，並具備當期透明報告編號，給家人最堅實的安心依據。
          </p>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs sm:text-sm text-stone-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>挑選關鍵：確認品牌主動揭露當期檢驗證書，食安溯源清楚。</span>
          </div>
        </div>
      </div>

      {/* Objective Needs Matching Matrix */}
      <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-10 shadow-parchment space-y-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <span className="text-xs sm:text-sm uppercase tracking-wider font-mono text-[#9E6B2C] font-bold block">
            NEED-BASED COMPARISON · 依料理與生活需求選擇
          </span>
          <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#1F1D1A]">
            不同食用需求與適用油品客觀對照
          </h3>
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            每一種天然油脂都有其獨特營養價值與烹調發煙點，冷熱分工、各司其職才是最科學的健康生活。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-[#EDE7DC] bg-[#FAF8F5] text-stone-800 font-sans">
                <th className="py-4 px-4 font-bold text-stone-900 w-1/4">日常料理需求</th>
                <th className="py-4 px-4 font-bold text-stone-900 w-1/4">適用油脂類型</th>
                <th className="py-4 px-4 font-bold text-stone-900 w-1/4">核心營養特色</th>
                <th className="py-4 px-4 font-bold text-[#1A382B] w-1/4 bg-emerald-50/60">安心選用推薦</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE7DC] text-stone-700 font-sans">
              <tr className="hover:bg-stone-50/60 transition-colors">
                <td className="py-4 px-4 font-semibold text-stone-900">
                  早晨生飲／拌豆漿／佐優格沙拉
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">調理外食 Omega-6 失衡</span>
                </td>
                <td className="py-4 px-4 text-stone-800">
                  特級初榨冷壓黃金亞麻仁油
                </td>
                <td className="py-4 px-4">
                  Omega-3 (ALA) 超過 55%<br />
                  <span className="text-xs text-stone-500">天然植物性深海魚油</span>
                </td>
                <td className="py-4 px-4 bg-emerald-50/30 font-medium text-[#1A382B]">
                  ⭐ <strong>澤禾黃金亞麻仁油</strong><br />
                  <span className="text-xs text-stone-600">無草腥味、口感清爽甘甜</span>
                </td>
              </tr>
              <tr className="hover:bg-stone-50/60 transition-colors">
                <td className="py-4 px-4 font-semibold text-stone-900">
                  中式家常熱炒／煎蛋煎魚／拌麵線
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">高溫耐熱、腸胃敏感護胃</span>
                </td>
                <td className="py-4 px-4 text-stone-800">
                  特級初榨低溫冷壓苦茶油
                </td>
                <td className="py-4 px-4">
                  Omega-9 超過 80%<br />
                  發煙點高達 252℃
                </td>
                <td className="py-4 px-4 bg-emerald-50/30 font-medium text-[#1A382B]">
                  ⭐ <strong>澤禾 100% 苦茶油</strong><br />
                  <span className="text-xs text-stone-600">高山小果初榨、大火無油煙</span>
                </td>
              </tr>
              <tr className="hover:bg-stone-50/60 transition-colors">
                <td className="py-4 px-4 font-semibold text-stone-900">
                  歐式麵包烘焙／雜糧穀物添加
                  <span className="block text-xs font-normal text-stone-500 mt-0.5">高溫烤焙、穀物香氣</span>
                </td>
                <td className="py-4 px-4 text-stone-800">
                  全顆熟棕色亞麻仁籽／粉
                </td>
                <td className="py-4 px-4">
                  膳食纖維、木質素、植物蛋白質
                </td>
                <td className="py-4 px-4 bg-emerald-50/30 font-medium text-stone-700">
                  市售有機全籽烘焙原料<br />
                  <span className="text-xs text-stone-500">適合加入麵糰烤焙</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="bg-white border border-[#EDE7DC] rounded-3xl p-7 sm:p-10 shadow-parchment space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9E6B2C] font-sans">
            <HelpCircle className="w-4 h-4" />
            <span>EXPERT ANSWERS · 亞麻仁油常見提問解答</span>
          </div>
          <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#1F1D1A]">
            關於亞麻仁油的關鍵問答
          </h3>
        </div>

        <div className="space-y-3 font-sans">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#EDE7DC] rounded-2xl overflow-hidden transition-all bg-[#FAF8F5]/50 hover:bg-[#FAF8F5]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-tc font-bold text-base sm:text-lg text-[#22201D] leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed border-t border-[#EDE7DC]/70 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gentle Brand Link Footer */}
      <div className="p-7 sm:p-9 rounded-3xl bg-[#1A382B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-parchment font-sans">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 text-xs sm:text-sm font-bold">
            <HeartHandshake className="w-4 h-4" />
            <span>尋常餐桌 · 產地原裝直送</span>
          </div>
          <h4 className="font-serif-tc font-bold text-xl sm:text-2xl text-white">
            為全家人選一瓶純淨清爽的黃金亞麻仁油
          </h4>
          <p className="text-sm sm:text-base text-stone-200 max-w-xl leading-relaxed">
            加拿大非基改頂級黃金亞麻籽、40℃ 以下冷壓初榨、SGS 檢驗合格。深入了解「有米的日子」產地規格與最新鮮出榨批次。
          </p>
        </div>

        <a
          href={buildShopUrl(shopUrl, { medium: 'flax_guide_footer_cta' })}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 rounded-full bg-[#C08A3E] hover:bg-[#A8742F] text-white font-bold text-sm sm:text-base transition-all shadow-parchment flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <span>前往澤禾官方品牌專區</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
