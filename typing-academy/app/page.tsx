import Link from "next/link";
import Header from "@/components/layout/header";
import { LEVELS } from "@/constants/levels";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          Typing Academy
        </h1>

        <p className="mt-4 max-w-xl text-gray-600">
          Improve your typing speed and accuracy
          through structured lessons.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {LEVELS.map((level) => (
            <Link
              key={level.id}
              href={`/level/${level.id}`}
              className="rounded-xl border p-6 transition hover:border-black"
            >
              <h2 className="text-2xl font-semibold">
                {level.name}
              </h2>

              <p className="mt-3 text-gray-500">
                {level.description}
              </p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}