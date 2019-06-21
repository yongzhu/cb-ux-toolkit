import { Component, Input } from '@angular/core';
import { Filters } from '../../shared.modal';

@Component({
  selector: 'cut-result-filters',
  templateUrl: './result-filters.component.html',
  styleUrls: ['./result-filters.component.css']
})
export class ResultFiltersComponent {

  @Input() filters: Filters;
  constructor() { }

  clickHandler = (value: string, element: HTMLInputElement) => {
    element.innerHTML = value;
  }

}
