import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CutFacetsComponent } from "./facets.component";

import { InputDropdownFacetComponent } from './input-dropdown/input-dropdown.component';
import { InputFacetComponent } from './input/input.component';
import { ChecklistFacetComponent } from "./checklist-facet/checklist-facet.component";

import { NiceToHaveComponent } from '../../../nice-to-have/nice-to-have.component';
import { CutAutoCompleteComponent } from "../../../auto-complete/auto-complete.component";

import {
  MatIconModule,
  MatExpansionModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  declarations: [
    CutFacetsComponent,
    InputDropdownFacetComponent,
    NiceToHaveComponent,
    InputFacetComponent,
    ChecklistFacetComponent,
    CutAutoCompleteComponent,
  ],
  exports: [
    CutFacetsComponent,
    InputDropdownFacetComponent,
    InputFacetComponent,
    ChecklistFacetComponent,
  ],
  providers: []
})
export class CutFacetsModule { }
