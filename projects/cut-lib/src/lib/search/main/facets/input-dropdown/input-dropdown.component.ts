import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { InputDropDownFacetModal } from '../../../../models/data-structures/Input-dropdown-facet-model';
import { DropDownModel } from '../../../../models/data-structures/drop-down-model';

@Component({
  selector: 'cut-input-dropdown-facet',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})

export class InputDropdownFacetComponent implements OnInit {

  //For demo purpose - default value.
  @Input() dropDownOptions: DropDownModel[];
  @Input() defaultMustHave: number;
  @Input() facetTitle: string;
  @Input() inputTitle: string;
  @Input() autoCompeleteList: string[];
  @Input() fieldToWorkWith: string;

  @Output('facetHandler') facetHandler = new Subject<InputDropDownFacetModal>();

  facetData: InputDropDownFacetModal;

  constructor() { }

  ngOnInit() {
    this.facetData = {
      postalCode: '',
      cityDropdown: '',
      niceToHave: this.defaultMustHave,
      fieldToWorkWith: this.fieldToWorkWith,
    }
  }

  inputChangeHandler = (data: string) => {
    this.facetData.postalCode = data;
    this.facetHandler.next(this.facetData)
  }

  clickHandler = (name: string, value: string, element: HTMLInputElement) => {
    element.innerHTML = name;
    this.facetData.cityDropdown = value;
    this.facetHandler.next(this.facetData)
  }

  getCurrentLevel = (val: number) => {
    this.facetData.niceToHave = val;
    this.facetHandler.next(this.facetData)
  }
}
