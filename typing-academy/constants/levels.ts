export interface level {
    id: number,
    name: string,
    description: string,
}

export const LEVELS: level[] = [
    {
        id: 1,
        name: "Beginner",
        description: "Learn home row and basic words."
    },
    {
        id: 2,
        name: "Intermediate",
        description: "Practice common English sentences.",
    },
    {
        id: 3,
        name: "Advanced",
        description: "Long paragraphs with punctuation.",
    },
    {
        id: 4,
        name: "Master",
        description: "High speed typing challenge.",
    },
]