"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, ChefHat, Soup, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Produits frais",
    desc: "Livrés chaque matin par nos producteurs locaux.",
  },
  {
    icon: ChefHat,
    title: "Faits maison",
    desc: "Pains, frites et sauces préparés sur place.",
  },
  {
    icon: Soup,
    title: "Sauces signature",
    desc: "Recettes exclusives développées par nos chefs.",
  },
  {
    icon: Sparkles,
    title: "Qualité premium",
    desc: "Viandes nobles sélectionnées avec exigence.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Left — Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="heading-eyebrow">À propos</span>
          <h2 className="heading-display mt-4 text-white">
            Une cuisine{" "}
            <span className="text-gradient-red">passionnée</span>,
            <br /> un fast-food repensé.
          </h2>
          <p className="mt-6 leading-relaxed text-white/65">
            Depuis 2018, L&apos;Étoile redéfinit le fast-food en mariant la
            rapidité du service à l&apos;exigence d&apos;une cuisine haut de
            gamme. Nous sélectionnons des viandes nobles, préparons nos sauces
            chaque matin, et coupons nos frites à la main avant de les frire
            dans une huile premium.
          </p>
          <p className="mt-4 leading-relaxed text-white/55">
            Notre obsession : transformer chaque commande en expérience
            mémorable, du premier regard à la dernière bouchée.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass flex items-start gap-4 rounded-2xl p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-grad shadow-glow">
                  <f.icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                </span>
                <div>
                  <div className="font-semibold text-white">{f.title}</div>
                  <div className="mt-1 text-sm text-white/55">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative h-[480px] sm:h-[560px] lg:h-[620px]"
        >
          {/* Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/25 blur-3xl" />
          </div>

          {/* Big image */}
          <div className="absolute right-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-3xl border border-white/10 shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80"
              alt="Premium burger"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>

          {/* Small image */}
          <div className="absolute bottom-0 left-0 h-[60%] w-[60%] overflow-hidden rounded-3xl border border-white/10 shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
              alt="Chef cooking"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[55%] top-[45%] z-10 rounded-2xl border border-white/15 bg-ink-900/85 p-4 backdrop-blur-md shadow-glow"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-grad text-ink-900 shadow-lg">
                <ChefHat className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-display text-2xl font-black leading-none text-white">
                  8 ans
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">
                  d&apos;excellence
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
