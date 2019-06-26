import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment.prod";

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

  constructor() { }

  ngOnInit() {
    this.searchApi = environment.search_api.test_api1;
    this.apiMap = "CutCandidateTestapi1Map";
  }

  searchResult($event) {
    if (Array.isArray($event) && $event.length > 0) {
      this.showResult = true;
      this.showError = false;
      this.result = $event;
      this.count = this.result.length;
    } else {
      this.showError = true;
      this.showResult = false;
      if ($event.length > 0) {
        this.resultError = $event;
      } else {
        this.resultError = "Something bad happened. Try again later."
      }
    }
  }

}
