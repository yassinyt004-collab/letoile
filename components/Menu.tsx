"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, ChevronDown } from "lucide-react";

/* ═══════════════════════════════════════════
   REAL MENU DATA — L'Étoile Clermont-Ferrand
   ═══════════════════════════════════════════ */

const menuData = [
  {
    category: "Nos Croustiz",
    items: [
      { name: "L'Original", price: "9.00€" },
      { name: "Le Spicy", price: "9.00€" },
      { name: "Le Curry", price: "9.00€" },
    ],
  },
  {
    category: "Tacos à Composer",
    note: "Suppléments : Fromages +1€ · Légumes +1€ · Gratinages +2€/+1.50€ · Frites +1€ · Canette +1.50€",
    items: [
      { name: "Simple Taille M", desc: "1 galette, 1 viande", price: "8.00€" },
      { name: "Maxi Taille L", desc: "2 galettes, 2 viandes", price: "12.00€" },
      { name: "Mega Taille XL", desc: "3 galettes, 3 viandes", price: "15.00€" },
      { name: "Giga Taille XXL", desc: "4 galettes, 4 viandes", price: "18.00€" },
    ],
    extras: [
      "Viandes : Tenders, Cordon Bleu, Kefta, Viande hachée, Kebab, Steak, Nuggets, Falafel, Chicken, Merguez, Poulet pané",
      "Sauces : Ketchup, Mayonnaise, Blanche, Harissa, Algérienne, Samourai, Biggy burger, Chili thaï, Curry, Tartare, Andalouse, Barbecue, Poivre",
    ],
  },
  {
    category: "Tacos Signatures",
    note: "Options : Taille L +3€ · Taille XL +6€ · Frites +1€ · Canette +1.50€",
    items: [
      { name: "O'Majestik", price: "10.00€" },
      { name: "O'Thentik", price: "12.00€" },
      { name: "O'Chèvre Miel", price: "10.00€" },
      { name: "O'Spicy", price: "12.00€" },
      { name: "O'Xford", price: "10.00€" },
      { name: "O'Rientale", price: "12.00€" },
      { name: "Montagnard", price: "10.00€" },
      { name: "O'Vergnat", price: "12.00€" },
      { name: "O'Riginal", price: "12.00€" },
      { name: "Végétarien", price: "8.00€" },
    ],
  },
  {
    category: "Tacos Sucrés",
    items: [
      { name: "Tacos Nutella", price: "4.00€" },
      { name: "Tacos Kinder Bueno", price: "5.50€" },
      { name: "Tacos Kit Kat", price: "5.50€" },
      { name: "Tacos MM's Nutella", price: "5.50€" },
    ],
  },
  {
    category: "Burgers",
    note: "Options : Frites +1€ · Canette +1.50€",
    items: [
      { name: "Veggie", price: "5.00€" },
      { name: "Chick'n", price: "5.00€" },
      { name: "Cheese", price: "5.00€" },
      { name: "Double Cheese", price: "6.50€" },
      { name: "Chèvre Miel", price: "7.00€" },
      { name: "Baps", price: "7.00€" },
      { name: "Supreme", price: "7.00€" },
      { name: "Mac", price: "7.50€" },
      { name: "Triple Cheese", price: "8.00€" },
      { name: "King", price: "8.00€" },
      { name: "PSG", price: "8.00€" },
      { name: "Royal Bacon", price: "7.00€" },
      { name: "Double Cheese Bacon", price: "8.00€" },
    ],
  },
  {
    category: "Sandwichs Classiques",
    note: "Pain maison ou galette, viande au choix, salade, tomates, oignons, 2 sauces · Menu frites + boisson : +2.50€",
    items: [
      { name: "Nugget's", price: "7.00€" },
      { name: "Kebab", price: "7.00€" },
      { name: "Viande hachée", price: "7.00€" },
      { name: "Chicken", price: "7.00€" },
      { name: "Tenders", price: "7.00€" },
      { name: "Cordon Bleu", price: "7.00€" },
      { name: "Kefta", price: "7.00€" },
      { name: "Merguez", price: "7.00€" },
      { name: "Poulet pané", price: "7.00€" },
      { name: "Falafel", price: "7.00€" },
      { name: "Végé (rosty, œuf)", price: "7.00€" },
    ],
  },
  {
    category: "Sandwichs Signatures",
    note: "Menu frites + boisson : +2.50€",
    items: [
      { name: "O'Bama", price: "9.00€" },
      { name: "Panam", price: "9.00€" },
      { name: "Cowboy", price: "9.00€" },
      { name: "Veggie Lover", price: "9.00€" },
      { name: "Ideal", price: "9.00€" },
      { name: "Zlatan", price: "9.00€" },
      { name: "Turbo", price: "9.00€" },
      { name: "O'Rientale", price: "9.00€" },
      { name: "Costo", price: "9.00€" },
      { name: "Radical", price: "11.00€" },
      { name: "Magistral", price: "11.00€" },
    ],
  },
  {
    category: "Compose ton Bowl",
    note: "Frites + sauce fromagère + gratiné mozza + 2 sauces au choix",
    items: [
      { name: "1 viande", price: "8.00€" },
      { name: "2 viandes", price: "10.00€" },
    ],
  },
  {
    category: "Bowl Signatures",
    items: [
      { name: "Indy Bowl", price: "11.00€" },
      { name: "Spicy Bowl", price: "11.00€" },
      { name: "Exotic Bowl", price: "11.00€" },
      { name: "Tipik Bowl", price: "11.00€" },
      { name: "Mythique Bowl", price: "11.00€" },
      { name: "Crousti Bowl", price: "11.00€" },
      { name: "Veggie Bowl", price: "11.00€" },
      { name: "Kebab Bowl", price: "11.00€" },
      { name: "Crispy Bowl", price: "11.00€" },
      { name: "Super Bowl", price: "15.00€" },
      { name: "Cheese Bowl", price: "12.00€" },
      { name: "Big Bowl", price: "15.00€" },
      { name: "Box Bowl", price: "8.00€" },
    ],
  },
  {
    category: "Menus & Box",
    items: [
      { name: "Menu Duo", price: "13.90€" },
      { name: "Menu Gourmand", price: "13.90€" },
      { name: "Menu Enfants", price: "6.90€" },
      { name: "Menu Tenders", price: "8.90€" },
      { name: "Menu Wings", price: "8.90€" },
      { name: "Menu Étudiant", price: "6.90€" },
      { name: "Box 1", price: "23.00€" },
      { name: "Box 2", price: "27.00€" },
      { name: "Box 3", price: "27.00€" },
      { name: "Box 4", price: "30.00€" },
    ],
  },
  {
    category: "Assiettes",
    note: "Viandes : Kebab, Merguez, Tenders, Cordon Bleu, Steak, Végé, Kefta, Chicken Chika",
    items: [
      { name: "1 viande", price: "12.00€" },
      { name: "2 viandes", price: "14.00€" },
      { name: "3 viandes", price: "16.00€" },
    ],
  },
  {
    category: "TexMex",
    items: [
      { name: "Tenders x3", price: "2.90€" },
      { name: "Tenders x6", price: "5.50€" },
      { name: "Tenders x12", price: "10.90€" },
      { name: "Onion Rings x4", price: "3.50€" },
      { name: "Onion Rings x8", price: "6.90€" },
      { name: "Onion Rings x12", price: "10.90€" },
      { name: "Sticks Mozza x3", price: "2.90€" },
      { name: "Sticks Mozza x6", price: "5.50€" },
      { name: "Sticks Mozza x12", price: "10.90€" },
      { name: "Nugget's x5", price: "3.90€" },
      { name: "Nugget's x10", price: "7.90€" },
      { name: "Nugget's x15", price: "12.90€" },
      { name: "Falafel x3", price: "2.90€" },
      { name: "Falafel x6", price: "5.50€" },
      { name: "Falafel x12", price: "10.90€" },
      { name: "Wings x3", price: "2.90€" },
      { name: "Wings x6", price: "5.50€" },
      { name: "Wings x12", price: "10.90€" },
      { name: "Bouchée Camembert x4", price: "3.90€" },
      { name: "Bouchée Camembert x6", price: "5.90€" },
      { name: "Bouchée Camembert x9", price: "7.90€" },
      { name: "Chili Cheese x4", price: "3.90€" },
      { name: "Chili Cheese x6", price: "5.90€" },
      { name: "Chili Cheese x9", price: "7.90€" },
    ],
  },
  {
    category: "Paninis",
    note: "Options : Frites +1€ · Canette +1.50€",
    items: [
      { name: "3 Fromages", price: "7.00€" },
      { name: "Chicken", price: "7.00€" },
      { name: "Cordon Bleu", price: "7.00€" },
      { name: "Kebab", price: "7.00€" },
      { name: "Kefta", price: "7.00€" },
      { name: "Lardon", price: "7.00€" },
      { name: "Merguez", price: "7.00€" },
      { name: "Nuggets", price: "7.00€" },
      { name: "Poulet pané", price: "7.00€" },
      { name: "Chèvre Miel", price: "7.00€" },
      { name: "Steak", price: "7.00€" },
      { name: "Tenders", price: "7.00€" },
      { name: "Végé", price: "7.00€" },
    ],
  },
  {
    category: "Salades",
    items: [
      { name: "O'Chèvre Miel", price: "7.50€" },
      { name: "O'Rings", price: "7.50€" },
      { name: "O'Camembert", price: "7.50€" },
    ],
  },
  {
    category: "Frites & Barquettes",
    items: [
      { name: "Frites Cheddar Bacon", price: "4.00€" },
      { name: "Frites Cheddar Oignons Crispy", price: "4.00€" },
      { name: "Frites Fromagère Lardons", price: "4.00€" },
      { name: "Frites Fromagère", price: "3.50€" },
      { name: "Frites Cheddar", price: "3.50€" },
      { name: "Frites Cheddar Bacon Onions Crispy", price: "4.50€" },
      { name: "Frites Petite", price: "2.50€" },
      { name: "Frites Moyenne", price: "3.00€" },
      { name: "Frites Grande", price: "3.50€" },
      { name: "Barquette Chicken Tikka Curry", price: "8.00€" },
      { name: "Barquette Kebab", price: "8.00€" },
      { name: "Nuggets Cheddar Onions Crispy", price: "7.00€" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Burger O' Nutella", price: "2.00€" },
      { name: "Cheesecake Cookie", price: "3.50€" },
      { name: "Cheesecake Citron", price: "3.50€" },
      { name: "Tarte Daim", price: "3.50€" },
      { name: "Tiramisu Chocolat Noisette", price: "3.50€" },
      { name: "Tiramisu Caramel Spéculos", price: "3.50€" },
    ],
  },
  {
    category: "Boissons",
    items: [
      { name: "Coca 33cl", price: "1.80€" },
      { name: "Coca Zero 33cl", price: "1.80€" },
      { name: "Coca Cherry 33cl", price: "1.80€" },
      { name: "Fanta 33cl", price: "1.80€" },
      { name: "Fuzetea 33cl", price: "1.80€" },
      { name: "Hawai 33cl", price: "1.80€" },
      { name: "Oasis Tropical 33cl", price: "1.80€" },
      { name: "Orangina 33cl", price: "1.80€" },
      { name: "Schweppes 33cl", price: "1.80€" },
      { name: "Sprite 33cl", price: "1.80€" },
      { name: "Tropico 33cl", price: "1.80€" },
      { name: "Capri Sun 29cl", price: "1.80€" },
      { name: "Cristalline 50cl", price: "1.50€" },
      { name: "Monster 50cl", price: "3.00€" },
      { name: "Coca 1.25L", price: "3.50€" },
    ],
  },
];

export default function Menu() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="menu" className="relative section-pad">
      {/* bg glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[70%] -translate-x-1/2 rounded-full bg-crimson/8 blur-[120px]" />
      </div>

      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="heading-eyebrow mx-auto">
            <Flame className="h-3.5 w-3.5" /> Notre Carte
          </span>
          <h2 className="heading-display mt-4 text-white">
            La carte <span className="text-gradient-red">complète</span>
          </h2>
          <p className="mt-4 text-white/55">
            Tous nos produits préparés avec des ingrédients frais. Viandes
            premium, sauces maison et frites coupées sur place.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {menuData.map((section, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-crimson/40 bg-ink-800/80 shadow-glow"
                    : "border-white/8 bg-ink-800/40 hover:border-white/15"
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-red-grad text-white shadow-glow"
                          : "bg-white/5 text-white/50"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display text-lg font-bold text-white md:text-xl">
                      {section.category}
                    </span>
                    <span className="hidden rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-white/40 sm:inline-block">
                      {section.items.length} produits
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-white/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-crimson-400" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/5 px-6 pb-6 pt-4"
                  >
                    {section.note && (
                      <p className="mb-4 rounded-xl bg-gold/5 border border-gold/15 px-4 py-2.5 text-xs text-gold-400">
                        {section.note}
                      </p>
                    )}

                    {section.extras && (
                      <div className="mb-4 space-y-1.5">
                        {section.extras.map((e) => (
                          <p
                            key={e}
                            className="text-xs leading-relaxed text-white/45"
                          >
                            {e}
                          </p>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="group flex items-center justify-between rounded-xl border border-white/5 bg-ink-900/50 px-4 py-3 transition-all duration-300 hover:border-crimson/30 hover:bg-crimson/5"
                        >
                          <div>
                            <span className="font-medium text-white text-sm">
                              {item.name}
                            </span>
                            {item.desc && (
                              <span className="ml-2 text-xs text-white/40">
                                {item.desc}
                              </span>
                            )}
                          </div>
                          <span className="ml-3 shrink-0 font-display text-sm font-bold text-crimson-300">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
