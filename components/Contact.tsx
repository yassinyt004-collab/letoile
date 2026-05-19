"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  Mail,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative section-pad">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-crimson/12 blur-[100px]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="heading-eyebrow mx-auto">Contact</span>
          <h2 className="heading-display mt-4 text-white">
            Nos <span className="text-gradient-red">adresses</span>
          </h2>
          <p className="mt-4 text-white/55">
            Retrouvez-nous dans nos deux restaurants à Clermont-Ferrand.
            Ouvert 7j/7 de 10h00 à 01h00.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 lg:col-span-2"
          >
            {/* Ballainvilliers */}
            <div className="group rounded-2xl border border-white/8 bg-ink-800/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-crimson/40 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-grad text-white shadow-glow">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold text-white">
                    Ballainvilliers
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    29 Rue Ballainvilliers, 63000 Clermont-Ferrand
                  </p>
                  <a
                    href="tel:0473905738"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-crimson-200 transition hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> 04 73 90 57 38
                  </a>
                </div>
              </div>
            </div>

            {/* Montferrand */}
            <div className="group rounded-2xl border border-white/8 bg-ink-800/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-crimson/40 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-grad text-ink-900">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold text-white">
                    Montferrand
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    2 Rue Debay Facy, 63000 Clermont-Ferrand
                  </p>
                  <a
                    href="tel:0463082410"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-crimson-200 transition hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> 04 63 08 24 10
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="group rounded-2xl border border-white/8 bg-ink-800/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-crimson/40 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-grad text-white shadow-glow">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold text-white">
                    Horaires
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    Ouvert 7 jours sur 7
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-gold-400">
                    10h00 → 01h00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur-sm md:p-8">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                      Nom
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-2xl border border-white/10 bg-ink-900/80 py-3 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                      Email
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        required
                        type="email"
                        placeholder="vous@email.com"
                        className="w-full rounded-2xl border border-white/10 bg-ink-900/80 py-3 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Téléphone
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                      <Phone className="h-4 w-4" />
                    </span>
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      className="w-full rounded-2xl border border-white/10 bg-ink-900/80 py-3 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Votre message..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                  disabled={sent}
                >
                  {sent ? (
                    "Message envoyé ✓"
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Envoyer
                    </>
                  )}
                </button>
              </form>

              {/* Real Google Map — 29 Rue Ballainvilliers, 63000 Clermont-Ferrand */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="L'Étoile Clermont-Ferrand – Ballainvilliers"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.26!2d3.0825!3d45.7753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f71be2f8f8f8f%3A0x0!2s29+Rue+Ballainvilliers%2C+63000+Clermont-Ferrand!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(0.3) invert(0.92) hue-rotate(180deg)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
