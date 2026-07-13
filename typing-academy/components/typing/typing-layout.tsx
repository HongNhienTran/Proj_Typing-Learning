import { ReactNode } from "react";

interface TypingLayoutProps {
  children: ReactNode;
}

export default function TypingLayout({
  children,
}: TypingLayoutProps) {
  return (
    <section className="mt-10">

      {children}

    </section>
  );
}