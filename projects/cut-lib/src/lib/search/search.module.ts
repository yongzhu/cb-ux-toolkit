import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CutFacetsModule } from "./main/facets/facets.module";

import { CutSearchbarComponent } from "./main/searchbar/searchbar.component";
import { CutSearchResultComponent } from "./main/result/result.component";
import { UsedFilterComponent } from "./main/result/used-filter/used-filter.component";
import { ResultFiltersComponent } from "./main/result/result-filters/result-filters.component";
import { ResultListComponent } from "./main/result/result-list/result-list.component";
import { ResultTabsComponent } from "./main/result/result-tabs/result-tabs.component";
import { ResultTypeFilterComponent } from "./main/result/result-type-filter/result-type-filter.component";
import { FilterOptionsComponent } from "./main/result/used-filter/filter-options/filter-options.component";
import { ButtonComponent } from "../button/button.component";
import { ListComponent } from "./main/result/result-list/list/list.component";
import { VerticalOption } from '../vertical-option/vertical-option.component';

import {
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatTabsModule,
  MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    ReactiveFormsModule,
    CutFacetsModule
  ],
  declarations: [
    CutSearchbarComponent,
    CutSearchResultComponent,
    UsedFilterComponent,
    FilterOptionsComponent,
    ResultTabsComponent,
    ResultTypeFilterComponent,
    ResultFiltersComponent,
    ResultListComponent,
    ButtonComponent,
    ListComponent,
    VerticalOption
  ],
  exports: [
    CutSearchbarComponent,
    CutSearchResultComponent,
    UsedFilterComponent,
    ResultTabsComponent,
    ResultTypeFilterComponent,
    ButtonComponent,
    ResultListComponent,
    ResultFiltersComponent,
    CutFacetsModule,
  ],
  providers: []
})
export class CutSearchModule { }
