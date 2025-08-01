import React, { useState } from 'react';
import { Eye, EyeOff, Users, PiggyBank, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                <PiggyBank className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
              <p className="text-gray-600 mt-2">Sign in to continue splitting expenses</p>
            </div>

            {/* Login Form */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl hover:bg-white/80 transition-all duration-500">
              <div className="hidden lg:block text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h2>
                <p className="text-gray-600">Sign in to continue splitting expenses</p>
              </div>

              <div className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 bg-white/80 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Enter your password"
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

                {/* Forgot Password */}
                <div className="text-right">
                  <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors hover:underline">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  onClick={() => console.log('Login clicked', { email, password })}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-[0.98]"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200/50"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/80 text-gray-500 font-medium rounded-full backdrop-blur-sm">or continue with</span>
                  </div>
                </div>

                {/* Google Login */}
                <button
                  onClick={() => console.log('Google login clicked')}
                  className="w-full bg-white/80 border border-gray-200/50 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-white hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100/50">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to='/register' className="text-amber-600 hover:text-amber-700 font-semibold transition-colors hover:underline">
                    Sign up
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

export default LoginPage;