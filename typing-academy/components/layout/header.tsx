import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-xl font-bold"
                >
                    Typing Academy
                </Link>

                <span className="text-sm text-gray-500">
                    Sprint 01
                </span>
            </div>
        </header>
    );
}