import React from 'react';

const DonutChart = ({ data }) => {
  // For Cloud Accounts widget
  if (data.connected !== undefined) {
    return (
      <div className="flex items-center space-x-6">
        {/* Donut Chart SVG */}
        <div className="relative">
          <svg width="120" height="120" className="transform -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="#3b82f6"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(data.connected / data.total) * 283} 283`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{data.total}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Connected ({data.connected})</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-700">Not Connected ({data.notConnected})</span>
          </div>
        </div>
      </div>
    );
  }

  // For Risk Assessment widget
  if (data.failed !== undefined) {
    const segments = [
      { label: 'Failed', value: data.failed, color: '#ef4444' },
      { label: 'Warning', value: data.warning, color: '#f59e0b' },
      { label: 'Not available', value: data.notAvailable, color: '#9ca3af' },
      { label: 'Passed', value: data.passed, color: '#10b981' }
    ];

    let currentAngle = 0;
    const radius = 45;
    const centerX = 60;
    const centerY = 60;

    return (
      <div className="flex items-center space-x-6">
        {/* Donut Chart SVG */}
        <div className="relative">
          <svg width="120" height="120" className="transform -rotate-90">
            {segments.map((segment, index) => {
              const angle = (segment.value / data.total) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              
              // Convert angles to radians
              const startRadian = (startAngle - 90) * (Math.PI / 180);
              const endRadian = (endAngle - 90) * (Math.PI / 180);
              
              // Calculate arc path
              const x1 = centerX + radius * Math.cos(startRadian);
              const y1 = centerY + radius * Math.sin(startRadian);
              const x2 = centerX + radius * Math.cos(endRadian);
              const y2 = centerY + radius * Math.sin(endRadian);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const pathData = [
                `M ${centerX} ${centerY}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');

              currentAngle += angle;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={segment.color}
                  className="hover:opacity-80 transition-opacity"
                />
              );
            })}
            
            {/* Inner circle to create donut effect */}
            <circle cx="60" cy="60" r="25" fill="white" />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{data.total}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-1.5">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="text-sm text-gray-700">
                {segment.label} ({segment.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div className="text-gray-500 text-sm">No data available</div>;
};

export default DonutChart;

