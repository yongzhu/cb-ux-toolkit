import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { MatAccordionDisplayMode } from '../shared.modal';

@Component({
  selector: 'cut-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class CutSearchFilterComponent implements OnInit {

  @Input() showCityFilter: boolean = true;

  constructor() { }

  ngOnInit() {

  }

}
