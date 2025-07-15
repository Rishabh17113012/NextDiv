import React, { useState } from 'react';
import { Eye, EyeOff, Users, PiggyBank, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Signup data:', form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 flex flex-col">
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Branding/Illustration */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-100 to-yellow-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-amber-300/20 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-orange-300/20 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>
          
          <div className="relative z-10 flex flex-col justify-center items-center w-full px-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl mb-6 mx-auto transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-700 ease-out">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Divide Smarter. <br />
                <span className="text-amber-600">Live Better.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The easiest way to share expenses with friends, family, and roommates. 
                Track who owes what and settle up with just a few taps.
              </p>
            </div>
            
            {/*Illustration Cards with Perspective */}
            <div className="flex items-center space-x-8 perspective-1000">
              {/* Track Expenses Card */}
              <div className="group relative">
                <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 transform transition-all duration-700 ease-out hover:scale-110 hover:rotate-y-12 hover:-translate-y-4 hover:shadow-3xl group-hover:bg-white/60">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <PiggyBank className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-2">Track Expenses</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Monitor spending with intelligent categorization</div>
                  </div>
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Heart Connector */}
              <div className="transform hover:scale-125 hover:rotate-12 transition-all duration-500">
                <Heart className="w-8 h-8 text-red-400 drop-shadow-lg" />
              </div>

              {/* Share & Split Card */}
              <div className="group relative">
                <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 transform transition-all duration-700 ease-out hover:scale-110 hover:-rotate-y-12 hover:-translate-y-4 hover:shadow-3xl group-hover:bg-white/60">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto transform group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-2">Share & Split</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Divide bills seamlessly among friends</div>
                  </div>
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 transform hover:scale-110 transition-all duration-500">
                <PiggyBank className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Create your account</h1>
              <p className="text-gray-600 mt-2">Signup to start splitting expenses</p>
            </div>

            {/* Signup Form Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl hover:bg-white/80 transition-all duration-500">
              <div className="hidden lg:block text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Create your account</h2>
                <p className="text-gray-600">Signup to start splitting expenses</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-12 bg-white/80 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-12 bg-white/80 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Re-enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-200"
                    >
                      {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-[0.98]"
                >
                  Sign Up
                </button>
              </form>

              {/* Sign In Link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100/50">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to='/login' className="text-amber-600 hover:text-amber-700 font-semibold transition-colors hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;