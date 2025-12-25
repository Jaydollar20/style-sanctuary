import { motion } from "framer-motion";
import TrendingNews from "@/components/TrendingNews";

const News = () => {
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
            <h1 className="font-display text-5xl lg:text-6xl mb-4">The Journal</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Explore the latest trends, styling guides, and stories from the world of fashion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <TrendingNews />
    </main>
  );
};

export default News;
