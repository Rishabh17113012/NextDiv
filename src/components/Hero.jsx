import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Users, 
  Receipt, 
  TrendingUp, 
  Smartphone,
  Shield,
  Zap,
  Star,
  Play
} from 'lucide-react';
import Card from './ui/Cards';



// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (now >= endTime) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
};

// Dashboard Preview Component with Indian Currency
const DashboardPreview = () => (
  <div className="relative w-full max-w-md">
    <Card variant="glass" className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-600">Live</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <Card className="p-4" variant="elevated" hover={false}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <Receipt className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Dinner at Zomato</p>
                <p className="text-sm text-gray-600">Split with 3 friends</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-gray-900">₹2,450</span>
              <p className="text-sm text-gray-500">₹612.50 each</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4" variant="elevated" hover={false}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Goa Trip Expenses</p>
                <p className="text-sm text-gray-600">Weekend getaway • 8 friends</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-gray-900">₹15,680</span>
              <p className="text-sm text-gray-500">₹1,960 each</p>
            </div>
          </div>
        </Card>
        
        <Card variant="accent" className="p-4" hover={false}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">You're owed</p>
                <p className="text-sm text-gray-600">From 5 recent expenses</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-green-600">+₹8,930</span>
              <p className="text-sm text-green-500">To be settled</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200/50">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Total saved this month</span>
          <span className="font-semibold text-amber-600">₹12,340</span>
        </div>
      </div>
    </Card>
  </div>
);

// Floating Elements with Indian stats
const FloatingCard = ({ children, className = "", delay = 0 }) => (
  <div 
    className={`absolute animate-float ${className}`}
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: '6s',
      animationIterationCount: 'infinite'
    }}
  >
    <Card variant="glass" className="p-4 backdrop-blur-lg">
      {children}
    </Card>
  </div>
);

// Feature Highlights
const FeatureHighlight = ({ icon: Icon, title, description }) => (
  <Card variant="elevated" className="p-6 group cursor-pointer h-full">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300 shadow-lg">
        <Icon className="w-8 h-8 text-amber-700" />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

// Main Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="hidden lg:block">
        <FloatingCard className="top-20 left-16" delay={0}>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">₹<AnimatedCounter end={1234} /></div>
              <div className="text-xs text-gray-600">Saved</div>
            </div>
          </div>
        </FloatingCard>
        
        <FloatingCard className="top-40 right-20" delay={1}>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-700" />
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900"><AnimatedCounter end={12} /> friends</div>
              <div className="text-xs text-gray-600">Active</div>
            </div>
          </div>
        </FloatingCard>
        
        <FloatingCard className="top-1/2 left-32" delay={2}>
          <div className="flex items-center space-x-3">
            <Receipt className="w-5 h-5 text-amber-600" />
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900"><AnimatedCounter end={34} /> expenses</div>
              <div className="text-xs text-gray-600">This month</div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="top-1/2 right-32" delay={3}>
          <div className="flex items-center space-x-3">
            <Star className="w-5 h-5 text-amber-500" />
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">4.9/5</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
          </div>
        </FloatingCard>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          {/* Announcement Banner */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Card variant="accent" className="inline-flex items-center px-6 py-3 mb-8" padding={false}>
              <span className="text-sm font-medium text-gray-900">
                ✨ Smart splitting with UPI integration is here! Try it free
              </span>
            </Card>
          </div>

          {/* Main Headline */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Split Expenses
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Track shared expenses, settle debts with UPI, and keep your friendships drama-free with India's smartest expense splitting app.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex justify-center mb-16">
              <Card className="group cursor-pointer overflow-hidden" padding={false}>
                <div className="px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white font-semibold text-lg flex items-center justify-center space-x-2 group-hover:from-gray-800 group-hover:to-black transition-all duration-300">
                  <span>Start Splitting Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Dashboard Preview and Feature Highlights Side by Side */}
        <div className={`relative transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-20`}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-300/10 to-transparent blur-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Recent Activity - Left Side */}
            <div className="flex justify-center lg:justify-start">
              <DashboardPreview />
            </div>
            
            {/* Feature Highlights - Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureHighlight 
                icon={Zap}
                title="Instant UPI Splits"
                description="Split and settle with any UPI app instantly"
              />
              <FeatureHighlight 
                icon={Smartphone}
                title="Smart Recognition"
                description="AI reads bills and splits automatically"
              />
              <FeatureHighlight 
                icon={Shield}
                title="Secure & Private"
                description="Bank-grade security for all transactions"
              />
              <FeatureHighlight 
                icon={Users}
                title="Group Friendly"
                description="Perfect for trips, dinners, and flatmates"
              />
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} mb-16`}>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Real-time splitting",
              "UPI integration", 
              "WhatsApp reminders",
              "Expense categories",
              "Group chat sync",
              "Multi-currency support"
            ].map((feature, index) => (
              <Card key={feature} variant="glass" className="px-4 py-2" padding={false}>
                <span className="text-sm font-medium text-gray-900">{feature}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-amber-500 fill-current" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="font-medium">50K+ Users</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Bank-level Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;