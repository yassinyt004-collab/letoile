"use client";

import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Notre Carte", href: "#menu" },
  { label: "À propos", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  "Tacos",
  "Burgers",
  "Sandwichs",
  "Bowls",
  "Paninis",
  "Frites",
  "Desserts",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-crimson/10 blur-[120px]" />
      </div>

      <div className="container-x py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-grad shadow-glow">
                <span className="text-lg font-black text-white">★</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-black tracking-wide text-white">
                  L&apos;ÉTOILE
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-crimson-200">
                  Clermont-Ferrand
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Fast-food premium à Clermont-Ferrand. Tacos, burgers, sandwichs,
              bowls et frites maison. Ouvert 7j/7.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-crimson/50 hover:bg-crimson/15 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-crimson/50 hover:bg-crimson/15 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-crimson-200"
                  >
                    <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-crimson-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Notre Carte
            </h4>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c}>
                  <a
                    href="#menu"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-crimson-200"
                  >
                    <span className="h-px w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-crimson-400" />
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson-400" />
                <span>29 Rue Ballainvilliers, 63000 Clermont-Ferrand</span>
              </li>
              <li>
                <a
                  href="tel:0473905738"
                  className="flex items-center gap-2.5 text-sm text-white/50 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-crimson-400" />
                  04 73 90 57 38
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>2 Rue Debay Facy, 63000 Clermont-Ferrand</span>
              </li>
              <li>
                <a
                  href="tel:0463082410"
                  className="flex items-center gap-2.5 text-sm text-white/50 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  04 63 08 24 10
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Clock className="h-4 w-4 text-crimson-400" />
                7j/7 — 10h00 → 01h00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 md:flex-row">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} L&apos;Étoile Clermont-Ferrand. Tous droits réservés.
          </p>
          <p className="text-xs text-white/35">
            Ouvert 7j/7 · 10h00 → 01h00
          </p>
        </div>
      </div>
    </footer>
  );
}
