import { Component, Input, Output } from "@angular/core";
import { CutNameIdModel } from "../../../../models/data-structures/name-id-model";
import { Subject } from "rxjs";

const dummyData = [
  { name: 'Candidates', id: 1, isSelected: true },
  { name: 'Requistions', id: 2, isSelected: false },
  { name: 'Reports', id: 3, isSelected: false }
]

@Component({
  selector: "cut-result-tabs",
  templateUrl: "./result-tabs.component.html",
  styleUrls: ["./result-tabs.component.scss"]
})
export class ResultTabsComponent {

  @Input() public tabs: CutNameIdModel[];
  @Output() public tabChangeHandler = new Subject<number>();

  constructor() { }

  clickHandler = (id: number) => {

    //for demo purpose. - selected value will be changed on the basis of input value.
    /* this.links = this.links.map(single => {
      if (id === single.id) {
        return {
          ...single,
          isSelected: !single.isSelected,
        }
      }
      return {
        ...single,
        isSelected: false,
      };
    }) */
    this.tabChangeHandler.next(id);
  }
}
