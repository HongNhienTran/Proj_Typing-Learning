import { TypingResult } from "@/types/result";

interface CalculateResultParams {
    content: string;
    typed: string;
    mistakes: number;
    startTime: number;
    endTime: number;
}

class TypingService {
    calculate({
        content,
        typed,
        mistakes,
        startTime,
        endTime,
    }: CalculateResultParams): TypingResult {
        // Tính toán khoảng thời gian (giây) an toàn
        const rawDuration = (endTime - startTime) / 1000;
        const duration = rawDuration > 0 ? rawDuration : 0.1; // Tránh duration bằng 0

        const minutes = duration / 60;

        // Tiêu chuẩn đo lường tốc độ gõ chữ quốc tế: 5 ký tự tính thành 1 từ (word)
        const words = typed.length / 5;

        // Kiểm tra điều kiện minutes > 0 để tránh chia cho 0
        const wpm = minutes > 0 ? Math.round(words / minutes) : 0;

        // Tính độ chính xác (Accuracy %) dựa trên lượng ký tự đã gõ thực tế
        const accuracy =
            typed.length === 0
                ? 100
                : Math.max(
                    0,
                    Math.round(((typed.length - mistakes) / typed.length) * 100)
                ); // Đảm bảo không bị số âm nếu số lỗi vượt quá số ký tự gõ

        // Tính toán điểm số tổng hợp dựa trên trọng số WPM và Độ chính xác
        const score = Math.round(accuracy * 0.7 + wpm * 0.3);

        return {
            duration,
            wpm,
            accuracy,
            mistakes,
            score,
        };
    }
}

export const typingService = new TypingService();