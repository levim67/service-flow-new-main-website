import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_EMAIL, AUDIT_URL } from '../constants';

const Contact: React.FC = () => {
  const initialFormState = {
    name: '',
    company: '',
    email: '',
    service: 'Facebook + Instagram Ads',
    hasWebsite: 'Yes',
    city: '',
    spend: 'Under $1k',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const subject = `ServiceFlow Inquiry: ${formData.name} from ${formData.company}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Service Interested In: ${formData.service}
Has Website: ${formData.hasWebsite}
City/Area: ${formData.city}
Monthly Ad Spend: ${formData.spend}

Message:
${formData.message}
`;

    // Open the user's email client
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-12 pb-20 container mx-auto px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Get in touch</h1>

        <div className="grid md:grid-cols-2 gap-12 bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          
          {/* Info Side */}
          <div className="bg-white/5 p-8 md:p-12 flex flex-col justify-between border-r border-white/5">
            <div>
              <h3 className="text-lg font-bold text-white mb-8 tracking-wide">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-950/50 rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Email</p>
                    <p className="text-slate-200">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                   <div className="p-3 bg-slate-950/50 rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Office</p>
                    <p className="text-slate-200">North Idaho, USA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-sm text-slate-400">
                Looking for a quick audit? <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">Book the 2-minute Loom audit here.</a>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 bg-transparent">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Name *</label>
                  <input 
                    required 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Company Name *</label>
                  <input 
                    required 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Email *</label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Interested In</label>
                    <div className="relative">
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                        <option value="Facebook + Instagram Ads">Facebook + Instagram Ads</option>
                        <option value="Facebook Ads Only">Facebook Ads Only</option>
                        <option value="Instagram Ads Only">Instagram Ads Only</option>
                        <option value="Website Build">Website Build</option>
                        <option value="Website + Ads Bundle">Website + Ads Bundle</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Do you have a website?</label>
                    <div className="flex items-center gap-6 mt-3">
                       <label className="inline-flex items-center gap-2 cursor-pointer group">
                         <div className="relative flex items-center">
                           <input type="radio" name="hasWebsite" value="Yes" checked={formData.hasWebsite === 'Yes'} onChange={handleChange} className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-600 checked:border-blue-500 transition-all" />
                           <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                         </div>
                         <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Yes</span>
                       </label>
                       <label className="inline-flex items-center gap-2 cursor-pointer group">
                         <div className="relative flex items-center">
                           <input type="radio" name="hasWebsite" value="No" checked={formData.hasWebsite === 'No'} onChange={handleChange} className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-600 checked:border-blue-500 transition-all" />
                           <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                         </div>
                         <span className="text-sm text-slate-300 group-hover:text-white transition-colors">No</span>
                       </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">City/Area</label>
                    <input name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Seattle" className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Monthly Ad Spend</label>
                    <div className="relative">
                      <select name="spend" value={formData.spend} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                        <option value="Under $1k">Under $1,000</option>
                        <option value="$1k - $3k">$1,000 - $3,000</option>
                        <option value="$3k - $10k">$3,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-600/25"
                >
                  <Send className="w-4 h-4" /> Open Email Client
                </button>
                <p className="text-center text-xs text-slate-500 mt-2">
                  This will open your default email app with your message ready to send.
                </p>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;