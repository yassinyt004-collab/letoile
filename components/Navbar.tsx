"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Notre Carte", href: "#menu" },
  { label: "À propos", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink-900/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-red-grad shadow-glow">
            <span className="text-lg font-black text-white">★</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-wide text-white">
              L&apos;ÉTOILE
            </span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-crimson-200">
              Clermont-Ferrand
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-grad transition-all duration-300 group-hover:w-1/2" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:0473905738"
            className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <Phone className="h-4 w-4" />
            04 73 90 57 38
          </a>
          <a href="#menu" className="btn-primary">
            <ShoppingBag className="h-4 w-4" />
            Commander
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((s) => !s)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-crimson/50 hover:bg-crimson/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/85 transition hover:bg-white/5 hover:text-crimson-200"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <a href="tel:0473905738" className="btn-primary w-full">
                  <Phone className="h-4 w-4" /> 04 73 90 57 38
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
