import { motion, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  Camera, 
  Smartphone, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Award,
  Eye,
  Bell,
  Clock
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-dark/90 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-brand-gold" />
          <span className="font-serif text-xl tracking-tight font-bold">ALPINE SHIELD</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
          <a href="#process" className="hover:text-brand-gold transition-colors">Process</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <button className="bg-brand-gold text-brand-dark px-6 py-2.5 rounded-full hover:bg-white transition-all font-bold">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <button className="bg-brand-gold text-brand-dark px-6 py-3 rounded-full font-bold">
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop" 
          alt="Queenstown Scenery" 
          className="w-full h-full object-cover scale-110 brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Queenstown's Premier Protection
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] text-gradient">
            Peace of Mind, <br />
            <span className="italic">Tailored for the Alps.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience world-class security that blends seamlessly with your lifestyle. From smart CCTV to 24/7 rapid response, we protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2">
              Secure Your Home <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto glass-card px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              View Services
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-brand-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-widest">Licensed Security Provider #12-0943</span>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-widest">NZSA Member</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-widest">Queenstown Owned & Operated</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-widest">Fully Insured & Vetted</span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Smart CCTV Systems",
      description: "Crystal clear 4K surveillance with AI-powered human detection. Watch your property from anywhere in the world.",
      features: ["Night Vision", "Mobile Alerts", "Cloud Storage"]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Our local dispatch center watches over your home while you sleep, ensuring rapid response to any alarm.",
      features: ["Instant Dispatch", "Fire Detection", "Medical Alerts"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Response",
      description: "Queenstown-based patrol units ready to respond to your property within minutes of a triggered event.",
      features: ["Local Patrols", "Key Holding", "Physical Checks"]
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold max-w-2xl">Modern protection for modern living.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl glass-card group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">{service.title}</h4>
              <p className="text-white/60 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Local Consultation",
      description: "We visit your property to understand your unique security needs and landscape challenges."
    },
    {
      num: "02",
      title: "Custom Design",
      description: "Our engineers craft a bespoke security plan using the latest in surveillance and sensor technology."
    },
    {
      num: "03",
      title: "Seamless Setup",
      description: "Professional installation with zero mess, followed by a full walkthrough of your new smart system."
    }
  ];

  return (
    <section id="process" className="py-32 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold">Three steps to total security.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <span className="text-2xl font-serif font-bold text-brand-gold">{step.num}</span>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">{step.title}</h4>
              <p className="text-white/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" 
          alt="Queenstown Night" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 py-24 px-8 md:px-24 text-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to experience <br />
            <span className="italic">effortless protection?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join hundreds of Queenstown residents who trust Alpine Shield for their home and business security.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-gold text-brand-dark px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all">
              Book a Free Audit
            </button>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest opacity-50">Call Us Anytime</p>
                <p className="font-bold">0800 ALPINE SHIELD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-8 h-8 text-brand-gold" />
              <span className="font-serif text-2xl tracking-tight font-bold">ALPINE SHIELD</span>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed mb-8">
              Providing premium security solutions for the unique requirements of the Southern Lakes region. Licensed, local, and committed to your peace of mind.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold transition-colors cursor-pointer" />
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-brand-gold transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Contact</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Queenstown, New Zealand</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> 0800 257 436</li>
              <li className="flex items-center gap-3"><Lock className="w-4 h-4" /> License #12-0943</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Alpine Shield Security. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
