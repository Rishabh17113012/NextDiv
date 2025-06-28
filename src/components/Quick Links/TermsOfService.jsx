import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';



const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform and services.
          </p>
          <p className="text-sm text-gray-500 mt-6 bg-gray-100 inline-block px-4 py-2 rounded-full">
            Last updated: January 2025
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By accessing or using NextDiv Power by ATC services ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to 
                update these Terms at any time. Changes will be effective immediately upon posting, and your continued use 
                constitutes acceptance of the revised terms.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-6">
                <p className="text-blue-800 font-medium">
                  Important: You must be at least 18 years old or have parental consent to use this Service. 
                  By creating an account, you represent that you meet these age requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. User Responsibilities</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Maintain the confidentiality of your login credentials</p>
                  <p>• Notify us immediately of any unauthorized account access</p>
                  <p>• Use strong passwords and enable two-factor authentication when available</p>
                  <p>• Keep your contact information and service details current and accurate</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Acceptable Use</h3>
                <p className="text-gray-700 mb-4">You agree to use the Service responsibly and agree NOT to:</p>
                <div className="space-y-3 text-gray-700">
                  <p>• Submit false, misleading, or fraudulent information</p>
                  <p>• Use the Service for any illegal activities</p>
                  <p>• Harass, abuse, or harm other users through the platform</p>
                  <p>• Attempt to hack, reverse engineer, or compromise the Service</p>
                  <p>• Create fake accounts or impersonate others</p>
                  <p>• Use automated tools to access or scrape the Service</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Responsibility</h3>
                <p className="text-gray-700">
                  You are responsible for all content you upload, including documents, images, and information. 
                  Ensure all content is accurate, legal, and does not violate intellectual property rights or privacy of others.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Services and Payments</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Delivery</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Services are provided according to agreed specifications and timelines</p>
                  <p>• We maintain professional standards in all service delivery</p>
                  <p>• Any changes to service scope must be mutually agreed upon in writing</p>
                  <p>• Service quality and satisfaction are our top priorities</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Terms</h3>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-4">
                  <p className="text-red-800 font-medium">
                    Important: Payment terms are specified in individual service agreements. 
                    Late payments may incur additional charges and may affect service continuity.
                  </p>
                </div>
                <p className="text-gray-700">
                  Users are expected to fulfill payment obligations according to agreed terms. Persistent non-payment 
                  may result in service suspension and account termination.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Fees</h3>
                <p className="text-gray-700">
                  Service fees are specified in individual agreements or service packages. We reserve the right to 
                  modify pricing with reasonable notice. Any changes to fees will be communicated at least 30 days 
                  in advance for existing customers.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Termination Policy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User-Initiated Termination</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• You may terminate services according to the terms in your service agreement</p>
                  <p>• Outstanding payments must be settled before service termination</p>
                  <p>• Your data will be handled according to our Privacy Policy retention schedule</p>
                  <p>• Some business records may be retained for compliance and legal purposes</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service-Initiated Termination</h3>
                <p className="text-gray-700 mb-4">We may suspend or terminate services for:</p>
                <div className="space-y-3 text-gray-700">
                  <p>• Violation of these Terms of Service</p>
                  <p>• Non-payment of fees or fraudulent payment activity</p>
                  <p>• Breach of service agreements or professional conduct</p>
                  <p>• Extended periods of inactivity (with prior notice)</p>
                  <p>• Legal compliance requirements</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-blue-800 font-medium">
                  Notice: We will provide reasonable notice before termination unless immediate action 
                  is required for security or legal reasons. You may appeal termination decisions by contacting our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Disclaimer and Limitations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Availability</h3>
                <p className="text-gray-700">
                  We strive to maintain high service standards and availability but cannot guarantee uninterrupted service. 
                  The Service is provided "as is" without warranties of any kind. We reserve the right to modify, suspend, 
                  or discontinue features with reasonable notice.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-4">
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, NextDiv Power by ATC shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including loss of profits, data, or use, 
                    whether in contract, tort, or otherwise, arising from your use of the Service.
                  </p>
                </div>
                <p className="text-gray-700">
                  Our total liability for any claims related to the Service shall not exceed the amount you paid to us 
                  in the 12 months preceding the claim, or ₹10,000, whichever is greater.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Third-Party Services</h3>
                <p className="text-gray-700">
                  Our Service may integrate with various third-party providers and platforms. We are not responsible 
                  for the availability, functionality, or policies of these external services. Any issues with third-party 
                  services should be addressed directly with those providers.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Governing Law and Disputes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable Law</h3>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard 
                  to conflict of law principles. Any legal proceedings shall be conducted in the courts of Bangalore, Karnataka.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dispute Resolution</h3>
                <p className="text-gray-700 mb-4">
                  We encourage users to contact our support team first to resolve any issues. For formal disputes:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>1. Attempt good faith negotiation for 30 days</p>
                  <p>2. If unresolved, proceed to binding arbitration under Indian Arbitration laws</p>
                  <p>3. Arbitration will be conducted in English in Bangalore, Karnataka</p>
                  <p>4. Class action lawsuits are waived; disputes must be resolved individually</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact for Legal Matters</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <p className="text-gray-700 mb-2"><span className="font-semibold">Legal Department:</span> legal@nextdivpower.com</p>
                  <p className="text-gray-700"><span className="font-semibold">Address:</span> Legal Team, NextDiv Power by ATC, Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our legal team is here to help clarify any concerns about these terms.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
            Contact Legal Team
          </button>
          <p className="text-sm mt-6 opacity-75">
            By continuing to use NextDiv Power by ATC services, you acknowledge that you have read, understood, and agree to these Terms of Service.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;