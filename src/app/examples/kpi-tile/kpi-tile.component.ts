import { Component, OnInit } from '@angular/core';

import { PopupTooltip } from './../../../../projects/cut-lib/src/lib/popup-tooltip/popup-tooltip.model';

@Component({
  selector: 'app-kpi-tile',
  templateUrl: './kpi-tile.component.html',
  styleUrls: ['./kpi-tile.component.scss']
})
export class KpiTileComponentExample implements OnInit {
  popupInfo: PopupTooltip

  constructor() { }

  ngOnInit() {
    this.popupInfo = new PopupTooltip();
    this.popupInfo.closeOnMouseLeave = true;
    this.popupInfo.text = 'This is just a test';
  }

}
