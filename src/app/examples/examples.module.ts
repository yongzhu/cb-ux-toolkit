import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerModule } from '../shared/doc-viewer/doc-viewer-module';

import { LoadingIndicatorComponentExample } from './loading-indicator/loading-indicator.component';

import {
  FrameworkModule,
  ClipboardModule,
	SelectModule,
	CutLoadingIndicatorModule
} from "cut";

export const components = [
	LoadingIndicatorComponentExample
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		CutLoadingIndicatorModule,
		DocViewerModule
	],
	entryComponents: [
		...components
	]
})
export class ExamplesModule { }
