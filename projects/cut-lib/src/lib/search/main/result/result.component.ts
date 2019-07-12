import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cut-search-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class CutSearchResultComponent implements OnInit {

  @Input() resultData: any;

  constructor() { }
  ngOnInit() { }

  tabChangeHandler = (id: number) => {
    console.log(id);
  }

  filtersChangeHandler = (id: number) => {
    console.log(id);
  }

}
