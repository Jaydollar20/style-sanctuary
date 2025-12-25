import { motion } from "framer-motion";
import ClothesCard from "./ClothesCard";
import { useToast } from "@/hooks/use-toast";

// Fashion items with Unsplash images
const clothesData = [
  { id: 1, name: "Silk Midi Dress", price: 289, category: "Dresses", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80" },
  { id: 2, name: "Cashmere Sweater", price: 245, category: "Knitwear", imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
  { id: 3, name: "Tailored Blazer", price: 425, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" },
  { id: 4, name: "Linen Trousers", price: 175, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80" },
  { id: 5, name: "Cotton Turtleneck", price: 95, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" },
  { id: 6, name: "Wool Coat", price: 595, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80" },
  { id: 7, name: "Pleated Skirt", price: 165, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0aeae?w=600&q=80" },
  { id: 8, name: "Leather Belt", price: 85, category: "Accessories", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" },
  { id: 9, name: "Oversized Shirt", price: 135, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80" },
  { id: 10, name: "Wrap Dress", price: 265, category: "Dresses", imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80" },
  { id: 11, name: "Knit Cardigan", price: 195, category: "Knitwear", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80" },
  { id: 12, name: "Denim Jacket", price: 225, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80" },
  { id: 13, name: "Silk Blouse", price: 185, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80" },
  { id: 14, name: "Palazzo Pants", price: 155, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" },
  { id: 15, name: "Leather Jacket", price: 495, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80" },
  { id: 16, name: "Midi Skirt", price: 145, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&q=80" },
  { id: 17, name: "Merino Sweater", price: 215, category: "Knitwear", imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
  { id: 18, name: "Trench Coat", price: 445, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=600&q=80" },
  { id: 19, name: "Linen Dress", price: 235, category: "Dresses", imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80" },
  { id: 20, name: "Cotton Pants", price: 125, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
  { id: 21, name: "Ribbed Tank", price: 65, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80" },
  { id: 22, name: "Wool Scarf", price: 95, category: "Accessories", imageUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80" },
  { id: 23, name: "Slip Dress", price: 275, category: "Dresses", imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80" },
  { id: 24, name: "Cropped Jacket", price: 295, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&q=80" },
  { id: 25, name: "Wide-Leg Jeans", price: 165, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80" },
  { id: 26, name: "Mohair Cardigan", price: 325, category: "Knitwear", imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" },
  { id: 27, name: "Satin Top", price: 115, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80" },
  { id: 28, name: "Pencil Skirt", price: 135, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0aeae?w=600&q=80" },
  { id: 29, name: "Puffer Jacket", price: 375, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d81?w=600&q=80" },
  { id: 30, name: "Maxi Dress", price: 315, category: "Dresses", imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80" },
  { id: 31, name: "Crew Neck Tee", price: 55, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { id: 32, name: "Leather Bag", price: 445, category: "Accessories", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
  { id: 33, name: "Boyfriend Blazer", price: 355, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" },
  { id: 34, name: "Knit Polo", price: 145, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&q=80" },
  { id: 35, name: "Cargo Pants", price: 175, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80" },
  { id: 36, name: "Alpaca Sweater", price: 285, category: "Knitwear", imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
  { id: 37, name: "Button-Up Shirt", price: 125, category: "Tops", imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80" },
  { id: 38, name: "Suede Jacket", price: 525, category: "Outerwear", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80" },
  { id: 39, name: "Mini Dress", price: 195, category: "Dresses", imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80" },
  { id: 40, name: "Straight Jeans", price: 145, category: "Bottoms", imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80" },
];

interface ClothesGridProps {
  limit?: number;
}

const ClothesGrid = ({ limit }: ClothesGridProps) => {
  const { toast } = useToast();
  const displayedClothes = limit ? clothesData.slice(0, limit) : clothesData;

  const handleAddToCart = (id: number) => {
    const item = clothesData.find(c => c.id === id);
    if (item) {
      // Get current cart from localStorage
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find((c: { id: number }) => c.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
      });
    }
  };

  return (
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
            Our Collection
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3">
            Curated Pieces
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayedClothes.map((item) => (
            <ClothesCard
              key={item.id}
              {...item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothesGrid;
