import React from 'react';
import { useDashboard } from '../../hooks/useDashboard';
import Header from '../common/Header';
import CategorySection from './CategorySection';
import AddWidgetModal from '../models/AddWidgetModel';

const Dashboard = () => {
  const {
    dashboardData,
    searchTerm,
    showAddWidget,
    selectedCategory,
    filteredWidgets,
    addWidget,
    removeWidget,
    toggleWidget,
    openAddWidget,
    closeAddWidget,
    handleSearch
  } = useDashboard();

  // Filter categories that have matching widgets when searching
  const getVisibleCategories = () => {
    if (!filteredWidgets) {
      return dashboardData.categories;
    }
    
    // Only show categories that have widgets matching the search
    return dashboardData.categories.filter(category =>
      filteredWidgets.some(widget => widget.categoryId === category.id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onSearch={handleSearch} searchTerm={searchTerm} />
      
      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Search Results Info */}
        {filteredWidgets && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              Found {filteredWidgets.length} widget{filteredWidgets.length !== 1 ? 's' : ''} 
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Categories */}
        {getVisibleCategories().length > 0 ? (
          getVisibleCategories().map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              onRemoveWidget={removeWidget}
              onAddWidget={openAddWidget}
              filteredWidgets={filteredWidgets}
            />
          ))
        ) : (
          // No results state
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 01-2.343 5.657l-.707-.707-.707.707A8 8 0 016 12a7.962 7.962 0 011-3.709m0 11.418A8 8 0 018 21a8 8 0 01-1-3.709" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No widgets found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm 
                ? `No widgets match "${searchTerm}". Try a different search term.`
                : 'No widgets available to display.'
              }
            </p>
            {searchTerm && (
              <button
                onClick={() => handleSearch('')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>

      {/* Add Widget Modal */}
      <AddWidgetModal
        isOpen={showAddWidget}
        onClose={closeAddWidget}
        categories={dashboardData.categories}
        selectedCategory={selectedCategory}
        onAddWidget={addWidget}
        onToggleWidget={toggleWidget}
      />
    </div>
  );
};

export default Dashboard
