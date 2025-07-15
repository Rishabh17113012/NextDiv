import React, { useState } from 'react';
import { ArrowLeft, Plus, Users, CreditCard, Activity, Settings, LogOut, Home, UserPlus, DollarSign, TrendingUp } from 'lucide-react';
import Navbar from '../Navbar';

// Mock data
const groupData = {
  id: 1,
  name: "Weekend Trip to Goa",
  members: [
    { id: 1, name: "Alex Johnson", avatar: "AJ", balance: 125.50 },
    { id: 2, name: "Sarah Chen", avatar: "SC", balance: -45.20 },
    { id: 3, name: "Mike Wilson", avatar: "MW", balance: -80.30 },
    { id: 4, name: "Emma Davis", avatar: "ED", balance: 0.00 }
  ],
  totalExpenses: 850.75,
  currency: "₹"
};

const expenses = [
  {
    id: 1,
    description: "Hotel booking",
    amount: 320.00,
    paidBy: "Alex Johnson",
    date: "2024-12-15",
    category: "Accommodation",
    splitBetween: ["Alex Johnson", "Sarah Chen", "Mike Wilson", "Emma Davis"]
  },
  {
    id: 2,
    description: "Dinner at beach restaurant",
    amount: 180.50,
    paidBy: "Sarah Chen",
    date: "2024-12-16",
    category: "Food",
    splitBetween: ["Alex Johnson", "Sarah Chen", "Mike Wilson"]
  },
  {
    id: 3,
    description: "Taxi to airport",
    amount: 85.25,
    paidBy: "Mike Wilson",
    date: "2024-12-17",
    category: "Transport",
    splitBetween: ["Alex Johnson", "Mike Wilson", "Emma Davis"]
  }
];

const activities = [
  {
    id: 1,
    type: "expense_added",
    description: "Alex added Hotel booking",
    amount: 320.00,
    timestamp: "2024-12-15T10:30:00Z"
  },
  {
    id: 2,
    type: "payment_made",
    description: "Sarah paid Mike ₹45.20",
    amount: 45.20,
    timestamp: "2024-12-16T14:15:00Z"
  },
  {
    id: 3,
    type: "expense_added",
    description: "Sarah added Dinner at beach restaurant",
    amount: 180.50,
    timestamp: "2024-12-16T20:45:00Z"
  }
];



// ExpenseList Component
const ExpenseList = ({ expenses }) => (
  <div className="space-y-4">
    {expenses.map((expense) => (
      <div key={expense.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-1">{expense.description}</h3>
            <p className="text-sm text-gray-600">Paid by {expense.paidBy}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-amber-600">{groupData.currency}{expense.amount}</p>
            <p className="text-sm text-gray-500">{expense.date}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
            {expense.category}
          </span>
          <p className="text-sm text-gray-600">
            Split between {expense.splitBetween.length} people
          </p>
        </div>
      </div>
    ))}
  </div>
);

// BalanceSummary Component
const BalanceSummary = ({ members }) => (
  <div className="space-y-4">
    {members.map((member) => (
      <div key={member.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
              {member.avatar}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">
                {member.balance > 0 ? 'Gets back' : member.balance < 0 ? 'Owes' : 'Settled up'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-lg font-bold ${
              member.balance > 0 ? 'text-green-600' : 
              member.balance < 0 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {member.balance !== 0 ? `${groupData.currency}${Math.abs(member.balance).toFixed(2)}` : 'Settled'}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ActivityFeed Component
const ActivityFeed = ({ activities }) => (
  <div className="space-y-4">
    {activities.map((activity) => (
      <div key={activity.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            {activity.type === 'expense_added' ? (
              <Plus className="w-5 h-5 text-white" />
            ) : activity.type === 'payment_made' ? (
              <CreditCard className="w-5 h-5 text-white" />
            ) : (
              <Activity className="w-5 h-5 text-white" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-gray-800 mb-1">{activity.description}</p>
            <p className="text-sm text-gray-600">
              {new Date(activity.timestamp).toLocaleDateString()} at {new Date(activity.timestamp).toLocaleTimeString()}
            </p>
          </div>
          {activity.amount && (
            <p className="text-lg font-semibold text-amber-600">
              {groupData.currency}{activity.amount}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

// Main GroupDetails Component
const GroupDetails = () => {
  const [activeTab, setActiveTab] = useState('expenses');
  const [showAddExpense, setShowAddExpense] = useState(false);

  const tabs = [
    { id: 'expenses', label: 'Expenses', icon: CreditCard },
    { id: 'balances', label: 'Balances', icon: TrendingUp },
    { id: 'activity', label: 'Activity', icon: Activity }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'expenses':
        return <ExpenseList expenses={expenses} />;
      case 'balances':
        return <BalanceSummary members={groupData.members} />;
      case 'activity':
        return <ActivityFeed activities={activities} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Groups</span>
        </button>

        {/* Group Header */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-amber-100 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{groupData.name}</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{groupData.members.length} members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span>Total: {groupData.currency}{groupData.totalExpenses}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Add Expense</span> 
              </button>

              {/* ADD EXPENSE LINK WITH EXPENSE FORM MODAL */}

              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-white border border-amber-200 transition-all duration-300 flex items-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Add Member</span>
              </button>
            </div>
          </div>
        </div>

        {/* Members Display */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-amber-100 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Group Members</h2>
          <div className="flex flex-wrap gap-3">
            {groupData.members.map((member) => (
              <div key={member.id} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-amber-100">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {member.avatar}
                </div>
                <span className="text-gray-800 font-medium">{member.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-amber-100 shadow-lg overflow-hidden">
          <div className="flex border-b border-amber-100">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;