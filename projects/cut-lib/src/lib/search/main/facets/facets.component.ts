import { Component, OnInit, Input, Output } from '@angular/core';

import { InputDropDownFacetModal } from '../../../models/data-structures/Input-dropdown-facet-model';
import { SingleValueModel } from '../../../models/data-structures/single-value-model';
import { ArrayValueModel } from '../../../models/data-structures/array-value-model';

import { FacetModal, FacetEventDataModal } from '../../../models/data-structures/facet-model';
import { Subject } from 'rxjs';


@Component({
  selector: 'cut-search-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})

export class CutFacetsComponent implements OnInit {

  @Input() facetData: FacetModal;
  @Output() facetEventHandler = new Subject<FacetEventDataModal>();

  private resultData: FacetEventDataModal;

  constructor() { }

  ngOnInit() { }

  // To get the output of city filyter - same will be used in any component with import city filter.
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
  }

}
