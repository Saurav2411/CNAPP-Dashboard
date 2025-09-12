
export const WIDGET_TYPES = {
  DONUT: 'donut',
  PROGRESS: 'progress',
  EMPTY_CHART: 'empty-chart',
  CUSTOM: 'custom'
};

export const CATEGORY_IDS = {
  CSPM_EXECUTIVE: 'cspm-executive',
  CWPP_DASHBOARD: 'cwpp-dashboard',
  REGISTRY_SCAN: 'registry-scan'
};

export const MODAL_TABS = [
  { id: 'CSPM', label: 'CSPM' },
  { id: 'CWPP', label: 'CWPP' },
  { id: 'Image', label: 'Image' },
  { id: 'Ticket', label: 'Ticket' }
];

// Color schemes for different chart types
export const CHART_COLORS = {
  PRIMARY: '#3b82f6',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  DANGER: '#ef4444',
  SECONDARY: '#6b7280',
  LIGHT: '#e5e7eb'
};

// Widget grid configuration
export const GRID_CONFIG = {
  COLS: {
    SM: 1,
    MD: 2,
    LG: 3
  },
  GAP: 4,
  WIDGET_HEIGHT: 'h-64'
};

// Search configuration
export const SEARCH_CONFIG = {
  PLACEHOLDER: 'Search anything...',
  MIN_SEARCH_LENGTH: 1,
  DEBOUNCE_DELAY: 300
};

// Modal configuration
export const MODAL_CONFIG = {
  WIDTH: 'w-96',
  ANIMATION_DURATION: 200
};
