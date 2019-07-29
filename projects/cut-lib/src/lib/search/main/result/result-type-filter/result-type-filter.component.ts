import { Component, Input, Output } from "@angular/core";
import { CutNameIdModel } from "../../../../models/data-structures/name-id-model";
import { Subject } from "rxjs";

@Component({
  selector: "cut-result-type-filter",
  templateUrl: "./result-type-filter.component.html",
  styleUrls: ["./result-type-filter.component.scss"]
})
export class ResultTypeFilterComponent {

  @Input() public filtersType: CutNameIdModel[];
  @Output() public filtersChangeHandler = new Subject<number>();

  constructor() { }

  onFilterClick = (id: number) => {

    //for demo purpose. - selected value will be changed on the basis of input value.
    /* this.filters = this.filters.map(single => {
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
    this.filtersChangeHandler.next(id);
  }

}
