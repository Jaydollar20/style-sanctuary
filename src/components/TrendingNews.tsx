import { motion } from "framer-motion";
import NewsCard from "./NewsCard";

// Sample news data
const newsData = [
  {
    id: 1,
    title: "The Art of Layering: Winter Styling Guide",
    summary: "Master the art of layering with our comprehensive guide to creating sophisticated winter outfits that balance warmth with elegance.",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    title: "Sustainable Fashion: A New Era of Conscious Style",
    summary: "Discover how the fashion industry is embracing sustainability and what it means for the future of style.",
    imageUrl: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    createdAt: "2025-01-12",
  },
  {
    id: 3,
    title: "Color Trends 2025: Earth Tones Take Center Stage",
    summary: "From warm terracotta to deep forest green, explore the color palette that will define fashion in 2025.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    createdAt: "2025-01-10",
  },
  {
    id: 4,
    title: "The Rise of Quiet Luxury in Modern Wardrobes",
    summary: "Understanding the shift towards understated elegance and timeless pieces that speak to refined taste.",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    createdAt: "2025-01-08",
  },
  {
    id: 5,
    title: "Capsule Wardrobe Essentials for Every Season",
    summary: "Build a versatile wardrobe with these must-have pieces that seamlessly transition through all seasons.",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    createdAt: "2025-01-05",
  },
  {
    id: 6,
    title: "Behind the Scenes: Our Artisan Partners",
    summary: "Meet the skilled craftspeople who bring our collections to life with traditional techniques and modern innovation.",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    createdAt: "2025-01-02",
  },
];

interface TrendingNewsProps {
  limit?: number;
}

const TrendingNews = ({ limit }: TrendingNewsProps) => {
  const displayedNews = limit ? newsData.slice(0, limit) : newsData;

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container-fashion">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            The Journal
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3">
            Trending Now
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {displayedNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;
