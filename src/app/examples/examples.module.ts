import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

import {
  FrameworkModule,
  ClipboardModule,
	SelectModule,
	LoadingIndicatorModule
} from "cut";

export const components = [
	LoadingIndicatorComponent
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		LoadingIndicatorModule,
		DynamicModule.withComponents([...components])
	],
	entryComponents: [
		...components
	]
})
export class ExamplesModule { }
