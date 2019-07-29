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
  SearchFacetComponentExample,
  KpiTileComponentExample,
} from './components';

import {
  ClipboardModule,
  CutHeaderModule,
  CutLoadingIndicatorModule,
  CutSearchModule,
  SelectModule,
  CutKpiTileModule,
} from "cut";
import { HttpClientModule } from "@angular/common/http";
import { ExampleService } from "./example.service";

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
  SearchFacetComponentExample,
  KpiTileComponentExample
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
    DocViewerModule,
    HttpClientModule,
  ],
  providers:[
    ExampleService,
  ],
  entryComponents: [
    ...components
  ]
})
export class ExamplesModule { }
