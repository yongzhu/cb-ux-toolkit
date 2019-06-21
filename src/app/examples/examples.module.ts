import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerModule } from '../shared/doc-viewer/doc-viewer-module';

import { LoadingIndicatorComponentExample, HeaderComponentExample, KpiTileComponentExample } from './components';

import {
  FrameworkModule,
  ClipboardModule,
	SelectModule,
	CutHeaderModule,
	CutLoadingIndicatorModule,
	CutKpiTileModule
} from "cut";

export const components = [
	LoadingIndicatorComponentExample,
	HeaderComponentExample,
	KpiTileComponentExample
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		CutLoadingIndicatorModule,
		CutKpiTileModule,
		CutHeaderModule,
		DocViewerModule
	],
	entryComponents: [
		...components
	]
})
export class ExamplesModule { }
