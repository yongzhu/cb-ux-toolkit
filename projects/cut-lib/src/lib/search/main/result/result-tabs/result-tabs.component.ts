import { Component, Input, Output, OnChanges } from "@angular/core";
import { CutNameIdModel } from "../../../../models/data-structures/name-id-model";
import { Subject } from "rxjs";
import { InputFormExample } from "@angular/material-examples/input-form/input-form-example";

@Component({
  selector: "cut-result-tabs",
  templateUrl: "./result-tabs.component.html",
  styleUrls: ["./result-tabs.component.scss"]
})
export class ResultTabsComponent implements OnChanges {

  @Input() public tabs: CutNameIdModel[];
  @Output() public tabChangeHandler = new Subject<number>();

  activeLink: number | string;


  constructor() { }

  ngOnChanges() {
    if (!this.activeLink) {
      this.activeLink = this.tabs[0].id;
    }
  }

  clickHandler = (id: number) => {
    this.activeLink = id;
    this.tabChangeHandler.next(id);
  }
}
