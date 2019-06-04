import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../search-result.service';
import { Filter } from '../../shared.modal';


@Component({
  selector: 'cut-used-filter',
  templateUrl: './used-filter.component.html',
  styleUrls: ['./used-filter.component.css'],
})
export class UsedFilterComponent implements OnInit {

  filters: Filter[];

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    const filterData = this.srService.getFilter('usedFilters');
    this.filters = filterData;
  }

}
