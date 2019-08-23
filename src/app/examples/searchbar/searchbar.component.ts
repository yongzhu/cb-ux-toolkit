import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { ExampleService } from "../example.service";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponentExample implements OnInit {
  public showResult = false;
  public showError = false;
  public resultError = "";
  public result: any[] = [];
  public count = 0;
  public searchApi: string;
  public apiMap: string;
  public apiData: any;
  public map: string;

  constructor(private exampleSr: ExampleService) { }

  ngOnInit() {
    this.searchApi = environment.search_api_endpint;
    this.apiMap = "CutCandidateTestapi1Map";
    this.apiData = {
      ...environment.searchApiData
    }
    this.map = environment.map;
  }

  searchResult(eventData: any) {
    if (Array.isArray(eventData) && eventData.length > 0) {
      this.showResult = true;
      this.showError = false;
      this.result = eventData;
      this.count = this.result.length;
      this.exampleSr.searchDataHandler(eventData)
    } else {
      this.showError = true;
      this.showResult = false;
      if (eventData.length > 0) {
        this.resultError = eventData;
      } else {
        this.resultError = "Something bad happened. Try again later."
      }
    }
  }

}
