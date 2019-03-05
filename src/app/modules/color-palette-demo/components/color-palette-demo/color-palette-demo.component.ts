import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-palette-demo",
  templateUrl: "./color-palette-demo.component.html",
  styleUrls: ["./color-palette-demo.component.scss"]
})
export class ColorPaletteDemoComponent {

  open = false;

  toggleOpen($event: any): void {
    if ($event.target.parentElement.classList.contains("open")) {
      $event.target.parentElement.classList.remove("open");
    } else {
      $event.target.parentElement.classList.add("open");
    }
  }
}
