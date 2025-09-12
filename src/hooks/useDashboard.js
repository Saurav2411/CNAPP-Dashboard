import { useState } from 'react';
import { initialDashboardData } from '../data/dashboardData';

export const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddWidget, setShowAddWidget] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get all widgets for search functionality
  const getAllWidgets = () => {
    const allWidgets = [];
    dashboardData.categories.forEach(category => {
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

  // Filter widgets based on search term
  const getFilteredWidgets = () => {
    if (!searchTerm.trim()) return null;
    
    return getAllWidgets().filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof widget.content === 'string' && widget.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (typeof widget.content === 'object' && widget.content.text?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Add widget to category
  const addWidget = (categoryId, widget) => {
    const updatedData = { ...dashboardData };
    const category = updatedData.categories.find(cat => cat.id === categoryId);
    
    if (category) {
      // Check if widget already exists
      const existingWidget = category.widgets.find(w => w.id === widget.id);
      if (!existingWidget) {
        category.widgets.push(widget);
        setDashboardData(updatedData);
      }
    }
  };

  // Remove widget from category
  const removeWidget = (categoryId, widgetId) => {
    const updatedData = { ...dashboardData };
    const category = updatedData.categories.find(cat => cat.id === categoryId);
    
    if (category) {
      category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      setDashboardData(updatedData);
    }
  };

  // Toggle widget selection in modal
  const toggleWidget = (categoryId, widgetId, widget) => {
    // This is handled in the modal component for selection state
    // The actual adding happens when modal is confirmed
  };

  // Open add widget modal for specific category
  const openAddWidget = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowAddWidget(true);
  };

  // Close add widget modal
  const closeAddWidget = () => {
    setShowAddWidget(false);
    setSelectedCategory('');
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return {
    // State
    dashboardData,
    searchTerm,
    showAddWidget,
    selectedCategory,
    
    // Computed values
    filteredWidgets: getFilteredWidgets(),
    
    // Actions
    addWidget,
    removeWidget,
    toggleWidget,
    openAddWidget,
    closeAddWidget,
    handleSearch
  };
};
