"use client";

import { useCallback, useEffect, useState } from "react";
import { TypingState } from "@/types/typing";

const initialState: TypingState = {
    typed: "",
    currentIndex: 0,
    started: false,
    finished: false,
    startTime: null,
    endTime: null,
    mistakes: 0,
};

export function useTyping(
    content: string,
    paused: boolean
) {
    const [state, setState] =
        useState<TypingState>(initialState);

    const reset = () => {
        setState(initialState);
    };

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {

            if (paused) return;

            if (state.finished) return;

            if (event.ctrlKey) return;

            if (event.metaKey) return;

            if (event.altKey) return;

            if (event.key.length !== 1) return;

            const key = event.key;

            setState((previous) => {

                const expected =
                    content[previous.currentIndex];

                const started =
                    previous.started;

                const currentIndex =
                    previous.currentIndex + 1;

                const finished =
                    currentIndex >= content.length;

                return {

                    ...previous,

                    started:
                        started
                            ? previous.started
                            : true,

                    startTime:
                        started
                            ? previous.startTime
                            : Date.now(),

                    typed:
                        previous.typed + key,

                    currentIndex,

                    finished,

                    endTime:
                        finished
                            ? Date.now()
                            : previous.endTime,

                    mistakes:
                        previous.mistakes +
                        (key === expected ? 0 : 1),

                };

            });

        },
        [
            content,
            paused,
            state.finished,
        ]
    );

    useEffect(() => {

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [handleKeyDown]);

    return {

        state,

        reset,

    };
}