import { Lesson } from "../types/lesson";

export const lessons: Lesson[] = [
    {
        id: "lesson-1",
        level: 1,
        order: 1,
        title: "Home Row",
        description: "Practice the home row keys.",
        estimatedTime: 1,
        isFinal: false,
        content:
            "asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl;",
    },

    {
        id: "lesson-2",
        level: 1,
        order: 2,
        title: "Easy Words",
        description: "Simple English words.",
        estimatedTime: 2,
        isFinal: false,
        content:
            "dad fall ask sad flask salad all ask dad fall ask sad flask salad",
    },

    {
        id: "lesson-3",
        level: 1,
        order: 3,
        title: "Short Sentence",
        description: "Typing simple sentence.",
        estimatedTime: 2,
        isFinal: false,
        content:
            "The quick brown fox jumps over the lazy dog.",
    },

    {
        id: "lesson-final",
        level: 1,
        order: 4,
        title: "Final Test",
        description: "Complete typing challenge.",
        estimatedTime: 3,
        isFinal: true,
        content:
            "The quick brown fox jumps over the lazy dog. Practice makes perfect. Stay relaxed and focus on accuracy before increasing your typing speed.",
    },
];