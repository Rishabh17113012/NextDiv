import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate floating background elements
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      delay: Math.random() * 4,
    }));
    setFloatingElements(elements);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-amber-200/20 animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: '4s',
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className={`text-center max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-amber-300/80 select-none">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-black/10 transform translate-x-2 translate-y-2">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-black/70 text-lg leading-relaxed max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the digital wilderness. 
              Don't worry, it happens to the best of us!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Go Home Button */}
            <button
              onClick={handleGoHome}
              className="group flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Home size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">Go Home</span>
            </button>

            {/* Go Back Button */}
            <button
              onClick={handleGoBack}
              className="group flex items-center gap-3 px-6 py-3 bg-white/70 text-black border border-black/20 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Go Back</span>
            </button>

            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              className="group flex items-center gap-3 px-6 py-3 bg-amber-300/80 text-black rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-medium">Refresh</span>
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-amber-200/50">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Search size={24} className="text-amber-600" />
              <h3 className="text-lg font-medium text-black">Looking for something specific?</h3>
            </div>
            <p className="text-black/60 text-sm">
              Try using the search function or check our navigation menu to find what you need.
            </p>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-sm text-black/50">
            <p>Error Code: 404 • Page Not Found</p>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-50/50 to-transparent pointer-events-none" />
      
    </div>
  );
};

export default NotFoundPage;