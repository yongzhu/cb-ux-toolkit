import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { SearchResultService } from '../search-result.service';
import { CutResultModel } from '../../models/data-structures/result-model';

@Component({
  selector: 'cut-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class CutSearchResultComponent implements OnInit {

  @Input() resultData: CutResultModel;
  @Input() showUserFilter: boolean = true;
  @Input() showTabs: boolean = true;
  @Input() showFilterType: boolean = true;
  @Input() showFilters: boolean = true;
  @Input() showList: boolean = true;

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    if (this.resultData) {
      this.srService.setServiveData(this.resultData);
    } else {
      this.resultData = this.srService.getServiceData();
    }
    this.showUserFilter = this.resultData.usedFilters ? true : false;
    this.showTabs = this.resultData.resultTabs ? true : false;
    this.showFilterType = this.resultData.resultTypeFilter ? true : false;
    this.showFilters = this.resultData.searchFilters ? true : false;
    this.showList = this.resultData.resultList ? true : false;
  }
}
