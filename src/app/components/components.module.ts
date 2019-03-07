import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PrismModule } from "@ngx-prism/core";

import {
  AccordionItemModule,
  AccordionModule,
  ClipboardModule,
  DropBoxModule,
  FooterModule,
  HeaderModule,
  SelectModule
} from "cut";

import { CodeblockComponent } from "./codeblock/codeblock.component";
import { DynamicBodyComponent } from "./dynamic-body/dynamic-body.component";
import { MatSidenavModule, MatExpansionModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrismModule,
    AccordionItemModule,
    AccordionModule,
    ClipboardModule,
    DropBoxModule,
    FooterModule,
    HeaderModule,
		SelectModule,
		MatSidenavModule,
		MatExpansionModule
  ],
  declarations: [
    CodeblockComponent,
    DynamicBodyComponent
  ],
  exports: [
    CodeblockComponent,
    DynamicBodyComponent
  ]
})
export class ComponentsModule { }
