import React from 'react';
import Widget from '../widgets/Widget';
import AddWidgetButton from './AddWidgetButton';

const CategorySection = ({ 
  category, 
  onRemoveWidget, 
  onAddWidget, 
  filteredWidgets = null 
}) => {
  // If we have filtered widgets, only show widgets that match the search
  const widgetsToShow = filteredWidgets 
    ? category.widgets.filter(widget => 
        filteredWidgets.some(fw => fw.id === widget.id && fw.categoryId === category.id)
      )
    : category.widgets;

  return (
    <div className="mb-8">
      {/* Category Title */}
      <div className="mb-4">
        <h2 className="text-base font-semibold text-gray-900">{category.name}</h2>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render Widgets */}
        {widgetsToShow.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            onRemove={onRemoveWidget}
            className="h-64"
          />
        ))}

        {/* Add Widget Button - only show if not filtering */}
        {!filteredWidgets && (
          <AddWidgetButton
            categoryId={category.id}
            onAddWidget={onAddWidget}
            className="h-64"
          />
        )}
      </div>

      {/* Empty State for Filtered Results */}
      {filteredWidgets && widgetsToShow.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">No widgets found in {category.name}</p>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
