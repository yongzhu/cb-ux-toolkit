import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { SingleValueModel } from '../../../../models/data-structures/single-value-model';

@Component({
  selector: 'cut-input-facet',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputFacetComponent implements OnInit {

  @Input() defaultMustHave: number;
  @Input() facetTitle: string;
  @Input() autoCompeleteList: string[];
  @Input() fieldToWorkWith: string;

  @Output('facetHandler') facetHandler = new Subject<SingleValueModel>();

  facetData: SingleValueModel;

  constructor() { }

  ngOnInit() {
    this.facetData = {
      inputValue: '',
      niceToHave: this.defaultMustHave,
      fieldToWorkWith: this.fieldToWorkWith
    }
  }

  inputChangeHandler = (data: string) => {
    this.facetData.inputValue = data;
    this.facetHandler.next(this.facetData)
  }

  getCurrentLevel = (val: number) => {
    this.facetData.niceToHave = val;
    this.facetHandler.next(this.facetData)
  }
}
