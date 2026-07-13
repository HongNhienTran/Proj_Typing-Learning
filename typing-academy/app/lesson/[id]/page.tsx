import { notFound } from "next/navigation";

import Header from "@/components/layout/header";

import LessonHeader from "@/components/lesson/lesson-header";

import LessonInfo from "@/components/lesson/lesson-info";

import TypingLayout from "@/components/typing/typing-layout";

import { lessonService } from "@/services/lesson.service";

import TypingArea from "@/components/typing/typing-area";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function LessonPage({
    params,
}: Props) {
    const { id } = await params;

    const lesson =
        lessonService.getLesson(id);

    if (!lesson) {
        notFound();
    }

    return (
        <>
            <Header />

            <main className="mx-auto max-w-5xl px-6 py-12">

                <LessonHeader
                    title={lesson.title}
                    description={lesson.description}
                />

                <div className="mt-8">

                    <LessonInfo
                        estimatedTime={
                            lesson.estimatedTime
                        }
                        isFinal={lesson.isFinal}
                    />

                </div>

                <TypingLayout>

                    <TypingArea
                        content={lesson.content}
                    />

                </TypingLayout>

            </main>
        </>
    );
}