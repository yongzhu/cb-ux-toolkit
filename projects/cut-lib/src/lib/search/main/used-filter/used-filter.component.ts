import { Component, Input } from '@angular/core';

@Component({
  selector: 'cut-used-filter',
  templateUrl: './used-filter.component.html',
  styleUrls: ['./used-filter.component.css'],
})
export class UsedFilterComponent {

  @Input() filters: any[];

  constructor() { }

}
