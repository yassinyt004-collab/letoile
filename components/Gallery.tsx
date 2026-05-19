"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ZoomIn } from "lucide-react";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    label: "Cheeseburger Premium",
    h: "h-[420px]",
  },
  {
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    label: "Tacos Signature",
    h: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    label: "Frites Maison",
    h: "h-[320px]",
  },
  {
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    label: "Wrap Grillé",
    h: "h-[260px]",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    label: "Atelier Cuisine",
    h: "h-[380px]",
  },
  {
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
    label: "Burger Maison",
    h: "h-[300px]",
  },
  {
    src: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    label: "BBQ Smoky",
    h: "h-[260px]",
  },
  {
    src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=900&q=80",
    label: "Sauces Signature",
    h: "h-[340px]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative section-pad">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="heading-eyebrow">
              <Camera className="h-3.5 w-3.5" /> Galerie
            </span>
            <h2 className="heading-display mt-4 text-white">
              L&apos;univers <span className="text-gradient-red">L&apos;Étoile</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/55">
              Plongez dans nos coulisses : la passion en images, la perfection
              dans chaque détail.
            </p>
          </div>
        </div>

        {/* Masonry */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-4">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/8 ${s.h}`}
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover:bg-crimson/20" />

              <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-lg font-bold text-white">
                  {s.label}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-grad shadow-glow">
                  <ZoomIn className="h-4 w-4 text-white" />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
