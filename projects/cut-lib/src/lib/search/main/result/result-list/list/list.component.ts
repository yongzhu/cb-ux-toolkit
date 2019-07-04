import { Component, OnInit, Input } from "@angular/core";
import { CutVerticalOptionModel, CutResultListModel } from  "../../../../../models/data-structures/result-list-model";

@Component({
  selector: "cut-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  @Input() listDetail: CutResultListModel;
  @Input() isFavorite: boolean = false;
  @Input() isSelected: boolean = true;
  othersSkills: CutVerticalOptionModel[];

  constructor() { }

  ngOnInit() {
    if(this.listDetail.skills){
      this.othersSkills = this.convertArrayToVerticalOption(this.listDetail.skills.slice(3));
    }
  }

  convertArrayToVerticalOption = (data: string[]) => {
    return data.map(single => {
      return {
        name: single,
        icon: ''
      }
    })
  }

}
