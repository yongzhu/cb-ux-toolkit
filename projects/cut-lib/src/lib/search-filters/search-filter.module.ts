import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SearchFilterService } from "./search-filter.service";

import { CutSearchFacetsComponent } from "./main/search-facets.component";
import { CityFacetComponent } from './main/city-facet/city-facet.component';

import { NiceToHaveComponent } from '../nice-to-have/nice-to-have.component';

import {
  MatIconModule,
  MatExpansionModule,
  MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  declarations: [
    CutSearchFacetsComponent,
    CityFacetComponent,
    NiceToHaveComponent,
  ],
  exports: [
    CutSearchFacetsComponent,
    CityFacetComponent,
  ],
  providers: [SearchFilterService]
})
export class CutSearchFilterModule { }
