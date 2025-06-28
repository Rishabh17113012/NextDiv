import React from 'react';
import { Users, Target, Heart } from 'lucide-react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simplifying expense sharing for modern relationships
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-orange-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            We believe that money should never come between friends. Our mission is to make expense
            splitting so simple and transparent that you can focus on what really matters — spending
            quality time with the people you care about. We're building a world where financial
            clarity strengthens relationships instead of straining them.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-orange-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Why We Built This</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            We've all been there — splitting a dinner bill becomes a 20-minute ordeal of mental math,
            or worse, someone always ends up paying more while others "forget" to settle up. Traditional
            expense splitting is messy, time-consuming, and often leads to awkward conversations.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our platform eliminates the friction by providing instant UPI-based settlements, AI-powered
            bill recognition, and transparent tracking that ensures everyone knows exactly what they owe
            and to whom.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-orange-100">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Meet the Founder</h2>
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">RT</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Rishabh Tripathi</h3>
              <p className="text-orange-600 font-medium mb-3">Founder & Developer</p>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Undergrad engineer with a passion for simplifying complex financial interactions.
                Built this platform to solve the everyday problem of splitting expenses among friends
                and family with transparency and ease using basic analysis and AI models.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-orange-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">Privacy First</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your financial data stays secure with end-to-end encryption and transparent practices.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Split expenses and settle payments in seconds, not minutes or days.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="font-semibold text-gray-900 mb-2">Simple & Clean</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beautiful design that gets out of your way and lets you focus on what matters.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the community that's revolutionizing how friends handle money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;