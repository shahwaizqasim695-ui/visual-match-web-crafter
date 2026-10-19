import { createFileRoute, redirect } from "@tanstack/react-router";

// Old address kept working: send visitors to the new Contact Us page.
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/contact-us", statusCode: 301 });
  },
});
