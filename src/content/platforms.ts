// Single source of truth for where the book can be bought.
// Add confirmed platforms by filling in `name`, `description` and a real `url`.
// Buttons only become active when `url` is set.
export type Platform = { id: string; name: string; description: string; url?: string; logo?: string };

export const platforms: Platform[] = [
  { id: "slot-1", name: "Platform to be announced", description: "A confirmed retailer will be listed here once available." },
  { id: "slot-2", name: "Platform to be announced", description: "A confirmed retailer will be listed here once available." },
  { id: "slot-3", name: "Platform to be announced", description: "A confirmed retailer will be listed here once available." },
];
