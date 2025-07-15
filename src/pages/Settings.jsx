import React, { useState } from 'react';
import { Settings, User, Bell, Globe, Trash2, Save, ArrowLeft, Menu, Home, Users, LogOut } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const UserSettings = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    currency: 'USD',
    emailNotifications: true,
    pushNotifications: true,
    expenseUpdates: false,
    groupInvites: true
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' }
  ];

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(false);
    // Handle account deletion logic here
  };

  const ToggleSwitch = ({ enabled, onChange }) => (
    <div
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
        enabled ? 'bg-amber-400' : 'bg-gray-300'
      }`}
      onClick={onChange}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navbar/>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Link to='/dashboard' className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your profile, preferences, and account settings</p>
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 rounded-xl p-2">
                <User className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>

          {/* Currency Preference */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 rounded-xl p-2">
                <Globe className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Currency Preference</h2>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
                className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all appearance-none"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 rounded-xl p-2">
                <Bell className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive email updates about your expenses</p>
                </div>
                <ToggleSwitch
                  enabled={settings.emailNotifications}
                  onChange={() => handleInputChange('emailNotifications', !settings.emailNotifications)}
                />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                  <p className="text-sm text-gray-500">Get notified on your device</p>
                </div>
                <ToggleSwitch
                  enabled={settings.pushNotifications}
                  onChange={() => handleInputChange('pushNotifications', !settings.pushNotifications)}
                />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Expense Updates</h3>
                  <p className="text-sm text-gray-500">Notifications for expense changes</p>
                </div>
                <ToggleSwitch
                  enabled={settings.expenseUpdates}
                  onChange={() => handleInputChange('expenseUpdates', !settings.expenseUpdates)}
                />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Group Invites</h3>
                  <p className="text-sm text-gray-500">Notifications for group invitations</p>
                </div>
                <ToggleSwitch
                  enabled={settings.groupInvites}
                  onChange={() => handleInputChange('groupInvites', !settings.groupInvites)}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={handleSave}
              className="flex-1 bg-amber-400 hover:bg-amber-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Save className="h-5 w-5" />
              <span>Save Changes</span>
            </button>
            
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="flex-1 sm:flex-none bg-red-100 hover:bg-red-200 text-red-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Trash2 className="h-5 w-5" />
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Account</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete your account? This action cannot be undone.</p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save Toast */}
      {showSaveToast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-slide-up">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Settings saved successfully!</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UserSettings;