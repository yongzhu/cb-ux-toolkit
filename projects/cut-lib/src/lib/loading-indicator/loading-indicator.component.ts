import { Component, Input, OnInit } from "@angular/core";

@Component({

  selector: "cut-loading-indicator",
  templateUrl: "./loading-indicator.component.html",
  styleUrls: [ "./loading-indicator.component.scss" ]
})
export class LoadingIndicatorComponent {
  @Input() loading = false;
}
