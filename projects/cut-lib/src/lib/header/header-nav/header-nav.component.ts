import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CutHeaderService } from "../header.service";
import { MatMenuTrigger } from "@angular/material";
@Component({
  selector: "cut-header-nav",
  templateUrl: "./header-nav.component.html",
  styleUrls: ["./header-nav.component.scss"]
})
export class CutHeaderNavComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: CutHeaderService, public router: Router) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
    });
  }

  showAsActive(item: any) {
    return this.headerService.showAsActive(item);
  }

  emitActionType(action: string, element?: string) {
    let subItem;
    if (!element) {
      subItem = "";
    } else {
      subItem = ":" + element;
    }
    this.headerService.emitActionType(action, "leftNav" + subItem);
  }

  getTargetAttribute(newWindow: boolean) {
    return this.headerService.getTargetAttribute(newWindow);
  }
}
