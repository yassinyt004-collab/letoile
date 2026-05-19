"use client";

import { motion } from "framer-motion";
import {
  Beef,
  Drumstick,
  Sparkles,
  Truck,
  Salad,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Beef,
    title: "Viandes Premium",
    desc: "Bœuf, poulet, kebab — viandes sélectionnées avec soin pour chaque recette.",
    accent: "red" as const,
  },
  {
    icon: Drumstick,
    title: "Frites Maison",
    desc: "Pommes de terre fraîches coupées et frites sur place chaque jour.",
    accent: "gold" as const,
  },
  {
    icon: Sparkles,
    title: "Sauces Signature",
    desc: "13 sauces maison dont notre Samourai, Biggy Burger et Chili Thaï.",
    accent: "red" as const,
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    desc: "Commandez et recevez votre repas chaud en un temps record.",
    accent: "gold" as const,
  },
  {
    icon: Salad,
    title: "Produits Frais",
    desc: "Légumes frais, pains artisanaux, ingrédients renouvelés quotidiennement.",
    accent: "red" as const,
  },
  {
    icon: ShieldCheck,
    title: "Qualité Garantie",
    desc: "Une exigence sans compromis sur chaque produit que nous servons.",
    accent: "gold" as const,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-pad">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="heading-eyebrow mx-auto">Pourquoi L&apos;Étoile</span>
          <h2 className="heading-display mt-4 text-white">
            L&apos;exigence dans chaque{" "}
            <span className="text-gradient-red">détail</span>
          </h2>
          <p className="mt-4 text-white/55">
            Six engagements qui font la différence chez L&apos;Étoile Clermont.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-ink-800/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-crimson/40 hover:bg-ink-800"
            >
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-crimson/15 to-transparent" />
              </div>

              <div className="relative">
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${
                    it.accent === "red"
                      ? "bg-red-grad shadow-glow"
                      : "bg-gold-grad text-ink-900"
                  } transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <it.icon
                    className={`h-6 w-6 ${
                      it.accent === "red" ? "text-white" : "text-ink-900"
                    }`}
                    strokeWidth={2.4}
                  />
                </div>
                <h3 className="font-display text-xl font-black text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {it.desc}
                </p>

                <span className="absolute right-0 top-0 font-display text-5xl font-black text-white/[0.04]">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
