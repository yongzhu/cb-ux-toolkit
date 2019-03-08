import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PlatformsComponent } from "./platforms.component";

import { PlatformsRoutes } from "./platforms.routes";

@NgModule({
  imports: [
    CommonModule,
    PlatformsRoutes
  ],
  declarations: [
    PlatformsComponent
  ]
})
export class PlatformsModule { }
