import { Component, Input, ViewChild, ViewEncapsulation, OnChanges } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'cut-popup-tooltip',
  templateUrl: "./popup-tooltip.component.html",
  styleUrls: ["./popup-tooltip.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CutPopupTooltipComponent implements OnChanges {
  @Input() popupText: string;
  @Input() closeOnMouseLeave: boolean = false;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  ngOnChanges(): void {
    console.log(`${CutPopupTooltipComponent.name}::OnChanges: ${this.popupText}`);
  }

  openMenu(): void {
    this.trigger.openMenu();
  }

  closeMenu(): void {
    if (this.closeOnMouseLeave) {
      this.trigger.closeMenu();
    }
  }
}
