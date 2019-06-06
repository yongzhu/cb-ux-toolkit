import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../../shared.modal';
import { SearchResultService } from '../../search-result.service';
import { log } from 'util';

@Component({
  selector: 'cut-result-filters',
  templateUrl: './result-filters.component.html',
  styleUrls: ['./result-filters.component.css']
})
export class ResultFiltersComponent implements OnInit {

  filters: Filter;
  selectedValue: number;
  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    const filterData = this.srService.getFilter('searchFilters');
    this.filters = filterData;
    this.selectedValue = filterData[0].id;
  }

  onChangeFlter = (eventData: any) => {
    console.log(eventData.value);
  }

}
