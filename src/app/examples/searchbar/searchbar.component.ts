import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponentExample implements OnInit {
  public showResult = false;
  public result: any[] = [];
  public count = 0;

  constructor() { }

  ngOnInit() {
  }

  searchResult($event) {
    console.log("searchResult Response", $event);
    if (Array.isArray($event) && $event.length > 0) {
      this.showResult = true;
      this.result = $event;
      this.count = this.result.length;
    }
  }

}
