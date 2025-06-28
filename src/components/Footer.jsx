import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-orange-50 border-t border-amber-100 shadow-inner">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Logo & Mission */}
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">₹</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">NextDiv</h3>
              </div>
              <p className="text-xs text-gray-500 ml-12 font-medium">Powered by ATC</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Making group expenses simple, fair, and stress-free for everyone.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4 sm:col-span-1 lg:col-span-1">
            <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">Quick Links</h4>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {[
                { to: '/about-us', label: 'About Us' },
                { to: '/features', label: 'Features' },
                { to: '/faq', label: 'FAQ' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms-of-service', label: 'Terms of Service' },
              ].map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-gray-600 text-sm hover:text-amber-600 transition-all duration-200 hover:translate-x-1 transform inline-block py-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Social & Contact */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-4">Connect With Us</h4>
              <div className="flex space-x-3 mb-6">
                {[
                  { icon: Twitter, href: '#twitter', label: 'Twitter' },
                  { icon: Github, href: '#github', label: 'GitHub' },
                  { icon: Mail, href: 'mailto:hello@nextdiv.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-110 transform border border-amber-100/50"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-3">Get in Touch</h4>
              <a 
                href="mailto:support@nextdiv.com" 
                className="text-gray-600 text-sm hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                support@nextdiv.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-amber-200/70 bg-gradient-to-r from-amber-25 to-orange-25 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-gray-600 text-xs sm:text-sm">
              <span>© {currentYear} NextDiv. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs text-gray-500">Powered by ATC</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current animate-pulse" />
              <span>for better financial harmony</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
