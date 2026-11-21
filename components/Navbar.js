"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  const solid = scrolled || open;

  const headerClass = solid
    ? "bg-[rgba(8,9,13,0.88)] backdrop-blur-md border-b border-white/10"
    : "max-md:bg-[rgba(8,9,13,0.8)] max-md:backdrop-blur-md max-md:border-b max-md:border-white/10";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${headerClass}`}>
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="rounded-lg bg-slate-100 p-1"><Image src="/logo-mark.png" alt="" width={28} height={28} /></span>
          Nexora Lab
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([n, h]) => (
            <li key={h}>
              <Link href={h} aria-current={active(h) ? "page" : undefined} className="relative px-3 py-2" style={{ color: active(h) ? "var(--hl)" : undefined }}>
                {n}
                {active(h) && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--hl)]" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-p !py-2">Start a project</Link>
        </div>

        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden menu-in">
          <div className="wrap" style={{ paddingBottom: "1.75rem", maxHeight: "80vh", overflowY: "auto" }}>
            {links.map(([n, h]) => (
              <Link key={h} href={h} className="block border-b border-white/10 py-3 text-lg">{n}</Link>
            ))}
            <Link href="/contact" className="btn btn-p mt-5">Start a project</Link>
          </div>
        </div>
      )}
    </header>
  );
}