"use client";

import { Flame, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const cols = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "#hero" },
      { label: "Notre Carte", href: "#categories" },
      { label: "À propos", href: "#about" },
      { label: "Galerie", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Catégories",
    links: [
      { label: "Tacos", href: "#categories" },
      { label: "Burgers", href: "#categories" },
      { label: "Sandwichs", href: "#categories" },
      { label: "Menus", href: "#categories" },
      { label: "Frites", href: "#categories" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Livraison", href: "#contact" },
      { label: "Réservation", href: "#contact" },
      { label: "Carte cadeau", href: "#contact" },
      { label: "Recrutement", href: "#contact" },
      { label: "FAQ", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-crimson/15 blur-[120px]" />
      </div>

      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-red-grad shadow-glow">
                <Flame className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-black tracking-wide text-white">
                  L&apos;ÉTOILE
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-crimson-300">
                  Premium Food
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              L&apos;expérience fast-food repensée en cinéma gastronomique.
              Recettes signature, ingrédients premium, livraison rapide.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-crimson/50 hover:bg-crimson/15 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition hover:text-crimson-200"
                    >
                      <span className="h-px w-3 bg-white/20 transition-all duration-300 group-hover:w-6 group-hover:bg-crimson-400" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} L&apos;Étoile. Tous droits réservés.
          </p>
          <p className="text-xs text-white/40">
            Conçu avec passion · Servi avec excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
