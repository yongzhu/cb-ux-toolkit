import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { HeaderDataInterface } from "./header.model";
import { HEADER_DATA } from "./header.model.mock";

@Injectable({
	providedIn: 'root'
})
export class CutHeaderService {

  headerSource = new BehaviorSubject<HeaderDataInterface>(HEADER_DATA);
  headerObservable: Observable<HeaderDataInterface> = this.headerSource.asObservable();
  headerObj: HeaderDataInterface;

  validHeaderSourceObservable = this.headerSource.pipe(map<HeaderDataInterface, boolean>(source => (
    !!source.userProfile && !!source.userProfile.user ||
    !!source.appSwitcher && !!source.appSwitcher.length ||
    !!source.leftNav && !!source.leftNav.length ||
    !!source.footer
  )));

  private elementSource = new Subject<any>();
  elementObservable = this.elementSource.asObservable();

  constructor(public router: Router) {
  }

  sendHeaderData() {
    this.headerSource.next(this.headerObj);
  }

  saveHeaderData(headerObj: any) {
    this.headerObj = headerObj;
    this.sendHeaderData();
  }

  routeToExternalPath(payload: any) {
    if (payload.newWindow) {
      window.open(payload.externalPath);
    } else {
      window.location.assign(payload.externalPath);
    }
  }

  emitActionType(action: string, elementTitle?: string, payload?: any) {
    const tempObj = { action: action, elementTitle: elementTitle, payload: payload };
    this.elementSource.next(tempObj);
  }

  showAsActive(item: any) {
    if (item.activeRegex) {
      return this.checkRegex(item.activeRegex);
    } else {
      return this.router.url.startsWith(item.internalPath);
    }
  }

  checkRegex(rules: string[]) {
    let boolVal = true;
    rules.forEach((rule: string) => {
      boolVal = boolVal && new RegExp(rule).test(this.router.url);
    });
    return boolVal;
  }

  getTargetAttribute(newWindow: boolean): string {
    const newWindowBool = newWindow === undefined ? false : newWindow;
    return (!newWindowBool) ? "_self" : "_blank";
  }
}

export interface Payload {
  component: string;
  elementType: string;
}
