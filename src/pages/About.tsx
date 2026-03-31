import { MapPin, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">About Us</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">One Stop Shop for Security Services</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-6">
            Cougar Security strives to supply professional manned and electronic security services throughout New Zealand.
            Locally owned and operated since 2005, we are a modern, innovative company, combining specialised expertise across all security operations to meet and exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6 text-brand-primary">Accredited & Certified</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              We are proud to be an accredited Corporate Member of the New Zealand Security Association (NZSA) and operate in full compliance with NZSA Codes of Practice, Rules, and Bylaws.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              All Cougar Security officers are licensed through the Private Security Personnel Licensing Authority, ensuring our clients receive the highest standard of professional protection. In addition, selected officers receive advanced training across a range of specialised fields, enhancing the quality and scope of services we provide.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm font-bold text-white/90">SiteWise Green</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm font-bold text-white/90">Site Safe</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm font-bold text-white/90">Registered IQP</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm font-bold text-white/90">NZSA Corporate</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cougarsecurity.co.nz/wp-content/uploads/2023/10/ricky-jamie-campbell.jpg" 
              alt="Ricky Campbell & Jamie Adams-Campbell - Company Directors" 
              className="rounded-3xl w-full object-cover border border-white/10"
            />
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-brand-primary/30 max-w-xs shadow-2xl">
              <h4 className="font-bold text-lg text-white mb-1">Ricky & Jamie Campbell</h4>
              <p className="text-sm text-brand-gold tracking-widest uppercase font-bold">Company Directors</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="glass-card p-10 rounded-3xl border-white/5">
            <h4 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Our Team</h4>
            <p className="text-white/60 leading-relaxed">
              At Cougar Security, we believe in leading from the front. All staff are fully trained and knowledgeable in their respective roles, ensuring high standards across every aspect of our operations.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl border-white/5">
            <h4 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Business Relationships</h4>
            <p className="text-white/60 leading-relaxed">
              We are committed to building and nurturing strong, long-term relationships with both our clients and suppliers. We believe that effective partnerships are fundamental to delivering reliable security.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl border-white/5">
            <h4 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Technology</h4>
            <p className="text-white/60 leading-relaxed">
              By embracing new technologies, innovations, and ongoing training, we ensure our team can leverage these advancements to enhance the services we provide at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
