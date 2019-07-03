import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CutNameIdModel } from "../../../../models/data-structures/name-id-model";
import { single } from "rxjs/operators";

const dummyData = [
  { name: 'All', id: 1, isSelected: true },
  { name: 'In Progress', id: 2, isSelected: false },
  { name: 'My Candidates', id: 3, isSelected: false },
  { name: 'Resume Database', id: 4, isSelected: false }
];

@Component({
  selector: "cut-result-type-filter",
  templateUrl: "./result-type-filter.component.html",
  styleUrls: ["./result-type-filter.component.scss"]
})
export class ResultTypeFilterComponent {

  @Input() public filters: CutNameIdModel[] = dummyData;
  @Output() public filtersChange = new EventEmitter();

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

    console.log(id);
    this.filtersChange.emit(id);
  }

}
