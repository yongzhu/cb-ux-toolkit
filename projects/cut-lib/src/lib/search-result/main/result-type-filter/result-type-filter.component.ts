import { Component, Input } from "@angular/core";

@Component({
  selector: "cut-result-type-filter",
  templateUrl: "./result-type-filter.component.html",
  styleUrls: ["./result-type-filter.component.css"]
})
export class ResultTypeFilterComponent {

  @Input() filters: any[] = [];
  private dataKey: string = 'resultTypeFilter';

  constructor() { }

  onFilterClick = (id: number) => {
    console.log('result-type-filter', id);
  }

}
