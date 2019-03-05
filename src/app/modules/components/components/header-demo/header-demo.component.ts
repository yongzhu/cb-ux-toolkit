import { Component, OnInit } from "@angular/core";
@Component({

  selector: "app-header-demo",
  templateUrl: "./header-demo.component.html",
  styleUrls: ["./header-demo.component.scss"]
})
export class HeaderDemoComponent {

  isCbToggled = false;
  isSdBetaToggled = false;
  isSdToggled = false;

  codeHeader1 = `
    <cb-header>
      <nav-brand>
        <a class="navbar-brand" href="'http://www.careerbuilder.com'">
          <img [attr.src]="'images/CB-logo.png'">
        </a>
      </nav-brand>
      <nav-items>
        <span class="item">
          navigation item
        </span>
      </nav-items>
    </cb-header>
  `;

  codeHeader2 = `
    <cb-header>
      <nav-brand>
        <a class="navbar-brand" href="'https://supplydemand.careerbuilder.com'">
          <img [attr.src]="'images/Supply_Demand_Beta-Logo.png'">
        </a>
      </nav-brand>
      <nav-items>
        <span class="item">
          navigation item
        </span>
      </nav-items>
    </cb-header>
  `;

  codeHeader3 = `
    <cb-header>
      <nav-brand>
        <a class="navbar-brand" href="'https://supplydemand.careerbuilder.com'">
          <img [attr.src]="'images/Supply_Demand-Logo.png'">
        </a>
      </nav-brand>
      <nav-items>
        <span class="item">
          navigation item
        </span>
      </nav-items>
    </cb-header>
  `;

  updateHeader(toggleType: string) {
    if (toggleType === "cb") {
      this.isCbToggled = !this.isCbToggled;
      this.isSdBetaToggled = false;
      this.isSdToggled = false;
    } else if (toggleType === "supply_demand_beta") {
      this.isCbToggled = false;
      this.isSdBetaToggled = !this.isSdBetaToggled;
      this.isSdToggled = false;
    } else if (toggleType === "supply_demand") {
      this.isCbToggled = false;
      this.isSdBetaToggled = false;
      this.isSdToggled = !this.isSdToggled;
    }
  }
}
