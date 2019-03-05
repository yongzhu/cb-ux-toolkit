import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-indicator-demo",
  templateUrl: "./loading-indicator-demo.component.html",
  styleUrls: ["./loading-indicator-demo.component.scss"]
})
export class LoadingIndicatorDemoComponent {
  isLoading = false;

  codeLoadingIndicator1 = `
    <cb-loading-indicator [loading]="isLoading"></cb-loading-indicator>
  `;

  codeLoadingIndicator2 = `
    isLoading = false;

    //the demo button simply changes the boolean value of "isLoading"
  `;
}
