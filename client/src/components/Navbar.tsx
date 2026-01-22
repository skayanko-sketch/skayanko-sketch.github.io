import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Profil", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-border/40" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            SK
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-foreground md:text-white"
          )}>
            SOMA Kayanko
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors relative group",
                scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button 
            variant={scrolled ? "default" : "secondary"}
            size="sm" 
            className="gap-2 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            onClick={() => window.open('/cv.pdf', '_blank')}
          >
            <Download className="w-4 h-4" />
            CV
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 rounded-lg", scrolled ? "text-foreground" : "text-foreground md:text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full gap-2 mt-4" onClick={() => window.open('/cv.pdf', '_blank')}>
                <Download className="w-4 h-4" />
                Télécharger CV
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
