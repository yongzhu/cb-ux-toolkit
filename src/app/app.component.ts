import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FooterConfig } from "cut/lib/footer/footer.model";
import { HeaderData } from "cut/lib/framework/header.models";

import { FooterService } from "./services/footer.service";
import { HeaderService } from "./services/header.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "cut-app";
  headerObj: HeaderData;
  footerObj: FooterConfig;

  constructor(private router: Router,
    private headerService: HeaderService,
    private footerService: FooterService) { }

  ngOnInit(): void {
    this.headerService.getHeaderData().subscribe((headerData) => {
      this.headerObj = headerData;
    });
    this.footerService.getFooterData().subscribe((footerData) => {
      this.footerObj = footerData;
    });
  }

  async getAction(eventObj: any): Promise<boolean> {
    // tslint:disable-next-line:no-console
    console.log(eventObj.action + " action was returned "
      + "from this element: " + eventObj.elementTitle
      + " with optional payload: " + JSON.stringify(eventObj.payload));

    let promise = new Promise<boolean>(() => true);
    switch (eventObj.action) {
      case "SWITCH_APP_ACTION":
        if (!eventObj.payload.newWindow) {
          promise = this.router.navigate([eventObj.payload.internalPath]);
          this.headerObj.product = eventObj.payload;
        }
        if (eventObj.payload.newWindow) {
          window.location.href = eventObj.payload.externalPath;
        }
        break;
      case "BACKGROUND_COLOR_ACTION":
        this.headerObj.userProfile.user["bgColor"] = eventObj.payload;
    }
    return promise;
  }
}
