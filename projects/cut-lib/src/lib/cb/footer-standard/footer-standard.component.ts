import { Component } from "@angular/core";

@Component({
  selector: "cb-footer-standard",
  templateUrl: "./footer-standard.component.html",
  styleUrls: [ "./footer-standard.component.scss" ]
})
export class FooterStandardComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}

export const FOOTER_STANDARD_TAGS = [ FooterStandardComponent ];
