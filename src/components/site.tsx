import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import coverAsset from "@/assets/little-crow-cover.png.asset.json";

export const EASE = [0.2, 0.7, 0.2, 1] as const;
export const coverUrl = coverAsset.url;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about-the-author", label: "About the Author" },
  { to: "/about-the-book", label: "About the Book" },
  { to: "/platforms", label: "Platforms" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl tracking-wide">L.E. Rogers</Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground">
              {n.label}
              {path === n.to && (
                <motion.span layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  transition={{ duration: 0.5, ease: EASE }} />
              )}
            </Link>
          ))}
          <MotionLink to="/about-the-book" className="btn-ink">Explore the Book</MotionLink>
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
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)}
                className="font-serif text-3xl data-[status=active]:text-accent data-[status=active]:italic">{n.label}</Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

/** Link with gentle hover/tap scale, used for CTA buttons. */
const MotionLinkBase = motion.create(Link);
export function MotionLink(props: React.ComponentProps<typeof MotionLinkBase>) {
  return <MotionLinkBase whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.3, ease: EASE }} {...props} />;
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
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: EASE, delay: delay / 1000 }}>
      {children}
    </motion.div>
  );
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

/** The real book cover, with a soft lift on hover. */
export function BookCover({ className = "", eager = false }: { className?: string; eager?: boolean }) {
  return (
    <motion.div className={`relative shadow-book ${className}`}
      initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      whileHover={{ y: -8, rotate: 0 }} transition={{ duration: 1, ease: EASE }}>
      <img src={coverUrl} alt="Where'd You Go, Little Crow? book cover by L.E. Rogers" width={679} height={684}
        loading={eager ? "eager" : "lazy"} className="block aspect-[679/684] w-full object-cover" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-foreground/30 to-transparent" />
    </motion.div>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } };
export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={stagger} initial="hidden" animate="show">{children}</motion.div>;
}
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={item}>{children}</motion.div>;
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle: string }) {
  return (
    <Stagger className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-center">
      <StaggerItem><p className="eyebrow">{eyebrow}</p></StaggerItem>
      <StaggerItem><h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">{title}</h1></StaggerItem>
      <StaggerItem><p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{subtitle}</p></StaggerItem>
      <StaggerItem><div className="rule-ornament mx-auto mt-12 max-w-xs text-xs">✦</div></StaggerItem>
    </Stagger>
  );
}
