import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
	selector: 'cut-kpi-tile',
	templateUrl: './kpi-tile.component.html',
	styleUrls: ['./kpi-tile.component.scss']
})

export class CutKpiTileComponent implements OnInit {
	private _barValue = new BehaviorSubject<number>(null);
	barStyle: string;

	@Input() title: string;
	@Input() mainCount: string = '0';
	@Input() secondaryCount: string;
	@Input() infoText: string;
	@Input() showProgressBar: boolean = true;
	@Input() inContainer: boolean = false;
	@Input()
	set progressBarValue(value) {
		this._barValue.next(value);
	};

	get progressBarValue() {
		return this._barValue.getValue();
	}

	@Input() progressBarMode: string = 'determinate'
	@Input() progressBarStyle: string = 'primary';

	constructor() {
	}

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
		//TODO: Get the rules and colors for the different behaviors
		if (val < 30) {
			this.barStyle = 'warn';
		}
		else if (val >= 30 && val < 70) {
			this.barStyle = "accent";
		}
		else {
			this.barStyle = 'primary';
		}
	}
}
