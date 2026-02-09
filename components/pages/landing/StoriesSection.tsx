"use client";

export const StoriesSection = () => {
  return (
    <section id="stories" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Real Stories (Sachhi Kahaniyan) ❤️
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: "Lakshmi Devi",
            loc: "Tamil Nadu",
            msg: "I got free gas connection (Ujjwala). I didn't know how to apply, but this app helped me.",
            icon: "👩🏽",
            bg: "bg-purple-100",
          },
          {
            name: "Rajesh Kumar",
            loc: "Bihar",
            msg: "Got ₹2000 in my account for PM Kisan. Very easy app, works in Hindi.",
            icon: "👨🏽",
            bg: "bg-green-100",
          },
          {
            name: "Suresh Bhai",
            loc: "Gujarat",
            msg: "Best app for farmers. No need to go to agent and pay bribe.",
            icon: "👴🏽",
            bg: "bg-blue-100",
          },
        ].map((story, i) => (
          <div
            key={i}
            className=" p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 ${story.bg} rounded-full flex items-center justify-center text-2xl`}
              >
                {story.icon}
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
