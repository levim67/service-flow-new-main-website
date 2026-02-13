import React from 'react';
import { CONTACT_EMAIL } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-300">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly to us via our contact forms, such as your name, email address, and business details. We also collect non-personal usage data via standard web analytics cookies.</p>

        <h3>2. How We Use Information</h3>
        <p>We use your information strictly to:</p>
        <ul>
          <li>Respond to your inquiries and service requests.</li>
          <li>Send administrative information, such as updates, security alerts, and support messages.</li>
          <li>Improve our website and services.</li>
        </ul>

        <h3>3. Data Sharing</h3>
        <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners for the purposes outlined above.</p>

        <h3>4. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at {CONTACT_EMAIL}.</p>
      </div>
    </div>
  );
};

export default Privacy;