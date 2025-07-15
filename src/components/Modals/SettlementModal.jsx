import React, { useState } from 'react';
import { X, User, CreditCard, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const SettleUpModal = ({ isOpen, onClose, users = [] }) => {
  const [formData, setFormData] = useState({
    payer: '',
    recipient: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    paymentMethod: 'upi',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const paymentMethods = [
    { value: 'upi', label: 'UPI', icon: '📱' },
    { value: 'cash', label: 'Cash', icon: '💵' },
    { value: 'bank_transfer', label: 'Bank Transfer', icon: '🏦' },
    { value: 'paytm', label: 'Paytm', icon: '💳' },
    { value: 'gpay', label: 'Google Pay', icon: '🎯' },
    { value: 'phonepe', label: 'PhonePe', icon: '💜' }
  ];

  const defaultUsers = [
    { id: '1', name: 'Rahul Sharma', avatar: '👨‍💼' },
    { id: '2', name: 'Priya Patel', avatar: '👩‍💻' },
    { id: '3', name: 'Amit Kumar', avatar: '👨‍🎓' },
    { id: '4', name: 'Sneha Gupta', avatar: '👩‍🏫' }
  ];

  const userList = users.length > 0 ? users : defaultUsers;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.payer || !formData.recipient || !formData.amount) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Placeholder function call
    handleSettle(formData);
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Auto close after success
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setFormData({
        payer: '',
        recipient: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        paymentMethod: 'upi',
        note: ''
      });
    }, 2000);
  };

  // Placeholder function
  const handleSettle = (data) => {
    console.log('Settlement logged:', data);
    // This would typically make an API call to log the settlement
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-amber-100/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Settle Up</h2>
                  <p className="text-sm text-gray-600">Log a settlement payment</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Success State */}
          {showSuccess && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Settlement Logged!</h3>
                <p className="text-gray-600">Payment has been recorded successfully</p>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="p-6 space-y-5">
            {/* Payer Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Who paid?
              </label>
              <select
                name="payer"
                value={formData.payer}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              >
                <option value="">Select payer</option>
                {userList.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.avatar} {user.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Recipient Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Who received?
              </label>
              <select
                name="recipient"
                value={formData.recipient}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              >
                <option value="">Select recipient</option>
                {userList.filter(user => user.id !== formData.payer).map(user => (
                  <option key={user.id} value={user.id}>
                    {user.avatar} {user.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500 font-medium">₹</span>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              >
                {paymentMethods.map(method => (
                  <option key={method.value} value={method.value}>
                    {method.icon} {method.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Note (Optional) */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Note (Optional)
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                placeholder="Add a note about this settlement..."
                rows="3"
                className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-medium transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.payer || !formData.recipient || !formData.amount}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-2xl font-medium transition-all transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Settling...</span>
                  </div>
                ) : (
                  'Settle Up'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo Component
const SettleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Expense Tracker</h1>
          <p className="text-gray-600">Manage shared expenses with ease</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Settlement Center</h2>
            <p className="text-gray-600 mb-6">Record payments between group members</p>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-2xl font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Settle Up
            </button>
          </div>
        </div>
      </div>

      <SettleUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SettleModal;