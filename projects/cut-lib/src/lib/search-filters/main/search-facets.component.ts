import { Component, OnInit, Input } from '@angular/core';

import { CityFacetModel } from '../../models/data-structures/city-facet-model';

@Component({
  selector: 'cut-search-facets',
  templateUrl: './search-facets.component.html',
  styleUrls: ['./search-facets.component.scss']
})

export class CutSearchFacetsComponent implements OnInit {

  @Input() showCityFacet: boolean = true;

  //will be used to polulate if whole module used. Used - later...
  @Input() filterData: any;

  constructor() { }

  ngOnInit() { }

  // To get the output of city filyter - same will be used in any component with import city filter.
  getCityfacetData = (data: CityFacetModel) => {
    //do what ever you want with the data - later on i'll combine all facet output
    console.log(data);
  }

}
