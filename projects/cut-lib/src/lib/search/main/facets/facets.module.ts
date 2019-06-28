import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CutFacetsComponent } from "./facets.component";

import { CityFacetComponent } from './city-facet/city-facet.component';
import { RoleFacetComponent } from './role-facet/role-facet.component';
import { SkillsFacetComponent } from "./skills-facet/skills-facet.component";
import { ChecklistFacetComponent } from "./checklist-facet/checklist-facet.component";

import { NiceToHaveComponent } from '../../../nice-to-have/nice-to-have.component';

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
    CutFacetsComponent,
    CityFacetComponent,
    NiceToHaveComponent,
    RoleFacetComponent,
    SkillsFacetComponent,
    ChecklistFacetComponent,
  ],
  exports: [
    CutFacetsComponent,
    CityFacetComponent,
    RoleFacetComponent,
    SkillsFacetComponent,
    ChecklistFacetComponent,
  ],
  providers: []
})
export class CutFacetsModule { }
