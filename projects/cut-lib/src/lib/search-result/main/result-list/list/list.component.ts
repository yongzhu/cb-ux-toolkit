import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cut-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listDetail: any;
  @Input() isFavorite: boolean = false;
  @Input() isSelected: boolean = true;

  constructor() { }

  ngOnInit() {
    console.log(this.listDetail);
  }

}
