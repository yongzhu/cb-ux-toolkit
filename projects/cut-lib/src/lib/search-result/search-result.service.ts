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
      { name: 'Action', id: 1 },
      { name: 'Relevancy', id: 2 },
      { name: 'Fressness ', id: 3 }
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
        ]
      }
    ]
  };

  getFilter = (name: string) => {
    return this.resultData[name];
  };
}
