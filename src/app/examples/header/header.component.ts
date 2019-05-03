import { Component, OnInit } from '@angular/core';
import { CutHeaderService } from 'cut';


@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html'
})

export class HeaderComponentExample implements OnInit {
	constructor(private cbHeader: CutHeaderService) {
		const data = {
			"leftNav": [
				{
					"title": "Homepage",
					"altTxt": "Homepage",
					"internalPath": "/components/header/overview",
					"activeRegex": [
						"/overview"
					],
				},
				{
					"title": "Insights",
					"altTxt": "Insights",
					"externalPath": null,
					"activeRegex": [
						"^/analytics"
					],
					"dropDown": [
						{
							"title": "Supply & Demand",
							"altTxt": "Supply & Demand",
							"externalPath": "https://recruitment-staging.ace.careerbuilder.com/analytics/search",
							"activeRegex": [
								"^/analytics"
							],
							"hasSeparator": true
						}
					]
				},
				{
					"title": "Jobs",
					"altTxt": "Jobs",
					"externalPath": null,
					"activeRegex": [
						"/jobposting"
					],
					"dropDown": [
						{
							"title": "Post A Job",
							"altTxt": "Post A Job",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/jobs/corpjob/productselection.aspx",
							"activeRegex": [
								"/jobposting/jobproducts"
							]
						},
						{
							"title": "View My Jobs",
							"altTxt": "View My Jobs",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/jobs/myjobs/default.aspx",
							"hasSeparator": true
						},
						{
							"title": "Applications",
							"altTxt": "Applications",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobPoster/jobs/applicationsearch.aspx",
							"hasSeparator": true
						},
						{
							"title": "Screeners",
							"altTxt": "Screeners",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/questionnaires/myquestionnaires.aspx"
						},
						{
							"title": "Candidate Controls",
							"altTxt": "Candidate Controls",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/letters/myautoresponsesettings.aspx",
							"hasSeparator": true
						},
						{
							"title": "My Templates",
							"altTxt": "My Templates",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/templates/mytemplatesv2.aspx"
						},
						{
							"title": "Letters",
							"altTxt": "Letters",
							"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/letters/myletters.aspx"
						}
					]
				},
				{
					"title": "Lists",
					"altTxt": "Lists",
					"externalPath": "https://recruitment-staging.ace.careerbuilder.com/candidates/lists"
				},
				// {
				// 	"title": "Campaigns",
				// 	"altTxt": "Campaigns",
				// 	"externalPath": "https://recruitment-staging.ace.careerbuilder.com/emailcampaign/search"
				// },
				{
					"title": "Analytics",
					"altTxt": "Analytics",
					"externalPath": "",
					"dropDown": [
						{
							"title": "ROI Summary",
							"altTxt": "ROI Summary",
							"externalPath": "https://recruitment-staging.ace.careerbuilder.com/cbanalytics/roi"
						},
						{
							"title": "Search",
							"altTxt": "Search",
							"externalPath": "https://recruitment-staging.ace.careerbuilder.com/cbanalytics/search",
							"activeRegex": [
								"^/candidates(?!/list)"
							]
						},
						{
							"title": "Jobs",
							"altTxt": "Jobs",
							"externalPath": "https://recruitment-staging.ace.careerbuilder.com/cbanalytics/jobs",
							"activeRegex": [
								"/jobposting"
							]
						}
					]
				},
				{
					"title": "Help",
					"altTxt": "Help",
					"externalPath": null,
					"dropDown": [
						{
							"title": "Getting Started",
							"altTxt": "Getting Started",
							"externalPath": "https://connect.careerbuilder.com/s/getting-started?tabset-b1b92=8056f",
							"newWindow": true
						},
						{
							"title": "CareerBuilder Connect",
							"altTxt": "CareerBuilder Connect",
							"externalPath": "https://connect.careerbuilder.com/s/",
							"newWindow": true
						},
						{
							"title": "Knowledge Base",
							"altTxt": "Knowledge Base",
							"externalPath": "https://connect.careerbuilder.com/s/knowledge-base",
							"newWindow": true
						},
						{
							"title": "Support",
							"altTxt": "Support",
							"externalPath": "https://connect.careerbuilder.com/s/help",
							"newWindow": true
						}
					]
				}
			],
			"appSwitcher": [
				{
					"title": "Talent Discovery",
					"altTxt": "Talent Discovery",
					"externalPath": "https://recruitment-staging.ace.careerbuilder.com/mycb",
					"hasSeparator": true
				},
				{
					"title": "Admin Tools",
					"altTxt": "Admin Tools",
					"externalPath": "https://wwwtestmyaccount.careerbuilder.com/admin-tools/landing-page",
					"hasSeparator": true
				},
				{
					"title": "CareerBuilder Connect",
					"altTxt": "CareerBuilder Connect",
					"externalPath": "https://connect.careerbuilder.com/s/",
					"newWindow": true,
					"hasSeparator": true
				}
			],
			"logoPath": {
				"title": "logoPath",
				"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/mycb.aspx"
			},
			"product": {
				"title": "Talent Discovery",
				"altTxt": "Welcome to the Talent Discovery",
				"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/mycb.aspx"
			},
			"cbConnect": {
				"title": "CB Connect",
				"altTxt": "CareerBuilder Connect",
				"externalPath": "https://connect.careerbuilder.com/s/",
				"hidden": false,
				"newWindow": true
			},
			"newFeatures": {
				"hidden": true
			},
			"searchBar": {
				"hidden": true
			},
			"userProfile": {
				"options": [
					{
						"title": "Self-Service Reports",
						"altTxt": "Self-Service Reports",
						"externalPath": "https://recruitment-staging.ace.careerbuilder.com/selfreport",
						"hasSeparator": true
					},
					{
						"title": "Add User",
						"altTxt": "Add User",
						"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/addaccountuser.aspx"
					},
					{
						"title": "Manage Users & Licenses",
						"altTxt": "Manage Users & Licenses",
						"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountusers.aspx",
						"hasSeparator": true
					},
					{
						"title": "Account Settings",
						"altTxt": "Account Settings",
						"externalPath": "https://wwwtestemployer.careerbuilder.com/jobposter/accounts/accountinfo.aspx?Acct_DID=A7F0PT78MTMZ470WBBT",
						"hasSeparator": true
					},
					{
						"title": "User Preferences",
						"altTxt": "User Preferences",
						"externalPath": "https://wwwtestemployer.careerbuilder.com/share/userinfo.aspx",
						"newWindow": true,
						"hasSeparator": true
					},
					{
						"title": "Sign Out",
						"altTxt": "Sign Out",
						"externalPath": "https://wwwtestaccounts.careerbuilder.com/share/logout.aspx?Sc_cmp2=JP_UtilityHeader_Signout&next=http%3a%2f%2fstg.hiring.careerbuilder.com"
					}
				],
				"user": {
					"email": "Personified.Tester3@careerbuilder.com",
					"first_name": "Personified",
					"last_name": "Tester3",
					"id": "U815D35WGQZS41Y2KJG",
					"sub": "U815D35WGQZS41Y2KJG",
					"phone_number": "719-659-6885",
					"status": "Active",
					"user_type": "EmployerCompany",
					"created": "7/15/2014 2:42:54 PM",
					"last_modified": "4/23/2019 1:05:54 PM",
					"given_name": "Personified",
					"family_name": "Tester3",
					"currentAccountDID": "A7F0PT78MTMZ470WBBT",
					"user_privileges": {
						"isManager": "True",
						"canPostJobs": "True",
						"canViewAllApps": "True",
						"canUseJobTemplates": "True",
						"hasMySupply": "False",
						"hasRecruitEdgeRDB": "True",
						"hasTalentNetwork": "False",
						"hasRecruitmentEdge": "True",
						"hasRDBEdge": "True",
						"hasRDBAccess": "True",
						"hasCBSearch": "True",
						"hasSpecialJobs": "False",
						"hasRDBDataStore": "False"
					},
					"account_privileges": {
						"hasRecruitmentEdge": "True",
						"hasTalentNetwork": "False",
						"hasSupplyDemandAccess": "True",
						"hasCollegeAnalystAccess": "False",
						"hasCompensationAccess": "True",
						"hasEMSIAnalystAccess": "False",
						"hasSalaryBuilderAccess": "False"
					},
					"impersonating_user": "",
					"company_name": "Personified - DEMO",
					"account_dids": [
						"A7F0PT78MTMZ470WBBT"
					],
					"access": null
				}
			},
			"footer": {
				"FooterNav": [
					{
						"Title": "About Us",
						"AltTxt": "About Us",
						"ExternalPath": "http://stg.hiring.careerbuilder.com/company/about-us",
						"DomainName": "http://stg.hiring.careerbuilder.com",
						"RelativePath": "/company/about-us",
						"HasSeparator": false,
						"NewWindow": true,
						"IsNegative": false,
						"MenuType": 0,
						"Dropdown": []
					},
					{
						"Title": "Privacy & Fraud",
						"AltTxt": "Privacy & Fraud",
						"ExternalPath": "http://stg.hiring.careerbuilder.com/company/security-and-privacy",
						"DomainName": "http://stg.hiring.careerbuilder.com",
						"RelativePath": "/company/security-and-privacy",
						"HasSeparator": false,
						"NewWindow": true,
						"IsNegative": false,
						"MenuType": 0,
						"Dropdown": []
					},
					{
						"Title": "Terms & Conditions",
						"AltTxt": "Terms & Conditions",
						"ExternalPath": "http://stg.hiring.careerbuilder.com/company/terms-and-conditions",
						"DomainName": "http://stg.hiring.careerbuilder.com",
						"RelativePath": "/company/terms-and-conditions",
						"HasSeparator": false,
						"NewWindow": true,
						"IsNegative": false,
						"MenuType": 0,
						"Dropdown": []
					},
					{
						"Title": "Buy Products",
						"AltTxt": "Buy Products",
						"ExternalPath": "http://stg.hiring.careerbuilder.com",
						"DomainName": "http://stg.hiring.careerbuilder.com",
						"RelativePath": "",
						"HasSeparator": false,
						"NewWindow": true,
						"IsNegative": false,
						"MenuType": 0,
						"Dropdown": []
					}
				],
				"SalesContactInfo": {
					"Name": "Sales: Inactive Accounts (h-1102)",
					"Links": [
						{
							"Name": "inbound.sales@careerbuilder.com",
							"Link": "mailto:inbound.sales@careerbuilder.com"
						},
						{
							"Name": "877-345-5256",
							"Link": "tel:877-345-5256"
						}
					]
				},
				"SupportContactInfo": {
					"Name": "Support: ",
					"Links": [
						{
							"Name": "clientsupport@careerbuilder.com",
							"Link": "mailto:clientsupport@careerbuilder.com"
						},
						{
							"Name": "(800) 891-8880",
							"Link": "tel:(800) 891-8880"
						}
					]
				},
				"CopyRights": "© 2019 CareerBuilder, LLC. All rights reserved.",
				"GtmFooterEventName": "EmployerFooter"
			}
		};
		this.cbHeader.saveHeaderData(data);
	}

	ngOnInit() { }
}