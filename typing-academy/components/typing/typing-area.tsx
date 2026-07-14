"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Character, { Cursor } from "./character";
import ProgressBar from "./progress-bar";
import Timer from "./timer";

import { useTyping } from "@/hooks/use-typing";
import { useTimer } from "@/hooks/use-timer";
import { typingService } from "@/services/typing.service";

interface Props {
    content: string;
    timeLimit?: number; // Thời gian giới hạn bài test (Ví dụ: 30 giây)
}

export default function TypingArea({ content, timeLimit = 30 }: Props) {
    const router = useRouter();
    const [paused, setPaused] = useState(false);

    // Flag dùng để ngăn chặn việc gọi handleFinish nhiều lần trong cùng một lượt thi
    const isTriggeredFinish = useRef(false);

    const { state, reset, forceFinish } = useTyping(content, paused);

    const seconds = useTimer(
        state.started,
        state.finished || paused
    );

    // Hàm xử lý hoàn thành bài thi và lưu kết quả
    const handleFinish = () => {
        const endTimeStamp = state.endTime || Date.now();
        const startTimeStamp = state.startTime || endTimeStamp;

        const result = typingService.calculate({
            content,
            typed: state.typed,
            mistakes: state.mistakes,
            startTime: startTimeStamp,
            endTime: endTimeStamp,
        });

        localStorage.setItem("typing-result", JSON.stringify(result));
        router.push("/result");
    };

    // SỬA LOGIC TẠI ĐÂY: Theo dõi thời gian để tự động dừng khi hết giờ
    useEffect(() => {
        // QUAN TRỌNG: Chỉ kích hoạt khi bài thi THỰC SỰ ĐÃ BẮT ĐẦU (state.started === true)
        // Điều này ngăn chặn việc hệ thống tự kết thúc ngay lúc vừa bấm Retry/Reset
        if (state.started && seconds >= timeLimit && !state.finished && !isTriggeredFinish.current) {
            isTriggeredFinish.current = true;

            if (typeof forceFinish === "function") {
                forceFinish();
            } else {
                handleFinish();
            }
        }
    }, [seconds, timeLimit, state.finished, state.started]);

    // Hàm xử lý khi bấm Thử lại (Retry)
    const handleRetry = () => {
        isTriggeredFinish.current = false; // Reset lại flag ngăn chặn finish
        setPaused(false);                  // Hủy trạng thái tạm dừng nếu có
        reset();                           // Gọi hàm reset của hookuseTyping để làm sạch state nội bộ
    };

    const handlePause = () => {
        setPaused((prev) => !prev);
    };

    // Điều kiện hiển thị giao diện kết thúc dựa trên cả trạng thái kết thúc và bài thi phải đang chạy
    const isTimeUp = state.started && seconds >= timeLimit;
    const isGameFinished = state.finished || isTimeUp;

    return (
        <div className="space-y-6 mx-auto max-w-3xl px-4 py-8">
            {/* Thanh thông số: Thời gian và Tiến độ */}
            <div className="flex items-center justify-between border-b pb-4 dark:border-slate-800">
                <Timer seconds={seconds} />
                <div className="w-2/3">
                    <ProgressBar current={state.currentIndex} total={content.length} />
                </div>
            </div>

            {/* Vùng gõ chữ */}
            <div
                className={`
                    relative 
                    rounded-2xl 
                    border 
                    bg-slate-50/50 
                    dark:bg-slate-900/50
                    p-8 
                    text-2xl 
                    font-mono 
                    leading-relaxed 
                    break-words 
                    select-none
                    transition-all
                    ${paused ? "blur-md pointer-events-none" : ""}
                `}
            >
                {content.split("").map((character, index) => {
                    const isCurrent = index === state.currentIndex;

                    return (
                        <span key={index} className="relative inline-block">
                            {isCurrent && !isGameFinished && <Cursor />}
                            <Character
                                character={character}
                                typedCharacter={state.typed[index]}
                            />
                        </span>
                    );
                })}
            </div>

            {/* Thông báo khi hết giờ hoặc hoàn thành chữ */}
            {isGameFinished && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 animate-in fade-in">
                    <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                        🎉 {isTimeUp ? "Time's up!" : "Congratulations! Completed the typing test"}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Please click <strong>Finish</strong> to view your detailed metrics.
                    </p>
                </div>
            )}

            {/* Thanh công cụ điều khiển */}
            <div className="flex gap-3 pt-2">
                <button
                    onClick={handlePause}
                    disabled={isGameFinished}
                    className="rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 px-5 py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                    {paused ? "Resume" : "Pause"}
                </button>

                <button
                    onClick={handleRetry}
                    className="rounded-xl bg-slate-600 hover:bg-slate-700 active:scale-95 px-5 py-2.5 text-sm font-semibold text-white transition-all"
                >
                    Retry
                </button>

                {isGameFinished && (
                    <button
                        onClick={handleFinish}
                        className="rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 px-6 py-2.5 text-sm font-semibold text-white transition-all shadow-md shadow-emerald-600/20"
                    >
                        Finish
                    </button>
                )}
            </div>
        </div>
    );
}