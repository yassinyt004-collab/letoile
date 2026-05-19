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
  title: "L'Étoile Clermont — Tacos, Burgers, Sandwichs Premium",
  description:
    "Restaurant fast-food premium à Clermont-Ferrand. Tacos, burgers, sandwichs, bowls et frites maison. 2 adresses : Ballainvilliers & Montferrand. Ouvert 7j/7 de 10h à 01h.",
  keywords: [
    "L'Étoile",
    "Clermont-Ferrand",
    "tacos",
    "burgers",
    "sandwichs",
    "bowls",
    "frites maison",
    "fast food premium",
    "livraison Clermont",
  ],
  openGraph: {
    title: "L'Étoile Clermont — Tacos, Burgers, Sandwichs Premium",
    description:
      "Fast-food premium à Clermont-Ferrand. Ouvert 7j/7. Tacos, burgers, bowls, sandwichs signature.",
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
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-glow opacity-40" />
        {children}
      </body>
    </html>
  );
}
