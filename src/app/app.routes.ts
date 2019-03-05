import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const DEFAULT_ROUTES: Routes = [
  { path: "color", loadChildren: "./modules/color-palette-demo/color-palette-demo.module#ColorPaletteDemoModule" },
  { path: "components", loadChildren: "./modules/components/components.module#ComponentsModule" },
  { path: "platforms", loadChildren: "./modules/platforms/platforms.module#PlatformsModule" },
  { path: "welcome", loadChildren: "./modules/welcome/welcome.module#WelcomeModule" },
  { path: "**", redirectTo: "welcome" }
];

@NgModule({
  imports: [RouterModule.forRoot(DEFAULT_ROUTES)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppRoutes {
}
