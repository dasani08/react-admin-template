import { routeConfig } from './route';

const dashboardMenuItems = [
  {
    icon: 'people',
    title: 'Dashboard',
    to: '/dashboard',
    permission: 'anwork.*'
  },
  {
    icon: 'sys-admin',
    title: 'System Administrator',
    to: routeConfig.ADMIN,
    additionalCondition: (user) => user.isSystemAdmin
  }
];

const adminMenus = {
  module: 'admin',
  menus: [
    {
      icon: 'overview',
      title: 'Company Management',
      to: routeConfig.COMPANY_MANAGEMENT
    },
    {
      icon: 'overview',
      title: 'Account Management',
      to: routeConfig.ACCOUNT_MANAGEMENT
    },
    {
      icon: 'overview',
      title: 'User Management',
      to: routeConfig.USER_MANAGEMENT
    }
  ]
};

export const sidebarConfig = [
  {
    module: 'dashboard',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'orders',
    menus: [
      {
        icon: 'right-arrow',
        title: 'Shipment Entry',
        size: 10,
        to: routeConfig.ORDERS_ENTRY,
        permission: 'order.*'
      },
      {
        icon: 'all',
        title: 'View Shipments',
        size: 10,
        to: routeConfig.ORDERS_LIST,
        permission: 'order.*'
      },
      {
        icon: 'right-arrow',
        title: 'PO Entry',
        size: 10,
        to: routeConfig.ORDERS_PO_ENTRY,
        permission: 'order.*'
      },
      {
        icon: 'right-arrow',
        title: "View PO's",
        size: 10,
        to: routeConfig.ORDERS_PO,
        permission: 'order.*'
      },
      {
        icon: 'all',
        title: 'Integrated Shipments',
        size: 10,
        to: routeConfig.ORDERS_MANAGEMENT,
        permission: 'order.*'
      }
    ]
  },
  {
    module: 'company',
    menus: [
      {
        icon: 'sys-admin',
        title: 'My Company',
        subMenus: [
          {
            icon: 'all',
            title: 'Company \xa0 Details',
            to: routeConfig.COMPANY_DETAILS
          },
          {
            icon: 'hierarchy',
            title: 'Company Hierarchy',
            to: routeConfig.COMPANY_HIERARCHY
          },
          {
            icon: 'nw-file',
            title: 'Resources & Documents',
            to: routeConfig.COMPANY_RESOURCES_DOCUMENT
          },
          {
            icon: 'nw-file',
            title: 'Company Accounts',
            to: routeConfig.COMPANY_ACCOUNTS
          }
        ]
      },
      {
        icon: 'settings',
        title: 'Services',
        to: routeConfig.COMPANY_SERVICES,
        subMenus: [
          {
            icon: 'all',
            title: 'Service Area',
            to: routeConfig.COMPANY_SERVICE_AREA
          }
        ]
      },
      {
        icon: 'shape',
        title: 'Assets',
        to: routeConfig.COMPANY_ASSETS,
        subMenus: [
          {
            icon: 'all',
            title: 'Equipment',
            to: routeConfig.COMPANY_ASSETS_EQUIPMENT
          }
        ]
      },
      {
        icon: 'people',
        title: 'ANwork',
        subMenus: [
          {
            icon: 'all',
            title: 'Load Board',
            to: routeConfig.COMPANY_ANWORK_LOAD_BOARD
          },
          {
            icon: 'shape',
            title: 'Mobile',
            to: routeConfig.COMPANY_ANWORK_MOBILE
          }
        ]
      }
    ]
  },
  {
    module: 'contracts',
    menus: [
      {
        icon: 'nw-file',
        title: 'Contracts',
        subMenus: [
          {
            icon: 'all',
            title: 'All Contracts',
            to: routeConfig.CONTRACTS
          },
          {
            icon: 'plus',
            title: 'New Contracts',
            to: routeConfig.CONTRACTS_NEW
          },
          {
            icon: 'reload',
            title: 'Contract History',
            to: routeConfig.CONTRACT_HISTORY
          }
        ]
      }
    ]
  },
  {
    module: 'settings',
    menus: [
      {
        icon: 'key',
        title: 'Access Management',
        size: 8,
        subMenus: [
          {
            icon: 'people',
            title: 'Groups',
            to: routeConfig.SETTINGS_GROUPS
          },
          {
            icon: 'operations',
            title: 'Roles',
            to: routeConfig.SETTINGS_ROLES
          },
          {
            icon: 'operations',
            title: 'Department',
            to: routeConfig.SETTINGS_DEPARTMENTS
          }
        ]
      },
      {
        icon: 'archive',
        title: 'Profile',
        to: routeConfig.SETTINGS_PROFILE
      },
      {
        icon: 'bell',
        title: 'Notifications',
        to: routeConfig.SETTINGS_NOTIFICATIONS
      },
      {
        icon: 'settings',
        title: 'Configuration',
        to: routeConfig.SETTINGS_CONFIGURATION
      }
    ]
  },
  {
    module: 'messages',
    menus: [
      {
        icon: 'people',
        title: 'Critical Messages',
        to: routeConfig.MESSAGES_CRITICAL
      },
      {
        icon: 'people',
        title: 'All Messages',
        to: routeConfig.MESSAGES_ALL
      }
      // {
      //   icon: 'people',
      //   title: 'Channels',
      //   to: routeConfig.MESSAGES_CHANNELS
      // }
    ]
  },
  {
    module: 'asset-management',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'acquisition-management',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'asset-requirement-planning',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'integrated-shipping',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'route-asset-plans',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'port-management',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'customer-orders-manual',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'equipment-planning',
    menus: [
      {
        icon: 'operations',
        title: 'Equipment Planning',
        to: '/asset-management/equipment-planning'
      }
    ]
  },
  {
    module: 'route-timetable',
    menus: [
      {
        icon: 'operations',
        title: 'Route Timetable',
        to: '/asset-management/route-timetable'
      }
    ]
  },
  {
    module: 'maintenance-management',
    menus: [
      {
        icon: 'operations',
        title: 'Maintenance Management',
        to: '/asset-management/maintenance-management'
      }
    ]
  },
  {
    module: 'maintenance-schedule',
    menus: [
      {
        icon: 'operations',
        title: 'Maintenance Schedule',
        to: '/asset-management/maintenance-schedule'
      }
    ]
  },
  {
    module: 'staff-schedules',
    menus: [
      {
        icon: 'operations',
        title: 'Staff Schedules',
        to: '/asset-management/staff-schedules'
      }
    ]
  },
  {
    module: 'input-output-analysis',
    menus: [
      {
        icon: 'operations',
        title: 'Input/Output Analysis',
        to: '/asset-management/input-output-analysis'
      }
    ]
  },
  {
    module: 'internal-asset-audit',
    menus: [
      {
        icon: 'operations',
        title: 'Internal Asset Audit',
        to: '/asset-management/internal-asset-audit'
      }
    ]
  },
  {
    module: 'risk-management',
    menus: [
      {
        icon: 'operations',
        title: 'Risk Management',
        to: '/asset-management/risk-management'
      }
    ]
  },
  {
    module: 'external-rail',
    menus: [
      {
        icon: 'operations',
        title: 'External Rail Use Connected Rail Companies',
        to: '/asset-management/external-rail'
      }
    ]
  },
  {
    module: 'carbon-calculator',
    menus: [
      {
        icon: 'operations',
        title: 'Carbon Calculator',
        to: '/asset-management/carbon-calculator'
      }
    ]
  },
  {
    module: 'rail-master-capacity-plan',
    menus: [
      {
        icon: 'operations',
        title: 'Rail Master Capacity Plan',
        to: '/asset-management/rail-master-capacity-plan'
      }
    ]
  },
  {
    module: 'time-table-assessment',
    menus: [
      {
        icon: 'operations',
        title: 'Time Table Assessment',
        to: '/asset-management/time-table-assessment'
      }
    ]
  },
  {
    module: 'route-operational-plans',
    menus: [
      {
        icon: 'operations',
        title: 'Route Operational Plans',
        to: '/asset-management/route-operational-plans'
      }
    ]
  },
  {
    module: 'demand-management',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'road',
    menus: [
      {
        icon: 'people',
        title: 'ANwork',
        subMenus: [
          {
            icon: 'all',
            title: 'Load Board',
            to: routeConfig.COMPANY_ANWORK_LOAD_BOARD
          },
          {
            icon: 'shape',
            title: 'Mobile',
            to: routeConfig.COMPANY_ANWORK_MOBILE
          },
          {
            icon: 'all',
            title: 'Road',
            to: '/demand-management/road'
          },
          {
            icon: 'all',
            title: 'Create Loads for Bidding',
            to: routeConfig.ROAD_RATE_BOARD_ENTRY
          },
          {
            icon: 'all',
            title: 'Revenue',
            to: routeConfig.ROAD_REVENUE
          }
        ]
      }
    ]
  },
  {
    module: 'ocean-intermodal',
    menus: [
      {
        icon: 'all',
        title: 'Ocean Intermodal',
        to: '/demand-management/ocean-intermodal'
      }
    ]
  },
  {
    module: 'master-schedule',
    menus: [
      {
        icon: 'all',
        title: 'Master Schedule',
        to: '/demand-management/master-schedule'
      }
    ]
  },
  {
    module: 'dangerous-goods',
    menus: [
      {
        icon: 'all',
        title: 'Dangerous Goods',
        to: '/demand-management/dangerous-goods'
      }
    ]
  },
  {
    module: 'drayage-management',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'ocean-management',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'waybills',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'rail-delivery',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'revenue',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'edi',
    menus: [
      {
        icon: 'operations',
        title: 'EDI',
        to: '/edi'
      },
      {
        icon: 'operations',
        title: 'EDI Logs',
        to: '/edi/edi-logs'
      },
      {
        icon: 'operations',
        title: 'EDI Mapping',
        to: '/edi/edi-mapping'
      }
    ]
  },
  {
    module: 'bulk-shipping',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'bulk-vessel',
    menus: [
      {
        icon: 'operations',
        title: 'Bulk Vessel',
        to: '/bulk-vessel'
      }
    ]
  },
  {
    module: 'input-bulk-carunload',
    menus: [
      {
        icon: 'operations',
        title: 'Input Bulk CarUnload',
        to: '/input-bulk-carunload'
      }
    ]
  },
  {
    module: 'auto-yard-planning',
    menus: [...dashboardMenuItems]
  },
  {
    module: 'intermodal-yard-planning',
    menus: [...dashboardMenuItems]
  },
  adminMenus
];

export const topbarConfig = [
  {
    module: 'dashboard',
    menus: [
      {
        title: 'Dashboard',
        to: routeConfig.DASHBOARD
      }
    ]
  },
  {
    module: 'company',
    menus: [
      {
        title: 'My Company',
        to: routeConfig.COMPANY
      }
    ]
  },
  {
    module: 'messages',
    menus: [
      {
        title: 'Messages',
        to: routeConfig.MESSAGES
      }
    ]
  },
  {
    module: 'contracts',
    menus: [
      {
        title: 'Contracts',
        to: routeConfig.CONTRACTS
      }
    ]
  }
];
