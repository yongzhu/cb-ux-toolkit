import {
  Component,
  OnInit,
  Input,
  OnDestroy
} from '@angular/core';
import { SearchResultService } from '../search-result.service';
import { CutResultModel } from '../../models/data-structures/result-model';
import { CutApiService } from '../../utils/cut-api.service';
import { Subscription } from 'rxjs';
import { log } from 'util';

@Component({
  selector: 'cut-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class CutSearchResultComponent implements OnInit, OnDestroy {

  //@Input() resultData: CutResultModel;
  @Input() showUserFilter: boolean = true;
  @Input() showTabs: boolean = true;
  @Input() showFilterType: boolean = true;
  @Input() showFilters: boolean = true;
  @Input() showList: boolean = true;

  private resultSubscription: Subscription;

  constructor(
    private srService: SearchResultService,
    private cutService: CutApiService
  ) { }

  ngOnInit() {

    this.resultSubscription = this.cutService.staticTest<CutResultModel>()
      .subscribe(searchResponse => {
        this.srService.setServiceData(searchResponse);
        this.showUserFilter = searchResponse.usedFilters ? true : false;
        this.showTabs = searchResponse.resultTabs ? true : false;
        this.showFilterType = searchResponse.resultTypeFilter ? true : false;
        this.showFilters = searchResponse.searchFilters ? true : false;
        this.showList = searchResponse.resultList ? true : false;
      });
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
  }
}
