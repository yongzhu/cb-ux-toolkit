import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";

import { Observable } from "rxjs";

import { FooterConfig } from "../footer/footer.model";
import { FooterService } from "../footer/footer.service";
import { HeaderDataInterface } from "../header/header.model";
import { HeaderService } from "../header/header.service";

@Component({
  selector: "cut-framework",
  templateUrl: "./framework.component.html",
  styleUrls: ["./framework.component.scss"]
})
export class FrameworkComponent implements OnInit {
  showSidePanel = false;
  screenTrigger = 991;
  validHeaderObj$: Observable<boolean>;

  @Input() headerObj: HeaderDataInterface;
  @Input() footerObj: FooterConfig;
  @Input() hideFooter = false;

  @Output() ngValueChange = new EventEmitter();

  constructor(
    private headerService: HeaderService,
    private footerService: FooterService
  ) {}

  ngOnInit(): void {
    this.validHeaderObj$ = this.headerService.validHeaderSourceObservable;
    this.headerService.saveHeaderData(this.headerObj);
    this.headerService.elementObservable.subscribe(action => this.ngValueChange.emit(action));

    this.footerService.saveFooterData(this.footerObj);
  }

  openSidenav(): void {
    this.showSidePanel = true;
  }

  closeSidenav(): void {
    this.showSidePanel = false;
  }

  isSidenavOpen(): boolean {
    return this.showSidePanel;
  }

  toggleSidenav(): void {
    if (this.isSidenavOpen()) {
      this.closeSidenav();

      return;
    }

    this.openSidenav();
  }

  closeSidenavOnOutsideClick(isOpen: boolean): void {
    if (!isOpen) {
      this.closeSidenav();
    }
  }

  @HostListener("window:resize", ["$event"])
  onWindowResize($event: Event): void {
    const window: Window = $event.target as Window;

    if (!this.isSidenavOpen()) { return; }

    if (window.innerWidth > this.screenTrigger) {
      this.closeSidenav();
    }
  }
}
