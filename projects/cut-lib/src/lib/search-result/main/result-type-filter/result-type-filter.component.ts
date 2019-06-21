import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cut-result-type-filter",
  templateUrl: "./result-type-filter.component.html",
  styleUrls: ["./result-type-filter.component.css"]
})
export class ResultTypeFilterComponent {

  @Input() public filters: any[] = [];
  @Output() public filtersChange = new EventEmitter();
  private dataKey: string = 'resultTypeFilter';

  constructor() { }

  onFilterClick = (id: number) => {
    this.filtersChange.emit(id);
  }

}
