import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — L.E. Rogers" },
      { name: "description", content: "Have a question about the book? Get in touch with L.E. Rogers." },
      { property: "og:title", content: "Let's Connect — L.E. Rogers" },
      { property: "og:description", content: "Reach out with questions about Where'd You Go, Little Crow?" },
    ],
  }),
  component: Page,
});

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function Page() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const errs: Errors = {};
    if (v("name").length < 2) errs.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) errs.email = "Please enter a valid email address.";
    if (v("subject").length < 2) errs.subject = "Please add a subject.";
    if (v("message").length < 10) errs.message = "Please write a message of at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) { setStatus("sent"); e.currentTarget.reset(); }
  }

  const field = "mt-2 w-full border-b border-input bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent";
  const Err = ({ k }: { k: keyof Errors }) => errors[k] ? <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <>
      <PageHero eyebrow="Contact Us" title={<>Let's <em className="text-accent">Connect</em></>}
        subtitle="Have a question about the book or want to reach out? We'd love to hear from you." />
      <section className="mx-auto max-w-2xl px-6 pb-28">
        <p className="mb-10 border border-dashed border-accent/50 bg-secondary p-4 text-sm text-muted-foreground">
          Demo form: messages are checked but not yet delivered. Delivery will be enabled once an email service is connected.
        </p>
        {status === "sent" ? (
          <div role="status" className="border bg-card p-10 text-center">
            <h2 className="text-4xl">Thank you.</h2>
            <p className="mt-4 text-muted-foreground">Your message passed all checks. (Demo mode — it was not sent.)</p>
            <button onClick={() => setStatus("idle")} className="btn-line mt-8">Write another</button>
          </div>
        ) : (
          <form noValidate onSubmit={submit} className="space-y-10">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            {([["name", "Full name", "text"], ["email", "Email address", "email"], ["subject", "Subject", "text"]] as const).map(([k, l, t]) => (
              <div key={k}>
                <label htmlFor={k} className="eyebrow">{l}</label>
                <input id={k} name={k} type={t} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
                <Err k={k} />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="eyebrow">Message</label>
              <textarea id="message" name="message" rows={6} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
              <Err k="message" />
            </div>
            <button type="submit" className="btn-ink">Send Message</button>
          </form>
        )}
      </section>
    </>
  );
}
