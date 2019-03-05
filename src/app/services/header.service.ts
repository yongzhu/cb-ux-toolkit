import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { HeaderData } from "cut/lib/cb/framework/header.models";

const HEADER_DATA: HeaderData = {
  "logoPath": {
    // "externalPath": "https://www.careerbuilder.com"
    "internalPath": "/platforms"
  },
  "hasGlobalAdmin": false,
  "product": {
    "title": "Career Builder Employment Screening",
    "altTxt": "CBES",
    // "externalPath": "https://www.careerbuilder.com"
    "internalPath": "/platforms"
  },
  "newFeatures": { "hidden": false },
  "searchBar": { "hidden": false },
  "leftNav": [
    {
      "title": "p1 - internal link - hidden",
      "altTxt": "alt text here",
      "internalPath": "/welcome",
      "hidden": true
    },
    {
      "title": "p1 - internal link",
      "altTxt": "alt text here",
      "internalPath": "/welcome"
    },
    {
      "title": "p2 - dropdown - no show",
      "altTxt": "alt text here",
      "internalPath": "/welcome",
      "hidden": true,
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/cards"
        }
      ]
    },
    {
      "title": "p2 - dropdown",
      "altTxt": "alt text here",
      "internalPath": "/tabs",
      "dropDown": [
        {
          "title": "p1 - internal link - hidden",
          "altTxt": "alt text here",
          "internalPath": "/tabs",
          "hidden": true
        },
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/tabs",
          "hasSeparator": true
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com"
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "hidden": true
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true,
          "hidden": true
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION"
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION",
          "hidden": true
        }
      ]
    },
    {
      "title": "p3 - dropdown - test regex",
      "altTxt": "alt text here",
      "activeRegex": ["^\/(?!cards)(?:modal)"],
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/cards",
          "activeRegex": ["^/cards"]
        },
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/modal"
        }
      ]
    },
    {
      "title": "p4 - external link",
      "altTxt": "alt text here",
      "externalPath": "https://www.careerbuilder.com"
    },
    {
      "title": "p4 - external link - hidden",
      "altTxt": "alt text here",
      "externalPath": "https://www.careerbuilder.com",
      "hidden": true
    },
    {
      "title": "p4B - new window",
      "altTxt": "alt text here",
      "externalPath": "https://www.careerbuilder.com",
      "newWindow": true
    },
    {
      "title": "p4B - new window",
      "altTxt": "alt text here",
      "externalPath": "https://www.careerbuilder.com",
      "newWindow": true,
      "hidden": true
    }
  ],
  "rightNav": [
    {
      "title": "Select Company",
      "icon": "fa fa-angle-down",
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/buttons",
          "hidden": true
        },
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/buttons"
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "hidden": true
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com"
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true,
          "hidden": true
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION",
          "hidden": true
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION"
        }
      ]
    },
    {
      "title": "Company Settings - Hidden",
      "icon": "fa fa-gear",
      "hidden": true,
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/buttons"
        }
      ]
    },
    {
      "title": "Company Settings",
      "icon": "fa fa-gear",
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/buttons"
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com"
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION"
        }
      ]
    },
    {
      "title": "Select Locale",
      "icon": "fa fa-gear",
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/buttons"
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com"
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION"
        }
      ]
    },
    {
      "title": "Locale Settings",
      "icon": "fa fa-gear",
      "dropDown": [
        {
          "title": "p1 - internal link",
          "altTxt": "alt text here",
          "internalPath": "/buttons"
        },
        {
          "title": "p2 - external link",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com"
        },
        {
          "title": "p2B - New Window",
          "altTxt": "alt text here",
          "externalPath": "https://www.careerbuilder.com",
          "newWindow": true
        },
        {
          "title": "p3 - Action",
          "altTxt": "alt text here",
          "action": "EXAMPLE_ACTION"
        }
      ]
    }
  ],
  "appSwitcher": [
    {
      "title": "p1 - Internal Route - hidden",
      "altTxt": "alt text here",
      "internalPath": "/welcome",
      "newWindow": false,
      "hidden": true
    },
    {
      "title": "p1 - Internal Route - Show",
      "altTxt": "alt text here",
      "internalPath": "/welcome",
      "isActive": true
    },
    {
      "title": "p1 - Internal Route - Show",
      "altTxt": "alt text here",
      "internalPath": "/platform"
    },
    {
      "title": "p2 - Action - external url",
      "altTxt": "alt text here",
      "externalPath": "https://www.careerbuilder.com",
      "newWindow": true
    }
  ],
  "notifications": [
    {
      "title": "Jamie Pines has responded to your email",
      "subText": "Morning, Joseph. I am interested in this job position",
      "platForm": "Applicant Tracking",
      "time": new
        Date().setDate(new
          Date().getDate()
          -
          2).toString(),
      "flag": false,
      "type": "note",
      "flagAction": "FLAG_ACTION",
      "titleAction": "TITLE_ACTION"
    },
    {
      "title": "Jamie Pines has responded to your email",
      "subText": "Morning, Joseph. I am interested in this job position",
      "platForm": "Applicant Tracking",
      "time": new
        Date().setDate(new
          Date().getDate()
          -
          5),
      "flag": false,
      "type": "mail",
      "flagAction": "FLAG_ACTION",
      "titleAction": "TITLE_ACTION"
    },
    {
      "title": "Chandra McClain. Spoke to candidate on the phone",
      "platForm": "Sourcing Platform: Search",
      "time": new
        Date().setDate(new
          Date().getDate()
          -
          1),
      "flag": true,
      "type": "info",
      "flagAction": "FLAG_ACTION",
      "titleAction": "TITLE_ACTION"
    },
    {
      "title": "Chandra McClain.",
      "subText": "Candidate has not responded to emails and phone calls.",
      "platForm": "Sourcing Platform: Search",
      "time": new
        Date().setDate(new
          Date().getDate()
          -
          3),
      "flag": false,
      "type": "warning",
      "flagAction": "FLAG_ACTION",
      "titleAction": "TITLE_ACTION"
    },
    {
      "title": "Chandra McClain.",
      "subText": "Candidate has not responded to emails and phone calls.",
      "platForm": "Sourcing Platform: Search",
      "time": new
        Date().setDate(new
          Date().getDate()
          -
          3),
      "flag": false,
      "type": "error",
      "flagAction": "FLAG_ACTION",
      "titleAction": "TITLE_ACTION"
    }
  ],
  "userProfile": {
    "user": {
      "first_name": "Joseph",
      "last_name": "Offerman",
      "email": "jo13232334343243423423423434234324234@gmailPrimary.com",
      "accountName": "Personified Demo Account"
    },
    "options": [
      {
        "title": "Hidden Item",
        "action": "MANAGER_LICENSES_ACTION",
        "hidden": true
      },
      {
        "title": "Internal Path",
        "internalPath": "/platforms",
        "hidden": false
      },
      {
        "title": "External Route",
        "externalPath": "https://www.careerbuilder.com",
        "hidden": false
      },
      {
        "title": "External Route -- New Window",
        "externalPath": "https://www.careerbuilder.com",
        "hidden": false,
        "newWindow": true
      },
      {
        "title": "Action & Has Separator",
        "action": "USER_PREFERENCES_ACTION",
        "hidden": false,
        "hasSeparator": true
      },
      {
        "title": "Background",
        "action": "BACKGROUND_ACTION",
        "hidden": false,
        "hasSeparator": true
      },
      {
        "title": "Sign Out",
        "action": "SIGN_OUT_ACTION",
        "hidden": false
      }
    ]
  },
  "footer": {
    "FooterNav": [
      {
        "Title": "About Us",
        "AltTxt": "About Us",
        "ExternalPath": "/welcome"
      },
      {
        "Title": "Privacy & Fraud",
        "AltTxt": "Privacy & Fraud",
        "ExternalPath": "/welcome"
      },
      {
        "Title": "Terms & Conditions",
        "AltTxt": "Terms & Conditions",
        "ExternalPath": "/welcome"
      },
      {
        "Title": "Buy Products",
        "AltTxt": "Buy Products",
        "ExternalPath": "/welcome"
      }
    ],
    "SalesContactInfo": {
      "Name": "Sales: ",
      "Links": [
        {
          "Name": "sales@careerbuilder.com",
          "Link": "emailto:sales@careerbuilder.com"
        },
        {
          "Link": "tel:(877)-345-5256",
          "Name": "(877) 345-5256"
        }
      ]
    },
    "SupportContactInfo": {
      "Name": "Support: ",
      "Links": [
        {
          "Name": "support@careerbuilder.com",
          "Link": "emailto:support@careerbuilder.com"
        },
        {
          "Link": "tel:(800)-891-8880",
          "Name": "(800) 891-8880"
        }
      ]
    },
    "CopyRights": "© 2018 CareerBuilder, LLC. All rights reserved.",
    "GtmFooterEventName": "EmployerFooter"
  }
};

@Injectable({
  providedIn: "root"
})
export class HeaderService {

  private data: BehaviorSubject<HeaderData> = new BehaviorSubject<HeaderData>({
    ...HEADER_DATA as any,
    ...{
      "logo": {
        "src": "/assets/images/cbes.png"
      }
    }
  });

  constructor() { }

  public getHeaderData(): Observable<HeaderData> {
    return this.data.asObservable();
  }
}
