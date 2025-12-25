import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen pt-24 flex items-center justify-center">
      <div className="container-fashion text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-8xl lg:text-9xl mb-4">404</h1>
          <p className="text-muted-foreground text-xl mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home size={18} />
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
