"use client";

import { personal } from "@/data/site";

const links = ["About", "Skills", "Experience", "Projects", "Services", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-lg font-black tracking-tight sm:text-xl">
          Suhaib<span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-sky-400">
              {link}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="rounded-full bg-sky-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
