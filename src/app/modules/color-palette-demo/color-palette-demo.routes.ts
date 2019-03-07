import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ColorPaletteDemoComponent } from "./color-palette-demo.component";

export const routes: Routes = [
  { path: "color", component: ColorPaletteDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class ColorPaletteDemoRoutes {
}
