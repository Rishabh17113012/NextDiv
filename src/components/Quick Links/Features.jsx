import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Features = () => {
  const features = [
    {
      title: "Instant UPI Settlements",
      description: "Split expenses and settle payments instantly through UPI. No more IOUs or delayed payments — everyone settles up in real-time.",
      emoji: "⚡"
    },
    {
      title: "AI Bill Recognition",
      description: "Simply snap a photo of your receipt and our AI automatically extracts items, prices, and tax details with precision.",
      emoji: "📸"
    },
    {
      title: "Smart Group Management",
      description: "Create groups for roommates, travel buddies, or friend circles. Track ongoing expenses and manage multiple groups effortlessly.",
      emoji: "👥"
    },
    {
      title: "Real-Time Notifications",
      description: "Stay updated with instant notifications for new expenses, payment requests, and settlements. Never miss a payment.",
      emoji: "🔔"
    },
    {
      title: "Transaction History",
      description: "Keep track of all your transactions with detailed history, search functionality, and export options for budgeting.",
      emoji: "📋"
    },
    {
      title: "Visual Insights",
      description: "Understand your spending patterns with beautiful charts and insights. Make smarter financial decisions with your groups.",
      emoji: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to split expenses seamlessly and settle payments instantly
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-lg hover:bg-white/80 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-6">
                <span className="text-3xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlights Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 mb-16 shadow-sm border border-white/50">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Why Choose NextDiv?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-gray-600 leading-relaxed">
                Split expenses and settle payments in under 30 seconds with our streamlined interface
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bank-Level Security</h4>
              <p className="text-gray-600 leading-relaxed">
                Your financial data is protected with enterprise-grade encryption and security protocols
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-violet-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart Automation</h4>
              <p className="text-gray-600 leading-relaxed">
                AI-powered features reduce manual work and eliminate human errors in calculations
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of users who've simplified their expense splitting with NextDiv
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group">
                Start Divding Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                Watch Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;