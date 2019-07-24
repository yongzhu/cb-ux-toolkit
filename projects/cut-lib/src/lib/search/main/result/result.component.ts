import { Component, Input, OnInit, Output } from '@angular/core';
import { CutResultModel } from '../../../models/data-structures/result-model';
import { Subject } from 'rxjs';

@Component({
  selector: 'cut-search-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class CutSearchResultComponent implements OnInit {

  @Input() resultData: CutResultModel;
  @Output() detectChanges = new Subject();
  constructor() { }
  ngOnInit() { }

  tabChangeHandler = (id: number) => {
    this.detectChanges.next({ changeType: "tab-change", id: id })
  }

  filtersChangeHandler = (id: number) => {
    this.detectChanges.next({ changeType: "type-change", id: id })
  }

}
