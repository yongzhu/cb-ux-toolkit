import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { HeaderService } from "../header.service";

@Component({
  selector: "cut-header-slide-panel",
  templateUrl: "./header-slide-panel.component.html",
  styleUrls: ["./header-slide-panel.scss"]
})
export class HeaderSlidePanelComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
    });
  }

}
