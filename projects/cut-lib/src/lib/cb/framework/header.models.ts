import { IFooterItem } from "./../header/header.model";

export interface LogoPath {
  externalPath?: string;
  internalPath?: string;
}

export interface Product {
  title: string;
  altTxt: string;
  externalPath?: string;
  internalPath?: string;
}

export interface IHeaderNavItemDropDown {
  title: string;
  altTxt: string;
  hidden?: boolean;
  newWindow?: boolean;
  action?: string;
  internalPath?: string;
  externalPath?: string;
  activeRegex?: Array<string>;
  hasSeparator?: boolean;
}

export interface HeaderNavItem {
  title: string;
  altTxt: string;
  activeRegex?: Array<string>;
  action?: string;
  hidden?: boolean;
  internalPath?: string;
  externalPath?: string;
  activeException?: Array<string>;
  newWindow?: boolean;
  dropDown?: IHeaderNavItemDropDown[];
}

export interface IHeaderNav {
  leftNav: HeaderNavItem[];
}

export interface AppSwitcherItem {
  title: string;
  altTxt: string;
  internalPath?: string;
  externalPath?: string;
  newWindow?: boolean;
  hidden?: boolean;
  isActive?: boolean;
}

export interface Option {
  title: string;
  action?: string;
  hidden?: boolean;
  hasSeparator?: boolean;
  internalPath?: string;
  externalPath?: string;
  activeRegex?: Array<string>;
  newWindow?: boolean;
}

export interface UserProfile {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    accountName: string;
    bgColor?: string;
  };
  options?: Array<Option>;
}

export interface HeaderData {
  logoPath: LogoPath;
  hasGlobalAdmin: boolean;
  product: Product;
  newFeatures: { hidden: boolean };
  searchBar: { hidden: boolean };
  leftNav?: Array<HeaderNavItem>;
  rightNav?: Array<any>; // not yet priority
  appSwitcher?: Array<AppSwitcherItem>;
  notifications?: Array<any>; // not yet priority
  userProfile: UserProfile;
  footer: IFooterItem;
}
