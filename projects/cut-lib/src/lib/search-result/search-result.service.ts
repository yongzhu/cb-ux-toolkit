export class SearchResultService {

  private resultData = {
    usedFilters: [
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
    resultTabs: [
      { name: 'Candidates', id: 1 },
      { name: 'Requistions', id: 2 },
      { name: 'Reports', id: 3 }
    ],
    resultTypeFilter: [
      { name: 'All', id: 1 },
      { name: 'In Progress', id: 2 },
      { name: 'My Candidates', id: 3 },
      { name: 'Resume Database', id: 4 }
    ],
    searchFilters: [
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
    resultList: [
      {
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
        ]
      }
    ]
  };

  getFilter = (name: string) => {
    return this.resultData[name];
  };
}
