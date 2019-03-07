import {
  AppSwitcherInterface, CBSearchMenuItemInterface,
  HeaderDataInterface, IFooterItem,
  ProductRoutesDevModel, ProductsDynamicStatusModel, UserAuthInfo
} from "./header.model";

export enum UserOptionsIdx {
  REPORTS,
  ADDUSER,
  MANAGE,
  ACCOUNT,
  SWITCH,
  PREFERENCES,
  BACKGROUND,
  SIGNOUT
}

export const headerDynamicStatus = {
  newFeatures: true,
  searchBar: true,
  userProfile: {
    addUser: true,
    editUser: true,
    options: [
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      false]
  }
};

export const accountRoutesDev = {
  MyCb: "http://wwwtestemployer.careerbuilder.com/jobposter/mycb.aspx",
  "Self-Service Reports": "/selfreport",
  "Add User": "http://wwwtestemployer.careerbuilder.com/jobposter/accounts/addaccountuser.aspx",
  "Manage Users & Licenses": "http://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountusers.aspx",
  "Account Settings": "http://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountinfo.aspx",
  "Switch Accounts": "http://wwwtestemployer.careerbuilder.com/jobposter/accounts/myaccounts.aspx",
  "User Preferences": "https://wwwtestemployer.careerbuilder.com/share/userinfo.aspx",
  "Sign Out": "https://accounts.careerbuilder.com/share/logout.aspx"
};

export const accountRoutesProd = {
  MyCb: "http://employer.careerbuilder.com/jobposter/mycb.aspx",
  "Self-Service Reports": "/selfreport",
  "Add User": "http://employer.careerbuilder.com/jobposter/accounts/addaccountuser.aspx",
  "Manage Users & Licenses": "http://employer.careerbuilder.com/jobposter/accounts/accountusers.aspx",
  "Account Settings": "http://employer.careerbuilder.com/jobposter/accounts/accountinfo.aspx",
  "Switch Accounts": "http://employer.careerbuilder.com/jobposter/accounts/myaccounts.aspx",
  "User Preferences": "https://www.careerbuilder.com/share/userinfo.aspx",
  "Sign Out": "https://accounts.careerbuilder.com/share/logout.aspx"
};

export const productsDynamicStatus: ProductsDynamicStatusModel = {
  Insights: {
    Insights: true,
    "Supply & Demand": true,
    "Compensation Portal": true,
    "Labor Market Analytics": true,
    "College Recruiting Analytics": true
  },
  Intake: true,
  Search: {
    Search: true,
    "Resume Database": true,
    "Recruitment Edge": true,
    "Candidate Search": false,
    "Recent Searches": true,
    "Saved Searches": true,
    "Search Settings": false
  },
  Jobs: {
    "Post a Job": false,
    "View My Jobs": false,
    Applications: false,
    Screeners: false,
    "Candidate Controls": false,
    "My Templates": false,
    Letters: false
  },
  Sourced: {
    Lists: true,
    Folders: true,
    Tags: true
  },
  Campaigns: true,
  "Talent Network": false,
  Help: {
    Help: false,
    "CareerBuilder Connect": false,
    "CareerBuilder University": false,
    "Getting Started": false,
    Groups: false,
    "Knowledge Base": false,
    Support: false
  },
  Feed: true
};

export const productRoutesProd: ProductRoutesDevModel = {
  "Recruiter Desktop": "http://employer.careerbuilder.com/jobposter/mycb.aspx",
  Insights: {
    "Supply & Demand": "/analytics/search",
    "Compensation Portal": "http://employer.careerbuilder.com/personified/compensationv2/search.aspx",
    "Labor Market Analytics": "https://login.economicmodeling.com/sso/oneiam.php?oneiam=1 ",
    "College Recruiting Analytics": "https://login.economicmodeling.com/sso/oneiam.php?oneiam=1 "
  },
  Intake: {
    "Intake Dashboard": "/intake/project",
    "Intake Settings": "/intake/settings"
  },
  Search: {
    "Resume Database": "http://employer.careerbuilder.com/jobposter/resumes/searchresume.aspx",
    "Recruitment Edge": "http://edge.careerbuilder.com/",
    "Candidate Search": "/candidates",
    "Recent Searches": "http://employer.careerbuilder.com/jobposter/searches/searchhistory.aspx",
    "Saved Searches": "http://employer.careerbuilder.com/jobposter/resumes/lockrdblicense.aspx",
    "Search Settings": "/candidates/settings"
  },
  Jobs: {
    "Post A Job": "http://employer.careerbuilder.com/jobposter/jobs/corpjob/productselection.aspx",
    "View My Jobs": "http://employer.careerbuilder.com/jobposter/jobs/myjobs/default.aspx",
    Applications: "http://employer.careerbuilder.com/jobposter/jobs/applicationsearch.aspx",
    Screeners: "http://employer.careerbuilder.com/jobposter/questionnaires/myquestionnaires.aspx",
    "Candidate Controls": "http://employer.careerbuilder.com/jobposter/letters/myautoresponsesettings.aspx",
    "My Templates": "http://employer.careerbuilder.com/jobposter/templates/mytemplatesv2.aspx",
    Letters: "http://employer.careerbuilder.com/jobposter/letters/myletters.aspx"
  },
  Sourced: {
    Lists: "/candidates/lists",
    Folders: "http://employer.careerbuilder.com/jobposter/folders/myfolders.aspx",
    Tags: "http://employer.careerbuilder.com/jobposter/resumes/managetags.aspx"
  },
  Campaigns: "/emailcampaign",
  "Talent Network": "https://tools.broadbean.com/sso/oneiam/applications/tse",
  Help: {
    "CareerBuilder Connect": "https://connect.careerbuilder.com/s/",
    "CareerBuilder University": "https://connect.careerbuilder.com/s/careerbuilder-university",
    "Getting Started": "https://connect.careerbuilder.com/s/getting-started",
    Groups: "https://connect.careerbuilder.com/s/groups",
    "Knowledge Base": "https://connect.careerbuilder.com/s/knowledge-base",
    Support: "https://connect.careerbuilder.com/s/help"
  },
  Feed: "/feed",
  AdminTools: "https://myaccount.careerbuilder.com/admin-tools"
};

export const productRoutesDev: ProductRoutesDevModel = {
  "Recruiter Desktop": "http://wwwtestemployer.careerbuilder.com/jobposter/mycb.aspx",
  Insights: {
    "Supply & Demand": "/analytics/search",
    "Compensation Portal": "http://wwwtestemployer.careerbuilder.com/personified/compensationv2/search.aspx",
    "Labor Market Analytics": "https://login.economicmodeling.com/sso/oneiam.php?oneiam=1 ",
    "College Recruiting Analytics": "https://login.economicmodeling.com/sso/oneiam.php?oneiam=1 "
  },
  Intake: {
    "Intake Dashboard": "/intake/project",
    "Intake Settings": "/intake/settings"
  },
  Search: {
    "Resume Database": "http://wwwtestemployer.careerbuilder.com/jobposter/resumes/searchresume.aspx?showrdb=true",
    "Recruitment Edge": "http://wwwtest.edge.careerbuilder.com/",
    "Candidate Search": "/candidates",
    "Recent Searches": "http://wwwtestemployer.careerbuilder.com/jobposter/searches/searchhistory.aspx",
    "Saved Searches": "http://wwwtestemployer.careerbuilder.com/jobposter/resumes/lockrdblicense.aspx",
    "Search Settings": "/candidates/settings"
  },
  Jobs: {
    "Post A Job": "http://wwwtestemployer.careerbuilder.com/jobposter/jobs/corpjob/productselection.aspx",
    "View My Jobs": "http://wwwtestemployer.careerbuilder.com/jobposter/jobs/myjobs/default.aspx",
    Applications: "http://wwwtestemployer.careerbuilder.com/jobposter/jobs/applicationsearch.aspx",
    Screeners: "http://wwwtestemployer.careerbuilder.com/jobposter/questionnaires/myquestionnaires.aspx",
    "Candidate Controls": "http://wwwtestemployer.careerbuilder.com/jobposter/letters/myautoresponsesettings.aspx",
    "My Templates": "http://wwwtestemployer.careerbuilder.com/jobposter/templates/mytemplatesv2.aspx",
    Letters: "http://wwwtestemployer.careerbuilder.com/jobposter/letters/myletters.aspx"
  },
  Sourced: {
    Lists: "/candidates/lists",
    Folders: "http://wwwtestemployer.careerbuilder.com/jobposter/folders/myfolders.aspx",
    Tags: "http://wwwtestemployer.careerbuilder.com/jobposter/resumes/managetags.aspx"
  },
  Campaigns: "/emailcampaign",
  "Talent Network": "http://dev.tse.broadbean.com/",
  Help: {
    "CareerBuilder Connect": "https://connect.careerbuilder.com/s/",
    "CareerBuilder University": "https://connect.careerbuilder.com/s/careerbuilder-university",
    "Getting Started": "https://connect.careerbuilder.com/s/getting-started",
    Groups: "https://connect.careerbuilder.com/s/groups",
    "Knowledge Base": "https://connect.careerbuilder.com/s/knowledge-base",
    Support: "https://connect.careerbuilder.com/s/help"
  },
  Feed: "/feed",
  AdminTools: "https://wwwtestmyaccount.careerbuilder.com/admin-tools"
};

export const CBSearchMenuItemsProd: CBSearchMenuItemInterface[] = [
  {
    title: "Feed",
    altTxt: "Your Feed",
    internalPath: productRoutesProd.Feed,
    hidden: productsDynamicStatus.Feed
  },
  {
    title: "Insights",
    altTxt: "Insights",
    internalPath: "/analytics",
    hidden: productsDynamicStatus.Insights["Insights"],
    dropDown: [
      {
        title: "Supply & Demand",
        altTxt: "Supply & Demand Search",
        internalPath: productRoutesProd.Insights["Supply & Demand"],
        hidden: productsDynamicStatus.Insights["Supply & Demand"],
        activeRegex: ["^/analytics"],
        hasSeparator: true
      },
      {
        title: "Compensation Portal",
        altTxt: "Compensation Portal",
        externalPath: productRoutesProd.Insights["Compensation Portal"],
        hidden: productsDynamicStatus.Insights["Supply & Demand"]
      },
      {
        title: "Labor Market Analytics",
        altTxt: "Labor Market Analytics",
        externalPath: productRoutesProd.Insights["Labor Market Analytics"],
        hidden: productsDynamicStatus.Insights["Labor Market Analytics"],
        newWindow: true
      },
      {
        title: "College Recruiting Analytics",
        altTxt: "College Recruiting Analytics",
        externalPath: productRoutesProd.Insights["College Recruiting Analytics"],
        hidden: productsDynamicStatus.Insights["College Recruiting Analytics"],
        newWindow: true
      }
    ]
  },
  {
    title: "Intake",
    altTxt: "Intake Tool",
    internalPath: productRoutesProd.Intake,
    hidden: productsDynamicStatus.Intake,
    activeRegex: ["^\/intake"],
    dropDown: [
      {
        title: "Intake Dashboard",
        altText: "Intake Dashboard",
        internalPath: productRoutesProd.Intake["Intake Dashboard"],
        activeRegex: ["^\/intake/project"]
      },
      {
        title: "Intake Settings",
        altText: "Intake Settings",
        internalPath: productRoutesProd.Intake["Intake Settings"],
        activeRegex: ["^\/intake/settings"]
      }
    ]
  },
  {
    title: "Search",
    altTxt: "Search",
    internalPath: "/candidates",
    activeRegex: ["^\/candidates(?!\/list)"],
    hidden: productsDynamicStatus["Search"]["Search"],
    dropDown: [
      {
        title: "Resume Database",
        altText: "Resume Database",
        externalPath: productRoutesProd.Search["Resume Database"],
        hidden: productsDynamicStatus.Search["Resume Database"]
      },
      {
        title: "Recruitment Edge",
        altText: "Recruitment Edge",
        externalPath: productRoutesProd.Search["Recruitment Edge"],
        hidden: productsDynamicStatus.Search["Recruitment Edge"],
        hasSeparator: true
      },
      {
        title: "Candidate Search",
        altTxt: "Candidate Search",
        internalPath: productRoutesProd.Search["Candidate Search"],
        hidden: productsDynamicStatus.Search["CareerBuilder Search"],
        activeRegex: ["^\/candidates(?!\/list)"],
        hasSeparator: true
      },
      {
        title: "Recent Searches",
        altText: "Recent Searches",
        // TODO: should we use dev path here?
        externalPath: productRoutesDev.Search["Recent Searches"],
        hidden: productsDynamicStatus.Search["Recent Searches"]
      },
      {
        title: "Saved Searches",
        altText: "Saved Searches",
        // TODO: should we use dev path here?
        externalPath: productRoutesDev.Search["Saved Searches"],
        hidden: productsDynamicStatus.Search["Saved Searches"]
      },
      {
        title: "Search Settings",
        altText: "Search Settings",
        internalPath: productRoutesProd.Search["Search Settings"],
        hidden: productsDynamicStatus.Search["Search Settings"]
      }
    ]
  },
  {
    title: "Jobs",
    altTxt: "Jobs",
    internalPath: "/jobposting",
    dropDown: [
      {
        title: "Post A Job",
        altText: "Post A Job",
        externalPath: productRoutesProd.Jobs["Post A Job"],
        hidden: productsDynamicStatus.Jobs["Post a Job"]
      },
      {
        title: "View My Jobs",
        altText: "View My Jobs",
        externalPath: productRoutesProd.Jobs["View My Jobs"],
        hidden: productsDynamicStatus.Jobs["View My Jobs"],
        hasSeparator: true
      },
      {
        title: "Applications",
        altText: "Applications",
        externalPath: productRoutesProd.Jobs["Applications"],
        hidden: productsDynamicStatus.Jobs["Applications"],
        hasSeparator: true
      },
      {
        title: "Screeners",
        altText: "Screeners",
        externalPath: productRoutesProd.Jobs["Screeners"],
        hidden: productsDynamicStatus.Jobs["Screeners"]
      },
      {
        title: "Candidate Controls",
        altText: "Candidate Controls",
        externalPath: productRoutesProd.Jobs["Candidate Controls"],
        hidden: productsDynamicStatus.Jobs["Candidate Controls"],
        hasSeparator: true
      },
      {
        title: "My Templates",
        altText: "My Templates",
        externalPath: productRoutesProd.Jobs["My Templates"],
        hidden: productsDynamicStatus.Jobs["My Templates"]
      },
      {
        title: "Letters",
        altText: "Letters",
        externalPath: productRoutesProd.Jobs["Letters"],
        hidden: productsDynamicStatus.Jobs["Letters"]
      }
    ]
  },
  {
    title: "Sourced",
    altTxt: "Sourced",
    internalPath: "/candidates/lists",
    dropDown: [
      {
        title: "Lists",
        altTxt: "Lists",
        internalPath: productRoutesProd.Sourced["Lists"],
        hidden: productsDynamicStatus.Sourced["Lists"]
      },
      {
        title: "Folders",
        altTxt: "Folders",
        externalPath: productRoutesProd.Sourced["Folders"],
        hidden: productsDynamicStatus.Sourced["Folders"]
      },
      {
        title: "Tags",
        altTxt: "Tags",
        externalPath: productRoutesProd.Sourced["Tags"],
        hidden: productsDynamicStatus.Sourced["Tags"]
      }
    ]
  },
  {
    title: "Campaigns",
    altTxt: "Campaign Management",
    internalPath: productRoutesProd.Campaigns,
    hidden: productsDynamicStatus.Campaigns
  },
  {
    title: "Talent Network",
    altTxt: "Talent Network",
    hidden: productsDynamicStatus["Talent Network"],
    externalPath: productRoutesProd["Talent Network"]
  },
  {
    title: "Help",
    altTxt: "Help",
    hidden: productsDynamicStatus.Help["Help"],
    dropDown: [
      {
        title: "CareerBuilder Connect",
        altTxt: "CareerBuilder Connect",
        externalPath: productRoutesProd.Help["CareerBuilder Connect"],
        hidden: productsDynamicStatus.Help["CareerBuilder Connect"],
        newWindow: true
      },
      {
        title: "CareerBuilder University",
        altTxt: "CareerBuilder University",
        externalPath: productRoutesProd.Help["CareerBuilder University"],
        hidden: productsDynamicStatus.Help["CareerBuilder University"],
        newWindow: true
      },
      {
        title: "Getting Started",
        altTxt: "Getting Started",
        externalPath: productRoutesProd.Help["Getting Started"],
        hidden: productsDynamicStatus.Help["Getting Started"],
        newWindow: true
      },
      {
        title: "Groups",
        altTxt: "Groups",
        externalPath: productRoutesProd.Help["Groups"],
        hidden: productsDynamicStatus.Help["Groups"],
        newWindow: true
      },
      {
        title: "Knowledge Base",
        altTxt: "Knowledge Base",
        externalPath: productRoutesProd.Help["Knowledge Base"],
        hidden: productsDynamicStatus.Help["Knowledge Base"],
        newWindow: true
      },
      {
        title: "Support",
        altTxt: "Support",
        externalPath: productRoutesProd.Help["Support"],
        hidden: productsDynamicStatus.Help["Support"],
        newWindow: true
      }
    ]
  }
];

export const AppSwitcher: AppSwitcherInterface[] = [
];

export const userOptions: CBSearchMenuItemInterface[] = [
  {
    title: "Self-Service Reports",
    internalPath: accountRoutesProd["Self-Service Reports"],
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.REPORTS],
    hasSeparator: true,
    activeRegex: ["^/selfreport"]
  },
  {
    title: "Add User",
    externalPath: accountRoutesProd["Add User"],
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.ADDUSER]
  },
  {
    title: "Manage Users & Licenses",
    externalPath: accountRoutesProd["Manage Users & Licenses"],
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.MANAGE],
    hasSeparator: true
  },
  {
    title: "Account Settings",
    action: "ACCOUNT_SETTINGS_ACTION",
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.ACCOUNT],
    hasSeparator: true
  },
  {
    title: "Switch Accounts",
    externalPath: accountRoutesProd["Switch Accounts"],
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.SWITCH],
    hasSeparator: true
  },
  {
    title: "User Preferences",
    externalPath: accountRoutesProd["User Preferences"],
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.PREFERENCES],
    hasSeparator: true,
    newWindow: true
  },
  {
    title: "Background",
    action: "BACKGROUND_ACTION",
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.BACKGROUND],
    hasSeparator: true
  },
  {
    title: "Sign Out",
    action: "SIGN_OUT_ACTION",
    hidden: headerDynamicStatus.userProfile["options"][UserOptionsIdx.SIGNOUT]
  }
];

export const CBFooterItemsProd: IFooterItem = {
  CopyRights: "© 2018 CareerBuilder, LLC. All rights reserved.",
    FooterNav: [
      {
        AltTxt: "About Us",
        DomainName: "https://hiring.careerbuilder.com",
        Dropdown: [],
        ExternalPath: "https://hiring.careerbuilder.com/company/overview",
        HasSeparator: false,
        IsNegative: false,
        MenuType: "0",
        NewWindow: true,
        RelativePath: "/company/overview",
        Title: "About Us"
      },
      {
        AltTxt: "Privacy & Fraud",
        DomainName: "https://hiring.careerbuilder.com",
        Dropdown: [],
        ExternalPath: "https://hiring.careerbuilder.com/company/security-and-privacy",
        HasSeparator: false,
        IsNegative: false,
        MenuType: "0",
        NewWindow: true,
        RelativePath: "/company/security-and-privacy",
        Title: "Privacy & Fraud"
      },
      {
        AltTxt: "Terms & Conditions",
        DomainName: "https://employer.careerbuilder.com",
        Dropdown: [],
        ExternalPath: "https://employer.careerbuilder.com/jobseeker/info/hhterms.aspx",
        HasSeparator: false,
        IsNegative: false,
        MenuType: "0",
        NewWindow: true,
        RelativePath: "/jobseeker/info/hhterms.aspx",
        Title: "Terms & Conditions"
      },
      {
        AltTxt: "Buy Products",
        DomainName: "https://hiring.careerbuilder.com",
        Dropdown: [],
        ExternalPath: "https://hiring.careerbuilder.com",
        HasSeparator: false,
        IsNegative: false,
        MenuType: "0",
        NewWindow: true,
        RelativePath: "/company/security-and-privacy",
        Title: "Buy Products"
      }
    ],
    GtmFooterEventName: "EmployerFooter",
    SalesContactInfo: {
      Links: [
        {
          Link: "tel:877-345-5256",
          Name: "(877) 345-5256"
        }
      ],
      Name: "Sales: "
    },
    SupportContactInfo: {
      Links: [
        {
          Link: "tel:(800) 891-8880",
          Name: "(800) 891-8880"
        }
      ],
      Name: "Support: "
    }
};

export const HEADER_DATA: HeaderDataInterface = {
  leftNav: [...CBSearchMenuItemsProd], // for new header items api set this to []
  appSwitcher: AppSwitcher, // for new header items api set this to []
  logoPath: {
    title: "logoPath",
    externalPath: accountRoutesProd["MyCb"] // for new header items api set this to ''
  },
  product: {
    title: "Talent Discovery",
    altTxt: "Welcome to the Talent Discovery",
    externalPath: accountRoutesProd["MyCb"] // for new header items api set this to ''
  },
  cbConnect: { // for new header items api remove this
    title: "CB Connect",
    altTxt: "CareerBuilder Connect",
    externalPath: productRoutesProd["Help"]["CareerBuilder Connect"],
    hidden: productsDynamicStatus["Help"]["CareerBuilder Connect"],
    newWindow: true
  },
  newFeatures: {
    hidden: headerDynamicStatus["newFeatures"]
  },
  searchBar: {
    hidden: headerDynamicStatus["searchBar"]
  },
  userProfile: {
    options: userOptions, // for new header items api set this to []
    user: new UserAuthInfo()
  },
  footer: CBFooterItemsProd
};
