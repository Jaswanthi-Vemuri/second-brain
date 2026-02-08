import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between w-full">
        
        {/* Brand */}
        <Link
          href="/"
          className="font-brand text-4xl font-extrabold tracking-tight text-black"
        >
          AI Knowledge
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-base font-medium text-neutral-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-black">
            Dashboard
          </Link>
          <Link href="/docs" className="hover:text-black">
            Docs
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-black"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
