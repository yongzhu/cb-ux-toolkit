import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { FooterConfig } from "cut/lib/cb/footer/footer.model";

@Injectable({
  providedIn: "root"
})
export class FooterService {

  private data: BehaviorSubject<FooterConfig> = new BehaviorSubject<FooterConfig>({
    useApi: false
  });

  constructor() { }

  public getFooterData(): Observable<FooterConfig> {
    return this.data.asObservable();
  }
}
