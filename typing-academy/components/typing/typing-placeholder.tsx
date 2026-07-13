interface TypingPlaceholderProps {
  content: string;
}

export default function TypingPlaceholder({
  content,
}: TypingPlaceholderProps) {
  return (
    <div className="rounded-2xl border bg-white p-8">

      <h2 className="mb-6 text-xl font-semibold">
        Typing Area
      </h2>

      <div className="rounded-lg bg-gray-100 p-6">

        <p className="leading-9 tracking-wide text-lg">
          {content}
        </p>

      </div>

      <div className="mt-6 rounded-lg border border-dashed p-6 text-center text-gray-500">

        Typing Engine sẽ được xây ở Part 2.2

      </div>

    </div>
  );
}