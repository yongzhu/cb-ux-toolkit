import { Component, OnInit, Input } from '@angular/core';

import { CityFacetModel } from '../../../models/data-structures/city-facet-model';
import { SingleValueModel } from '../../../models/data-structures/single-value-model';
import { ArrayValueModel } from '../../../models/data-structures/array-value-model';

@Component({
  selector: 'cut-search-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})

export class CutFacetsComponent implements OnInit {

  @Input() showCityFacet: boolean = true;
  @Input() showRoleFacet: boolean = true;
  @Input() showSkillFacet: boolean = true;
  @Input() showChecklistFacet: boolean = true;

  //will be used to polulate if whole module used. Used - later...
  @Input() filterData: any;

  constructor() { }

  ngOnInit() { }

  // To get the output of city filyter - same will be used in any component with import city filter.
  getCityfacetData = (data: CityFacetModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    console.log(data);
  }

  // Same as above
  getRolefacetData = (data: SingleValueModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    console.log(data);
  }

   // Same as above
  getSkillfacetData = (data: SingleValueModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    console.log(data);
  }

   // Same as above
  getChecklistfacetData = (data: ArrayValueModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    console.log(data);
  }

}
