import React from 'react';

const ProgressBar = ({ data }) => {
  const { total, totalText, critical, high } = data;
  
  // Calculate percentages
  const criticalPercent = (critical / total) * 100;
  const highPercent = (high / total) * 100;
  const remainingPercent = 100 - criticalPercent - highPercent;

  return (
    <div className="space-y-4">
      {/* Total Count */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-gray-900">{total}</span>
        <span className="text-sm text-gray-600">{totalText}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          {/* Critical segment */}
          <div
            className="bg-red-500 h-full"
            style={{ width: `${criticalPercent}%` }}
          ></div>
          {/* High segment */}
          <div
            className="bg-orange-400 h-full"
            style={{ width: `${highPercent}%` }}
          ></div>
          {/* Medium/Low segment */}
          <div
            className="bg-yellow-300 h-full"
            style={{ width: `${remainingPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-700">Critical ({critical})</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <span className="text-xs text-gray-700">High ({high})</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
