import { useState } from "react";
import { motion } from "framer-motion";
import ClothesGrid from "@/components/ClothesGrid";

const categories = ["All", "Outerwear", "Dresses", "Tops", "Bottoms", "Knitwear", "Accessories"];

const Clothes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="min-h-screen pt-24">
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="container-fashion">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl lg:text-6xl mb-4">Collection</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Discover our curated selection of timeless pieces designed for the modern wardrobe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background z-40">
        <div className="container-fashion">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 lg:gap-8 overflow-x-auto pb-2 scrollbar-hide"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm tracking-wide uppercase whitespace-nowrap transition-colors duration-300 ${
                  selectedCategory === category
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <ClothesGrid />
    </main>
  );
};

export default Clothes;
