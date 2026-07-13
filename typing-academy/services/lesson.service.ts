import { lessons } from "@/data/lessons";

class LessonService {
    getLevels() {
        return [...new Set(lessons.map((lesson) => lesson.level))];
    }

    getLessons(level: number) {
        return lessons
            .filter((lesson) => lesson.level === level)
            .sort((a, b) => a.order - b.order);
    }

    getLesson(id: string) {
        return lessons.find((lesson) => lesson.id === id);
    }
}

export const lessonService = new LessonService();