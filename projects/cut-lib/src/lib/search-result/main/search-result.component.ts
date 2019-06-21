import { Component, Input } from '@angular/core';
import { CutResultModel } from "../../models/data-structures/result-model";
import { log } from 'util';

@Component({
  selector: 'cut-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class CutSearchResultComponent {

  @Input() resultData: CutResultModel;
  @Input() showUserFilter: boolean = true;
  @Input() showTabs: boolean = true;
  @Input() showFilterType: boolean = true;
  @Input() showFilters: boolean = true;
  @Input() showList: boolean = true;

  constructor() { }

}
