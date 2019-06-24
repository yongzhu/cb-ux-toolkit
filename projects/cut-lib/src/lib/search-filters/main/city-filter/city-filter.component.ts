import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CityFilterModel } from '../../../models/data-structures/city-filter-model';
import { SearchFilterService } from '../../search-filter.service';

@Component({
  selector: 'cut-city-filter',
  templateUrl: './city-filter.component.html',
  styleUrls: ['./city-filter.component.scss']
})

export class CityFilterComponent implements OnInit, OnDestroy {

  @Input() options: string[] = ['20miles', '25miles'];
  @Input() defaultMustHave: number = 1;
  @Output('cityFIlterHandler') cityFIlterHandler = new Subject<CityFilterModel>();
  privatesub: Subscription;

  cityFilterData: CityFilterModel = {
    postalCode: '',
    cityDropdown: '',
    niceToHave: this.defaultMustHave,
  }

  constructor(private sfService: SearchFilterService) { }

  ngOnInit() {
    this.sub = this.sfService.cityFilterValueHandler.subscribe((data: CityFilterModel) => {
      this.cityFIlterHandler.next(data);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  postalchangeHandler = (data: string) => {
    this.cityFilterData.postalCode = data;
    this.sfService.cityFilterValueHandler.next(this.cityFilterData)
  }
  clickHandler = (value: string, element: HTMLInputElement) => {
    element.innerHTML = value;
    this.cityFilterData.cityDropdown = value;
    this.sfService.cityFilterValueHandler.next(this.cityFilterData)
  }

  getCurrentLevel = (val: number) => {
    this.cityFilterData.niceToHave = val;
    this.sfService.cityFilterValueHandler.next(this.cityFilterData)
  }
}
