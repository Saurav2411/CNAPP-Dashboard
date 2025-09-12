import React, { useState } from 'react';

const WidgetSelector = ({ categories, selectedCategory, onToggleWidget }) => {
  const [selectedWidgets, setSelectedWidgets] = useState({});

  // Get all available widgets from all categories
  const getAllWidgets = () => {
    const allWidgets = [];
    categories.forEach(category => {
      category.widgets.forEach(widget => {
        allWidgets.push({
          ...widget,
          categoryId: category.id,
          categoryName: category.name
        });
      });
    });
    return allWidgets;
  };

  const handleWidgetToggle = (widgetId, categoryId, widget) => {
    const key = `${categoryId}-${widgetId}`;
    const newSelectedWidgets = { ...selectedWidgets };
    
    if (newSelectedWidgets[key]) {
      delete newSelectedWidgets[key];
    } else {
      newSelectedWidgets[key] = { ...widget, categoryId };
    }
    
    setSelectedWidgets(newSelectedWidgets);
    onToggleWidget(categoryId, widgetId, widget);
  };

  // Sample widgets that could be added (for demo purposes)
  const availableWidgets = [
    {
      id: 'widget-1',
      name: 'Cloud Security Overview',
      description: 'Overview of cloud security status',
      category: 'CSPM'
    },
    {
      id: 'widget-2', 
      name: 'Compliance Score',
      description: 'Current compliance score metrics',
      category: 'CSPM'
    },
    {
      id: 'widget-3',
      name: 'Runtime Threats',
      description: 'Active runtime threat detection',
      category: 'CWPP'
    },
    {
      id: 'widget-4',
      name: 'Container Vulnerabilities',
      description: 'Container security vulnerabilities',
      category: 'CWPP'
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-900">Available Widgets</h3>
      
      {/* Current Category Widgets */}
      <div className="space-y-2">
        {categories.find(cat => cat.id === selectedCategory)?.widgets.map((widget) => {
          const key = `${selectedCategory}-${widget.id}`;
          const isSelected = selectedWidgets[key];
          
          return (
            <div key={widget.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                id={key}
                checked={isSelected || false}
                onChange={() => handleWidgetToggle(widget.id, selectedCategory, widget)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="flex-1">
                <label 
                  htmlFor={key}
                  className="text-sm font-medium text-gray-900 cursor-pointer"
                >
                  {widget.name}
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  {widget.type} widget
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sample Additional Widgets */}
      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Suggested Widgets</h4>
        <div className="space-y-2">
          {availableWidgets.slice(0, 2).map((widget) => {
            const key = `suggested-${widget.id}`;
            const isSelected = selectedWidgets[key];
            
            return (
              <div key={widget.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  id={key}
                  checked={isSelected || false}
                  onChange={() => handleWidgetToggle(widget.id, selectedCategory, {
                    id: widget.id,
                    name: widget.name,
                    content: { text: widget.description },
                    type: 'custom'
                  })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div className="flex-1">
                  <label 
                    htmlFor={key}
                    className="text-sm font-medium text-gray-900 cursor-pointer"
                  >
                    {widget.name}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    {widget.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WidgetSelector;
