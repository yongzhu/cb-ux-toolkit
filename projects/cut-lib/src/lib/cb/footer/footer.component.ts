import { Component, Directive, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

import { HeaderDataInterface } from "./../header/header.model";
import { HeaderService } from "./../header/header.service";
import { FooterConfig } from "./footer.model";
import { FooterService } from "./footer.service";

@Component({
  selector: "cb-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input()
  inverted: boolean;
  year: number = new Date().getFullYear();
  footerClasses = "";

  headerObjSub: Subscription;
  headerObj: HeaderDataInterface;
  validHeaderObj$: Observable<boolean>;

  footerObjSub: Subscription;
  footerObj: FooterConfig;
  validFooterObj$: Observable<boolean>;

  constructor(
    private headerService: HeaderService,
    private footerService: FooterService
  ) {
  }

  ngOnInit(): void {
    this.validFooterObj$ = this.footerService.validFooterSourceObservable;
    this.footerObjSub = this.footerService.footerObservable
      .pipe(filter(footerObj => !!footerObj))
      .subscribe(footerObj => this.footerObj = footerObj);

    this.validHeaderObj$ = this.headerService.validHeaderSourceObservable;
    this.headerService.headerObservable
      .pipe(filter(headerObj => !!headerObj))
      .subscribe(headerObj => this.headerObj = headerObj);

    if (this.inverted) {
      this.footerClasses = "footer-inverted";
    } else {
      this.footerClasses = "footer-default";
    }
  }

  ngOnDestroy(): void {
    if (this.footerObjSub) {
      this.footerObjSub.unsubscribe();
    }
    if (this.headerObjSub) {
      this.headerObjSub.unsubscribe();
    }
  }

  getTargetAttribute(newWindow: boolean): string {
    return this.headerService.getTargetAttribute(newWindow);
  }
}

@Directive({ selector: "footer-items" }) // tslint:disable-line:directive-selector
export class FooterChildTagsDirective { }

export const FOOTER_TAGS = [FooterComponent, FooterChildTagsDirective];
