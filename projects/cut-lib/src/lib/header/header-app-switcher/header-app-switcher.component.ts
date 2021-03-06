import { Component, OnInit } from "@angular/core";
import { CutHeaderService } from "../header.service";

@Component({
  selector: "cut-header-app-switcher",
  templateUrl: "./header-app-switcher.component.html",
  styleUrls: ["./header-app-switcher.component.scss"]
})
export class CutHeaderAppSwitcherComponent implements OnInit {

  headerObj: any;
  open = { isOpen: false };

  constructor(private headerService: CutHeaderService) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
    });
  }

  routeToExternalPath(item) {
    this.headerService.routeToExternalPath(item);
  }

  showAppSwitcher() {
    if (!this.headerObj.appSwitcher) {
      return false;
    }
    const hiddenLength = this.headerObj.appSwitcher.filter((item: any) => {
      return item.hidden === true;
    }).length;
    const appSwitcherLength = this.headerObj.appSwitcher.length;
    if (hiddenLength === appSwitcherLength) {
      return false;
    } else {
      return true;
    }
  }

}
