import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../header.service";

@Component({
  selector: "cb-header-company",
  templateUrl: "./header-company.component.html",
  styleUrls: [ "./header-company.component.scss" ]
})
export class HeaderCompanyComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: HeaderService) {
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
