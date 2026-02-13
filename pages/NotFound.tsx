import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-slate-400 mb-8">Page not found.</p>
      <NavLink to="/" className="bg-white text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors">
        Return Home
      </NavLink>
    </div>
  );
};

export default NotFound;