import React, { useState, useEffect } from 'react';
import { Users, ArrowRight, Shield, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

// Mock data for demo
const mockGroups = {
  'abc123': {
    name: 'Weekend Trip Squad',
    memberCount: 8,
    creator: 'Sarah Johnson',
    description: 'Splitting costs for our amazing weekend getaway'
  },
  'def456': {
    name: 'Office Lunch Group',
    memberCount: 12,
    creator: 'Mike Chen',
    description: 'Daily lunch orders and team events'
  },
  'ghi789': {
    name: 'Roommate Expenses',
    memberCount: 4,
    creator: 'Alex Rivera',
    description: 'Shared apartment costs and utilities'
  }
};

const InvitePage = () => {
  const [token, setToken] = useState('abc123');
  const [isLoading, setIsLoading] = useState(true);
  const [groupData, setGroupData] = useState(null);
  const [isJoining, setIsJoining] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDemoControls, setShowDemoControls] = useState(true); // Toggle for demo mode

  // Simulate navigation - you'd use useNavigate() from react-router-dom
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    // In real app: navigate(path);
  };

  useEffect(() => {
    // Simulate API call to validate token
    const validateToken = async () => {
      setIsLoading(true);
      setGroupData(null);
      setShowSuccess(false);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mockGroups[token]) {
        setGroupData(mockGroups[token]);
      }
      
      setIsLoading(false);
    };

    validateToken();
  }, [token]);

  const handleJoinGroup = async () => {
    setIsJoining(true);
    
    // Simulate joining process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsJoining(false);
    setShowSuccess(true);
    
    // Redirect to dashboard after success
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const handleTokenChange = (newToken) => {
    setToken(newToken);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-center">Validating invite...</p>
        </div>
      </div>
    );
  }

  if (!groupData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Invalid Invite</h1>
            <p className="text-gray-600 mb-8">
              This invitation link is invalid or has expired. Please request a new invitation from your group admin.
            </p>
            
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Go to Homepage
            </button>
          </div>


        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Group!</h1>
            <p className="text-gray-600 mb-4">
              You've successfully joined <strong>{groupData.name}</strong>
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to dashboard...
            </p>
          </div>


        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Navbar/>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="max-w-lg w-full">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            
            {/* Icon and Title */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                You're Invited!
              </h1>
              <p className="text-gray-600">
                Join your friends and start splitting expenses together
              </p>
            </div>

            {/* Group Info Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {groupData.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    {groupData.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{groupData.memberCount} members</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>Created by {groupData.creator}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">Track shared expenses easily</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">Settle up with friends automatically</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">Keep everyone on the same page</span>
              </div>
            </div>

            {/* Join Button */}
            <button
              onClick={handleJoinGroup}
              disabled={isJoining}
              className={`w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 ${
                isJoining ? 'opacity-75 cursor-not-allowed' : 'hover:from-amber-600 hover:to-orange-600'
              }`}
            >
              {isJoining ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Joining Group...</span>
                </>
              ) : (
                <>
                  <span>Join Group</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-xs text-gray-500">
                By joining, you agree to our{' '}
                <a href="#" className="text-amber-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-amber-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* Demo Controls - Only show in main invite state */}
          {showDemoControls && (
            <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Demo Controls</h3>
                <button
                  onClick={() => setShowDemoControls(false)}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Hide
                </button>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-gray-600">
                  Current token: <code className="bg-gray-100 px-2 py-1 rounded text-green-600">{token}</code>
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  Click buttons to test different invite tokens:
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleTokenChange('abc123')}
                    className={`text-xs px-3 py-1 rounded transition-colors ${
                      token === 'abc123' 
                        ? 'bg-amber-200 text-amber-800' 
                        : 'bg-green-100 hover:bg-green-200 text-green-700'
                    }`}
                  >
                    abc123 (Weekend Trip)
                  </button>
                  <button
                    onClick={() => handleTokenChange('def456')}
                    className={`text-xs px-3 py-1 rounded transition-colors ${
                      token === 'def456' 
                        ? 'bg-amber-200 text-amber-800' 
                        : 'bg-green-100 hover:bg-green-200 text-green-700'
                    }`}
                  >
                    def456 (Office Lunch)
                  </button>
                  <button
                    onClick={() => handleTokenChange('ghi789')}
                    className={`text-xs px-3 py-1 rounded transition-colors ${
                      token === 'ghi789' 
                        ? 'bg-amber-200 text-amber-800' 
                        : 'bg-green-100 hover:bg-green-200 text-green-700'
                    }`}
                  >
                    ghi789 (Roommates)
                  </button>
                  <button
                    onClick={() => handleTokenChange('invalid')}
                    className={`text-xs px-3 py-1 rounded transition-colors ${
                      token === 'invalid' 
                        ? 'bg-red-200 text-red-800' 
                        : 'bg-red-100 hover:bg-red-200 text-red-700'
                    }`}
                  >
                    invalid (Error)
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Show Demo Controls toggle when hidden */}
          {!showDemoControls && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowDemoControls(true)}
                className="text-xs text-gray-500 hover:text-gray-700 bg-white/30 px-3 py-2 rounded-lg"
              >
                Show Demo Controls
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InvitePage;