import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {
  ButtonModule,
  CardModule
} from "cut";

import { WelcomeComponent } from "./components/welcome/welcome.component";

import { WelcomeRoutes } from "./welcome.routes";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    WelcomeRoutes
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
