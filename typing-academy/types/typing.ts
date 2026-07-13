export interface TypingState {
    typed: string,
    currentIndex: number,
    started: boolean,
    finished: boolean,
    startTime: number | null,
    endTime: number | null,
    mistakes: number
}

