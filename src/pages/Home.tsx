import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { 
  Shield, MapPin, Phone, Award, CheckCircle2, ArrowRight, Quote, Store, Building, Home as HomeIcon, Users, Handshake, Cpu, HeartPulse 
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://cougarsecurity.co.nz/wp-content/uploads/2023/10/cougar-security-company.jpg" 
          alt="Cougar Security Headquarters" 
          className="w-full h-full object-cover scale-110 brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-bold tracking-[0.2em] uppercase mb-8 border-brand-primary/30">
            <Shield className="w-3.5 h-3.5 text-brand-primary" /> Manned & Electronic Security Throughout NZ
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] text-gradient">
            One Stop Shop <br />
            <span className="italic text-brand-gold">For Security Services.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cougar Security is a proactive leader offering 24/7 support. Being knowledgeable and confident in our services along with our “can do” attitude, means no request is too big or too small.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20">
              Secure Your Premises <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#services" className="w-full sm:w-auto glass-card px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all block text-center">
              View Our Services
            </a>
          </div>
          
          <div className="glass-card max-w-sm mx-auto p-4 rounded-2xl flex items-center justify-center gap-4 text-center border-brand-gold/20">
             <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
               <Phone className="w-5 h-5" />
             </div>
             <div>
               <p className="text-xs uppercase tracking-widest text-white/50 font-bold mb-1">Local 24/7 Dispatch</p>
               <p className="font-bold text-lg">0800 226 2851</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-brand-dark/90 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 hover:opacity-100 transition-all duration-700">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-brand-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">PSPLA Licensed</span>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-brand-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">NZSA Corporate Member</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-brand-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">Locally Owned Since 2005</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-brand-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">Advanced Training Certified</span>
        </div>
      </div>
    </div>
  );
};

const Vision = () => {
  const visions = [
    { icon: <Users className="w-8 h-8" />, title: "We are a team", desc: "At Cougar Security we believe in leading from the front. All our staff are fully trained and knowledgeable." },
    { icon: <Handshake className="w-8 h-8" />, title: "Business Relationships", desc: "We hope to build and nurture strong business relationships with our clients and suppliers." },
    { icon: <Cpu className="w-8 h-8" />, title: "Technology", desc: "Technology plays a huge part in operations and the technology in our industry is always updating at a fast pace." },
    { icon: <HeartPulse className="w-8 h-8" />, title: "Health and Safety", desc: "Cougar Security recognises its moral and legal responsibility to provide a safe and healthy work environment to everyone." }
  ];

  return (
    <section id="vision" className="py-32 bg-brand-gray/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Our Vision</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Built on leadership & trust.</h3>
          <p className="text-lg text-white/60">Cougar Security strives to be a proactive leader in the field of security, offering problem solving options to our clients and team members.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((v, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl hover:border-brand-primary/30 transition-all duration-300">
               <div className="w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">{v.icon}</div>
               <h4 className="text-xl font-bold mb-4">{v.title}</h4>
               <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">A selection of specialty services</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold max-w-3xl">Comprehensive protection at every level.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(servicesData).map((service, idx) => (
            <Link to={`/services/${service.id}`} key={idx}>
              <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl glass-card group hover:border-brand-gold/30 h-full flex flex-col">
                <div className="w-full h-48 rounded-xl flex-shrink-0 overflow-hidden mb-8 relative border border-white/5">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{service.shortDescription}</p>
                <div className="flex items-center gap-2 text-brand-primary font-bold text-xs tracking-widest uppercase mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Local Consultation", description: "We evaluate your premise to understand your unique security and access control requirements." },
    { num: "02", title: "Hardware Strategy", description: "We outline an integrated CCTV, alarm, and mobile patrol strategy tailored for your business." },
    { num: "03", title: "Seamless Setup", description: "Professional installation with 24/7 technical support and rapid response deployment readiness." }
  ];

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold">Three steps to total security.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-white/10 z-0" />
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-8 shadow-2xl transition-colors duration-300 ${idx === 0 ? 'bg-brand-primary border-brand-primary text-white' : 'bg-brand-dark border-white/20 text-brand-gold'}`}>
                <span className="text-2xl font-serif font-bold">{step.num}</span>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">{step.title}</h4>
              <p className="text-white/60 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { quote: "Having used Cougar Securities for over 9 years on countless events and festivals, nothing is ever too much hassle.", name: "Craig Gallagher", role: "Event Manager, Summit Events", initial: "C" },
    { quote: "Cougar have been our security partner now for over five years. Their local presence and knowledgeable team are a real plus!", name: "Paul Reeve", role: "Mitre 10 Mega, Queenstown", initial: "P" },
    { quote: "Fresh Choice has used Cougar Security for the past 10 years from static guards to help local up the store 7 days and night patrols... no job is too big or too small.", name: "Tony Wild", role: "Fresh Choice Supermarket", initial: "T" }
  ];

  return (
    <section className="py-32 bg-brand-gray/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white">What our clients say.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[2rem] relative border-brand-primary/20 hover:border-brand-primary/50 transition-all flex flex-col justify-between h-full">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
              <p className="text-white/70 leading-relaxed mb-10 relative z-10 text-sm">"{test.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 text-brand-primary font-bold flex items-center justify-center border border-brand-primary/30 flex-shrink-0">{test.initial}</div>
                <div>
                  <h5 className="font-bold text-white text-sm tracking-wide">{test.name}</h5>
                  <p className="text-xs text-brand-gold/80 font-bold max-w-[150px] leading-tight mt-1">{test.role}</p>
                </div>
              </div>
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
          src="https://cougarsecurity.co.nz/wp-content/uploads/2023/10/cougar-security-technology.jpg" 
          alt="Security Operations" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-brand-primary/30 mix-blend-overlay" />
        <div className="relative z-10 py-24 px-8 md:px-24 text-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 max-w-4xl mx-auto leading-tight text-white">
            Send an Enquiry to <br />
            <span className="italic text-brand-gold">Cougar Security.</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Our goal is to help people in the best way possible. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-red-600 transition-all shadow-xl">
              Free Consultation
            </button>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest opacity-50 font-bold">24 Hours / 7 Days</p>
                <p className="font-bold text-lg text-brand-gold">0800 226 2851</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Vision />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  );
}
