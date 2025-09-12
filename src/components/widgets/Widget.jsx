import React from 'react';
import { X } from 'lucide-react';
import DonutChart from './DonutChart';
import ProgressBar from './ProgressBar';
import EmptyChart from './EmptyChart';

const Widget = ({ widget, categoryId, onRemove, className = "" }) => {
  const renderWidgetContent = () => {
    switch (widget.type) {
      case 'donut':
        return <DonutChart data={widget.content} />;
      case 'progress':
        return <ProgressBar data={widget.content} />;
      case 'empty-chart':
        return <EmptyChart message={widget.content.message} />;
      case 'custom':
        return (
          <div className="flex items-center justify-center h-32 text-gray-600 text-sm">
            {widget.content.text || 'Custom Widget Content'}
          </div>
        );
      default:
        return <div className="p-4 text-gray-500">Unknown widget type</div>;
    }
  };

  return (
    <div className={`bg-white rounded-lg border border-gray-200 relative group hover:shadow-md transition-shadow ${className}`}>
      {/* Remove Button */}
      <button
        onClick={() => onRemove(categoryId, widget.id)}
        className="absolute top-2 right-2 w-6 h-6 bg-white border border-gray-300 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 z-10"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>

      {/* Widget Header */}
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-900 pr-8">{widget.name}</h3>
      </div>

      {/* Widget Content */}
      <div className="p-4">
        {renderWidgetContent()}
      </div>
    </div>
  );
};

export default Widget;
