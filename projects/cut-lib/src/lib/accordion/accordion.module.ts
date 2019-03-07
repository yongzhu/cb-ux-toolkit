import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CollapseModule } from "../collapse/collapse.module";
import { AccordionChildrenTagsDirective, AccordionComponent } from "./accordion.component";

@NgModule({
  imports: [CommonModule, CollapseModule],
  declarations: [AccordionComponent, AccordionChildrenTagsDirective],
  exports: [AccordionComponent, AccordionChildrenTagsDirective]
})
export class AccordionModule { }
