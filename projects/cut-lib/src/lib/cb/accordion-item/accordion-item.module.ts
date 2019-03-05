import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CollapseModule } from "../collapse/collapse.module";
import { AccordionItemComponent } from "./accordion-item.component";

@NgModule({
  imports: [ CommonModule, CollapseModule ],
  declarations: [ AccordionItemComponent ],
  exports: [ AccordionItemComponent ]
})
export class AccordionItemModule {}
