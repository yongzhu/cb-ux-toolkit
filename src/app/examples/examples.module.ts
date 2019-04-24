import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerModule } from '../shared/doc-viewer/doc-viewer-module';

import { LoadingIndicatorComponentExample, HeaderComponentExample } from './components';

import {
  FrameworkModule,
  ClipboardModule,
	SelectModule,
	CutHeaderModule,
	CutLoadingIndicatorModule
} from "cut";

export const components = [
	LoadingIndicatorComponentExample,
	HeaderComponentExample
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		CutLoadingIndicatorModule,
		CutHeaderModule,
		DocViewerModule
	],
	entryComponents: [
		...components
	]
})
export class ExamplesModule { }
