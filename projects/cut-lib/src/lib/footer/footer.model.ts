export interface IFooterNavItemBase {
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

export interface IFooterNavItem extends IFooterNavItemBase {
  dropDown?: IFooterNavItemBase[];
}

export interface IFooterLinkItem {
  Name: string;
  Link: string;
}

export interface IContactInfo {
  Name: string;
  Links: IFooterLinkItem[];
}

export interface IFooterItem {
  CopyRights: string;
  FooterNav?: IFooterNavItem[];
  GtmFooterEventName: string;
  SalesContactInfo?: IContactInfo;
  SupportContactInfo?: IContactInfo;
}

export class FooterConfig {
  useApi: boolean;
}
