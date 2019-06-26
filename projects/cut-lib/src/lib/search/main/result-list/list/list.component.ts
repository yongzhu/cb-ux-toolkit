import { Component, OnInit, Input } from "@angular/core";
import { CutVerticalOptionModel } from  "../../../../models/data-structures/result-list-model";

@Component({
  selector: "cut-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  @Input() listDetail: any;
  @Input() isFavorite: boolean = false;
  @Input() isSelected: boolean = true;
  othersSkills: CutVerticalOptionModel[];

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
