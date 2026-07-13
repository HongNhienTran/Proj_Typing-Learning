interface LessonInfoProps {
  estimatedTime: number;
  isFinal: boolean;
}

export default function LessonInfo({
  estimatedTime,
  isFinal,
}: LessonInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-xl border p-4">

        <p className="text-sm text-gray-500">
          Estimated Time
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {estimatedTime} min
        </h3>

      </div>

      <div className="rounded-xl border p-4">

        <p className="text-sm text-gray-500">
          Lesson Type
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {isFinal
            ? "Final Test"
            : "Practice"}
        </h3>

      </div>

    </div>
  );
}