import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /* this.http
      .get('https://ats-tk-search-produs.cb1cl.com/api/candidatesearch?customer_system=cbinternalbeta&query=sql&offset=0',
        {
          headers: new HttpHeaders({
            'Authorization': 'Basic Y2ItdGstc2VhcmNoOkErc0FkY2V6b0l0cHlLRHNQRHkrT09ybE1XRS8=',
            'Content-Type': 'application/json',
            'Origin':'http://localhost:4300',
            'Access-Control-Allow-Origin': 'http://localhost:4300',
            'Access-Control-Allow-Credentials': 'true'
          }),
          withCredentials: true,
        }
      )
      .subscribe(data => {
        console.log(data);
      }) */
  }
}
