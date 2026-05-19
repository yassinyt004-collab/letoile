"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, UtensilsCrossed, Star, Flame } from "lucide-react";

const sparks = Array.from({ length: 18 });
const smokes = Array.from({ length: 6 });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-hero-grad"
    >
      {/* Ambient red glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-crimson/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[55vh] w-[55vh] rounded-full bg-crimson-700/40 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-gold/10 blur-[140px]" />
      </div>

      {/* Smoke layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {smokes.map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-40 w-40 rounded-full bg-white/5 blur-3xl animate-smoke"
            style={{
              left: `${10 + i * 14}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Fire sparks */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {sparks.map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_12px_#ffb86b] animate-spark"
            style={{
              left: `${5 + ((i * 53) % 95)}%`,
              animationDelay: `${(i * 0.27) % 3}s`,
              animationDuration: `${2 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, #000 35%, transparent 75%)",
        }}
      />

      <div className="container-x relative grid w-full grid-cols-1 items-center gap-12 pt-32 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-12">
        {/* LEFT — Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 lg:col-span-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="heading-eyebrow"
          >
            <Flame className="h-3.5 w-3.5" /> Premium Fast Food · Depuis 2018
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[88px]"
          >
            LE GOÛT DE
            <br />
            <span className="text-gradient-red">L&apos;EXCELLENCE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 text-lg font-medium tracking-wide text-white/80"
          >
            Tacos · Burgers · Sandwichs · Frites Maison
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/60"
          >
            Des recettes gourmandes préparées avec des ingrédients premium.
            Viandes nobles, sauces signature et frites coupées maison —
            l&apos;expérience fast-food repensée en cinéma gastronomique.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              <ShoppingBag className="h-4 w-4" />
              Commander Maintenant
            </a>
            <a href="#categories" className="btn-ghost">
              <UtensilsCrossed className="h-4 w-4" />
              Voir la Carte
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { v: "4.9", l: "Note Clients", icon: <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" /> },
              { v: "120+", l: "Recettes" },
              { v: "30 min", l: "Livraison" },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex items-center gap-1.5 font-display text-3xl font-black text-white">
                  {s.v}
                  {s.icon}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Cinematic food composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative h-[420px] w-full sm:h-[520px] lg:col-span-6 lg:h-[640px]"
        >
          {/* Plate / glow disc */}
          <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(193,18,31,0.35)_0%,_transparent_70%)] blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,_#7a0911,_#c1121f,_#f5b042,_#7a0911)] opacity-30 blur-3xl" />

          {/* Big burger — center hero */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-1 ring-white/10 shadow-glow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80"
              alt="Premium cheeseburger"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Fries chip */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-3, 1, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute -left-2 top-6 h-32 w-32 overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-premium md:h-40 md:w-40"
          >
            <Image
              src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
              alt="Crispy fries"
              fill
              sizes="160px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                Frites Maison
              </div>
            </div>
          </motion.div>

          {/* Tacos chip */}
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-2 top-12 h-36 w-36 overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-premium md:h-44 md:w-44"
          >
            <Image
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
              alt="Loaded tacos"
              fill
              sizes="180px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-crimson-200">
                Tacos Signature
              </div>
            </div>
          </motion.div>

          {/* Wrap chip */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute -bottom-2 -left-1 h-32 w-32 overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-premium md:h-40 md:w-40"
          >
            <Image
              src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
              alt="Grilled wrap"
              fill
              sizes="160px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                Wrap Grillé
              </div>
            </div>
          </motion.div>

          {/* Sauce chip */}
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [3, -1, 3] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -bottom-2 right-2 h-28 w-28 overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-premium md:h-36 md:w-36"
          >
            <Image
              src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600&q=80"
              alt="Signature sauce"
              fill
              sizes="140px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-crimson-200">
                Sauce Signature
              </div>
            </div>
          </motion.div>

          {/* Floating price tag */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: -8 }}
            transition={{ delay: 1.1, type: "spring" }}
            className="absolute right-8 top-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-ink-900/80 px-4 py-3 shadow-glow backdrop-blur-md"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Best Seller
            </div>
            <div className="mt-1 font-display text-xl font-black text-white">
              45 DH
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/40">
          <span>Scroll</span>
          <span className="relative h-10 w-[1.5px] overflow-hidden bg-white/10">
            <motion.span
              animate={{ y: [-40, 40] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-4 bg-red-grad"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
