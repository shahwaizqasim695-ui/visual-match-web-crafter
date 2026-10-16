import { createFileRoute, Link } from "@tanstack/react-router";
import branch from "@/assets/branch.png";
import { ArtPlaceholder, BookCover, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/about-the-author")({
  head: () => ({
    meta: [
      { title: "About the Author — L.E. Rogers" },
      { name: "description", content: "Meet L.E. Rogers, a Pacific Northwest writer of children's and adult literature." },
      { property: "og:title", content: "About the Author — L.E. Rogers" },
      { property: "og:description", content: "Stories inspired by nature, imagination, and the moments that matter." },
    ],
  }),
  component: Page,
});

const sections = [
  { e: "Inspiration", t: "The Pacific Northwest", d: "Based near the beautiful Pacific Coast, she finds inspiration in the natural beauty of her surroundings." },
  { e: "Nature", t: "Beachcombing & Whales", d: "When she isn't writing, she enjoys beachcombing and whale watching." },
  { e: "Craft", t: "Children's & Adult Literature", d: "A freelance writer whose work spans both children's and adult literature." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="About the Author" title={<>Meet <em className="text-accent">L.E. Rogers</em></>}
        subtitle="Stories inspired by nature, imagination, and the moments that matter." />
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-28 md:grid-cols-2">
        <Reveal><ArtPlaceholder label="Author portrait (to be supplied)" className="aspect-[4/5]" /></Reveal>
        <Reveal delay={150}>
          <p className="font-serif text-3xl leading-snug">
            <span className="float-left mr-3 font-serif text-7xl leading-none text-accent">L</span>.E. Rogers is a freelance writer of children's and adult literature based in the Pacific Northwest, near the beautiful Pacific Coast.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">She finds inspiration in the natural beauty of her surroundings and enjoys beachcombing and whale watching.</p>
        </Reveal>
      </section>
      <section className="relative overflow-hidden border-y bg-secondary/60">
        <img src={branch} alt="" aria-hidden loading="lazy" width={1536} height={768} className="pointer-events-none absolute -left-40 top-0 w-[700px] max-w-none opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <p className="eyebrow">{s.e}</p><h3 className="mt-4 text-3xl">{s.t}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl items-center gap-16 px-6 py-28 md:grid-cols-[0.7fr_1.3fr]">
        <Reveal className="mx-auto w-full max-w-60"><BookCover /></Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Featured book</p>
          <h2 className="mt-4 text-5xl">Where'd You Go, <em>Little Crow?</em></h2>
          <p className="mt-6 text-muted-foreground">A tender story about a father and son.</p>
          <Link to="/about-the-book" className="btn-ink mt-8">Explore the Book</Link>
        </Reveal>
      </section>
    </>
  );
}
