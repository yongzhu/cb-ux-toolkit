import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../header.service";

@Component({
  selector: "cut-header-notifications",
  templateUrl: "./header-notifications.component.html",
  styleUrls: ["./header-notifications.component.scss"]
})
export class HeaderNotificationsComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
    });
  }

  emitActionType(action: string, element?: string, payload?: any) {
    let subItem;
    if (!element) {
      subItem = "";
    } else {
      subItem = ":" + element;
    }
    this.headerService.emitActionType(action, "notification" + subItem, payload);
  }

}
