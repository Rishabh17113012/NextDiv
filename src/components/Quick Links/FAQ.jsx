import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqs = [
    {
      question: "How do I split an expense?",
      answer: "Splitting an expense is simple! Just snap a photo of your receipt or manually enter the amount, select the friends who shared the expense, choose how to split it (equally, by amount, or by percentage), and send payment requests. Everyone gets notified instantly and can settle through UPI."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely! We use bank-level encryption (AES-256) to protect all your financial data. Your payment information is processed securely through UPI gateways, and we never store your banking credentials. All data is encrypted both in transit and at rest, and we comply with RBI guidelines for financial data security."
    },
    {
      question: "Do I need UPI to use this app?",
      answer: "While UPI integration makes settlements instant and seamless, you can still use the app to track and split expenses without it. However, to experience the full benefit of real-time payments and automatic settlements, we highly recommend linking your UPI ID. Most Indian banks support UPI, making it accessible to virtually everyone."
    },
    {
      question: "Can I use this with my flatmates?",
      answer: "Perfect for flatmates! Create a group for your household and easily track recurring expenses like rent, utilities, groceries, and household supplies. Set up automatic monthly splits for regular bills, and everyone can see exactly what they owe. It's ideal for managing shared living expenses transparently."
    },
    {
      question: "Is there a premium version?",
      answer: "Currently, all our core features are free! This includes expense splitting, group management, UPI payments, and basic analytics. We're working on premium features like advanced expense analytics, export options, and integration with accounting software. We'll always keep the essential splitting features free for everyone."
    },
    {
      question: "What happens if someone doesn't pay?",
      answer: "Our app sends gentle reminder notifications to users with pending payments. You can also see a clear overview of who owes what in your dashboard. While we facilitate the splitting and tracking, the actual settlement depends on the trust within your group. We provide transparency to make it easier to follow up on payments."
    },
    {
      question: "Can I split expenses unequally?",
      answer: "Yes! You have multiple splitting options: split equally among all participants, assign specific amounts to each person, or split by percentage. This is perfect for situations where someone ordered more expensive items or when contributions vary. You can also exclude certain people from specific line items."
    },
    {
      question: "How does the AI bill recognition work?",
      answer: "Our AI analyzes your receipt photos to automatically detect merchant name, date, individual items, prices, and tax amounts. It works with most standard receipt formats from restaurants, stores, and services. If something isn't detected correctly, you can easily edit the details before splitting. The AI gets smarter with each receipt processed!"
    },
    {
      question: "Can I use this for international expenses?",
      answer: "Currently, our platform is optimized for Indian UPI payments and INR currency. For international trips, you can still track and split expenses, but settlements would need to be handled outside the app. We're exploring international payment integration for future updates."
    },
    {
      question: "What if I accidentally delete an expense?",
      answer: "Don't worry! All expenses are safely stored and can be recovered. Contact our support team if you accidentally delete something important. We also maintain a detailed transaction history that you can access anytime. For added safety, consider exporting important expense reports regularly."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">

      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about splitting expenses and managing your finances with our app
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden backdrop-blur-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 active:bg-gray-100"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4 leading-tight">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openAccordion === index && (
                <div className="px-6 pb-5 border-t border-gray-50">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Can't find what you're looking for? Our support team is ready to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all duration-200 active:scale-95 shadow-sm">
                Contact Support
              </button>
              <button className="border border-orange-500 text-orange-500 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-200 active:scale-95">
                Browse Help Center
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-amber-300 rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-black">Quick Tips</h2>
            <p className="text-gray-800 text-sm">Make the most of your expense splitting experience</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h4 className="font-semibold mb-3 text-sm text-black">Create Groups Early</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Set up groups for roommates, travel, or regular friend circles to streamline recurring expenses.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h4 className="font-semibold mb-3 text-sm text-black">Enable Notifications</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Turn on push notifications to stay updated on payments and never miss a settlement request.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h4 className="font-semibold mb-3 text-sm text-black">Snap Clear Photos</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                For best AI recognition, ensure receipts are well-lit and all text is clearly visible.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h4 className="font-semibold mb-3 text-sm text-black">Settle Regularly</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Regular settlements keep relationships smooth and prevent large accumulated debts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;