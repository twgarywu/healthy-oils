import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Flame,
  ShieldCheck,
  Zap,
  Utensils,
  Heart,
  Droplets
} from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  symptom: string;
  explanation: string;
  category: 'diet' | 'inflammation' | 'stomach' | 'smoke' | 'habit';
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'eating_out',
    question: '您是天天依賴外食、外送便當或聚餐的「外食族」嗎？',
    symptom: '外食餐飲大多使用成本低廉的大豆沙拉油、玉米油或反覆油炸油。',
    explanation:
      '外食飲食中的 Omega-6 脂肪酸高達 Omega-3 的 15~20 倍以上，體內代謝容易偏向促發炎路徑，抑制自體修復機制。',
    category: 'diet'
  },
  {
    id: 'fatigue',
    question: '您是否常感到身體莫名疲倦、早起沉重，或是肌肉關節緊繃？',
    symptom: '無特殊器官病變，但總覺得全身電量耗盡、經常性低度不適。',
    explanation:
      '這是典型的「低度慢性微發炎（Silent Inflammation）」警訊。體內細胞膜缺乏足夠的 Omega-3（ALA/EPA），使得前列腺素發炎級聯持續活躍。',
    category: 'inflammation'
  },
  {
    id: 'stomach',
    question: '您常有胃脹氣、消化遲緩、飯後悶脹或胃酸逆流困擾嗎？',
    symptom: '吃稍微油膩或辛辣便覺胃部灼熱、胃黏膜耐受度偏低。',
    explanation:
      '劣質氧化油脂會刺激胃壁細胞。反觀天然冷壓苦茶油富含茶多酚與角鯊烯，具備優異的黏膜屏障保護與修復機制。',
    category: 'stomach'
  },
  {
    id: 'cooking_smoke',
    question: '家中炒菜時是否經常油煙瀰漫、刺鼻嗆喉，抽油煙機累積厚厚黃油垢？',
    symptom: '廚房烹飪常聞到焦嗆味，下廚者經常咳嗽或喉嚨乾癢。',
    explanation:
      '這代表烹調溫度已大幅超越所用油品的「發煙點」！過熱裂解會釋放致癌醛類（如 4-HNE）與多環芳香烴，對全家呼吸道傷害極大。',
    category: 'smoke'
  },
  {
    id: 'single_oil',
    question: '家裡廚房是否只有「一瓶油」從煎煮炒炸甚至涼拌一罐用到底？',
    symptom: '無論是低溫拌菜或大火熱炒，皆用同一款調和油或精煉油。',
    explanation:
      '沒有任何一種油適合所有溫度。亞麻仁油適合低溫生飲（107℃），苦茶油才適合大火熱炒（252℃）。分工用油才能吃得健康。',
    category: 'habit'
  },
  {
    id: 'skin_focus',
    question: '肌膚容易乾癢脫屑，或經常感覺思緒混沌、注意力難以集中？',
    symptom: '換季時皮膚乾燥發癢，下午工作時專注力與記憶力明顯下滑。',
    explanation:
      '大腦神經髓鞘與肌膚角質脂質屏障高度仰賴優質不飽和脂肪酸。補充高活性 ALA 植物性好油是維持神經突觸與皮膚潤澤的關鍵。',
    category: 'inflammation'
  }
];

interface HealthQuizLandingProps {
  onNavigateTab: (tabId: string) => void;
}

export const HealthQuizLanding: React.FC<HealthQuizLandingProps> = ({ onNavigateTab }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, boolean>>({});
  const [hasEvaluated, setHasEvaluated] = useState(false);

  const toggleAnswer = (id: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(selectedAnswers).filter(Boolean).length;

  const handleRunEvaluation = () => {
    setHasEvaluated(true);
    const resultElement = document.getElementById('quiz-result');
    if (resultElement) {
      resultElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setHasEvaluated(false);
  };

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* ---------------- 1. HOOK INTRO BANNER ---------------- */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] border-y border-stone-200/80 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>三分鐘健康用油自評檢測</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-[1.2] [text-wrap:balance]">
            你每天吃進肚子裡的，
            <br />
            是<span className="text-amber-800 underline decoration-amber-600/40 decoration-wavy underline-offset-8">抗發炎的甘露</span>，還是加速氧化的負擔？
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            生活中的莫名疲勞、腸胃不適、烹飪嗆鼻油煙，往往都源自於「吃錯油」與「烹調溫控失當」。
            請勾選以下符合您日常生活的情境，為自己與家人的用油體質進行一次全面體檢：
          </p>
        </div>
      </section>

      {/* ---------------- 2. INTERACTIVE GUIDED QUESTIONS ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                日常生活與身體狀態自我檢核表
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                點選符合您現狀的項目（可複選），系統將即時分析您的用油失衡風險
              </p>
            </div>
            <div className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg shrink-0">
              已選取：<strong className="text-amber-800 font-bold">{checkedCount}</strong> / {QUIZ_QUESTIONS.length} 項
            </div>
          </div>

          {/* Question Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const isChecked = !!selectedAnswers[q.id];
              return (
                <div
                  key={q.id}
                  onClick={() => toggleAnswer(q.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 select-none flex flex-col justify-between ${
                    isChecked
                      ? 'bg-amber-50/70 border-amber-400 shadow-xs ring-1 ring-amber-400'
                      : 'bg-[#FAF8F5] border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                        Q0{idx + 1}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'bg-amber-800 text-white'
                            : 'border border-stone-300 bg-white'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4 fill-current" />}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base text-stone-900 leading-snug">
                      {q.question}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-800">常見徵象：</strong>
                      {q.symptom}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 leading-relaxed">
                    <strong className="text-amber-900 font-medium">營養解析：</strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleRunEvaluation}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 active:bg-amber-950 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>立即產出我的用油風險與改善處方</span>
            </button>
            {hasEvaluated && (
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
              >
                重置題目重新評估
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- 3. DIAGNOSTIC RESULT CARD (IF EVALUATED OR HOOKED) ---------------- */}
      {hasEvaluated && (
        <section id="quiz-result" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white p-6 sm:p-10 shadow-lg space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-700">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-mono font-bold">
                  DIAGNOSTIC REPORT · 個人用油營養體質報告
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  {checkedCount === 0 && '用油模範生！維持優質平衡習慣'}
                  {checkedCount >= 1 && checkedCount <= 2 && '輕度失衡警訊：局部烹調與脂質比例需微調'}
                  {checkedCount >= 3 && checkedCount <= 4 && '中度發炎高風險：飲食 Omega-6 比例嚴重偏高'}
                  {checkedCount >= 5 && '重度警報：全身慢性發炎與致癌油煙暴露雙重危機'}
                </h3>
              </div>
              <div className="text-right shrink-0 bg-stone-800 p-4 rounded-xl border border-stone-700">
                <span className="text-xs text-stone-400 block">符合警訊項目</span>
                <span className="font-mono text-3xl font-bold text-amber-400 tabular-nums">
                  {checkedCount} / {QUIZ_QUESTIONS.length}
                </span>
              </div>
            </div>

            {/* Analysis & Prescription */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300 leading-relaxed">
              <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-3">
                <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>您體內的潛在問題剖析</span>
                </h4>
                <p>
                  {checkedCount >= 3 ? (
                    <>
                      您的體檢結果顯示，您正處於現代人典型的「<strong>Omega-6 嚴重過剩、Omega-3 瀕臨枯竭</strong>」失衡狀態。
                      外食的高精煉種子油會阻礙人體抗發炎消退素的合成，若廚房中高溫熱炒又選錯油，更會將氧化脂質與有毒醛類食入體內。
                    </>
                  ) : (
                    <>
                      您目前的習慣尚可，但仍存在特定隱形用油死角（例如單一油品使用過廣、或缺乏定量的生飲抗發炎脂肪酸補充）。只要補齊關鍵環節，健康狀態將大幅提升。
                    </>
                  )}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-3">
                <h4 className="font-display font-bold text-amber-300 text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>營養專家建議的兩大立即行動方針</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-200">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">1.</span>
                    <span>
                      <strong>早晨補充冷壓亞麻仁油：</strong>晨起或早餐淋拌 1 湯匙（10ml），立即提供 55% 的 ALA 植物性 Omega-3，拉回失衡的黃金比例。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">2.</span>
                    <span>
                      <strong>廚房熱炒全面更換為苦茶油：</strong>將炒菜油替換為發煙點高達 252℃ 且含 82% 油酸的純苦茶油，從此告別刺鼻致癌油煙並滋養胃壁黏膜。
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links to Tabs */}
            <div className="pt-4 border-t border-stone-700 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-400">
                點擊下方大標籤專題，深入探索科學實證與改善細節：
              </span>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigateTab('dual_stars')}
                  className="px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>看雙星主角（亞麻仁油＆苦茶油）</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigateTab('smoke_points')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-stone-700 hover:bg-stone-600 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>開啟智慧配油速配器</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigateTab('fatty_acids')}
                  className="px-4 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-transparent hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <span>深入了解 Omega 3/6/9</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- 4. CORE ENCYCLOPEDIA CHAPTER ENTRANCE CARDS ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 font-sans mb-1">
            EXPLORE MODULES
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
            百科核心章節導覽
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            點擊任一主題大標籤，直接切換至專屬分頁深入閱讀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Fatty Acids */}
          <div
            onClick={() => onNavigateTab('fatty_acids')}
            className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-700/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-display font-bold text-sm">
                Ω3·6·9
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                脂肪酸全解析：Omega-3、6、9
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                人體必需性、發炎與抗發炎生化代謝瀑布圖，破解現代人 1:15~20 的飲食失衡危局。
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>閱讀生化解析</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Smoke Points & Matcher */}
          <div
            onClick={() => onNavigateTab('smoke_points')}
            className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-700/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                食用油發煙點圖鑑 ＆ 智慧配油器
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                收錄 14 種油品精確發煙點與理化資料庫，互動計算今日料理溫度最適油品。
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>開啟配油工具</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Dual Star Spotlight */}
          <div
            onClick={() => onNavigateTab('dual_stars')}
            className="group p-6 rounded-2xl bg-white border border-amber-300/80 hover:border-amber-700/60 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between bg-amber-50/20"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-800 text-white flex items-center justify-center">
                <Droplets className="w-5 h-5 text-amber-200" />
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                雙星主角：亞麻仁油與苦茶油
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                抗發炎冷拌首選「亞麻仁油」 vs 耐高溫 252℃ 護胃神油「苦茶油」，全方位指標對照。
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>探索雙星焦點</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Buying Guide */}
          <div
            onClick={() => onNavigateTab('buying_guide')}
            className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-700/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                專家教你挑好油：五大心法
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                物理冷壓、深色避光玻璃、酸價指標、SGS 檢驗（黃麴毒素/重金屬）與感官品評試法。
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700">
              <span>學習選購心法</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Research Hub */}
          <div
            onClick={() => onNavigateTab('research_hub')}
            className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-700/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-700" />
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                同儕審查科研情報專區
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                NEJM、The Lancet、AHA 心血管指引與衛福部國健署大型臨床試驗與學術快訊。
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700">
              <span>查閱國際實證</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
