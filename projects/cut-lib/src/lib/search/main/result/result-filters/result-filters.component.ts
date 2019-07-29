import { Component, Input } from '@angular/core';
import { CutFiltersModel } from '../../../../models/data-structures/filters-model';

@Component({
  selector: 'cut-result-filters',
  templateUrl: './result-filters.component.html',
  styleUrls: ['./result-filters.component.scss']
})
export class ResultFiltersComponent {

  @Input() actionFilters: CutFiltersModel[];

  constructor() { }

  clickHandler = (value: string, element: HTMLInputElement) => {
    element.innerHTML = value;
  }

}
