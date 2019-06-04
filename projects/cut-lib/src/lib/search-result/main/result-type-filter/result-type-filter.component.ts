import { Component, OnInit } from '@angular/core';
import { Filter } from '../../shared.modal';
import { SearchResultService } from '../../search-result.service';

@Component({
  selector: 'cut-result-type-filter',
  templateUrl: './result-type-filter.component.html',
  styleUrls: ['./result-type-filter.component.css']
})
export class ResultTypeFilterComponent implements OnInit {

  filters: Filter[];
  isSelected: number;

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    this.filters = this.srService.getFilter('resultTypeFilter');
    this.isSelected = this.filters[0].id;
  }

  onFilterClick = (id: number) => {
    this.isSelected = id;
  }

}
