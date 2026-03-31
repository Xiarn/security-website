import { Mail, ArrowRight } from "lucide-react";

export default function Employment() {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Careers</h1>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">We are hiring!</h2>
        <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
          Interested in joining the Cougar Security team? We are looking for professional, proactive, and dedicated individuals to integrate with our highly trained personnel.
        </p>

        <div className="glass-card p-12 rounded-[3rem] border-brand-primary/30 relative overflow-hidden text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-white">Application for Employment</h3>
              <p className="text-white/60 mb-6 max-w-md">
                Send us your resume directly to our HR department to begin the process. Our team will review your credentials and be in touch for available shifts and positions.
              </p>
              <a 
                href="mailto:hr@cougarsecurity.co.nz"
                className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" /> 
                Email: hr@cougarsecurity.co.nz
              </a>
            </div>
            
            <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
               <img 
                 src="https://cougarsecurity.co.nz/wp-content/uploads/2024/02/Expanding-Advert-1024x1024.jpg" 
                 alt="Cougar Security Hiring Campaign" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>

        <div className="mt-20 glass-card p-10 rounded-[2rem] border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 text-left">
           <div>
             <h4 className="text-2xl font-serif font-bold mb-2">Have questions?</h4>
             <p className="text-white/50 text-sm">Our goal is to help people in the best way possible. Contact us today.</p>
           </div>
           <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-colors border border-white/10 flex-shrink-0">
             Contact Support <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </div>
  );
}
