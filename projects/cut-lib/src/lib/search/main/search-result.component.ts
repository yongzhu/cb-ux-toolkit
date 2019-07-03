import { Component, Input } from '@angular/core';
import { CutResultModel } from "../../models/data-structures/result-model";

@Component({
  selector: 'cut-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class CutSearchResultComponent {

  @Input() showUserFilter: boolean = true;
  @Input() showTabs: boolean = true;
  @Input() showFilterType: boolean = true;
  @Input() showList: boolean = true;
  @Input() showFilters: boolean = true;

  constructor() { }

}
