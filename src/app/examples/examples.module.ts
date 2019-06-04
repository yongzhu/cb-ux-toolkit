import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DocViewerModule } from "../shared/doc-viewer/doc-viewer-module";
import {
  HeaderComponentExample,
  LoadingIndicatorComponentExample,
  ResultTabComponentExample,
  SearchbarComponentExample,
  SearchResultComponentExample,
  UsedFilterComponentExample
} from "./components";

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
