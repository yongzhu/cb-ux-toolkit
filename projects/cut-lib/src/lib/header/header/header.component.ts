import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import { Observable } from "rxjs";

import { HeaderService } from "../header.service";

@Component({
  selector: "cut-header",
  templateUrl: "./header.component.html",
  styleUrls: [ "./header.component.scss" ]
})
export class HeaderComponent implements OnInit {
  @Output() sidenavButtonClick = new EventEmitter<null>();

  headerObj: any;
  validHeaderObj$: Observable<boolean>;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.validHeaderObj$ = this.headerService.validHeaderSourceObservable;
    this.headerService.headerObservable.subscribe(headerObj => this.headerObj = headerObj);
  }

  trigger() {
    this.sidenavButtonClick.emit();
  }

  emitActionType(action: string, element?: string, payload?: any) {
    let subItem;
    if (!element) {
      subItem = "";
    } else {
      subItem = ":" + element;
    }
    this.headerService.emitActionType(action, "header" + subItem, payload);
  }
}
