import { Component, OnInit, Input, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';

import { CutApiService } from '../../utils/cut-api.service';
import { SearchFilterService } from '../search-filter.service';

import { CityFilterModel } from '../../models/data-structures/city-filter-model';
import { CutResultModel } from '../../models/data-structures/result-model';

@Component({
  selector: 'cut-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class CutSearchFilterComponent implements OnInit, OnDestroy {

  @Input() showCityFilter: boolean = true;
  private resultSubscription: Subscription;

  constructor(
    private sfService: SearchFilterService,
    private cutService: CutApiService
  ) { }

  ngOnInit() {
    this.resultSubscription = this.cutService.staticTest<CutResultModel>()
      .subscribe(searchResponse => {
        this.sfService.setServiceData(searchResponse);
      });
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
  }

  getCityFilterData = (data: CityFilterModel) => {
    //console.log(data);
  }

}
