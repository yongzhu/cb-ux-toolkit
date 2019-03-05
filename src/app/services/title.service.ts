import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

import { filter, map, switchMap } from "rxjs/operators";

const DEFAULT_TITLE = "CBES";
const SEPARATOR = " > ";

@Injectable()
export class TitleService {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }

  init() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => route.firstChild),
      switchMap(route => route.data),
      map((data) => {
        if (data.title) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          return "";
        }
      })
    )
      .subscribe((pathString) => this.titleService.setTitle(`${DEFAULT_TITLE} ${pathString}`));
  }
}
