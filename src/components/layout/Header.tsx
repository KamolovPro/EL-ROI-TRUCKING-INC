import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Truck, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Drive With Us", href: "/drive-with-us" },
  { name: "Get A Quote", href: "/get-a-quote" },
  { name: "Contacts", href: "/contacts" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      {/* Top bar - only visible when not scrolled */}
      <div 
        className={`hidden lg:block transition-all duration-300 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="bg-primary text-primary-foreground">
          <div className="container flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <span className="font-medium">USDOT: {siteConfig.licenses.usdot}</span>
              <span className="font-medium">MC: {siteConfig.licenses.mc}</span>
            </div>
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 font-semibold hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Truck className="h-5 w-5 md:h-7 md:w-7 text-accent-foreground" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display text-base md:text-xl font-bold transition-colors truncate max-w-[150px] sm:max-w-none ${
              scrolled ? "text-foreground" : "text-white"
            }`}>
              {siteConfig.company.name}
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-sm font-semibold transition-colors py-2 ${
                location.pathname === item.href
                  ? "text-accent"
                  : scrolled 
                    ? "text-foreground/80 hover:text-accent" 
                    : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
              {location.pathname === item.href && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </Link>
          ))}
          <Button 
            asChild 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all"
          >
            <Link to="/get-a-quote" className="flex items-center gap-2">
              Get Free Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            scrolled 
              ? "text-foreground hover:bg-muted" 
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="container py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={`block py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                      location.pathname === item.href
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <Link to="/get-a-quote" onClick={() => setMobileMenuOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-4 border-t border-border"
              >
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3 text-accent font-semibold text-lg"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  {siteConfig.contact.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
