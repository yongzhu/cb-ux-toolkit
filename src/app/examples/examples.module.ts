import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerModule } from '../shared/doc-viewer/doc-viewer-module';

import { LoadingIndicatorComponentExample, HeaderComponentExample, SearchbarComponentExample } from './components';

import {
  FrameworkModule,
  ClipboardModule,
	SelectModule,
	CutHeaderModule,
  CutLoadingIndicatorModule,
  SearchbarModule
} from "cut";

export const components = [
	LoadingIndicatorComponentExample,
  HeaderComponentExample,
  SearchbarComponentExample
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		CutLoadingIndicatorModule,
		CutHeaderModule,
    DocViewerModule,
    SearchbarModule
	],
	entryComponents: [
		...components
	]
})
export class ExamplesModule { }
