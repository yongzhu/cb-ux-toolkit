import { Component, Input } from '@angular/core';
import { CutUsedFilterModel } from '../../../../models/data-structures/used-filter-model';

const dummyData = [
  {
    filterName: "Full Text",
    config: {
      visible: true,
      selectable: false,
      removable: true,
      addOnBlur: true
    },
    data: [{ name: "sale", id: 1 }, { name: "auto", id: 2 }]
  },
  {
    filterName: "Partial",
    config: {
      visible: true,
      selectable: false,
      removable: true,
      addOnBlur: true
    },
    data: [{ name: "sale", id: 1 }, { name: "fresh", id: 2 }]
  }
];

@Component({
  selector: 'cut-used-filter',
  templateUrl: './used-filter.component.html',
  styleUrls: ['./used-filter.component.scss'],
})
export class UsedFilterComponent {

  @Input() filters: CutUsedFilterModel[] = dummyData;

  constructor() { }

}
