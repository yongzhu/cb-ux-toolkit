import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../header.service";

@Component({
  selector: "cb-header-settings",
  templateUrl: "./header-settings.component.html",
  styleUrls: ["./header-settings.component.scss"]
})
export class HeaderSettingsComponent implements OnInit {

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
