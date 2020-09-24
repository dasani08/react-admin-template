export const routeConfig = {
  // ROUTES FOR DASHBOARD MODULE
  DASHBOARD: '/dashboard', // for route sub page
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  FORGOT_PASSWORD: '/forgot-password',
  ACCOUNT_SELECTION: '/account-selection',
  SIGNUP_CONFIRMATION: '/signup-confirmation',
  // ROUTES FOR COMPANY MODULE
  ANWORK: '/dashboard/ANwork',
  COMPANY: '/company',
  COMPANY_DETAILS: '/company/company-details',
  COMPANY_PARTNER_DETAIL: '/company/company-details/:companyId',
  COMPANY_HIERARCHY: '/company/company-hierarchy',
  COMPANY_ACCOUNTS: '/company/company-accounts',
  COMPANY_ANWORK: '/company/anwork',
  COMPANY_ANWORK_LOAD_BOARD: '/company/anwork/load-board',
  COMPANY_ANWORK_MOBILE: '/company/anwork/mobile',
  COMPANY_ANWORK_HEALTH_CHECK: '/company/anwork/health-check',
  COMPANY_ANWORK_ATTENDANCE: '/company/anwork/attendance',
  COMPANY_ANWORK_CREW: '/company/anwork/crew-scheduling',
  COMPANY_SERVICES: '/company/services',
  COMPANY_SERVICE_AREA: '/company/services/service-area',
  COMPANY_ASSETS: '/company/assets',
  COMPANY_ASSETS_EQUIPMENT: '/company/assets/equipment',
  COMPANY_ASSETS_EQUIPMENT_EDIT:
    '/company/assets/equipment-:equipmentType/:id/edit',
  COMPANY_RESOURCES_DOCUMENT: '/company/resources-documents',
  COMPANY_ROLE: '/company/role',
  COMPANY_LOCATIONS: '/company/locations',
  COMPANY_LOCATIONS_PORT: '/company/locations/port-locations',
  COMPANY_LOCATIONS_YARD: '/company/locations/yard-locations',
  COMPANY_LOCATIONS_TERMINAL: '/company/locations/terminal-locations',
  COMPANY_ACCOUNtS: '/company/accounts',
  COMPANY_NEW_ACCOUNT: '/company/company-accounts/new-account',
  COMPANY_ACCOUNT_DETAIL: '/company/account-detail/:id',
  COMPANY_APPROVE: '/company/company-approve',
  COMPANY_APPROVE_DETAIL: '/company/company-approve/:companyId',
  COMPANY_ACCOUNT_APPROVE:
    '/company/company-approve/:companyId/account/:accountId',
  COMPANY_APPROVE_PARTNERS:
    '/company/company-approve/:companyId/company-partners',
  COMPANY_APPROVE_NEW_COMPANY: '/company/company-approve/new-company',

  // ROUTES FOR CONTRACT MODULE
  CONTRACTS: '/contracts',
  CONTRACT_RATE: '/contracts/:contractId/rate/:rateId',
  CONTRACT_RATES: '/contracts/:contractId/rate',
  CONTRACT_NEW: '/contracts/new-contract/:contractTypeId',
  CONTRACTS_NEW: '/contracts/new-contracts',
  CONTRACT_HISTORY: '/contracts/contract-history',
  RATE_CARD_NEW: '/contracts/:contractId/new-rate-card/:rateCardTypeId',
  // ROUTES FOR MESSAGES MODULE
  MESSAGES: '/messages',
  MESSAGES_ALL: '/messages/all',
  MESSAGES_CRITICAL: '/messages/critical',
  MESSAGES_CHANNELS: '/messages/channels',
  // SETTING
  SETTINGS: '/settings',
  SETTINGS_ACCESS_MANAGEMENT: '/settings/access',
  SETTINGS_USER: '/settings/access/users',
  SETTINGS_GROUPS: '/settings/access/groups',
  SETTINGS_ROLES: '/settings/access/roles',
  SETTINGS_DEPARTMENTS: '/settings/access/departments',
  SETTINGS_PROFILE: '/settings/profile',
  SETTINGS_NOTIFICATIONS: '/settings/notifications',
  SETTINGS_CONFIGURATION: '/settings/configuration',
  // PROFILE
  PROFILE: '/profile',
  // ADMIN
  ADMIN: '/admin',
  USER_MANAGEMENT: '/admin/user-management',
  USER_MANAGEMENT_NEW: '/admin/user-management/new',
  USER_MANAGEMENT_DETAIL: '/admin/user-management/:userId',
  COMPANY_MANAGEMENT: '/admin/company-management',
  COMPANY_MANAGEMENT_DETAIL: '/admin/company-management/:companyId',
  COMPANY_MANAGEMENT_ACCOUNT_DETAIL:
    '/admin/company-management/:companyId/account/:accountId',
  ACCOUNT_MANAGEMENT: '/admin/account-management',
  ACCOUNT_MANAGEMENT_DETAIL: '/admin/account-management/:accountId',
  CONTRACT_MANAGEMENT: '/admin/contract-management'
};
