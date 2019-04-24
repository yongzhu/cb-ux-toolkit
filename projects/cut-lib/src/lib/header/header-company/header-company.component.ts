import { Component, OnInit } from "@angular/core";
import { CutHeaderService } from "../header.service";

@Component({
  selector: "cut-header-company",
  templateUrl: "./header-company.component.html",
  styleUrls: [ "./header-company.component.scss" ]
})
export class CutHeaderCompanyComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: CutHeaderService) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
    });
  }

  routeToExternalPath(path: string) {
    this.headerService.routeToExternalPath(path);
  }

  emitActionType(action: string, element?: string) {
    let subItem;
    if (!element) {
      subItem = "";
    } else {
      subItem = ":" + element;
    }
    this.headerService.emitActionType(action, "rightNav" + subItem);
  }

}
