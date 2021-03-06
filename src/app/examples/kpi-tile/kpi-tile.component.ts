import { Component } from '@angular/core';

import { KpiTileData, MessageType } from 'projects/cut-lib/src/lib/kpi-tile/kpi-tile.model';

@Component({
  selector: 'app-kpi-tile',
  templateUrl: './kpi-tile.component.html',
  styleUrls: ['./kpi-tile.component.scss']
})
export class KpiTileComponentExample {
  sample1: KpiTileData = {
    title: 'Test Title',
    infoText: 'Test info text',
    inContainer: true,
    showProgressBar: false,
    message: 'This is warn msg.',
    messageType: MessageType.WARN
  }

  sample2: KpiTileData = {
    title: 'Test Title',
    infoText: 'Test info text',
    inContainer: true,
    showProgressBar: false,
    message: 'This is error msg.',
    messageType: MessageType.ERROR
  }

  sample3: KpiTileData = {
    title: 'Test Title',
    infoText: 'Test info text',
    inContainer: true,
    showProgressBar: false,
    message: 'This is no data available msg.',
    messageType: MessageType.INFO
  }

  sample4: KpiTileData = {
    title: 'Test Title',
    mainCount: 30,
    infoText: 'Test info text',
    inContainer: true,
    showProgressBar: true,
    showIndicator: true
  }

  sample5: KpiTileData = {
    title: 'Test Title',
    mainCount: 30,
    infoText: 'Test info text',
    showIndicator: true
  }

  sample6: KpiTileData = {
    title: 'Test Title',
    mainCount: 45,
    infoText: 'Test info text',
    popupInfo: {
      text: 'This is just a test',
      icon: 'info'
    }
  }

  sample7: KpiTileData = {
    title: 'Test Title',
    mainCount: 65,
    infoText: 'Test info text',
    inContainer: true,
    popupInfo: {
      text: 'This is just a test',
      icon: 'warning'
    }
  }

  constructor() { }

}
