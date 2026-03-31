import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="pt-40 pb-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-brand-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Services
        </Link>
      </div>
    );
  }

  // Split description paragraphs
  const paragraphs = service.description.split('\n\n').filter(p => p.trim());

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link to="/#services" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to all services
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">{service.title}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="w-full aspect-square rounded-3xl overflow-hidden border border-white/10 sticky top-32">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="glass-card p-10 rounded-3xl border-brand-primary/20 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary" />
            <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">Service Overview</h2>
            
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              {paragraphs.map((p, idx) => {
                if (p.includes('•')) {
                  // Render bullet lists
                  const listItems = p.split('•').filter(item => item.trim());
                  return (
                    <ul key={idx} className="space-y-4 mt-8 pb-4">
                      {listItems.map((li, i) => (
                        <li key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{li.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx}>{p}</p>;
              })}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border-white/10 flex items-center justify-between gap-6">
            <div>
               <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Require Consultation?</p>
               <p className="font-bold text-xl text-white">Call us directly 24/7</p>
            </div>
            <a href="tel:08002262851" className="bg-brand-primary hover:bg-red-600 transition-colors text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/20 flex-shrink-0">
               <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
