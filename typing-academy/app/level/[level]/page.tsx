import Header from "@/components/layout/header";
import LessonCard from "@/components/lesson/lesson-card";
import { lessonService } from "@/services/lesson.service";

interface Props {
  params: Promise<{
    level: string;
  }>;
}

export default async function LevelPage({
  params,
}: Props) {
  const { level } = await params;

  const lessons = lessonService.getLessons(
    Number(level)
  );

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">
          Level {level}
        </h1>

        <div className="grid gap-5">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
            />
          ))}
        </div>
      </main>
    </>
  );
}