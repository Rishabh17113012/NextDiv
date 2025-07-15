import React, { useState } from 'react';
import { Plus, Users, Settings, LogOut, X, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../Navbar';

const Dashboard = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Weekend Trip",
      members: 4,
      balance: 2500,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: "🏖️"
    },
    {
      id: 2,
      name: "Roommates",
      members: 3,
      balance: -1200,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      icon: "🏠"
    },
    {
      id: 3,
      name: "Office Lunch",
      members: 8,
      balance: 850,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      icon: "🍽️"
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('🏠');

  const icons = ['🏠', '🏖️', '🍽️', '🚗', '🎉', '💡', '🎯', '🏃'];

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      const newGroup = {
        id: groups.length + 1,
        name: newGroupName,
        members: 1,
        balance: 0,
        color: "bg-gradient-to-br from-amber-400 to-amber-600",
        icon: selectedIcon
      };
      setGroups([...groups, newGroup]);
      setNewGroupName('');
      setSelectedIcon('🏠');
      setShowCreateModal(false);
    }
  };

  const GroupCard = ({ group }) => (
    <div className="group relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl border border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${group.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}>
            {group.icon}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {group.members}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
          {group.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Your balance</div>
          <div className={`text-lg font-bold ${group.balance >= 0 ? 'text-green-600' : 'text-red-500'}`}>
            {group.balance >= 0 ? '+' : ''}₹{Math.abs(group.balance).toLocaleString()}
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View details <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-20">
      <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
        <Sparkles className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to SplitWise</h2>
      <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
        Start managing your shared expenses effortlessly. Create your first group to begin splitting costs with friends.
      </p>
      <button
        onClick={() => setShowCreateModal(true)}
        className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Create Your First Group
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <Navbar/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Groups</h2>
          <p className="text-gray-600">Manage and track expenses across all your groups</p>
        </div>

        {groups.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        )}
      </main>

      {/* Floating Create Button */}
      {groups.length > 0 && (
        <button
          onClick={() => setShowCreateModal(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-400 to-amber-600 text-white p-4 rounded-full shadow-2xl hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <Plus className="w-6 h-6" />
        </button>
      )}

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Create New Group</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Enter group name"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 bg-white/50 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose Icon</label>
                <div className="grid grid-cols-4 gap-3">
                  {icons.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => setSelectedIcon(icon)}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all ${
                        selectedIcon === icon
                          ? 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg scale-110'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-3 rounded-2xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                className="flex-1 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-white font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;