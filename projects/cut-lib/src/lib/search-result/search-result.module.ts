import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule
} from "@angular/material";

import { CutSearchResultComponent } from "./main/search-result.component";
import { UsedFilterComponent } from "./main/used-filter/used-filter.component";
import { ResultFiltersComponent } from "./main/result-filters/result-filters.component";
import { ResultListComponent } from "./main/result-list/result-list.component";
import { ResultTabsComponent } from "./main/result-tabs/result-tabs.component";
import { ResultTypeFilterComponent } from "./main/result-type-filter/result-type-filter.component";
import { FilterOptionsComponent } from "./main/used-filter/filter-options/filter-options.component";

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [
    CutSearchResultComponent,
    UsedFilterComponent,
    ResultTabsComponent,
    ResultTypeFilterComponent,
    ResultFiltersComponent,
    ResultListComponent,
    FilterOptionsComponent,
  ],
  exports: [CutSearchResultComponent],
})
export class CutSearchResultModule { }
