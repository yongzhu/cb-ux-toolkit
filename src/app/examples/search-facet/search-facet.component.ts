import { Component, OnInit } from "@angular/core";
import { ExampleService } from "../example.service";
import { HttpEventType } from "@angular/common/http";


@Component({
  selector: 'app-search-facet',
  templateUrl: 'search-facet.component.html',
  styleUrls: ['search-facet.component.scss'],
})
export class SearchFacetComponentExample implements OnInit {

  //dummyDate sample for facets
  facetData: any = [
    {
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
      defaultMustHave: 1,
      type: 'inputDropDownValues',
      fieldToWorkWith: 'experienceyears2',
    },
    {
      showFacet: true,
      autoCompeleteList: [],
      facetTitle: "Titles/Roles",
      defaultMustHave: 1,
      type: 'inputValues',
      fieldToWorkWith: 'experienceyears1',
    },
    {
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
      defaultMustHave: 2,
      type: 'checkListValues',
      fieldToWorkWith: 'experienceyears',
    }
  ]

  apiData: any;
  constructor(private exService: ExampleService) { }

  getChangedEvent = (data: any) => {
    console.log(data);
  }

  ngOnInit() {

  }
}
