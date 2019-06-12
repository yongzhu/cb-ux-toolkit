import { Component, OnInit, Input } from '@angular/core';
import { VerticalOptionData } from '../../../shared.modal';

@Component({
  selector: 'cut-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listDetail: any;
  @Input() isFavorite: boolean = false;
  @Input() isSelected: boolean = true;
  othersSkills: VerticalOptionData[];

  constructor() { }

  ngOnInit() {
    this.othersSkills = this.convertArrayToVerticalOption(this.listDetail.skills.slice(3));
  }

  convertArrayToVerticalOption = (data: []) => {
    return data.map(single => {
      return {
        name: single,
        icon: ''
      }
    })
  }

}
