import { Component, OnInit } from "@angular/core";

import { routes } from "../../modules/components/components.routes";

@Component({
  selector: "app-dynamic-body",
  templateUrl: "./dynamic-body.component.html",
  styleUrls: ["./dynamic-body.component.scss"]
})
export class DynamicBodyComponent implements OnInit {
  title = "VDL Application";
  components: Array<{ text: string, routerLink: string }> = [];
  guidelines: Array<{ text: string, routerLink: string }> = [];

  constructor() {
    this.components = routes.map(route => route.children)[0]
      .map((route) => {
        return { text: route.data.linkText, routerLink: route.data.routerLink };
      });
    this.guidelines = [
      { text: "Overview", routerLink: "/overview" },
      { text: "Color", routerLink: "/color" },
      { text: "Data Entry", routerLink: "/data-entry" },
      { text: "Layout", routerLink: "/layout" },
      { text: "Loading", routerLink: "/loading" },
      { text: "Messaging", routerLink: "/messaging" },
      { text: "Typography", routerLink: "/typography" },
      { text: "Voice & Tone", routerLink: "/voice" }
    ];
  }

  ngOnInit() {
    this.components.sort((a: any, b: any) => {
      if (a.text > b.text) {
        return 1;
      }
      if (a.text > b.text) {
        return -1;
      }
      return 0;
    });

    this.guidelines.sort((a: any, b: any) => {
      if (a.text > b.text) {
        return 1;
      }
      if (a.text > b.text) {
        return -1;
      }
      return 0;
    });
  }

}
