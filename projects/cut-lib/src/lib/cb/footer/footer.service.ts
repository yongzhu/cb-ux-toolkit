import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FooterConfig } from "./footer.model";

@Injectable()
export class FooterService {

  private footerSource = new BehaviorSubject<FooterConfig>({ useApi: false });
  footerObservable: Observable<FooterConfig> = this.footerSource.asObservable();
  footerObj: FooterConfig;

  validFooterSourceObservable = this.footerSource.pipe(
    map<any, boolean>(source => (
      !!source && !!source.useApi && source.useApi
    )));

  sendFooterData(): void {
    this.footerSource.next(this.footerObj);
  }

  saveFooterData(footerObj: FooterConfig): void {
    this.footerObj = footerObj;
    this.sendFooterData();
  }
}
