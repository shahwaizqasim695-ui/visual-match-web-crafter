import { createFileRoute, Link } from "@tanstack/react-router";
import branch from "@/assets/branch.png";
import { ArtPlaceholder, BookCover, Reveal } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L.E. Rogers — Where'd You Go, Little Crow?" },
      { name: "description", content: "Discover a tender illustrated story of courage, kindness, forgiveness, and finding where you belong, by L.E. Rogers." },
      { property: "og:title", content: "L.E. Rogers — Where'd You Go, Little Crow?" },
      { property: "og:description", content: "A tender illustrated story about a father and son, by L.E. Rogers." },
    ],
  }),
  component: Index,
});

const themes = [
  { t: "Courage", d: "Courage comes in many forms — sometimes it simply means being yourself." },
  { t: "Kindness", d: "Small, generous acts that change how others see the world." },
  { t: "Belonging", d: "Discovering that there is a place for every little crow." },
  { t: "Forgiveness", d: "Words can hurt, but forgiveness can heal." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={branch} alt="" aria-hidden width={1536} height={768}
          className="animate-drift pointer-events-none absolute -right-40 -top-10 w-[900px] max-w-none opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <p className="eyebrow animate-rise">Introducing the illustrated story by L.E. Rogers</p>
            <h1 className="animate-rise mt-8 text-6xl leading-[0.98] md:text-8xl" style={{ animationDelay: "120ms" }}>
              Every Little Crow <em className="text-accent">Has a Story.</em>
            </h1>
            <p className="animate-rise mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "260ms" }}>
              Discover a tender illustrated story of courage, kindness, forgiveness, and finding where you belong.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "400ms" }}>
              <Link to="/about-the-book" className="btn-ink">Discover the Book</Link>
              <Link to="/about-the-author" className="btn-line">Meet the Author</Link>
            </div>
          </div>
          <div className="animate-rise mx-auto w-full max-w-sm" style={{ animationDelay: "300ms" }}>
            <BookCover className="rotate-2 transition-transform duration-700 hover:rotate-0" />
          </div>
        </div>
      </section>

      {/* Story from the heart */}
      <section className="border-y bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">A story from the heart</p>
            <h2 className="mt-6 text-5xl leading-tight md:text-6xl">A Little Story.<br /><em>A Lasting Message.</em></h2>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
              A tender story about a father and son — and a little crow learning that what makes him different is part of what makes him special.
            </p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {themes.map((x, i) => (
              <Reveal key={x.t} delay={i * 120}>
                <span className="font-hand text-2xl text-gold">0{i + 1}</span>
                <h3 className="mt-1 text-3xl">{x.t}.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Little Crow */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal><ArtPlaceholder label="Little Crow character illustration" className="aspect-[4/5]" /></Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">The heart of the story</p>
          <h2 className="mt-6 text-5xl md:text-6xl">Meet Little Crow</h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Little Crow isn't quite like his brothers. With his brown head and his distinctive scarf, he stands out — but it's his kindness, generosity, and quiet courage that truly set him apart.
          </p>
          <Link to="/about-the-book" className="btn-line mt-10">Discover His Journey →</Link>
        </Reveal>
      </section>

      {/* Showcase */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
          <Reveal className="mx-auto w-full max-w-xs"><BookCover className="text-foreground" /></Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-gold">Book 1 · By L.E. Rogers</p>
            <h2 className="mt-6 text-5xl md:text-6xl">Where'd You Go, <em>Little Crow?</em></h2>
            <p className="mt-8 max-w-md leading-relaxed opacity-75">
              An illustrated picture book about a father, his son, and a little crow finding the courage to be himself.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/about-the-book" className="btn-line">Explore the Story</Link>
              <Link to="/platforms" className="btn-line">Where to Buy</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Message */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <Reveal>
            <p className="eyebrow">The message behind the story</p>
            <h2 className="mt-6 text-5xl leading-tight md:text-7xl">Because Being Different <em className="text-accent">Can Be Beautiful.</em></h2>
          </Reveal>
          <ul className="mt-16 divide-y border-y text-left">
            {["Every individual has value.", "Kindness matters.", "Words can hurt, but forgiveness can heal.", "Courage comes in many forms.", "Family relationships are worth nurturing."].map((m, i) => (
              <li key={m}><Reveal delay={i * 80} className="flex items-baseline gap-6 py-6">
                <span className="font-hand text-xl text-gold">✦</span><span className="font-serif text-2xl md:text-3xl">{m}</span>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6"><p className="eyebrow">Inside the pages</p>
          <h2 className="mt-6 text-5xl">An Illustrated Storybook Moment</h2></div>
        <div className="mt-14 flex snap-x gap-8 overflow-x-auto px-6 pb-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {[1, 2, 3, 4, 5].map((n) => (
            <figure key={n} className="w-72 shrink-0 snap-start md:w-96">
              <ArtPlaceholder label={`Book illustration ${n}`} className="aspect-[4/3]" />
              <figcaption className="mt-3 text-sm italic text-muted-foreground">Caption for illustration {n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Author preview */}
      <section className="border-t">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal><ArtPlaceholder label="Author portrait (to be supplied)" className="aspect-square" /></Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Behind the Story</p>
            <h2 className="mt-6 text-5xl">L.E. Rogers</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              L.E. Rogers is a freelance writer of children's and adult literature based in the Pacific Northwest, near the beautiful Pacific Coast. She finds inspiration in the natural beauty of her surroundings and enjoys beachcombing and whale watching.
            </p>
            <Link to="/about-the-author" className="btn-line mt-10">More About L.E. Rogers</Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={branch} alt="" aria-hidden loading="lazy" width={1536} height={768}
          className="pointer-events-none absolute -bottom-20 left-1/2 w-[1100px] max-w-none -translate-x-1/2 opacity-10 invert" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <h2 className="text-5xl md:text-7xl">Some Stories <em className="text-gold">Stay With Us.</em></h2>
          <p className="mx-auto mt-8 max-w-xl text-lg opacity-75">Step into Little Crow's world and discover a journey filled with heart, hope, and the courage to be yourself.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/about-the-book" className="btn-line">Explore the Book</Link>
            <Link to="/platforms" className="btn-line">Find the Book</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
