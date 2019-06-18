import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CutSearchFilterComponent } from "./main/search-filter.component";
import { CityFilterComponent } from './main/city-filter/city-filter.component';
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
    CutSearchFilterComponent,
    CityFilterComponent,
    NiceToHaveComponent
  ],
  exports: [
    CutSearchFilterComponent,
    CityFilterComponent
  ],
  providers: []
})
export class CutSearchFilterModule { }
