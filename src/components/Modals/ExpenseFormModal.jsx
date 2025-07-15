import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Calendar, User, Users, Receipt, IndianRupee } from 'lucide-react';

// Mock data - Replace with API calls when connecting to database
const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', avatar: 'JD' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', avatar: 'JS' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', avatar: 'MJ' },
  { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', avatar: 'SW' },
];

const ExpenseFormModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  expense = null, // For editing existing expense
  groupId = null 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    payerId: '',
    participants: [],
    notes: '',
    splitType: 'equal', // 'equal' or 'custom'
    customSplits: {}
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form data when editing
  useEffect(() => {
    if (expense) {
      setFormData({
        title: expense.title || '',
        amount: expense.amount?.toString() || '',
        date: expense.date || new Date().toISOString().split('T')[0],
        payerId: expense.payerId || '',
        participants: expense.participants || [],
        notes: expense.notes || '',
        splitType: expense.splitType || 'equal',
        customSplits: expense.customSplits || {}
      });
    } else {
      // Reset form for new expense
      setFormData({
        title: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        payerId: '',
        participants: [],
        notes: '',
        splitType: 'equal',
        customSplits: {}
      });
    }
  }, [expense, isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleParticipantToggle = (userId) => {
    setFormData(prev => {
      const newParticipants = prev.participants.includes(userId)
        ? prev.participants.filter(id => id !== userId)
        : [...prev.participants, userId];
      
      // Update custom splits when participants change
      const newCustomSplits = { ...prev.customSplits };
      if (!newParticipants.includes(userId)) {
        delete newCustomSplits[userId];
      } else if (prev.splitType === 'custom' && !newCustomSplits[userId]) {
        newCustomSplits[userId] = '';
      }
      
      return {
        ...prev,
        participants: newParticipants,
        customSplits: newCustomSplits
      };
    });
  };

  const handleCustomSplitChange = (userId, amount) => {
    setFormData(prev => ({
      ...prev,
      customSplits: {
        ...prev.customSplits,
        [userId]: amount
      }
    }));
  };

  const handleSplitTypeChange = (type) => {
    setFormData(prev => {
      const newData = { ...prev, splitType: type };
      
      if (type === 'custom') {
        // Initialize custom splits for all participants
        const customSplits = {};
        prev.participants.forEach(userId => {
          customSplits[userId] = '';
        });
        newData.customSplits = customSplits;
      }
      
      return newData;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.amount || parseFloat(formData.amount) <= 0) newErrors.amount = 'Valid amount is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.payerId) newErrors.payerId = 'Payer is required';
    if (formData.participants.length === 0) newErrors.participants = 'At least one participant is required';
    
    if (formData.splitType === 'custom') {
      const totalCustomAmount = Object.values(formData.customSplits)
        .reduce((sum, amount) => sum + (parseFloat(amount) || 0), 0);
      const totalAmount = parseFloat(formData.amount) || 0;
      
      if (Math.abs(totalCustomAmount - totalAmount) > 0.01) {
        newErrors.customSplits = 'Custom splits must equal the total amount';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const expenseData = {
        ...formData,
        amount: parseFloat(formData.amount),
        id: expense?.id || Date.now().toString(), // Mock ID generation
        groupId,
        createdAt: expense?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // API call placeholder
      // await api.expenses.create(expenseData);
      
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(expenseData);
      onClose();
      
      // Show success toast (you can implement toast notifications)
      console.log('Expense saved successfully!');
      
    } catch (error) {
      console.error('Error saving expense:', error);
      setErrors({ submit: 'Failed to save expense. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const getUserName = (userId) => {
    const user = mockUsers.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const getUserAvatar = (userId) => {
    const user = mockUsers.find(u => u.id === userId);
    return user ? user.avatar : 'U';
  };

  const calculateEqualSplit = () => {
    if (formData.participants.length === 0 || !formData.amount) return 0;
    return (parseFloat(formData.amount) / formData.participants.length).toFixed(2);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <Receipt className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {expense ? 'Edit Expense' : 'Add New Expense'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Expense Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="e.g., Dinner at Restaurant"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.title ? 'border-red-300' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
            />
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
          </div>

          {/* Amount and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  placeholder="0.00"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.amount ? 'border-red-300' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                />
              </div>
              {errors.amount && <p className="text-sm text-red-500">{errors.amount}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.date ? 'border-red-300' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                />
              </div>
              {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
            </div>
          </div>

          {/* Payer */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Paid by
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={formData.payerId}
                onChange={(e) => handleInputChange('payerId', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.payerId ? 'border-red-300' : 'border-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all Foappearance-none bg-white`}
              >
                <option value="">Select payer</option>
                {mockUsers.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.payerId && <p className="text-sm text-red-500">{errors.payerId}</p>}
          </div>

          {/* Participants */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Split between
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mockUsers.map(user => (
                <div
                  key={user.id}
                  onClick={() => handleParticipantToggle(user.id)}
                  className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.participants.includes(user.id)
                      ? 'border-amber-300 bg-amber-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    formData.participants.includes(user.id)
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {user.avatar}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                  {formData.participants.includes(user.id) && (
                    <div className="ml-auto w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {errors.participants && <p className="text-sm text-red-500">{errors.participants}</p>}
          </div>

          {/* Split Type */}
          {formData.participants.length > 0 && (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Split type
              </label>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => handleSplitTypeChange('equal')}
                  className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    formData.splitType === 'equal'
                      ? 'border-amber-300 bg-amber-50 text-amber-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Equal Split
                </button>
                <button
                  type="button"
                  onClick={() => handleSplitTypeChange('custom')}
                  className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    formData.splitType === 'custom'
                      ? 'border-amber-300 bg-amber-50 text-amber-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Custom Split
                </button>
              </div>
            </div>
          )}

          {/* Split Details */}
          {formData.participants.length > 0 && formData.amount && (
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Split Details
              </h4>
              <div className="space-y-2">
                {formData.participants.map(userId => (
                  <div key={userId} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                        {getUserAvatar(userId)}
                      </div>
                      <span className="text-sm text-gray-700">
                        {getUserName(userId)}
                      </span>
                    </div>
                    {formData.splitType === 'equal' ? (
                      <span className="text-sm font-medium text-gray-900">
                        ₹{calculateEqualSplit()}
                      </span>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">₹</span>
                        <input
                          type="number"
                          step="0.01"
                          value={formData.customSplits[userId] || ''}
                          onChange={(e) => handleCustomSplitChange(userId, e.target.value)}
                          placeholder="0.00"
                          className="w-20 px-2 py-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {errors.customSplits && (
                <p className="text-sm text-red-500 mt-2">{errors.customSplits}</p>
              )}
            </div>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Notes (optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Add any additional notes..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-600">{errors.submit}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : expense ? 'Update Expense' : 'Add Expense'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage component
const FoApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expenseData) => {
    // This would be your API call to save the expense
    // For now, we'll just add it to local state
    setExpenses(prev => [...prev, expenseData]);
    console.log('Expense added:', expenseData);
    
    // API call placeholder:
    // try {
    //   const response = await fetch('/api/expenses', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'Foapplication/json' },
    //     body: JSON.stringify(expenseData)
    //   });
    //   const savedExpense = await response.json();
    //   setExpenses(prev => [...prev, savedExpense]);
    // } catch (error) {
    //   console.error('Error saving expense:', error);
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Expense Management
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
        </div>

        {/* Expenses List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Expenses
          </h2>
          {expenses.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No expenses yet. Add your first expense to get started!
            </p>
          ) : (
            <div className="space-y-3">
              {expenses.map(expense => (
                <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h3 className="font-medium text-gray-900">{expense.title}</h3>
                    <p className="text-sm text-gray-600">
                      Paid by {mockUsers.find(u => u.id === expense.payerId)?.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">₹{expense.amount}</p>
                    <p className="text-sm text-gray-600">{expense.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ExpenseFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddExpense}
      />
    </div>
  );
};

export default FoApp;