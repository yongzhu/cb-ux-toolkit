import { Component, OnInit, Input } from '@angular/core';
import { Filters } from '../../shared.modal';
import { SearchResultService } from '../../search-result.service';

@Component({
  selector: 'cut-result-filters',
  templateUrl: './result-filters.component.html',
  styleUrls: ['./result-filters.component.css']
})
export class ResultFiltersComponent implements OnInit {

  filters: Filters;
  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    this.filters = this.srService.getFilter('searchFilters');
  }

  clickHandler = (value: string, element: HTMLInputElement) => {
    element.innerHTML = value;
  }

}
