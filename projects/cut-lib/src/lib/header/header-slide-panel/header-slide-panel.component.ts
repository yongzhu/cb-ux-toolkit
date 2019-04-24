import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CutHeaderService } from "../header.service";

@Component({
  selector: "cut-header-slide-panel",
  templateUrl: "./header-slide-panel.component.html",
  styleUrls: ["./header-slide-panel.scss"]
})
export class CutHeaderSlidePanelComponent implements OnInit {

  headerObj: any;

  constructor(private headerService: CutHeaderService) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
    });
  }

}
