import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { TypeaheadContainerComponent } from "../typeahead-container/typeahead-container.component";
import { ComponentsHelper } from "../utils/components-helper.service";
import { TypeaheadDirective } from "./typeahead.directive";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ TypeaheadContainerComponent, TypeaheadDirective ],
  exports: [ FormsModule, TypeaheadContainerComponent, TypeaheadDirective ],
  providers: [ ComponentsHelper ],
  entryComponents: [ TypeaheadContainerComponent ]
})
export class TypeaheadModule {
}
