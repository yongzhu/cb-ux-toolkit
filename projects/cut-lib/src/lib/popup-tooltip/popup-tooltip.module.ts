import { NgModule } from '@angular/core';

import { CutPopupTooltipComponent } from './popup-tooltip.component';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatMenuModule, MatCardModule } from '@angular/material';

@NgModule({
	imports: [CommonModule, MatIconModule, MatMenuModule, MatCardModule],
	exports: [CutPopupTooltipComponent],
	declarations: [CutPopupTooltipComponent]
})
export class CutPopupTooltipModule { }
