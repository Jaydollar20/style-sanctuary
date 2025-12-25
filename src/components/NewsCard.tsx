import { motion } from "framer-motion";

interface NewsCardProps {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  createdAt: string;
}

const NewsCard = ({ title, summary, imageUrl, createdAt }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-landscape overflow-hidden mb-5">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <span className="text-muted-foreground text-xs tracking-wider uppercase">
          {new Date(createdAt).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </span>
        <h3 className="font-display text-xl lg:text-2xl group-hover:text-accent transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {summary}
        </p>
        <span className="inline-block link-underline text-sm font-medium tracking-wide uppercase pt-2">
          Read More
        </span>
      </div>
    </motion.article>
  );
};

export default NewsCard;
