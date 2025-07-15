import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, DollarSign, Calendar, Award, Eye, EyeOff, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [showAmounts, setShowAmounts] = useState(true);

  // Dummy data for monthly spending
  const monthlyData = [
    { month: 'Jan', amount: 1250, expenses: 28 },
    { month: 'Feb', amount: 890, expenses: 22 },
    { month: 'Mar', amount: 1450, expenses: 35 },
    { month: 'Apr', amount: 1100, expenses: 24 },
    { month: 'May', amount: 1680, expenses: 42 },
    { month: 'Jun', amount: 1320, expenses: 31 }
  ];

  // Dummy data for expense categories
  const categoryData = [
    { name: 'Food & Dining', value: 2845, color: '#f59e0b' },
    { name: 'Transportation', value: 1230, color: '#ef4444' },
    { name: 'Entertainment', value: 980, color: '#8b5cf6' },
    { name: 'Shopping', value: 1450, color: '#06b6d4' },
    { name: 'Utilities', value: 750, color: '#10b981' },
    { name: 'Others', value: 435, color: '#6b7280' }
  ];

  // Dummy data for top spenders
  const topSpenders = [
    { name: 'Alex Johnson', amount: 2340, avatar: '👨‍💼', change: '+12%' },
    { name: 'Sarah Chen', amount: 1890, avatar: '👩‍💻', change: '+8%' },
    { name: 'Mike Wilson', amount: 1650, avatar: '👨‍🎨', change: '-5%' },
    { name: 'Emma Davis', amount: 1420, avatar: '👩‍🔬', change: '+15%' },
    { name: 'Chris Brown', amount: 1200, avatar: '👨‍🚀', change: '+3%' }
  ];

  const formatCurrency = (amount) => showAmounts ? `₹${amount.toLocaleString()}` : '***';

  const StatCard = ({ title, value, icon: Icon, change, color = 'text-amber-500' }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color === 'text-amber-500' ? 'bg-amber-50' : color === 'text-green-500' ? 'bg-green-50' : 'bg-blue-50'}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        {change && (
          <span className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navbar/>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
          <p className="text-gray-600">Track your spending patterns and get insights to make better financial decisions</p>
        </div>

        {/* Time Range Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Time Range:</label>
            <div className="relative">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="appearance-none bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="3months">Last 3 months</option>
                <option value="6months">Last 6 months</option>
                <option value="1year">Last year</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Spent"
            value={formatCurrency(7690)}
            icon={DollarSign}
            change="+12%"
          />
          <StatCard
            title="Active Groups"
            value="8"
            icon={Users}
            change="+2"
            color="text-blue-500"
          />
          <StatCard
            title="Avg. Monthly"
            value={formatCurrency(1282)}
            icon={Calendar}
            change="-3%"
            color="text-green-500"
          />
          <StatCard
            title="This Month"
            value={formatCurrency(1320)}
            icon={TrendingUp}
            change="+8%"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Spending Chart */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Spending Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value) => [formatCurrency(value), 'Amount']}
                />
                <Bar dataKey="amount" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Pie Chart */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Expense Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value) => [formatCurrency(value), 'Amount']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className="text-sm text-gray-600 truncate">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Spenders Leaderboard */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Spenders This Month</h3>
            <Award className="w-6 h-6 text-amber-500" />
          </div>
          <div className="space-y-4">
            {topSpenders.map((spender, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="text-2xl">{spender.avatar}</div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{spender.name}</p>
                    <p className="text-sm text-gray-600">Active member</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatCurrency(spender.amount)}</p>
                  <p className={`text-sm ${spender.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {spender.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg">
            Export Report
          </button>
          <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors border border-white/20">
            Share Insights
          </button>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;