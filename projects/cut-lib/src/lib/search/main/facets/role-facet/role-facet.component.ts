import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { SingleValueModel } from '../../../../models/data-structures/single-value-model';

@Component({
  selector: 'cut-role-facet',
  templateUrl: './role-facet.component.html',
  styleUrls: ['./role-facet.component.scss']
})

export class RoleFacetComponent implements OnInit {

  @Input() defaultMustHave: number = 1;
  @Input() title: string = 'Title/Roles';

  @Output('facetHandler') facetHandler = new Subject<SingleValueModel>();

  facetData: SingleValueModel = {
    inputValue: '',
    niceToHave: this.defaultMustHave,
  }

  constructor() { }

  ngOnInit() { }

  inputChangeHandler = (data: string) => {
    this.facetData.inputValue = data;
    this.facetHandler.next(this.facetData)
  }

  getCurrentLevel = (val: number) => {
    this.facetData.niceToHave = val;
    this.facetHandler.next(this.facetData)
  }
}
