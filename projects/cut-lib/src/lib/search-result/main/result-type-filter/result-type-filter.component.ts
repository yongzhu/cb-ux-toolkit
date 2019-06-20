import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchResultService } from '../../search-result.service';
import { Subscription } from 'rxjs';
import { CutFilterModel } from '../../../models/data-structures/filter-model';

@Component({
  selector: 'cut-result-type-filter',
  templateUrl: './result-type-filter.component.html',
  styleUrls: ['./result-type-filter.component.css']
})
export class ResultTypeFilterComponent implements OnInit, OnDestroy {

  filters: CutFilterModel[];
  private dataKey: string = 'resultTypeFilter';
  typeSub: Subscription;

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    this.filters = this.srService.getFilter(this.dataKey);
    this.typeSub = this.srService.typeChangeDetectWithData.subscribe(data => {
      this.filters = data;
    })
  }

  ngOnDestroy() {
    this.typeSub.unsubscribe();
  }

  onFilterClick = (id: number) => {
    this.srService.typeChangedHandler(id, this.dataKey)
  }

}
