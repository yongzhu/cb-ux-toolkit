import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'cut-popup-tooltip',
  templateUrl: "./popup-tooltip.component.html",
  styleUrls: ["./popup-tooltip.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CutPopupTooltipComponent {
  @Input() popupText: string;
  @Input() closeOnMouseLeave: boolean = false;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  openMenu(): void {
    this.trigger.openMenu();
  }

  closeMenu(): void {
    if (this.closeOnMouseLeave) {
      this.trigger.closeMenu();
    }
  }
}
