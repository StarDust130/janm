"use client";

import { useLanguage } from "@/context/LanguageContext";

export const StoriesSection = () => {
  const { t } = useLanguage();

  const ICONS = ["👩🏽", "👨🏽", "👴🏽"];
  const BGS = ["bg-purple-100", "bg-green-100", "bg-blue-100"];

  return (
    <section id="stories" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        {t.stories.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {t.stories.items.map((story, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 ${BGS[i]} rounded-full flex items-center justify-center text-2xl`}
              >
                {ICONS[i]}
              </div>
              <div>
                <p className="font-bold">{story.name}</p>
                <p className="text-xs text-slate-500">{story.loc}</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 italic">
              &quot;{story.msg}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
