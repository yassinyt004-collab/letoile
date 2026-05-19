import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "L'Étoile — Le Goût de l'Excellence",
  description:
    "Restaurant fast-food premium. Tacos, burgers, sandwichs et frites maison préparés avec des ingrédients premium.",
  keywords: [
    "fast food",
    "premium",
    "tacos",
    "burgers",
    "sandwichs",
    "frites maison",
    "L'Étoile",
  ],
  openGraph: {
    title: "L'Étoile — Le Goût de l'Excellence",
    description:
      "Des recettes gourmandes préparées avec des ingrédients premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-ink-900 text-white antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-glow opacity-50" />
        {children}
      </body>
    </html>
  );
}
