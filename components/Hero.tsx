"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, UtensilsCrossed, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-hero-grad"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-crimson/25 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[50vh] w-[50vh] rounded-full bg-crimson-700/30 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[45vh] w-[45vh] rounded-full bg-gold/8 blur-[120px]" />
      </div>

      <div className="container-x relative grid w-full grid-cols-1 items-center gap-12 pt-32 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-16">
        {/* LEFT — Content */}
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
            <span className="text-base">★</span> Clermont-Ferrand · 7j/7
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[84px]"
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
            Tacos • Burgers • Sandwichs • Bowls • Frites Maison
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/55"
          >
            Des recettes gourmandes préparées avec des ingrédients frais et de
            qualité. Viandes premium, sauces signature et frites maison — votre
            fast-food premium à Clermont-Ferrand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#menu" className="btn-primary">
              <ShoppingBag className="h-4 w-4" />
              Commander Maintenant
            </a>
            <a href="#menu" className="btn-ghost">
              <UtensilsCrossed className="h-4 w-4" />
              Voir la Carte
            </a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-sm text-white/55"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-crimson-400" />
              2 adresses à Clermont-Ferrand
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-400" />
              Ouvert 7j/7 — 10h à 01h
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Food composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative h-[400px] w-full sm:h-[500px] lg:col-span-6 lg:h-[600px]"
        >
          {/* Glow disc */}
          <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(193,18,31,0.3)_0%,_transparent_70%)] blur-2xl" />

          {/* Big burger — center */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-1 ring-white/10 shadow-glow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80"
              alt="Burger premium L'Étoile"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Tacos chip */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-2 top-8 h-32 w-32 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-premium md:h-40 md:w-40"
          >
            <Image
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
              alt="Tacos L'Étoile"
              fill
              sizes="160px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-crimson-200">
                Tacos Signature
              </div>
            </div>
          </motion.div>

          {/* Frites chip */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute -left-2 top-10 h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-premium md:h-36 md:w-36"
          >
            <Image
              src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
              alt="Frites maison"
              fill
              sizes="140px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                Frites Maison
              </div>
            </div>
          </motion.div>

          {/* Bowl chip */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute -bottom-2 left-4 h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-premium md:h-36 md:w-36"
          >
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
              alt="Bowl signature"
              fill
              sizes="140px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                Bowls
              </div>
            </div>
          </motion.div>

          {/* Sandwich chip */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [3, -1, 3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -bottom-2 right-4 h-26 w-26 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-premium md:h-32 md:w-32"
          >
            <Image
              src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
              alt="Sandwich L'Étoile"
              fill
              sizes="130px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-crimson-200">
                Sandwichs
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
          <span>Scroll</span>
          <span className="relative h-8 w-[1.5px] overflow-hidden bg-white/10">
            <motion.span
              animate={{ y: [-32, 32] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-3 bg-red-grad"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
