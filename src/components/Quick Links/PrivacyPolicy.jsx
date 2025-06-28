import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';



const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gradient-to-br from-orange-50 to-amber-50" id='privacy-policy'>
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We take your privacy seriously. Here's how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-6 font-medium">
              Last updated: January 2025
            </p>
          </div>

          {/* What Data We Collect */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Data We Collect</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When you create an account, we collect basic information to provide our services:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Name and email address for account creation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Phone number for UPI integration and notifications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Profile picture (optional)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      UPI ID for payment processing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Data</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  To facilitate expense splitting and payments:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Expense amounts, descriptions, and categories
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Payment history and settlement records
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Receipt images (processed locally, stored securely)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Group membership and expense sharing arrangements
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Information</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  To improve our service and user experience:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      App usage patterns and feature interactions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Device information and operating system
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Login times and session duration
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Error logs and crash reports (anonymized)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Data */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Your Data</h2>
            
            <div className="grid gap-6">
              <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Improvement</h4>
                <p className="text-gray-600 leading-relaxed">
                  Analyze usage patterns to enhance features, fix bugs, and develop new functionality based on user needs.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Communication</h4>
                <p className="text-gray-600 leading-relaxed">
                  Send important updates, security alerts, payment notifications, and respond to your support requests.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Security & Compliance</h4>
                <p className="text-gray-600 leading-relaxed">
                  Detect fraud, prevent unauthorized access, comply with legal requirements, and maintain platform integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Data Storage and Security */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Storage and Security</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Encryption & Protection</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Your data is protected using industry-standard security measures:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All data encrypted in transit using TLS 1.3
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Data at rest encrypted using AES-256
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Regular security audits and penetration testing
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Multi-factor authentication for account access
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Location & Retention</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We store data responsibly and in compliance with local regulations:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Data stored on secure servers in India
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Account data retained while your account is active
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Financial records kept for 7 years as per RBI guidelines
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Deleted data permanently removed within 30 days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sharing and Disclosure */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sharing and Disclosure</h2>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              We don't sell your personal information to third parties. We only share data in these specific circumstances:
            </p>
            
            <div className="grid gap-6">
              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-orange-200 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Payment Processing</h4>
                <p className="text-gray-600 leading-relaxed">
                  UPI transactions are processed through authorized payment gateways. Only necessary payment data is shared.
                </p>
              </div>
              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-orange-200 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Within Groups</h4>
                <p className="text-gray-600 leading-relaxed">
                  Expense details and payment status are visible to other members of your expense groups.
                </p>
              </div>
              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-orange-200 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h4>
                <p className="text-gray-600 leading-relaxed">
                  We may disclose information when required by law, court order, or to protect our legal rights.
                </p>
              </div>
              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-orange-200 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h4>
                <p className="text-gray-600 leading-relaxed">
                  Trusted partners help us provide services (hosting, analytics, support) under strict confidentiality agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookies and Tracking</h2>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              We use cookies and similar technologies to enhance your experience:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h4>
                <p className="text-gray-600 leading-relaxed">
                  Required for login, security, and basic app functionality. Cannot be disabled.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h4>
                <p className="text-gray-600 leading-relaxed">
                  Help us understand usage patterns to improve the app. Can be opted out.
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              You can manage cookie preferences in your browser settings or through our privacy controls in the app.
            </p>
          </div>

          {/* User Rights and Contact */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights and Contact</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You have control over your personal information:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold">•</span>
                      <div>
                        <strong className="text-gray-900">Access:</strong>
                        <span className="text-gray-600"> Request a copy of your personal data</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold">•</span>
                      <div>
                        <strong className="text-gray-900">Rectification:</strong>
                        <span className="text-gray-600"> Correct inaccurate information</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold">•</span>
                      <div>
                        <strong className="text-gray-900">Deletion:</strong>
                        <span className="text-gray-600"> Request deletion of your account</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 font-bold">•</span>
                      <div>
                        <strong className="text-gray-900">Portability:</strong>
                        <span className="text-gray-600"> Export your data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For privacy-related questions, data requests, or concerns, reach out to our Data Protection Team:
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                  <div className="space-y-4">
                    <p className="text-gray-800"><strong>Email:</strong> privacy@expensesplitter.com</p>
                    <p className="text-gray-800"><strong>Response Time:</strong> Within 72 hours for urgent matters, 7 days for data requests</p>
                    <p className="text-gray-800"><strong>Address:</strong> Data Protection Officer, ExpenseSplitter, Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              We're committed to transparency and protecting your personal information.
            </p>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Contact Privacy Team
            </button>
            <p className="text-sm mt-8 opacity-75 leading-relaxed">
              This policy may be updated periodically. We'll notify you of significant changes via email or app notification.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;