
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import WidgetSelector from './WidgetSelector';

const AddWidgetModal = ({ 
  isOpen, 
  onClose, 
  categories, 
  selectedCategory,
  onAddWidget,
  onToggleWidget
}) => {
  const [activeTab, setActiveTab] = useState('CSPM');
  const [newWidgetForm, setNewWidgetForm] = useState({
    name: '',
    content: ''
  });

  // Tab configuration
  const tabs = [
    { id: 'CSPM', label: 'CSPM' },
    { id: 'CWPP', label: 'CWPP' },
    { id: 'Image', label: 'Image' },
    { id: 'Ticket', label: 'Ticket' }
  ];

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setNewWidgetForm({ name: '', content: '' });
    }
  }, [isOpen]);

  const handleAddCustomWidget = () => {
    if (newWidgetForm.name.trim() && newWidgetForm.content.trim()) {
      const customWidget = {
        id: `custom-${Date.now()}`,
        name: newWidgetForm.name,
        content: { text: newWidgetForm.content },
        type: 'custom'
      };
      
      onAddWidget(selectedCategory, customWidget);
      setNewWidgetForm({ name: '', content: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white h-full w-96 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Description */}
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-sm text-gray-600">
              Personalise your dashboard by adding the following widget
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Widget Selection */}
          <div className="p-6">
            <WidgetSelector
              categories={categories}
              selectedCategory={selectedCategory}
              onToggleWidget={onToggleWidget}
            />
          </div>

          {/* Add Custom Widget Form */}
          <div className="px-6 pb-6">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Add Custom Widget</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Widget Name
                  </label>
                  <input
                    type="text"
                    value={newWidgetForm.name}
                    onChange={(e) => setNewWidgetForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter widget name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Widget Content
                  </label>
                  <textarea
                    value={newWidgetForm.content}
                    onChange={(e) => setNewWidgetForm(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Enter widget content"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>
                
                <button
                  onClick={handleAddCustomWidget}
                  disabled={!newWidgetForm.name.trim() || !newWidgetForm.content.trim()}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Add Custom Widget
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
