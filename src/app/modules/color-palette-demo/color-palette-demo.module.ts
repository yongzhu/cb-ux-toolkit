import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {
  ClipboardModule
} from "cut";

import { ColorPaletteDemoComponent } from "./components/color-palette-demo/color-palette-demo.component";

import { ColorPaletteDemoRoutes } from "./color-palette-demo.routes";

@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    ColorPaletteDemoRoutes
  ],
  declarations: [
    ColorPaletteDemoComponent
  ]
})
export class ColorPaletteDemoModule { }
