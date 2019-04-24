import { Component, OnInit } from "@angular/core";
import { CutHeaderService } from "../header.service";

@Component({
  selector: "cut-header-notifications",
  templateUrl: "./header-notifications.component.html",
  styleUrls: ["./header-notifications.component.scss"]
})
export class CutHeaderNotificationsComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: CutHeaderService) {
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
