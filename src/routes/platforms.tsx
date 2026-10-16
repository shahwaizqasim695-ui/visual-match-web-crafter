import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/site";
import { platforms } from "@/content/platforms";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Where to Find the Book — L.E. Rogers" },
      { name: "description", content: "Find where to buy Where'd You Go, Little Crow? by L.E. Rogers." },
      { property: "og:title", content: "Find Little Crow's Story" },
      { property: "og:description", content: "Where to find Where'd You Go, Little Crow? by L.E. Rogers." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Where to find the book" title={<>Find Little Crow's <em className="text-accent">Story</em></>}
        subtitle="Confirmed retailers will be listed here as soon as they're available." />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-28 md:grid-cols-3">
        {platforms.map((p, i) => (
          <Reveal key={p.id} delay={i * 120} className="flex flex-col border bg-card p-8">
            <div className="flex h-16 items-center justify-center border border-dashed border-accent/40 bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
              {p.logo ? <img src={p.logo} alt={p.name} className="h-10" /> : "Logo"}
            </div>
            <h3 className="mt-6 text-2xl">{p.name}</h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-ink mt-8 justify-center">Buy Now</a>
            ) : (
              <span aria-disabled className="mt-8 border border-dashed py-3 text-center text-xs uppercase tracking-widest text-muted-foreground">Coming soon</span>
            )}
          </Reveal>
        ))}
      </section>
    </>
  );
}
