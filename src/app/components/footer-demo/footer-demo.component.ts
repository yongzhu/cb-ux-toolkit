import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-demo",
  templateUrl: "./footer-demo.component.html",
  styleUrls: ["./footer-demo.component.scss"]
})
export class FooterDemoComponent {

  isFooterToggled = false;
  isInvertedFooterToggled = false;

  codeFooter1 = `
     <cb-footer *ngIf="isFooterToggled==true" [inverted]="false">
        <footer-items>
          <nav>
            <ul class="list-footer">
              <li><a href="#" title="Terms & Conditions">Terms & Conditions</a></li>
              <li><a class="active" href="#" title="Security & Privacy">Security & Privacy</a></li>
              <li><a href="#" title="Advertise With Us">Advertise With Us</a></li>
              <li><a href="#" title="Partners & Affiliates">Partners & Affiliates</a></li>
            </ul>
          </nav>
        </footer-items>
      </cb-footer>
  `;
  codeFooter2 = `
     <cb-footer *ngIf="isInvertedFooterToggled==true" [inverted]="true">
        <footer-items>
          <nav>
            <ul class="list-footer">
              <li><a href="#" title="Terms & Conditions">Terms & Conditions</a></li>
              <li><a class="active" href="#" title="Security & Privacy">Security & Privacy</a></li>
              <li><a href="#" title="Advertise With Us">Advertise With Us</a></li>
              <li><a href="#" title="Partners & Affiliates">Partners & Affiliates</a></li>
            </ul>
          </nav>
        </footer-items>
      </cb-footer>
  `;

  updateFooter() {
    this.isFooterToggled = !this.isFooterToggled;
    this.isInvertedFooterToggled = false;
  }

  updateInvertedFooter() {
    this.isInvertedFooterToggled = !this.isInvertedFooterToggled;
    this.isFooterToggled = false;
  }
}
