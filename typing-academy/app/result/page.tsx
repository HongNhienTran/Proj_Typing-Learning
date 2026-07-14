"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TypingResult } from "@/types/result";

export default function ResultPage() {
    const router = useRouter();
    const [result, setResult] = useState<TypingResult | null>(null);

    useEffect(() => {
        const data = localStorage.getItem("typing-result");
        if (data) {
            setResult(JSON.parse(data));
        }
    }, []);

    if (!result) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="animate-pulse text-lg text-slate-500">Loading result...</p>
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-2xl px-4 py-16 animate-in fade-in duration-300">
            {/* Back Button */}
            <button
                onClick={() => router.push("/")}
                className="group mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800 dark:hover:text-slate-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back to Home
            </button>

            {/* Header Content */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Test Result
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                    Congratulations! You have completed the typing speed test.
                </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {/* WPM Card */}
                <div className="col-span-2 flex flex-col justify-between rounded-2xl bg-indigo-50/50 p-6 border border-indigo-100 dark:bg-indigo-950/20 dark:border-indigo-900/50 sm:col-span-1">
                    <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        WPM
                    </span>
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-300">
                            {result.wpm}
                        </span>
                        <span className="text-xs text-indigo-500">wpm</span>
                    </div>
                </div>

                {/* Accuracy Card */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Accuracy
                    </span>
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            {result.accuracy}
                        </span>
                        <span className="text-sm font-medium text-slate-500">%</span>
                    </div>
                </div>

                {/* Score Card */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Score
                    </span>
                    <div className="mt-2 flex items-baseline">
                        <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            {result.score}
                        </span>
                    </div>
                </div>

                {/* Duration Card */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Time
                    </span>
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            {result.duration.toFixed(1)}
                        </span>
                        <span className="text-sm font-medium text-slate-500">s</span>
                    </div>
                </div>

                {/* Mistakes Card */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Mistakes
                    </span>
                    <div className="mt-2 flex items-baseline">
                        <span className={`text-3xl font-bold ${result.mistakes > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                            {result.mistakes}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}