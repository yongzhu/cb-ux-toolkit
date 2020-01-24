import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CutPopupTooltipModule } from '../popup-tooltip/popup-tooltip.module';
import { CutKpiTileComponent } from './kpi-tile.component';

@NgModule({
	imports: [CommonModule, MatProgressBarModule, CutPopupTooltipModule],
	exports: [CutKpiTileComponent],
	declarations: [CutKpiTileComponent]
})

export class CutKpiTileModule { }
