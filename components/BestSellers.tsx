"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Star, Flame } from "lucide-react";

const products = [
  {
    name: "Black Angus Burger",
    desc: "Bœuf Angus 220g, cheddar affiné, oignons caramélisés, sauce signature.",
    price: "65 DH",
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
  },
  {
    name: "Tacos L'Étoile XXL",
    desc: "Triple viande, cheddar fondu, frites maison, sauce algérienne.",
    price: "55 DH",
    badge: "Signature",
    img: "https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
  },
  {
    name: "Crispy Chicken Wrap",
    desc: "Poulet croustillant, salade fraîche, sauce gold maison.",
    price: "42 DH",
    badge: "Nouveau",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
  },
  {
    name: "Smoky BBQ Burger",
    desc: "Bacon fumé, cheddar double, sauce BBQ maison, oignons frits.",
    price: "70 DH",
    badge: "Premium",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
  },
];

export default function BestSellers() {
  return (
    <section id="bestsellers" className="relative section-pad">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[80%] -translate-x-1/2 rounded-full bg-crimson/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="heading-eyebrow">
              <Flame className="h-3.5 w-3.5" /> Best Sellers
            </span>
            <h2 className="heading-display mt-4 text-white">
              Les <span className="text-gradient-red">incontournables</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/55">
              Sélectionnés par nos clients, validés par nos chefs. Voici les
              recettes qui font la légende de L&apos;Étoile.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-crimson/40 hover:shadow-glow"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-red-grad px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-glow">
                  {p.badge}
                </span>
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
                  {p.rating}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-black text-white">
                  {p.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/55">
                  {p.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="font-display text-2xl font-black text-gradient-red">
                    {p.price}
                  </div>
                  <button className="group/btn relative grid h-10 w-10 place-items-center rounded-full bg-red-grad shadow-glow transition-transform hover:scale-110 active:scale-95">
                    <Plus
                      className="h-5 w-5 text-white transition-transform group-hover/btn:rotate-90"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
