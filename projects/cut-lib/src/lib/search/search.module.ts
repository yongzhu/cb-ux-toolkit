import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CutSearchbarComponent } from "./main/searchbar/searchbar.component";
import { CutSearchResultComponent } from "./main/search-result.component";
import { UsedFilterComponent } from "./main/used-filter/used-filter.component";
import { ResultFiltersComponent } from "./main/result-filters/result-filters.component";
import { ResultListComponent } from "./main/result-list/result-list.component";
import { ResultTabsComponent } from "./main/result-tabs/result-tabs.component";
import { ResultTypeFilterComponent } from "./main/result-type-filter/result-type-filter.component";
import { FilterOptionsComponent } from "./main/used-filter/filter-options/filter-options.component";
import { ButtonComponent } from "../button/button.component";
import { ListComponent } from "./main/result-list/list/list.component";
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
    ReactiveFormsModule
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
    ResultFiltersComponent
  ],
  providers: []
})
export class CutSearchModule { }
