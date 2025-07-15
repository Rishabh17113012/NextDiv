import React, { useState } from 'react';
import { X, ArrowRight, User, IndianRupee, Check } from 'lucide-react';

const BalanceSummaryTable = () => {
  // Mock data - replace with API call
  const [groupMembers, setGroupMembers] = useState([
    { id: 1, name: 'Alex Johnson', avatar: 'AJ', balance: 45.50, owes: false },
    { id: 2, name: 'Sarah Chen', avatar: 'SC', balance: -23.75, owes: true },
    { id: 3, name: 'Mike Rodriguez', avatar: 'MR', balance: 12.25, owes: false },
    { id: 4, name: 'Emma Thompson', avatar: 'ET', balance: -18.90, owes: true },
    { id: 5, name: 'David Park', avatar: 'DP', balance: -15.10, owes: true }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNote, setPaymentNote] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Calculate totals
  const totalOwed = groupMembers.filter(m => m.owes).reduce((sum, m) => sum + Math.abs(m.balance), 0);
  const totalToReceive = groupMembers.filter(m => !m.owes).reduce((sum, m) => sum + m.balance, 0);

  const handleSettleUp = (member) => {
    setSelectedMember(member);
    setPaymentAmount(member.owes ? Math.abs(member.balance).toFixed(2) : '');
    setIsModalOpen(true);
  };

  const handlePayment = () => {
    if (!paymentAmount || parseFloat(paymentAmount) <= 0) return;

    // TODO: API call to record payment
    // await recordPayment(selectedMember.id, parseFloat(paymentAmount), paymentNote);
    
    // Update local state
    setGroupMembers(prev => prev.map(member => 
      member.id === selectedMember.id 
        ? { 
            ...member, 
            balance: member.owes 
              ? member.balance + parseFloat(paymentAmount)
              : member.balance - parseFloat(paymentAmount)
          }
        : member
    ));

    setIsModalOpen(false);
    setPaymentAmount('');
    setPaymentNote('');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const formatBalance = (balance) => {
    return Math.abs(balance).toFixed(2);
  };

  const getBalanceColor = (balance, owes) => {
    if (Math.abs(balance) < 0.01) return 'text-gray-500';
    return owes ? 'text-red-500' : 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Group Balances</h1>
              <p className="text-gray-600 mt-1">Track who owes what in your group</p>
            </div>
              <div className="flex gap-6 text-sm">
                <div className="text-center px-4 py-3 bg-red-50 rounded-xl border border-red-100">
                  <div className="text-red-600 font-semibold text-lg">₹{totalOwed.toFixed(2)}</div>
                  <div className="text-red-500 text-xs font-medium">Total Owed</div>
                </div>
                <div className="text-center px-4 py-3 bg-green-50 rounded-xl border border-green-100">
                  <div className="text-green-600 font-semibold text-lg">₹{totalToReceive.toFixed(2)}</div>
                  <div className="text-green-500 text-xs font-medium">To Receive</div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Balance Table */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80 border-b border-gray-200/50">
                <tr>
                  <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">Member</th>
                  <th className="text-right py-5 px-6 text-sm font-semibold text-gray-800">Balance</th>
                  <th className="text-right py-5 px-6 text-sm font-semibold text-gray-800">Status</th>
                  <th className="text-right py-5 px-6 text-sm font-semibold text-gray-800">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/30">
                {groupMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50/50 transition-all duration-200">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                          {member.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">Member</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className={`font-semibold text-lg ${getBalanceColor(member.balance, member.owes)}`}>
                        ₹{formatBalance(member.balance)}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                        Math.abs(member.balance) < 0.01
                          ? 'bg-gray-100 text-gray-700'
                          : member.owes
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-green-50 text-green-700 border border-green-200'
                      }`}>
                        {Math.abs(member.balance) < 0.01 ? 'Settled' : member.owes ? 'Owes' : 'Owed'}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      {Math.abs(member.balance) >= 0.01 && (
                        <button
                          onClick={() => handleSettleUp(member)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          <IndianRupee size={16} />
                          Settle Up
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Settle Up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Settle Up
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Member Info */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-medium">
                    {selectedMember?.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{selectedMember?.name}</div>
                    <div className="text-sm text-gray-500">Group Member</div>
                  </div>
                </div>

                {/* Current Balance */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Current Balance</span>
                    <span className={`font-semibold text-lg ${getBalanceColor(selectedMember?.balance, selectedMember?.owes)}`}>
                      {selectedMember?.owes ? 'Owes' : 'Owed'} ₹{formatBalance(selectedMember?.balance)}
                    </span>
                  </div>
                </div>

                {/* Payment Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-500 font-medium">₹</span>
                    </div>
                    <input
                      type="number"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                {/* Payment Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Note (Optional)
                  </label>
                  <textarea
                    value={paymentNote}
                    onChange={(e) => setPaymentNote(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none bg-gray-50 focus:bg-white transition-all duration-200"
                    rows="3"
                    placeholder="Add a note about this payment..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-4 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={!paymentAmount || parseFloat(paymentAmount) <= 0}
                    className="flex-1 px-6 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <Check size={16} />
                    Record Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-50 border border-green-400">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Check size={14} />
          </div>
          <span className="font-medium">Payment recorded successfully!</span>
        </div>
      )}
    </div>
  );
};

export default BalanceSummaryTable;