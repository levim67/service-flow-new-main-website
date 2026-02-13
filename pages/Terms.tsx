import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert prose-slate max-w-none text-slate-300">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h3>1. Services</h3>
        <p>ServiceFlow Media provides digital marketing services including but not limited to Meta (Facebook/Instagram) advertising management, creative asset production, and lead nurture consulting.</p>

        <h3>2. Payments and Cancellations</h3>
        <p>Our services are billed on a month-to-month basis. We require a 30-day notice for cancellation of services. Ad spend is paid directly by the Client to the advertising platform (e.g., Meta) and is not included in our service fees.</p>

        <h3>3. Limitation of Liability</h3>
        <p>While we aim to drive specific results, ServiceFlow Media makes no guarantees regarding specific revenue, lead volume, or conversion rates. Digital marketing performance can vary based on market conditions, offer quality, and external factors. In no event shall ServiceFlow Media be liable for any indirect, incidental, special, consequential or punitive damages.</p>

        <h3>4. Intellectual Property</h3>
        <p>Upon full payment, Clients own the creative assets produced specifically for their campaigns. ServiceFlow Media retains the right to use anonymous campaign performance data for case studies and internal analysis.</p>

        <h3>5. Governing Law</h3>
        <p>These Terms shall be governed and construed in accordance with the laws of the State of Idaho, United States.</p>
      </div>
    </div>
  );
};

export default Terms;