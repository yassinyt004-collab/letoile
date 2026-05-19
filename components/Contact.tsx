"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-crimson/15 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="heading-eyebrow mx-auto">Contact</span>
          <h2 className="heading-display mt-4 text-white">
            Prêt à <span className="text-gradient-red">commander</span> ?
          </h2>
          <p className="mt-4 text-white/55">
            Une question, une réservation ou une commande ? Notre équipe est
            à votre écoute 7j/7.
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
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="Téléphone"
              lines={["+212 5 22 00 00 00", "Appelez-nous directement"]}
              accent="red"
            />
            <InfoCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              lines={["+212 6 00 00 00 00", "Réponse en moins de 5 min"]}
              accent="gold"
            />
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="Adresse"
              lines={["Boulevard Mohamed V", "Casablanca, Maroc"]}
              accent="red"
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Horaires"
              lines={["Lun – Jeu : 11h – 00h", "Ven – Dim : 11h – 02h"]}
              accent="gold"
            />
          </motion.div>

          {/* Form */}
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
                  <Field
                    icon={<User className="h-4 w-4" />}
                    label="Nom complet"
                    placeholder="Votre nom"
                    type="text"
                    required
                  />
                  <Field
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    placeholder="vous@email.com"
                    type="email"
                    required
                  />
                </div>
                <Field
                  icon={<Phone className="h-4 w-4" />}
                  label="Téléphone"
                  placeholder="+212 6 00 00 00 00"
                  type="tel"
                />
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Votre message ou commande..."
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
                      <Send className="h-4 w-4" /> Envoyer le message
                    </>
                  )}
                </button>
              </form>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="L'Étoile location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13301.86!2d-7.6191!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4878225f4f%3A0xb31d8e5f9e7a8e0!2sCasablanca!5e0!3m2!1sfr!2sma!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(0.4) invert(0.92) hue-rotate(180deg)" }}
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

function InfoCard({
  icon,
  title,
  lines,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  accent: "red" | "gold";
}) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-ink-800/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-crimson/40 hover:shadow-glow">
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
          accent === "red"
            ? "bg-red-grad text-white shadow-glow"
            : "bg-gold-grad text-ink-900"
        } transition-transform duration-500 group-hover:scale-110`}
      >
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
          {title}
        </div>
        <div className="mt-1.5 font-display text-lg font-bold text-white">
          {lines[0]}
        </div>
        <div className="mt-0.5 text-sm text-white/50">{lines[1]}</div>
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  placeholder,
  type,
  required,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
          {icon}
        </span>
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-white/10 bg-ink-900/80 py-3 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
        />
      </div>
    </div>
  );
}
