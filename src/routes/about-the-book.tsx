import { createFileRoute, Link } from "@tanstack/react-router";
import { ArtPlaceholder, BookCover, Reveal } from "@/components/site";

export const Route = createFileRoute("/about-the-book")({
  head: () => ({
    meta: [
      { title: "Where'd You Go, Little Crow? — About the Book" },
      { name: "description", content: "A tender illustrated story about a father and son by L.E. Rogers. Characters, themes, and family activities." },
      { property: "og:title", content: "Where'd You Go, Little Crow? — About the Book" },
      { property: "og:description", content: "A tender story about a father and son." },
    ],
  }),
  component: Page,
});

const characters = [
  { n: "Little Crow", d: "Different from his brothers, with a brown head and a distinctive scarf — full of kindness, generosity, and courage." },
  { n: "His Brothers", d: "Character description to be added from the manuscript." },
  { n: "His Father", d: "Character description to be added from the manuscript." },
];
const themes = ["Kindness", "Courage", "Belonging", "Love", "Forgiveness", "Faith"];

function Page() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow animate-rise">Book 1 · By L.E. Rogers</p>
          <h1 className="animate-rise mt-6 text-6xl leading-[1] md:text-8xl" style={{ animationDelay: "120ms" }}>Where'd You Go, <em className="text-accent">Little Crow?</em></h1>
          <p className="animate-rise mt-8 font-serif text-2xl italic text-muted-foreground" style={{ animationDelay: "240ms" }}>A tender story about a father and son.</p>
          <a href="#availability" className="btn-ink animate-rise mt-10" style={{ animationDelay: "360ms" }}>Find Your Copy</a>
        </div>
        <div className="animate-rise mx-auto w-full max-w-sm" style={{ animationDelay: "200ms" }}><BookCover className="-rotate-2" /></div>
      </section>

      <section className="border-y bg-secondary/60">
        <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">About the Story</p>
          <p className="mt-8 font-serif text-3xl leading-snug">
            Little Crow isn't like his brothers. Through his journey, he discovers that kindness, courage, and a father's love can help any little crow find where he belongs.
          </p>
          <p className="mt-6 text-sm italic text-muted-foreground">Full story summary to be refined from the manuscript.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="eyebrow">Meet the Characters</p>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {characters.map((c, i) => (
            <Reveal key={c.n} delay={i * 120}>
              <ArtPlaceholder label={c.n} className="aspect-square" />
              <h3 className="mt-6 text-3xl">{c.n}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow text-gold">Themes Within the Story</p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {themes.map((t, i) => <Reveal key={t} delay={i * 80}><span className="font-serif text-5xl italic md:text-6xl">{t}{i < themes.length - 1 && <span className="text-gold"> ·</span>}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="eyebrow">Inside the Book</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ArtPlaceholder label="Illustration spread" className="aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto" />
          <ArtPlaceholder label="Illustration" className="aspect-[4/3]" />
          <ArtPlaceholder label="Illustration" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="border-y bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">For families & classrooms</p>
            <h2 className="mt-4 text-5xl">Questions & Things to Do</h2>
            <p className="mt-6 text-muted-foreground">The original questions and activities from the book will appear here, reproduced exactly as written.</p>
          </Reveal>
          <ol className="space-y-5">
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="flex gap-5 border-b pb-5"><span className="font-hand text-2xl text-gold">{n}.</span>
                <span className="italic text-muted-foreground">Question {n} from the manuscript</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <Reveal className="border-l-2 border-accent pl-8">
          <p className="eyebrow">A Note About Cowbirds</p>
          <p className="mt-4 font-serif text-2xl italic text-muted-foreground">The author's educational note about cowbirds will be placed here in her own words.</p>
        </Reveal>
      </section>

      <section id="availability" className="bg-ink text-ink-foreground">
        <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-5xl md:text-6xl">Find Your Copy</h2>
          <p className="mt-6 opacity-75">See where Little Crow's story is available.</p>
          <Link to="/platforms" className="btn-line mt-10">View Platforms</Link>
        </Reveal>
      </section>
    </>
  );
}
