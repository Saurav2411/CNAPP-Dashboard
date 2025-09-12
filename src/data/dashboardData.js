export const initialDashboardData = {
  categories: [
    {
      id: 'cspm-executive',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'cloud-accounts',
          name: 'Cloud Accounts',
          content: {
            total: 2,
            connected: 2,
            notConnected: 2
          },
          type: 'donut'
        },
        {
          id: 'risk-assessment',
          name: 'Cloud Account Risk Assessment',
          content: {
            total: 9659,
            failed: 1689,
            warning: 681,
            notAvailable: 36,
            passed: 7253
          },
          type: 'donut'
        }
      ]
    },
    {
      id: 'cwpp-dashboard',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'namespace-alerts',
          name: 'Top 5 Namespace Specific Alerts',
          content: {
            message: 'No Graph data available!'
          },
          type: 'empty-chart'
        },
        {
          id: 'workload-alerts',
          name: 'Workload Alerts',
          content: {
            message: 'No Graph data available!'
          },
          type: 'empty-chart'
        }
      ]
    },
    {
      id: 'registry-scan',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'image-risk',
          name: 'Image Risk Assessment',
          content: {
            total: 1470,
            totalText: 'Total Vulnerabilities',
            critical: 9,
            high: 160
          },
          type: 'progress'
        },
        {
          id: 'image-security',
          name: 'Image Security Issues',
          content: {
            total: 2,
            totalText: 'Total Images',
            critical: 2,
            high: 2
          },
          type: 'progress'
        }
      ]
    }
  ]
};

// Available widget types for adding new widgets
export const widgetTypes = [
  { id: 'donut', name: 'Donut Chart', icon: '📊' },
  { id: 'progress', name: 'Progress Bar', icon: '📈' },
  { id: 'empty-chart', name: 'Chart Placeholder', icon: '📉' },
  { id: 'custom', name: 'Custom Widget', icon: '⚙️' }
];
