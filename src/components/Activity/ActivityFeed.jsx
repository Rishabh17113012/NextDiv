import React from 'react';
import { User, IndianRupee, Check, Plus, Minus, Users, CreditCard } from 'lucide-react';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'expense_added',
      user: 'Alice',
      action: 'added',
      amount: 20,
      category: 'Dinner',
      timestamp: '2 hours ago',
      icon: Plus,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'settlement',
      user: 'Bob',
      action: 'settled',
      amount: 10,
      target: 'Carol',
      timestamp: '4 hours ago',
      icon: Check,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'group_created',
      user: 'David',
      action: 'created group',
      category: 'Weekend Trip',
      timestamp: '1 day ago',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'expense_added',
      user: 'Emma',
      action: 'added',
      amount: 45,
      category: 'Groceries',
      timestamp: '1 day ago',
      icon: Plus,
      color: 'text-green-500'
    },
    {
      id: 5,
      type: 'payment',
      user: 'Frank',
      action: 'paid',
      amount: 25,
      target: 'Alice',
      timestamp: '2 days ago',
      icon: CreditCard,
      color: 'text-amber-500'
    },
    {
      id: 6,
      type: 'expense_deleted',
      user: 'Grace',
      action: 'removed expense',
      category: 'Coffee',
      timestamp: '2 days ago',
      icon: Minus,
      color: 'text-red-500'
    },
    {
      id: 7,
      type: 'settlement',
      user: 'Henry',
      action: 'settled',
      amount: 30,
      target: 'David',
      timestamp: '3 days ago',
      icon: Check,
      color: 'text-blue-500'
    },
    {
      id: 8,
      type: 'expense_added',
      user: 'Iris',
      action: 'added',
      amount: 15,
      category: 'Transportation',
      timestamp: '3 days ago',
      icon: Plus,
      color: 'text-green-500'
    }
  ];

  const formatActivity = (activity) => {
    const { type, user, action, amount, category, target } = activity;
    
    switch (type) {
      case 'expense_added':
        return `${user} ${action} ₹${amount} for ${category}`;
      case 'settlement':
        return `${user} ${action} ₹${amount} with ${target}`;
      case 'payment':
        return `${user} ${action} ₹${amount} to ${target}`;
      case 'group_created':
        return `${user} ${action} "${category}"`;
      case 'expense_deleted':
        return `${user} ${action} "${category}"`;
      default:
        return `${user} performed an action`;
    }
  };

  const getActivityEmoji = (type) => {
    switch (type) {
      case 'expense_added':
        return '💰';
      case 'settlement':
        return '✅';
      case 'payment':
        return '💳';
      case 'group_created':
        return '👥';
      case 'expense_deleted':
        return '🗑️';
      default:
        return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Activity Feed</h1>
          <p className="text-gray-600">Stay updated on all group activities and transactions</p>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div 
                key={activity.id}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/20 hover:shadow-lg hover:bg-white/80 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-300`}>
                    <IconComponent className={`w-5 h-5 ${activity.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {formatActivity(activity)}
                      </p>
                      <span className="text-2xl ml-2 flex-shrink-0">
                        {getActivityEmoji(activity.type)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm text-gray-500">
                        {activity.timestamp}
                      </p>
                      
                      {activity.amount && (
                        <div className="flex items-center space-x-1">
                          <IndianRupee className="w-3 h-3 text-amber-500" />
                          <span className="text-sm font-semibold text-amber-600">
                            {activity.amount}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle divider line */}
                <div className="absolute bottom-0 left-16 right-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 active:scale-95">
            Load More Activities
          </button>
        </div>

        {/* Empty State (hidden when there are activities) */}
        {activities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">No activities yet</h3>
            <p className="text-gray-500">Activity will appear here as your group members add expenses and make payments</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ActivityFeed;