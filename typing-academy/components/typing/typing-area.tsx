"use client";

import Character from "./character";

import Cursor from "./cursor";

import ProgressBar from "./progress-bar";

import Timer from "./timer";

import { useTyping } from "@/hooks/use-typing";

import { useTimer } from "@/hooks/use-timer";

interface Props {

    content: string;
}

export default function TypingArea({

    content,

}: Props) {

    const { state } = useTyping(content);

    const seconds =
        useTimer(
            state.started,
            state.finished
        );

    return (

        <div className="space-y-8">

            <Timer
                seconds={seconds}
            />

            <ProgressBar
                current={state.currentIndex}
                total={content.length}
            />

            <div
                className="
                    rounded-2xl
                    border
                    bg-white
                    p-8
                    text-2xl
                    leading-10
                "
            >

                {content
                    .split("")
                    .map(
                        (
                            character,

                            index
                        ) => (

                            <span
                                key={index}
                            >

                                {index ===
                                    state.currentIndex && (
                                        <Cursor />
                                    )}

                                <Character
                                    character={
                                        character
                                    }
                                    status="pending"
                                />

                            </span>

                        )
                    )}

            </div>

        </div>

    );
}