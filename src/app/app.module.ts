import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  AccordionItemModule,
  AccordionModule,
  CBFrameworkModule,
  ClipboardModule,
  SelectModule
} from "cut";

import { AppRoutes } from "./app.routes";

// Components
import { AppComponent } from "./app.component";

import { ColorPaletteDemoModule } from "./modules/color-palette-demo/color-palette-demo.module";
import { ComponentsModule } from "./components/components.module";
import { PlatformsModule } from "./modules/platforms/platforms.module";
import { WelcomeModule } from "./modules/welcome/welcome.module";

// Providers
import { TitleService } from "./services/title.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    AccordionItemModule,
    CBFrameworkModule,
    ClipboardModule,
    SelectModule,
    ColorPaletteDemoModule,
    ComponentsModule,
    PlatformsModule,
    WelcomeModule,
    AppRoutes
  ],
  providers: [
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(titleService: TitleService) {
    titleService.init();
  }

}
