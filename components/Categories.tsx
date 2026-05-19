"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Tacos",
    desc: "Recettes signature, généreux et fondants.",
    count: "12 variantes",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Burgers",
    desc: "Viande noble, pain brioché, fromage fondu.",
    count: "18 recettes",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sandwichs",
    desc: "Pains artisanaux et garnitures premium.",
    count: "10 créations",
    img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Menus",
    desc: "Formules complètes pour tous les appétits.",
    count: "8 menus",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Frites",
    desc: "Coupées maison, dorées à la perfection.",
    count: "6 styles",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="relative section-pad">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="heading-eyebrow">Notre Carte</span>
            <h2 className="heading-display mt-4 text-white">
              Catégories <span className="text-gradient-red">signature</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/55">
              Explorez nos univers gourmands. Chaque catégorie raconte une
              histoire de saveurs et d&apos;exigence.
            </p>
          </div>
          <a href="#bestsellers" className="btn-ghost">
            Tout découvrir <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.a
              key={c.name}
              href="#bestsellers"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 ${
                i === 0
                  ? "lg:col-span-2 lg:row-span-2 lg:min-h-[520px]"
                  : "min-h-[260px] lg:min-h-[250px]"
              }`}
            >
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
              <div className="absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover:bg-crimson/15" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 ring-1 ring-inset ring-crimson/40 rounded-3xl" />
                <div className="absolute -inset-1 rounded-3xl shadow-glow-lg" />
              </div>

              <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-crimson-200">
                  {c.count}
                </div>
                <h3 className="mt-3 font-display text-3xl font-black text-white md:text-4xl">
                  {c.name}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/65">{c.desc}</p>

                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur transition group-hover:border-crimson/60 group-hover:bg-crimson/15 group-hover:text-white">
                  Découvrir <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
