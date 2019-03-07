import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";

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

import { AccordionItemDemoComponent } from "./components/accordion-item-demo/accordion-item-demo.component";
import { ButtonDemoComponent } from "./components/button-demo/button-demo.component";
import { CardDemoComponent } from "./components/card-demo/card-demo.component";
import { DropBoxDemoComponent } from "./components/drop-box-demo/drop-box-demo.component";
import { FooterDemoComponent } from "./components/footer-demo/footer-demo.component";
import { HeaderDemoComponent } from "./components/header-demo/header-demo.component";
import { InputDemoComponent } from "./components/input-demo/input-demo.component";
import { LoadingIndicatorDemoComponent } from "./components/loading-indicator-demo/loading-indicator-demo.component";
import { SelectDemoComponent } from "./components/select-demo/select-demo.component";

import { ComponentsRoutes } from "./components.routes";

import { ComponentsModule as AppComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppComponentsModule,
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
    ComponentsRoutes
  ],
  declarations: [
    AccordionItemDemoComponent,
    ButtonDemoComponent,
    CardDemoComponent,
    DropBoxDemoComponent,
    FooterDemoComponent,
    HeaderDemoComponent,
    InputDemoComponent,
    LoadingIndicatorDemoComponent,
    SelectDemoComponent
  ]
})
export class ComponentsModule { }
