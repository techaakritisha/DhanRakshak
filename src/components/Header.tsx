import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Moon, Sun, User } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuth = () => {
    if (session) {
      supabase.auth.signOut();
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-6"
          >
            <Link 
              to="/" 
              className="text-3xl font-bold relative group"
            >
              <motion.span
                className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                DhanRakshak
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 blur-md group-hover:opacity-50 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/resources" 
                className="text-lg font-semibold hover:text-primary transition-colors text-gray-900 dark:text-white"
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-semibold hover:text-primary transition-colors text-gray-900 dark:text-white"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-lg font-semibold hover:text-primary transition-colors text-gray-900 dark:text-white"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-primary/10 transition-colors"
              onClick={handleAuth}
              aria-label={session ? "Sign out" : "Sign in"}
            >
              {session ? <LogOut className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
            </Button>
            {session && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="User profile"
              >
                <User className="h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
};