import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { KpiTileData, MessageType } from './kpi-tile.model';

@Component({
  selector: 'cut-kpi-tile',
  templateUrl: "./kpi-tile.component.html",
  styleUrls: ["./kpi-tile.component.scss"]
})

export class CutKpiTileComponent implements OnInit {
  private _barValue = new BehaviorSubject<number>(null);
  barStyle: string;

  @Input() data: KpiTileData;

  @Input()
  set progressBarValue(value) {
    this._barValue.next(value);
  }

  get progressBarValue() {
    return this._barValue.getValue();
  }

  constructor() { }

  ngOnInit() {
    this._barValue
      .pipe(
        takeWhile(() => !this.barStyle)
      )
      .subscribe(val => {
        if (val) {
          this.setBarColor(val);
        }
      });
  }

  private setBarColor(val: number) {
    // TODO: Get the rules and colors for the different behaviors
    if (val < 30) {
      this.barStyle = "warn";
    } else if (val >= 30 && val < 70) {
      this.barStyle = "accent";
    } else {
      this.barStyle = "primary";
    }
  }

  /**
   * Set the message class based on the type of the message.
   */
  setClass() {
    if (this.data.messageType === MessageType.ERROR) {
      return "cut-kpi-error-msg";
    } else if (this.data.messageType === MessageType.WARN) {
      return "cut-kpi-warn-msg";
    }
    return "cut-kpi-info-msg"; // return info style by default.
  }
}
