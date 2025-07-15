import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Plus, Bell, Settings, User, Menu, X, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Get active tab from current route
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'dashboard';
    if (path === '/foApp') return 'foApp';
    if (path === '/analytics') return 'analytics';
    if (path === '/setting') return 'settings';
    return '';
  };

  const activeTab = getActiveTab();

  const authenticatedNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
    { id: 'add-expense', label: 'Add Expense', icon: Plus, path: '/add-expense' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/setting' },
  ];

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
    setIsMobileMenuOpen(false);
  };

  // Mobile Bottom Navigation for Authenticated Users
  const MobileBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border-t border-amber-200 md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {authenticatedNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={handleMobileMenuClose}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'bg-amber-500 text-white shadow-lg transform scale-105' 
                  : 'text-amber-700 hover:bg-amber-100'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 shadow-lg overflow-hidden">
        {/* Gradient Background with Curves */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-orange-100/20 to-red-100/30"></div>
        
        {/* Curved Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-200/20 to-orange-200/20 rounded-full translate-x-48 translate-y-48"></div>
        
        {/* Main Navbar Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand Name */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                NextDiv
              </div>
              <div className="text-xs text-amber-600 font-medium hidden sm:block">
                Powered by ATC
              </div>
            </Link>

            {/* Desktop Navigation for Authenticated Users */}
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-1">
                {authenticatedNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                        isActive 
                          ? 'bg-amber-500 text-white shadow-lg transform scale-105 border-2 border-amber-600' 
                          : 'text-amber-700 hover:bg-amber-100 hover:text-amber-800'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Right Side Content */}
            <div className="flex items-center space-x-4">
              {/* Development Toggle - positioned to not interfere */}
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 border border-amber-200">
                <span className="text-xs text-amber-700 font-medium">Dev:</span>
                <button
                  onClick={toggleAuth}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
                    isAuthenticated ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 ${
                      isAuthenticated ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-xs text-amber-700 font-medium">
                  {isAuthenticated ? 'Auth' : 'Guest'}
                </span>
              </div>

              {/* Guest User Navigation */}
              {!isAuthenticated && (
                <div className="hidden md:flex items-center space-x-3">
                  {/* Login Button */}
                  <Link
                    to="/login"
                    onMouseEnter={() => setIsHovered('login')}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                      isHovered === 'login' 
                        ? 'bg-black text-white shadow-lg transform scale-105' 
                        : 'text-black hover:bg-black/5'
                    }`}
                  >
                    Login
                  </Link>
                  
                  {/* Register Button */}
                  <Link
                    to="/register"
                    onMouseEnter={() => setIsHovered('register')}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out border border-black/20 ${
                      isHovered === 'register' 
                        ? 'bg-black text-white border-black shadow-lg transform scale-105' 
                        : 'text-black bg-white/30 hover:bg-white/50 backdrop-blur-sm'
                    }`}
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Authenticated User Profile */}
              {isAuthenticated && (
                <div className="hidden md:flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-amber-700 hover:bg-amber-100 transition-all duration-300"
                  >
                    <User size={16} />
                    <span>Profile</span>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-amber-700 hover:bg-amber-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border-t border-amber-200 shadow-lg z-50">
              <div className="px-4 py-4 space-y-3">
                {!isAuthenticated ? (
                  // Guest Mobile Menu
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={handleMobileMenuClose}
                      className="block w-full px-4 py-3 text-center rounded-lg bg-black text-white font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={handleMobileMenuClose}
                      className="block w-full px-4 py-3 text-center rounded-lg border border-black/20 bg-white/30 backdrop-blur-sm text-black font-medium"
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  // Authenticated Mobile Menu
                  <div className="space-y-2">
                    {authenticatedNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.id;
                      return (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={handleMobileMenuClose}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            isActive 
                              ? 'bg-amber-500 text-white shadow-lg' 
                              : 'text-amber-700 hover:bg-amber-100'
                          }`}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      );
                    })}
                    <div className="border-t border-amber-200 pt-3">
                      <Link
                        to="/profile"
                        onClick={handleMobileMenuClose}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-amber-700 hover:bg-amber-100 transition-all duration-300"
                      >
                        <User size={20} />
                        <span className="font-medium">Profile</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"></div>
      </nav>

      {/* Mobile Bottom Navigation for Authenticated Users */}
      {isAuthenticated && <MobileBottomNav />}
    </>
  );
};

export default Navbar;