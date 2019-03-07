import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule, MatExpansionModule, MatTabsModule } from "@angular/material";
import { PrismModule } from "@ngx-prism/core"

import {
  AccordionItemModule,
  AccordionModule,
  DropBoxModule,
  FooterModule,
  HeaderModule,
  InputModule,
  LoadingIndicatorModule,
  SelectModule,
  TypeaheadModule
} from "cut";

import { ButtonDemoComponent } from "./button-demo/button-demo.component";
import { CardDemoComponent } from "./card-demo/card-demo.component";
import { DropBoxDemoComponent } from "./drop-box-demo/drop-box-demo.component";
import { FooterDemoComponent } from "./footer-demo/footer-demo.component";
import { HeaderDemoComponent } from "./header-demo/header-demo.component";
import { InputDemoComponent } from "./input-demo/input-demo.component";
import { LoadingIndicatorDemoComponent } from "./loading-indicator-demo/loading-indicator-demo.component";
import { SelectDemoComponent } from "./select-demo/select-demo.component";
import { AccordionItemDemoComponent } from "./accordion-item-demo";
import { CodeblockComponent } from "./codeblock/codeblock.component";
import { ComponentsRoutes } from "./components.routes";
import { DynamicBodyComponent } from "./dynamic-body/dynamic-body.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccordionItemModule,
    AccordionModule,
    DropBoxModule,
    FooterModule,
    HeaderModule,
    LoadingIndicatorModule,
    InputModule,
    SelectModule,
    TypeaheadModule,
		MatTabsModule,
		MatSidenavModule, 
		MatExpansionModule,
		ComponentsRoutes,
		PrismModule
  ],
  declarations: [
    ButtonDemoComponent,
    CardDemoComponent,
    DropBoxDemoComponent,
    FooterDemoComponent,
    HeaderDemoComponent,
    InputDemoComponent,
    LoadingIndicatorDemoComponent,
		SelectDemoComponent,
		AccordionItemDemoComponent,
		CodeblockComponent,
		DynamicBodyComponent
	],
	exports: [
		CodeblockComponent,
    DynamicBodyComponent
	]
})
export class ComponentsModule { }
