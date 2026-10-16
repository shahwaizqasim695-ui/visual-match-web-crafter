import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about-the-author", label: "About the Author" },
  { to: "/about-the-book", label: "About the Book" },
  { to: "/platforms", label: "Platforms" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl tracking-wide">L.E. Rogers</Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-accent">
              {n.label}
            </Link>
          ))}
          <Link to="/about-the-book" className="btn-ink">Explore the Book</Link>
        </nav>
        <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          onClick={() => setOpen(!open)} className="relative h-8 w-8 lg:hidden">
          <span className={`absolute left-1 right-1 h-px bg-foreground transition-all duration-500 ${open ? "top-4 rotate-45" : "top-2.5"}`} />
          <span className={`absolute left-1 right-1 h-px bg-foreground transition-all duration-500 ${open ? "top-4 -rotate-45" : "top-5"}`} />
        </button>
      </div>
      <div className={`grid overflow-hidden transition-all duration-500 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav className="min-h-0">
          <div className="flex flex-col gap-5 px-6 pb-8 pt-2">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-serif text-3xl">{n.label}</Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">L.E. Rogers</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">Stories inspired by nature, imagination, and the moments that matter.</p>
        </div>
        <nav className="flex flex-col gap-3 text-sm">
          {nav.map((n) => <Link key={n.to} to={n.to} className="opacity-70 hover:opacity-100">{n.label}</Link>)}
        </nav>
        <div className="text-sm opacity-70 md:text-right">
          <p className="font-hand text-2xl text-gold opacity-100">Where'd you go, Little Crow?</p>
          <p className="mt-6">© {new Date().getFullYear()} L.E. Rogers · authorlerogers.com</p>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

/** Clearly marked spot for original book artwork / text, to be replaced with supplied material. */
export function ArtPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center border border-dashed border-accent/50 bg-secondary p-6 text-center ${className}`}>
      <div>
        <p className="eyebrow">Original artwork</p>
        <p className="mt-2 font-serif text-lg italic text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function BookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[3/4] bg-card shadow-book ${className}`}>
      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-foreground/20 to-transparent" />
      <div className="flex h-full flex-col items-center justify-between border border-gold/40 p-8 text-center">
        <p className="eyebrow">Book 1</p>
        <div>
          <p className="font-serif text-4xl leading-tight">Where'd You Go,<br /><em>Little Crow?</em></p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Cover artwork to be placed</p>
        </div>
        <p className="font-serif text-lg">L.E. Rogers</p>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle: string }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-center">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="animate-rise mt-6 text-5xl leading-[1.05] md:text-7xl" style={{ animationDelay: "120ms" }}>{title}</h1>
      <p className="animate-rise mx-auto mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "240ms" }}>{subtitle}</p>
      <div className="rule-ornament mx-auto mt-12 max-w-xs text-xs">✦</div>
    </section>
  );
}
