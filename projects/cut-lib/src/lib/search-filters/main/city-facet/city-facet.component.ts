import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { CityFacetModel } from '../../../models/data-structures/city-facet-model';
import { DropDownModel } from '../../../models/data-structures/drop-down-model';

@Component({
  selector: 'cut-city-facet',
  templateUrl: './city-facet.component.html',
  styleUrls: ['./city-facet.component.scss']
})

export class CityFacetComponent implements OnInit {

  //For demo purpose - default value.
  @Input() options: DropDownModel[] = [
    {
      displayName: '20 Miles',
      displayValue: '20miles'
    },
    {
      displayName: '25 Miles',
      displayValue: '25miles'
    }
  ];
  @Input() defaultMustHave: number = 1;
  @Input() title: string = 'City';

  @Output('facetHandler') facetHandler = new Subject<CityFacetModel>();

  facetData: CityFacetModel = {
    postalCode: '',
    cityDropdown: '',
    niceToHave: this.defaultMustHave,
  }

  constructor() { }

  ngOnInit() { }

  postalchangeHandler = (data: string) => {
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
