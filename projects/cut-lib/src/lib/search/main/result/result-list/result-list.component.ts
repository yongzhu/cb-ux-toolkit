import { Component, Input, OnInit } from "@angular/core";
import { CutResultListModel } from "../../../../models/data-structures/result-list-model";

@Component({
  selector: "cut-result-list",
  templateUrl: "./result-list.component.html",
  styleUrls: ["./result-list.component.scss"]
})
export class ResultListComponent implements OnInit {

  @Input() resultList: CutResultListModel[];

  constructor() { }

  ngOnInit() {
    //console.log('result list init', this.resultList);
  }
}
