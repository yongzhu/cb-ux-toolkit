import { Component, Input } from '@angular/core';
import { CutFiltersModel } from '../../../../models/data-structures/filters-model';


const dummyData = [
  {
    defaultTitle: 'Actions',
    isPrefixedUsed: false,
    prefixVale: '',
    options: [
      'Action',
      'Action1',
      'Action2',
      'Action3',
      'Action4'
    ],
    prefixType: ':'
  },
  {
    defaultTitle: '',
    isPrefixedUsed: true,
    prefixVale: 'Sort By',
    options: [
      'Option1',
      'Option2',
      'Option3',
      'Option4'
    ],
    prefixType: 'colon'
  },
  {
    defaultTitle: '',
    isPrefixedUsed: true,
    prefixVale: 'Freshness',
    options: [
      'Last Year',
      'Option2',
      'Option3',
      'Option4'
    ],
    prefixType: ''
  }
];

@Component({
  selector: 'cut-result-filters',
  templateUrl: './result-filters.component.html',
  styleUrls: ['./result-filters.component.scss']
})
export class ResultFiltersComponent {

  @Input() filters: CutFiltersModel[] = dummyData;
  constructor() { }

  clickHandler = (value: string, element: HTMLInputElement) => {
    element.innerHTML = value;
  }

}
