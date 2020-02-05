import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { PopupTooltip } from './popup-tooltip.model';

@Component({
  selector: 'cut-popup-tooltip',
  templateUrl: "./popup-tooltip.component.html",
  styleUrls: ["./popup-tooltip.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CutPopupTooltipComponent {
  @Input() popupInfo: PopupTooltip;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }
  
  closeMenu(): void {
    if (this.popupInfo && this.popupInfo.closeOnMouseLeave) {
      this.trigger.closeMenu();
    }
  }
}
