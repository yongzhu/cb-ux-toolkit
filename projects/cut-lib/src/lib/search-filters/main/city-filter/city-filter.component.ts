import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cut-city-filter',
  templateUrl: './city-filter.component.html',
  styleUrls: ['./city-filter.component.scss']
})

export class CityFilterComponent implements OnInit {

  @Input() options: string[] = ['20miles', '25miles'];
  currentSelectedValue: number = 1;
  postalValue: string;
  postalDistance: string = '';

  constructor() { }

  ngOnInit() { }

  clickHandler = (value: string, element: HTMLInputElement) => {
    element.innerHTML = value;
    this.postalDistance = value;
  }

  getCurrentLevel = (val: number) => {
    console.log(val);
    console.log('postal value', this.postalValue);
    console.log('postal distance', this.postalDistance);
    console.log('nice to have value', this.currentSelectedValue);
  }
}
