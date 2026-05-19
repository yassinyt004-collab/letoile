"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sofia Bensaid",
    role: "Cliente fidèle",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    stars: 5,
    text: "Tout simplement le meilleur tacos de la ville. La sauce signature est addictive, les frites sont parfaites. L'expérience premium, vraiment.",
  },
  {
    name: "Karim El Amrani",
    role: "Food blogger",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
    stars: 5,
    text: "Le Black Angus Burger est une œuvre d'art. La cuisson est maîtrisée, le pain brioché parfait, et le service est rapide. Bravo à toute l'équipe.",
  },
  {
    name: "Yasmine Tazi",
    role: "Cliente",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    stars: 5,
    text: "Livraison ultra rapide, emballage premium, et surtout le goût... incomparable. C'est devenu notre rituel du vendredi soir en famille.",
  },
  {
    name: "Adam Cherkaoui",
    role: "Client régulier",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    stars: 5,
    text: "Qualité constante, équipe au top, ambiance soignée. L'Étoile a placé la barre très haut pour le fast-food au Maroc.",
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/10 blur-[140px]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="heading-eyebrow mx-auto">Avis Clients</span>
          <h2 className="heading-display mt-4 text-white">
            Ils parlent de{" "}
            <span className="text-gradient-red">L&apos;Étoile</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <Quote className="pointer-events-none absolute -top-6 left-6 h-24 w-24 text-crimson/15" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mt-6 font-display text-2xl font-medium leading-relaxed text-white md:text-3xl">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-crimson/40">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-white">
                      {r.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.18em] text-crimson-200">
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
