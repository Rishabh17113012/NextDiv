import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="relative w-full">
      {/* Gradient Background with Curves */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-300/20 to-amber-400/30"></div>
      
      {/* Curved Decorative Elements */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path d="M0,20 Q300,0 600,20 T1200,20 L1200,80 L0,80 Z" fill="rgba(251, 191, 36, 0.3)"/>
        <path d="M0,40 Q400,20 800,40 T1200,40 L1200,80 L0,80 Z" fill="rgba(251, 191, 36, 0.2)"/>
      </svg>

      {/* Main Navbar Content */}
      <nav className="relative z-10 px-6 py-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo/Brand Name */}
          <Link to="/" className="flex flex-col hover:opacity-90 transition-opacity">
            <h1 className="text-2xl font-semibold text-black tracking-tight">
              NextDiv
            </h1>
            <p className="text-xs text-black/60 tracking-wide -mt-1">
              Powered by ATC
            </p>
          </Link>

          {/* Right Side - Login/Register */}
          <div className="flex items-center space-x-1">
            
            {/* Login Button */}
            <button
              onMouseEnter={() => setIsHovered('login')}
              onMouseLeave={() => setIsHovered(null)}
              className={
                `
                px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300 ease-out
                ${isHovered === 'login' 
                  ? 'bg-black text-white shadow-lg transform scale-105' 
                  : 'text-black hover:bg-black/5'
                }
              `}
            >
              Login
            </button>

            {/* Register Button */}
            <button
              onMouseEnter={() => setIsHovered('register')}
              onMouseLeave={() => setIsHovered(null)}
              className={
                `
                px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300 ease-out
                border border-black/20
                ${isHovered === 'register'
                  ? 'bg-black text-white border-black shadow-lg transform scale-105'
                  : 'text-black bg-white/30 hover:bg-white/50 backdrop-blur-sm'
                }
              `}
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </div>
  );
};

export default Navbar;
