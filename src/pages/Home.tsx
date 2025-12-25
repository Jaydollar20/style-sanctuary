import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ClothesGrid from "@/components/ClothesGrid";
import TrendingNews from "@/components/TrendingNews";
import ChatSection from "@/components/ChatSection";
import { ArrowRight } from "lucide-react";

interface HomeProps {
  user?: { email: string } | null;
}

const Home = ({ user }: HomeProps) => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Collection */}
      <section className="py-16 lg:py-24">
        <div className="container-fashion">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Featured
            </span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3">
              New Arrivals
            </h2>
          </motion.div>
          <ClothesGrid limit={8} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/clothes"
              className="group inline-flex items-center gap-2 link-underline text-sm tracking-wide uppercase"
            >
              View All Collection
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 lg:py-24 bg-foreground text-primary-foreground">
        <div className="container-fashion">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Outerwear", count: 12, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80" },
              { name: "Dresses", count: 8, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80" },
              { name: "Knitwear", count: 6, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-portrait overflow-hidden cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3 className="font-display text-3xl lg:text-4xl mb-2">{category.name}</h3>
                  <p className="text-primary-foreground/70">{category.count} pieces</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending News */}
      <TrendingNews limit={3} />

      {/* Community Chat */}
      <ChatSection user={user} />

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-fashion max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Newsletter
            </span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-4">
              Stay Inspired
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new arrivals, exclusive offers, and styling tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-fashion flex-1"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
