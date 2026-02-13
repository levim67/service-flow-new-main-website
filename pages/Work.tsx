import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, BOOKING_URL } from '../constants';
import { ArrowRight, Lock } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-12 pb-20 overflow-hidden">
      
      {/* Overlay Message */}
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-md animate-fade-in-up">
            <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-inner">
                <Lock className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Currently Unavailable</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
                We are currently updating our portfolio and case studies with our latest results. Please check back later.
            </p>
             <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/10"
            >
                Return Home
            </Link>
        </div>
      </div>

      {/* Blurred Content Wrapper */}
      <div className="filter blur-xl opacity-20 pointer-events-none select-none" aria-hidden="true">
          
          {/* Header */}
          <div className="container mx-auto px-4 mb-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Work</h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Specific examples of how we structure campaigns for local businesses.
            </p>
          </div>

          {/* Case Studies Grid */}
          <section className="container mx-auto px-4 mb-24">
            <div className="grid md:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group">
                  <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex justify-between items-center">
                    <span className="font-bold text-white tracking-wide">{study.industry}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded border border-blue-800/30">
                      {study.tag}
                    </span>
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Area</h4>
                      <p className="text-slate-200 font-medium">{study.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Offer Tested</h4>
                      <p className="text-white font-semibold text-lg">{study.offer}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Creative Angles</h4>
                      <ul className="list-none space-y-2">
                        {study.angles.map((angle, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                            {angle}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Delivered</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.delivered.map((item, i) => (
                          <span key={i} className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-md border border-white/5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Visualization */}
          <section className="bg-slate-900/30 backdrop-blur-sm py-24 border-y border-white/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-16 text-center">What the system looks like</h2>
              
              <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="space-y-6">
                  <div className="aspect-[9/16] bg-slate-950/80 rounded-2xl border border-white/10 w-2/3 mx-auto flex items-center justify-center shadow-2xl relative overflow-hidden group">
                     <span className="text-slate-600 font-medium relative z-10">Ad Creative</span>
                  </div>
                  <div>
                    <p className="text-center font-bold text-white text-lg mb-2">1. Hook Library</p>
                    <p className="text-center text-sm text-slate-400">Video variations testing 3 different scroll-stopping hooks.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-[9/16] bg-slate-950/80 rounded-2xl border border-white/10 w-2/3 mx-auto flex items-center justify-center shadow-2xl relative overflow-hidden group">
                     <span className="text-slate-600 font-medium relative z-10">Lead Form</span>
                  </div>
                  <div>
                    <p className="text-center font-bold text-white text-lg mb-2">2. Instant Lead Form</p>
                    <p className="text-center text-sm text-slate-400">Custom questions to qualify budget and timeline.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-[9/16] bg-slate-950/80 rounded-2xl border border-white/10 w-2/3 mx-auto flex items-center justify-center shadow-2xl relative overflow-hidden group">
                     <span className="text-slate-600 font-medium relative z-10">CRM / SMS</span>
                  </div>
                  <div>
                    <p className="text-center font-bold text-white text-lg mb-2">3. Fast Follow-Up</p>
                    <p className="text-center text-sm text-slate-400">Automated text messages sent within 2 minutes of a lead.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 mt-20 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 font-bold rounded-lg"
            >
              Book a strategy call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Work;