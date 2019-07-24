import { Component, Input } from '@angular/core';
import { CutUsedFilterModel } from '../../../../models/data-structures/used-filter-model';

@Component({
  selector: 'cut-used-filter',
  templateUrl: './used-filter.component.html',
  styleUrls: ['./used-filter.component.scss'],
})
export class UsedFilterComponent {

  @Input() filters: CutUsedFilterModel[];

  constructor() { }

}
