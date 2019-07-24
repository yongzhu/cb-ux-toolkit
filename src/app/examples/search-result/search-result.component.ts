import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponentExample implements OnInit {

  resultData = {
    filters: {
      data: [
        {
          filterName: "Full Text",
          config: {
            visible: true,
            selectable: false,
            removable: true,
            addOnBlur: true
          },
          data: [{ name: "sale", id: 1 }, { name: "auto", id: 2 }]
        },
        {
          filterName: "Partial",
          config: {
            visible: true,
            selectable: false,
            removable: true,
            addOnBlur: true
          },
          data: [{ name: "sale", id: 1 }, { name: "fresh", id: 2 }]
        }
      ],
      showComponent: true,
    },
    tabs: {
      data: [
        { name: 'Candidates', id: 1, isSelected: true },
        { name: 'Requistions', id: 2, isSelected: false },
        { name: 'Reports', id: 3, isSelected: false }
      ],
      showComponent: true
    },
    filtersType: {
      data: [
        { name: 'All', id: 1, isSelected: true },
        { name: 'In Progress', id: 2, isSelected: false },
        { name: 'My Candidates', id: 3, isSelected: false },
        { name: 'Resume Database', id: 4, isSelected: false }
      ],
      showComponent: true,
    },
    actionFilters: {
      data: [
        {
          defaultTitle: 'Actions',
          isPrefixedUsed: false,
          prefixVale: '',
          options: [
            'Action',
            'Action1',
            'Action2',
            'Action3',
            'Action4'
          ],
          prefixType: ':'
        },
        {
          defaultTitle: '',
          isPrefixedUsed: true,
          prefixVale: 'Sort By',
          options: [
            'Option1',
            'Option2',
            'Option3',
            'Option4'
          ],
          prefixType: 'colon'
        },
        {
          defaultTitle: '',
          isPrefixedUsed: true,
          prefixVale: 'Freshness',
          options: [
            'Last Year',
            'Option2',
            'Option3',
            'Option4'
          ],
          prefixType: ''
        }
      ],
      showComponent: true,
    },
    resultList: {
      data: [
        {
          id: "Q5ANR-lTP11sxF8",
          name: 'John Thomas',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ],
          inProgress: false,
          isFromResumeBase: false,
        },
        {
          id: "Q5ANR-lTP11sxF12",
          name: 'Tim',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ],
          inProgress: false,
          isFromResumeBase: false,
        },
        {
          id: "Q5ANR-lTP11sxF4",
          name: 'Mice',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ],
          inProgress: true,
          isFromResumeBase: true,
        },
        {
          id: "Q5ANR-lTP11sxF2",
          name: 'Jimmy',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ],
          inProgress: true,
          isFromResumeBase: true,
        },
        {
          id: "Q5ANR-lTP11sxF9",
          name: 'Jerry',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ],
          inProgress: true,
          isFromResumeBase: false,
        },
        {
          id: "Q5ANR-lTP11sxF7",
          name: 'Dev',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ],
          inProgress: true,
          isFromResumeBase: false,
        }
      ],
      showComponent: true,
    }
  }

  constructor() { }

  ngOnInit() { }

}
