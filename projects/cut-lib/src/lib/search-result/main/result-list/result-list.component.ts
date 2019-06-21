import { Component, Input } from "@angular/core";
import { SearchResultService } from "../../search-result.service";
import { CutCandidateModel } from "../../../models/data-structures/candidate-model";
import { Subscription } from "rxjs";

@Component({
  selector: "cut-result-list",
  templateUrl: "./result-list.component.html",
  styleUrls: ["./result-list.component.scss"]
})
export class ResultListComponent {

  @Input() resultList: CutCandidateModel[] = [];

  constructor() { }

}
