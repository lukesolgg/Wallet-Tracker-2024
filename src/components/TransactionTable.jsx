import React from 'react';
import moment from 'moment';

const TransactionTable = ({ transactions }) => (
  <div>
    <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
      <thead className="bg-gray-900">
        <tr>
          <th className="py-2 px-3 text-white text-center">Date</th>
          <th className="py-2 px-3 text-white text-center">Network</th>
          <th className="py-2 px-3 text-white text-center">Type</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index} className="border-t border-gray-800">
            <td className="py-2 px-3 text-white text-center">
              {moment(transaction.date).format('DD MMM YYYY')}
            </td>
            <td className="py-2 px-3 text-white text-center">{transaction.network}</td>
            <td className="py-2 px-3 text-white text-center">{transaction.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-2">
        <span className="text-white">1/53</span>
        <div className="border-l border-gray-600 h-6 mx-2"></div>
        <button className="text-white font-bold hover:text-purple-600 transition-colors duration-300">Prev</button>
        <button className="text-white font-bold hover:text-purple-600 transition-colors duration-300">Next</button>
      </div>
      <button className="text-white font-bold hover:text-purple-600 transition-colors duration-300">View All</button>
    </div>
  </div>
);

export default TransactionTable;