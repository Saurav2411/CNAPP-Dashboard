import React from 'react';
import { Plus } from 'lucide-react';

const AddWidgetButton = ({ categoryId, onAddWidget, className = "" }) => {
  return (
    <button
      onClick={() => onAddWidget(categoryId)}
      className={`border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-gray-500 hover:text-gray-600 group ${className}`}
    >
      <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-3 group-hover:border-gray-400 transition-colors">
        <Plus className="w-6 h-6" />
      </div>
      <span className="text-sm font-medium">Add Widget</span>
    </button>
  );
};

export default AddWidgetButton;

