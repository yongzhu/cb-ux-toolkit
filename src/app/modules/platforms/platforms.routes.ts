import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PlatformsComponent } from "./platforms.component";

export const routes: Routes = [
  { path: "platforms", component: PlatformsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class PlatformsRoutes {
}
