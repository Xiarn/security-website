import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Award, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ChatWidget from "./ChatWidget";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-dark/95 backdrop-blur-lg py-4 border-b border-white/5 shadow-2xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cougarsecurity.co.nz/wp-content/uploads/2023/10/cougar-security-logo.jpg" 
            alt="Cougar Security Logo" 
            className="h-10 rounded-sm"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link to="/" className={`hover:text-brand-gold transition-colors ${location.pathname === '/' ? 'text-brand-gold' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-brand-gold transition-colors ${location.pathname === '/about' ? 'text-brand-gold' : ''}`}>About Us</Link>
          <Link to="/employment" className={`hover:text-brand-gold transition-colors ${location.pathname === '/employment' ? 'text-brand-gold' : ''}`}>Careers</Link>
          <Link to="/#services" className="hover:text-brand-gold transition-colors">Services</Link>
          <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-red-600 transition-all font-bold shadow-lg shadow-brand-primary/20">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden overflow-hidden shadow-2xl"
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/employment" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
            <button className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8 text-white">
               <img 
                  src="https://cougarsecurity.co.nz/wp-content/uploads/2023/10/cougar-security-logo.jpg" 
                  alt="Cougar Security" 
                  className="h-10 rounded-sm"
                />
            </Link>
            <p className="text-white/50 max-w-md leading-relaxed mb-8">
              Locally owned and operated since 2005, Cougar Security is a modern and innovative company offering manned and electronic security solutions to reach and exceed all your expectations.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/40 font-bold bg-white/5 p-3 rounded-xl max-w-max border border-white/5">
              <Award className="w-5 h-5 text-brand-gold" /> NZSA Corporate Member
            </div>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-white">Quick Links</h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/employment" className="hover:text-brand-gold transition-colors">Career Information</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-white">Get In Touch</h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-1" /> 
                <span>1 Industrial Place, Queenstown<br/>P.O. Box 6</span>
              </li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-primary" /> 0800 226 2851</li>
              <li className="flex items-center gap-3 break-all"><Mail className="w-4 h-4 text-brand-primary shrink-0" /> office@cougarsecurity.co.nz</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Cougar Security. All rights reserved. Built natively.</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-medium font-sans">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-brand-dark">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
