import Link from "next/link";
import { Lesson } from "../../types/lesson";

interface Props {
    lesson: Lesson;
}

export default function LessonCard({
    lesson,
}: Props) {
    return (
        <Link
            href={`/lesson/${lesson.id}`}
            className="rounded-xl border p-5 transition hover:bg-gray-100"
        >
            <h3 className="text-lg font-semibold">
                {lesson.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                {lesson.description}
            </p>

            <div className="mt-4 flex justify-between text-sm">
                <span>{lesson.estimatedTime} min</span>

                <span>
                    {lesson.isFinal
                        ? "Final"
                        : `Lesson ${lesson.order}`}
                </span>
            </div>
        </Link>
    );
}