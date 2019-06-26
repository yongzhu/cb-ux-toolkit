import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cut-result-list",
  templateUrl: "./result-list.component.html",
  styleUrls: ["./result-list.component.scss"]
})
export class ResultListComponent implements OnInit {

  @Input() resultList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('result list init', this.resultList);
  }
}
