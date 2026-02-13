import React from 'react';
import { ArrowRight, CheckCircle2, MonitorSmartphone, Zap } from 'lucide-react';
import { BOOKING_URL, AUDIT_URL, INDUSTRIES, DELIVERABLES, WEBSITE_DELIVERABLES, PRICING, FAQS, SERVICES_LIST } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* 1. Hero */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 container mx-auto text-center max-w-5xl">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-xl relative z-10">
          More booked jobs from <br className="hidden md:block"/> 
          {/* Explicit styles to ensure background-clip works in all browsers */}
          <span 
            className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 pb-2 text-transparent"
            style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
          >
            Facebook & Instagram
          </span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
          We combine high-intent ads, fast follow-up systems, and mobile-first websites to turn scrolling into scheduled appointments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
          >
            Book a 15-minute call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Get a free 2-minute audit
          </a>
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full border border-white/5 text-xs font-medium text-slate-400 uppercase tracking-wide">
          <Zap size={14} className="text-yellow-400 fill-yellow-400" />
          <span>Month-to-month. No long contracts.</span>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="border-y border-white/5 bg-slate-900/30 backdrop-blur-sm py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 md:gap-20 text-sm font-semibold text-slate-400 uppercase tracking-widest text-center">
            <span>Facebook + Instagram Ads</span>
            <span>Website Builds</span>
            <span>High-intent forms</span>
            <span>Weekly testing</span>
            <span>Local service focus</span>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Services</h2>
          <p className="text-slate-400 text-lg">Focused on what actually drives revenue for local businesses.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES_LIST.map((svc, i) => (
            <div key={i} className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{svc.title}</h3>
              <p className="text-slate-400 mb-6 min-h-[48px] leading-relaxed">{svc.desc}</p>
              <div className="text-xs font-bold text-blue-300 bg-blue-900/20 inline-block px-3 py-1.5 rounded-full border border-blue-800/50">
                {svc.outcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Who We Help */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
          <p className="text-slate-400">Specialized systems for local service providers.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {INDUSTRIES.map((industry) => (
            <div key={industry} className="p-6 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-xl shadow-sm text-center hover:border-blue-500/30 hover:bg-slate-800/80 transition-all cursor-default group">
              <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Deliverables */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-slate-400 text-lg">A complete acquisition system, not just "ads".</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {DELIVERABLES.map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-900/50">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Website Sub-Section */}
          <div className="max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
             <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-10 relative z-10">
               <div className="w-14 h-14 bg-indigo-900/30 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-300 shrink-0">
                  <MonitorSmartphone size={28} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Websites (Optional Add-on)</h3>
                 <p className="text-slate-400">If your current site isn't converting, we build fast, effective pages.</p>
               </div>
             </div>
             <div className="grid md:grid-cols-3 gap-8 relative z-10">
               {WEBSITE_DELIVERABLES.map((item, idx) => (
                 <div key={idx}>
                   <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> {item.title}
                   </h4>
                   <p className="text-sm text-slate-400 leading-relaxed pl-3.5 border-l border-white/10">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-10"></div>

          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative shadow-xl">
            <div className="w-12 h-12 bg-slate-950 border-2 border-slate-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg">1</div>
            <h3 className="text-xl font-bold text-center text-white mb-3">Setup Call</h3>
            <p className="text-slate-400 text-center text-sm leading-relaxed">We learn your offer, service area, and ideal customer profile.</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative shadow-xl">
            <div className="w-12 h-12 bg-slate-950 border-2 border-slate-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg">2</div>
            <h3 className="text-xl font-bold text-center text-white mb-3">Launch & Test</h3>
            <p className="text-slate-400 text-center text-sm leading-relaxed">We launch 3 distinct ad angles to find what resonates with your market.</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative shadow-xl">
            <div className="w-12 h-12 bg-slate-950 border-2 border-blue-500 text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(59,130,246,0.3)]">3</div>
            <h3 className="text-xl font-bold text-center text-white mb-3">Scale & Optimize</h3>
            <p className="text-slate-400 text-center text-sm leading-relaxed">We kill losing ads, scale winners, and refresh creatives weekly.</p>
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section className="bg-slate-900/30 backdrop-blur-sm py-24" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Honest Pricing</h2>
            <p className="text-slate-400">Ad spend is paid directly by you to Meta. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {PRICING.map((tier) => (
              <div 
                key={tier.name} 
                className={`relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border flex flex-col transition-transform hover:-translate-y-1 ${
                  tier.highlight 
                    ? 'border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/50 z-10' 
                    : 'border-white/10 shadow-xl'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-all ${
                    tier.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-3 p-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-white/10">
            <p className="text-slate-200 font-medium">Website builds available as a one-time project or bundled with ongoing ads.</p>
            <p className="text-slate-500 text-sm">Website Build (one-time): starting at $1,500</p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="container mx-auto px-4 max-w-3xl py-12">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Questions</h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-blue-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-20 max-w-5xl mx-auto border border-white/10 relative overflow-hidden">
          {/* Inner Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to fill your calendar?</h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-xl shadow-white/5"
            >
              Book a 15-minute call
            </a>
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800/50 hover:border-slate-500 transition-all"
            >
              Get a free 2-minute audit
            </a>
          </div>
          <p className="mt-8 text-slate-500 text-sm">Reply time: within 1 business day.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;