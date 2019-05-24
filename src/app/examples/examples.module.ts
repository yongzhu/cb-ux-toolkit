import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerModule } from '../shared/doc-viewer/doc-viewer-module';

import { LoadingIndicatorComponentExample, HeaderComponentExample, SearchResultComponentExample } from './components';

import {
  FrameworkModule,
  ClipboardModule,
  SelectModule,
  CutHeaderModule,
  CutLoadingIndicatorModule,
  CutSearchResultModule
} from "cut";

export const components = [
  LoadingIndicatorComponentExample,
  HeaderComponentExample,
  SearchResultComponentExample
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    CutLoadingIndicatorModule,
    CutSearchResultModule,
    CutHeaderModule,
    DocViewerModule
  ],
  entryComponents: [
    ...components
  ]
})
export class ExamplesModule { }
