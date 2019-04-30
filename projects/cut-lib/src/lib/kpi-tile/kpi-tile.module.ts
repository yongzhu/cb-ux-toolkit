import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CutKpiTileComponent } from './kpi-tile.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [CommonModule, MatProgressBarModule],
	exports: [CutKpiTileComponent],
	declarations: [CutKpiTileComponent]
})

export class CutKpiTileModule { }