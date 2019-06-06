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
  SRResultListComponentExample
} from './components';

import {
  ClipboardModule,
  CutHeaderModule,
  CutLoadingIndicatorModule,
  CutSearchResultModule,
  SearchbarModule,
  SelectModule
} from "cut";

export const components = [
  LoadingIndicatorComponentExample,
  HeaderComponentExample,
  SearchResultComponentExample,
  UsedFilterComponentExample,
  ResultTabComponentExample,
  SRFilterTypeComponentExample,
  SRResultListComponentExample,
  SearchbarComponentExample
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
    DocViewerModule,
    SearchbarModule
  ],
  entryComponents: [
    ...components
  ]
})
export class ExamplesModule { }
