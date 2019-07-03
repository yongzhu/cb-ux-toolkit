import { Component, Input } from '@angular/core';

@Component({
  selector: 'cut-search-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class CutSearchResultComponent {

  @Input() showUserFilter: boolean = true;
  @Input() showTabs: boolean = true;
  @Input() showFilterType: boolean = true;
  @Input() showList: boolean = true;
  @Input() showFilters: boolean = true;

  constructor() { }

}
