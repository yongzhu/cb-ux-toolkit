import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-search-filter',
  templateUrl: 'search-filter.component.html',
  styleUrls: ['search-filter.component.scss'],
})
export class SearchFilterComponentExample implements OnInit {

  //dummyDate sample for facets
  facetData: any = {
    inputDropDownValues: {
      showFacet: true,
      autoCompeleteList: ['NewYork', 'Delhi', 'Noida'],
      facetTitle: "City",
      inputTitle: "Postal/Zip Code or City",
      dropDownOptions: [
        {
          displayName: '20 Miles',
          displayValue: '20miles'
        },
        {
          displayName: '25 Miles',
          displayValue: '25miles'
        }
      ],
      defaultMustHave: 1
    },
    inputValues: {
      showFacet: true,
      autoCompeleteList: [],
      facetTitle: "Titles/Roles",
      defaultMustHave: 1
    },
    checkListValues: {
      optionsList: [
        {
          displayName: 'Less then year',
          displayValue: 'less1',
          isSelected: true,
        },
        {
          displayName: '1 or 2 Year',
          displayValue: '1to2',
          isSelected: true,
        },
        {
          displayName: '3 or 5 Year',
          displayValue: '3to5',
          isSelected: true,
        }
      ],
      showFacet: true,
      facetTitle: "Experience",
      defaultMustHave: 2
    }
  }

  getChangedEvent = (data: any) => {
    console.log(data);
  }

  constructor() { }

  ngOnInit() { }
}
