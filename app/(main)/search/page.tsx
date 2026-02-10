"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search as SearchIcon,
  ArrowLeft,
  Mic,
  X,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Loader2,
  StopCircle,
  Filter,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { useVoiceInput } from "@/hooks/use-voice";
import { searchSchemes } from "@/actions/search";
import { SCHEMES_DB, Scheme } from "@/lib/schemes-data";

// --- CATEGORY AVATARS ---
const CATEGORIES = [
  {
    name: "Farmers",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Students",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Housing",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=150&q=80",
  },
];

export default function SearchPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Core State
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Scheme[]>([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

  // Voice Hook
  const { isRecording, isProcessing, startRecording, stopRecording } =
    useVoiceInput((text) => {
      setQuery(text);
      handleSearch(text);
    });

  // Load History
  useEffect(() => {
    inputRef.current?.focus();
    const saved = localStorage.getItem("janm_search_history");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  // Search Logic
  const handleSearch = async (term: string) => {
    if (!term.trim()) return;
    setQuery(term);
    setLoading(true);
    setHasSearched(true);

    // Save History
    const newHistory = [
      term,
      ...recentSearches.filter((s) => s !== term),
    ].slice(0, 5);
    setRecentSearches(newHistory);
    localStorage.setItem("janm_search_history", JSON.stringify(newHistory));

    // Call API
    const data = await searchSchemes(term);
    setResults(data.results);
    setSummary(data.summary);
    setLoading(false);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setHasSearched(false);
    inputRef.current?.focus();
  };

  const deleteHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem("janm_search_history");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050505] text-slate-900 dark:text-white pb-safe relative">
      {/* --- 1. STICKY GLASS HEADER --- */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800 transition-all shadow-sm">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            <ArrowLeft size={22} />
          </button>

          <div className="flex-1 relative group">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
              placeholder="Search schemes..."
              className="w-full h-11 bg-slate-100 dark:bg-zinc-900 border-none outline-none rounded-xl pl-10 pr-10 text-base font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-green-500/20 transition-all"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon size={18} />
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {query ? (
                <button
                  onClick={clearSearch}
                  className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-500"
                >
                  <X size={14} />
                </button>
              ) : (
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`p-1.5 rounded-full transition-colors ${isRecording ? "text-red-500 animate-pulse" : "text-slate-400 hover:text-slate-900"}`}
                >
                  {isRecording ? <StopCircle size={18} /> : <Mic size={18} />}
                </button>
              )}
            </div>
          </div>

          <button className="p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-slate-300">
            <Filter size={20} />
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 pt-4">
        {/* --- 2. LISTENING OVERLAY --- */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl flex items-center gap-3 overflow-hidden"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="text-sm font-bold text-red-600 dark:text-red-400">
                Listening... Speak now
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- 3. LOADING SKELETON --- */}
        {loading && (
          <div className="space-y-4 pt-2">
            <div className="h-4 w-32 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-white dark:bg-[#111] rounded-2xl border border-slate-100 dark:border-zinc-800 animate-pulse"
              >
                <div className="w-20 h-20 bg-slate-100 dark:bg-zinc-800 rounded-xl" />
                <div className="flex-1 space-y-2 py-2">
                  <div className="h-4 bg-slate-100 dark:bg-zinc-800 rounded w-3/4" />
                  <div className="h-3 bg-slate-100 dark:bg-zinc-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- 4. DEFAULT VIEW (History & Categories) --- */}
        {!hasSearched && !loading && !query && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3 px-1">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    Recent
                  </h3>
                  <button
                    onClick={deleteHistory}
                    className="text-xs font-bold text-slate-400 hover:text-red-500 flex items-center gap-1"
                  >
                    Clear <X size={10} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearch(item)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#111] border border-slate-200 dark:border-zinc-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 active:scale-95 transition-all"
                    >
                      <Clock size={12} className="text-slate-400" />
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 px-1">
                Browse Categories
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar">
                {CATEGORIES.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearch(cat.name)}
                    className="flex flex-col items-center gap-2 min-w-[80px] group"
                  >
                    <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-slate-200 to-slate-300 group-hover:from-green-400 group-hover:to-emerald-600 transition-all">
                      <div className="w-full h-full rounded-full border-2 border-white dark:border-[#050505] overflow-hidden relative">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-green-600 transition-colors">
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Banner */}
            <div
              className="mt-2 p-5 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-800 text-white shadow-lg shadow-green-600/20 relative overflow-hidden cursor-pointer active:scale-98 transition-transform"
              onClick={() => handleSearch("Farmers")}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    Trending
                  </span>
                  <span className="text-[10px] font-medium opacity-80">
                    Feb 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">PM Kisan Samman</h3>
                <p className="text-green-100 text-sm mb-4 max-w-[60%]">
                  Next installment of ₹2,000 released. Check eligibility now.
                </p>
                <div className="flex items-center gap-1 text-xs font-bold bg-white text-green-700 w-fit px-4 py-2 rounded-full shadow-md">
                  Check Status <ArrowRight size={12} />
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=80"
                alt="Farmer"
                width={180}
                height={180}
                className="absolute -right-8 -bottom-8 opacity-40 rotate-12"
              />
            </div>
          </motion.div>
        )}

        {/* --- 5. RESULTS LIST --- */}
        {hasSearched && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-20"
          >
            <div className="flex justify-between items-end mb-4 px-1">
              <p className="text-sm font-bold text-slate-500">
                Found {results.length} schemes
              </p>
            </div>

            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((scheme, idx) => (
                  <motion.div
                    key={scheme.id}
                    layoutId={scheme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bg-white dark:bg-[#111] p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:border-green-500/30 transition-all cursor-pointer"
                    onClick={() => setSelectedScheme(scheme)}
                  >
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                        <Image
                          src={scheme.image}
                          alt={scheme.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md ${
                              scheme.color === "green"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : scheme.color === "blue"
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                  : "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400"
                            }`}
                          >
                            {scheme.category}
                          </span>
                          {scheme.matchScore && (
                            <span className="text-[10px] font-bold text-green-600 flex items-center gap-0.5">
                              {scheme.matchScore}% Match
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white truncate pr-2">
                          {scheme.title}
                        </h3>

                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 mb-2">
                          {scheme.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50 dark:border-zinc-800/50">
                          <span className="text-sm font-black text-slate-900 dark:text-white">
                            {scheme.benefit}
                          </span>
                          <button className="bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 active:scale-95 transition-transform">
                            VIEW <ChevronRight size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // EMPTY STATE SUGGESTIONS
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-slate-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="text-slate-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  No exact matches
                </h3>
                <p className="text-slate-500 text-sm mt-1 mb-6">
                  We couldn't find schemes for "{query}". Try these instead:
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Farmers Loan",
                    "Student Scholarship",
                    "Women Business",
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleSearch(tag)}
                      className="px-4 py-2 rounded-full border border-slate-200 dark:border-zinc-800 text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-green-500 hover:text-green-600 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* --- 6. DETAILS MODAL (Bottom Sheet) --- */}
      <AnimatePresence>
        {selectedScheme && (
          <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedScheme(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={selectedScheme.id}
              className="relative w-full max-w-lg bg-white dark:bg-[#111] rounded-t-[2rem] sm:rounded-[2rem] p-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedScheme(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-500 z-10"
              >
                <X size={20} />
              </button>

              {/* Cover Image */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedScheme.image}
                  alt={selectedScheme.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md bg-white text-black`}
                  >
                    {selectedScheme.category}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                {selectedScheme.title}
              </h2>
              <div className="text-3xl font-black text-green-600 mb-4">
                {selectedScheme.benefit}
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedScheme.description}
              </p>

              {/* Tabs / Sections */}
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
                    <CheckCircle2 size={16} className="text-green-500" />{" "}
                    Eligibility
                  </h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-1">
                    {selectedScheme.eligibility.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
                    <FileText size={16} className="text-blue-500" /> Documents
                    Needed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedScheme.documents.map((doc, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white dark:bg-black border border-slate-200 dark:border-zinc-800 rounded text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full mt-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-xl text-lg shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
