import React from 'react';
import { BarChart3 } from 'lucide-react';

const EmptyChart = ({ message = "No Graph data available!" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-32 text-gray-400">
      {/* Chart Icon */}
      <div className="mb-3">
        <BarChart3 className="w-12 h-12 text-gray-300" />
      </div>
      
      {/* Message */}
      <p className="text-sm text-gray-500 text-center font-medium">
        {message}
      </p>
    </div>
  );
};

export default EmptyChart;


