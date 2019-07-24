import { Component, OnInit, Input, Output } from '@angular/core';

import { InputDropDownFacetModal } from '../../../models/data-structures/Input-dropdown-facet-model';
import { SingleValueModel } from '../../../models/data-structures/single-value-model';
import { ArrayValueModel } from '../../../models/data-structures/array-value-model';

import { InputDropDownModal, InputModal, CheckListDataModal } from '../../../models/data-structures/facet-model';
import { Subject } from 'rxjs';

@Component({
  selector: 'cut-search-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})

export class CutFacetsComponent implements OnInit {

  @Input() facetData: (InputDropDownModal | InputModal | CheckListDataModal)[];
  @Output() facetEventHandler = new Subject<(InputDropDownFacetModal | SingleValueModel | ArrayValueModel)[]>();

  private resultData: (InputDropDownFacetModal | SingleValueModel | ArrayValueModel)[] = [];

  constructor() { }

  ngOnInit() { }

  // To get the output of city filyter - same will be used in any component with import city filter.
  facetHandler = (data: (InputDropDownFacetModal | SingleValueModel | ArrayValueModel)) => {
    //do what ever you want with the data - later on i'll combine all facet output
    let dataProcessed: boolean = false;
    if (this.resultData.length === 0) {
      this.resultData.push(data);
      dataProcessed = true;
    } else {
      this.resultData.map(single => {
        if (single.fieldToWorkWith === data.fieldToWorkWith) {
          dataProcessed = true;
          return data;
        } else {
          return single;
        }
      })
    }

    if (!dataProcessed) {
      this.resultData.push(data);
    }
    this.facetEventHandler.next(this.resultData)
  }

  /* // To get the output of city filyter - same will be used in any component with import city filter.
  getInputDropDownFacetData = (data: InputDropDownFacetModal) => {
    //do what ever you want with the data - later on i'll combine all facet output
    this.resultData = {
      ...this.resultData,
      inputDropDownData: data,
    }
    this.facetEventHandler.next(this.resultData)
  }

  // Same as above
  getInputFacetData = (data: SingleValueModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    this.resultData = {
      ...this.resultData,
      inputdata: data,
    }
    this.facetEventHandler.next(this.resultData)
  }

  // Same as above
  getChecklistfacetData = (data: ArrayValueModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    this.resultData = {
      ...this.resultData,
      checkListData: data,
    }
    this.facetEventHandler.next(this.resultData)
  } */

}
