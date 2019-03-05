export interface ProductsDynamicStatusModel {
  Insights: { [key: string]: any };
  Intake: boolean;
  Search: { [key: string]: any };
  Jobs: { [key: string]: any };
  Sourced: { [key: string]: any };
  Campaigns: boolean;
  "Talent Network": boolean;
  Help: { [key: string]: any };
  Feed: boolean;
}

export interface ProductRoutesDevModel {
  "Recruiter Desktop": string;
  Insights: { [key: string]: string };
  Intake: { [key: string]: string };
  Search: { [key: string]: string };
  Jobs: { [key: string]: string };
  Sourced: { [key: string]: string };
  Campaigns: string;
  "Talent Network": string;
  Help: { [key: string]: string };
  Feed: string;
  AdminTools: string;
}

export class UserAuthInfo {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  sub: string;
  phoneNumber: string;
  status: string;
  userType: string;
  created: string;
  lastModified: string;
  givenName: string;
  familyName: string;
  currentAccountDID: string;
  currentAccountName: string;
  impersonatingUser: string;
  companyName: string;
  accountDids: string[];

  userPrivileges: {
    canPostJobs?: string;
    canUseJobTemplates?: string;
    canViewAllApps?: string;
    hasCBSearch?: string;
    hasMySupply?: string;
    hasRDBAccess?: string;
    hasRDBDataStore?: string;
    hasRDBEdge?: string;
    hasRecruitEdgeRDB?: string;
    hasRecruitmentEdge?: string;
    hasSpecialJobs?: string;
    hasSupplyDemandAccess?: string;
    hasTalentNetwork?: string;
    isManager?: string;
    resumeSearchTrackingMandatory?: string;
    userHasCollegeAnalystAccess?: string;
    userHasCompensationAccess?: string;
    userHasEMSIAnalystAccess?: string;
    hasCampaignManagement?: string;
  };

  accountPrivileges: {
    hasCollegeAnalystAccess?: string;
    hasCompensationAccess?: string;
    hasEMSIAnalystAccess?: string;
    hasRecruitmentEdge?: string;
    hasSupplyDemandAccess?: string;
    hasTalentNetwork?: string;
  };

  address?: string;
  city?: string;
  country?: string;
  state?: string;
  zipCode?: string;
}

export interface IHeaderItem {
  Title?: string;
  AltTxt?: string;
  ExternalPath?: string;
  DomainName?: string;
  RelativePath?: string;
  HasSeparator?: boolean;
  NewWindow?: boolean;
  IsNegative?: boolean;
  MenuType?: string;
  Dropdown?: IHeaderItem[];
}

export interface ILinkItem {
  Name?: string;
  Link?: string;
}

export interface IContactInfo {
  Name?: string;
  Links?: ILinkItem[];
}

export interface IFooterItem {
  FooterNav?: IHeaderItem[];
  SalesContactInfo?: IContactInfo;
  SupportContactInfo?: IContactInfo;
  CopyRights?: string;
  GtmFooterEventName?: string;
}

export interface AppSwitcherInterface {
  hidden?: boolean;
}

export interface CBSearchMenuItemBaseInterface {
  title: string;
  altTxt?: string;
  altText?: string;
  internalPath?: string | {
    "Intake Dashboard"?: string;
    "Intake Settings"?: string;
  };
  externalPath?: string;
  newWindow?: boolean;
  hidden?: boolean;
  hasSeparator?: string | boolean;
  activeRegex?: string[];
  action?: string;
}

export interface CBSearchMenuItemInterface extends CBSearchMenuItemBaseInterface {
  dropDown?: CBSearchMenuItemBaseInterface[];
}

export interface HeaderDataInterface {
  leftNav: CBSearchMenuItemInterface[];
  appSwitcher: AppSwitcherInterface[];
  logoPath: {
    title: string;
    externalPath: string;
  };
  product: {
    title: string;
    altTxt: string;
    externalPath: string;
  };
  cbConnect?: {
    title: string;
    altTxt: string;
    externalPath: string;
    hidden: string | boolean;
    newWindow: boolean;
  };
  newFeatures: {
    hidden: string | boolean;
  };
  searchBar: {
    hidden: string | boolean;
  };
  userProfile: {
    options: CBSearchMenuItemInterface[];
    user: UserAuthInfo;
  };
  footer: IFooterItem;
}
