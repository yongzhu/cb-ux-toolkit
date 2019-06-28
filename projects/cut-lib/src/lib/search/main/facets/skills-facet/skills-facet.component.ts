import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { SingleValueModel } from '../../../../models/data-structures/single-value-model';

@Component({
  selector: 'cut-skills-facet',
  templateUrl: './skills-facet.component.html',
  styleUrls: ['./skills-facet.component.scss']
})

export class SkillsFacetComponent implements OnInit {

  @Input() defaultMustHave: number = 1;
  @Input() title: string = 'IT Skills';

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
