"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Maxime D.",
    role: "Client régulier – Ballainvilliers",
    stars: 5,
    text: "Le meilleur tacos de Clermont, et de loin. Le O'Majestik est une tuerie, les frites maison sont parfaites. Je recommande à 100%.",
  },
  {
    name: "Sarah L.",
    role: "Étudiante – Montferrand",
    stars: 5,
    text: "Le menu étudiant à 6.90€ est imbattable pour la qualité. Les burgers sont généreux et les sauces signature font toute la différence.",
  },
  {
    name: "Karim B.",
    role: "Client fidèle",
    stars: 5,
    text: "On commande les Box pour les soirées entre amis, c'est toujours frais et copieux. Le service est rapide même le vendredi soir. Bravo l'équipe !",
  },
  {
    name: "Julie M.",
    role: "Famille – Clermont-Ferrand",
    stars: 5,
    text: "Les enfants adorent les nuggets et le menu enfants. Nous on prend les bowls signatures. Tout est fait maison, ça se sent dans le goût.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((s) => (s + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  const r = reviews[idx];

  return (
    <section className="relative section-pad">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/8 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="heading-eyebrow mx-auto">Avis Clients</span>
          <h2 className="heading-display mt-4 text-white">
            Ils parlent de{" "}
            <span className="text-gradient-red">L&apos;Étoile</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="pointer-events-none absolute -top-4 left-4 h-20 w-20 text-crimson/10" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mt-6 font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-red-grad text-lg font-black text-white shadow-glow">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-white">
                      {r.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-crimson-200">
                      {r.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Avis ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === idx
                      ? "w-8 bg-red-grad"
                      : "w-3 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                aria-label="Précédent"
                onClick={() =>
                  setIdx((s) => (s - 1 + reviews.length) % reviews.length)
                }
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-crimson/50 hover:bg-crimson/15"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Suivant"
                onClick={() => setIdx((s) => (s + 1) % reviews.length)}
                className="grid h-11 w-11 place-items-center rounded-full bg-red-grad text-white shadow-glow transition hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
