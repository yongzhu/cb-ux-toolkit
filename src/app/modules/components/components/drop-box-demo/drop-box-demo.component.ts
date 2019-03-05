import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drop-box-demo",
  templateUrl: "./drop-box-demo.component.html",
  styleUrls: ["./drop-box-demo.component.scss"]
})
export class DropBoxDemoComponent {
  open = false;

  codeDropbox1 = `
    <span class="somespan" (click)="open = !open">
      Click me to open drop
    </span>
    <cb-drop-box [(open)]="open">
      <div class="app-item row">
        <div class="col-md-12">
          Item
        </div>
      </div>
      <div class="app-item row">
        <div class="col-md-12">
          Item
        </div>
      </div>
      <div class="app-item row">
        <div class="col-md-12">
          Item
        </div>
      </div>
      <div class="app-item row">
        <div class="col-md-12">
          Item
        </div>
      </div>
    </cb-drop-box>
  `;
}
