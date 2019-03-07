import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { WelcomeComponent } from "./welcome.component";

import { WelcomeRoutes } from "./welcome.routes";

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutes
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }