import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cut-kpi-tile',
  templateUrl: './kpi-tile.component.html',
  styleUrls: ['./kpi-tile.component.scss']
})
export class CutKpiTileComponent implements OnInit {
	@Input() title: string;
	@Input() mainCount: string = '0';
	@Input() secondaryCount: string;
	@Input() infoText: string;
	@Input() showProgressBar: boolean = true;
	@Input() progressBarValue: number = 0;
	@Input() progressBarMode: string = 'determinate'

  constructor() { }

  ngOnInit() {
  }

}
