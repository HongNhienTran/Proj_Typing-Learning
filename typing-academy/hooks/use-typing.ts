"use client";

import { useState } from "react";

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

export function useTyping() {

    const [state, setState] =
        useState(initialState);

    return {

        state,

        setState,
    };
}