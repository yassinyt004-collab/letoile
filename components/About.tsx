"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Flame, Users } from "lucide-react";

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
            L&apos;Étoile,{" "}
            <span className="text-gradient-red">votre fast-food premium</span>
          </h2>
          <p className="mt-6 leading-relaxed text-white/65">
            Installée au cœur de Clermont-Ferrand avec deux adresses — Ballainvilliers
            et Montferrand — L&apos;Étoile est née d&apos;une ambition simple : proposer
            un fast-food qui ne fait aucun compromis sur la qualité. Nos viandes sont
            sélectionnées avec soin, nos frites sont coupées et frites sur place, et
            nos sauces sont préparées maison chaque jour.
          </p>
          <p className="mt-4 leading-relaxed text-white/55">
            Du tacos signature au burger premium, en passant par nos bowls généreux
            et nos croustiz croustillants, chaque recette est pensée pour offrir un
            maximum de saveurs à un prix accessible. Ouvert 7 jours sur 7, de 10h à 01h,
            pour satisfaire toutes vos envies.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="glass flex items-start gap-3 rounded-2xl p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-grad shadow-glow">
                <MapPin className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">2 adresses</div>
                <div className="mt-0.5 text-xs text-white/50">Clermont-Ferrand</div>
              </div>
            </div>
            <div className="glass flex items-start gap-3 rounded-2xl p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-grad">
                <Clock className="h-5 w-5 text-ink-900" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">7j/7</div>
                <div className="mt-0.5 text-xs text-white/50">10h00 → 01h00</div>
              </div>
            </div>
            <div className="glass flex items-start gap-3 rounded-2xl p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-grad shadow-glow">
                <Flame className="h-5 w-5 text-white" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">120+ recettes</div>
                <div className="mt-0.5 text-xs text-white/50">Carte complète</div>
              </div>
            </div>
            <div className="glass flex items-start gap-3 rounded-2xl p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-grad">
                <Users className="h-5 w-5 text-ink-900" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Équipe passionnée</div>
                <div className="mt-0.5 text-xs text-white/50">Service rapide</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative h-[450px] sm:h-[520px] lg:h-[580px]"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/20 blur-3xl" />
          </div>

          {/* Main image */}
          <div className="absolute right-0 top-0 h-[75%] w-[80%] overflow-hidden rounded-3xl border border-white/10 shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80"
              alt="Burger premium L'Étoile Clermont"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>

          {/* Secondary image */}
          <div className="absolute bottom-0 left-0 h-[55%] w-[55%] overflow-hidden rounded-3xl border border-white/10 shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80"
              alt="Tacos signature L'Étoile"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[50%] top-[42%] z-10 rounded-2xl border border-white/15 bg-ink-900/85 p-4 backdrop-blur-md shadow-glow"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-red-grad text-white shadow-lg">
                <span className="text-lg font-black">★</span>
              </span>
              <div>
                <div className="font-display text-xl font-black leading-none text-white">
                  Premium
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Qualité garantie
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
