import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatTabsModule
} from "@angular/material";

import { CutSearchResultComponent } from "./main/search-result.component";
import { UsedFilterComponent } from "./main/used-filter/used-filter.component";
import { ResultFiltersComponent } from "./main/result-filters/result-filters.component";
import { ResultListComponent } from "./main/result-list/result-list.component";
import { ResultTabsComponent } from "./main/result-tabs/result-tabs.component";
import { ResultTypeFilterComponent } from "./main/result-type-filter/result-type-filter.component";
import { FilterOptionsComponent } from "./main/used-filter/filter-options/filter-options.component";
import { SearchResultService } from "./search-result.service";
import { ButtonComponent } from "../button/button.component";


@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
  ],
  declarations: [
    CutSearchResultComponent,
    UsedFilterComponent,
    FilterOptionsComponent,
    ResultTabsComponent,
    ResultTypeFilterComponent,
    ResultFiltersComponent,
    ResultListComponent,
    ButtonComponent
  ],
  exports: [
    CutSearchResultComponent,
    UsedFilterComponent,
    ResultTabsComponent,
    ResultTypeFilterComponent,
    ButtonComponent,
  ],
  providers: [SearchResultService]
})
export class CutSearchResultModule { }
