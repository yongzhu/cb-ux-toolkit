import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DocViewerModule } from "../shared/doc-viewer/doc-viewer-module";
import {
  HeaderComponentExample,
  LoadingIndicatorComponentExample,
  SearchbarComponentExample,
  SearchResultComponentExample,
  UsedFilterComponentExample,
  ResultTabComponentExample,
  SRFilterTypeComponentExample,
  SRResultListComponentExample,
  ResultFilterComponentExample,
  SearchFilterComponentExample,
} from './components';

import {
  ClipboardModule,
  CutHeaderModule,
  CutLoadingIndicatorModule,
  CutSearchModule,
  SelectModule,
} from "cut";

export const components = [
  LoadingIndicatorComponentExample,
  HeaderComponentExample,
  SearchResultComponentExample,
  UsedFilterComponentExample,
  ResultTabComponentExample,
  SRFilterTypeComponentExample,
  SRResultListComponentExample,
  SearchbarComponentExample,
  ResultFilterComponentExample,
  SearchFilterComponentExample
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    CutLoadingIndicatorModule,
    CutSearchModule,
    CutHeaderModule,
    DocViewerModule
  ],
  entryComponents: [
    ...components
  ]
})
export class ExamplesModule { }
