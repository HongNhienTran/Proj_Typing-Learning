"use client";

import { useEffect, useState } from "react";

export function useTimer(

    started: boolean,

    finished: boolean
) {

    const [seconds, setSeconds] =
        useState(0);

    useEffect(() => {

        if (!started || finished)
            return;

        const interval =
            setInterval(() => {

                setSeconds((prev) => prev + 1);

            }, 1000);

        return () =>
            clearInterval(interval);

    }, [started, finished]);

    return seconds;
}