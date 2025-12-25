import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Clothes from "./pages/Clothes";
import Orders from "./pages/Orders";
import News from "./pages/News";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

interface User {
  email: string;
  created_at?: string;
}

// Temporary mock auth (will be replaced with Supabase)
const useMockAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('mock_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, password: string) => {
    // Mock login - will be replaced with Supabase
    if (password.length >= 6) {
      const mockUser = { email, created_at: new Date().toISOString() };
      setUser(mockUser);
      localStorage.setItem('mock_user', JSON.stringify(mockUser));
      return {};
    }
    return { error: { message: "Invalid credentials" } };
  };

  const signup = async (email: string, password: string) => {
    // Mock signup - will be replaced with Supabase
    if (password.length >= 6) {
      return {};
    }
    return { error: { message: "Password must be at least 6 characters" } };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mock_user');
  };

  return { user, login, signup, logout };
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Main app layout
const AppLayout = () => {
  const { user, login, signup, logout } = useMockAuth();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/signup" element={<Signup onSignup={signup} />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<ProfilePage user={user} onLogout={logout} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
