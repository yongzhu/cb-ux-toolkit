import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { TypeaheadModule } from "../type-ahead/typeahead.module";
import { INPUT_TAGS } from "./input.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule
  ],
  declarations: [INPUT_TAGS],
  exports: [
    INPUT_TAGS,
    TypeaheadModule
  ]
})
export class InputModule {
}
