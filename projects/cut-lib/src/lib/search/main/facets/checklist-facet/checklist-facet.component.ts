import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { CheckListModel } from '../../../../models/data-structures/check-list-model';
import { ArrayValueModel } from '../../../../models/data-structures/array-value-model';

@Component({
  selector: 'cut-checklist-facet',
  templateUrl: './checklist-facet.component.html',
  styleUrls: ['./checklist-facet.component.scss']
})

export class ChecklistFacetComponent implements OnInit {

  //For demo purpose - default value.
  @Input() options: CheckListModel[] = [
    {
      displayName: 'Less then year',
      displayValue: 'less1',
      isSelected: true,
    },
    {
      displayName: '1 or 2 Year',
      displayValue: '1to2',
      isSelected: true,
    },
    {
      displayName: '3 or 5 Year',
      displayValue: '3to5',
      isSelected: true,
    }
  ];

  @Input() defaultMustHave: number = 1;
  @Input() title: string = 'Experience';

  @Output('facetHandler') facetHandler = new Subject<ArrayValueModel>();

  facetData: ArrayValueModel = {
    inputValue: [],
    niceToHave: this.defaultMustHave,
  }

  constructor() { }

  ngOnInit() {
    this.options.forEach(single => {
      if (single.isSelected) {
        this.facetData.inputValue.push(single.displayValue)
      }
    })
  }

  clickHandler = (name: string, value: string) => {
    if (this.facetData.inputValue.indexOf(value) === -1) {
      this.facetData.inputValue.push(value);
    } else {
      this.facetData.inputValue.splice(this.facetData.inputValue.indexOf(value), 1)
    }
    this.options = this.options.map(single => {
      if (single.displayValue === value) {
        return {
          ...single,
          isSelected: !single.isSelected,
        }
      } else {
        return single;
      }
    })
    this.facetHandler.next(this.facetData)
  }

  getCurrentLevel = (val: number) => {
    this.facetData.niceToHave = val;
    this.facetHandler.next(this.facetData)
  }
}
