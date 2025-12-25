import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface ClothesCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  onAddToCart: (id: number) => void;
}

const ClothesCard = ({ id, name, price, category, imageUrl, onAddToCart }: ClothesCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      {/* Image Container */}
      <div className="relative aspect-portrait overflow-hidden bg-secondary mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick Add Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-4 right-4 bg-foreground text-primary-foreground p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => onAddToCart(id)}
          aria-label={`Add ${name} to cart`}
        >
          <Plus size={20} />
        </motion.button>

        {/* Category Tag */}
        <span className="absolute top-4 left-4 text-xs tracking-wider uppercase text-muted-foreground bg-background/90 px-3 py-1">
          {category}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-display text-lg group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">
          ${price.toFixed(2)}
        </p>
      </div>
    </motion.article>
  );
};

export default ClothesCard;
