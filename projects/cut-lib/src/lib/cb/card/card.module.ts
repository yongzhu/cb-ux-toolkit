import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// import { TooltipModule } from "ngx-bootstrap/tooltip";

import { ClickOutsideModule } from "../click-outside/click-outside.module";
import { LoadingIndicatorModule } from "../loading-indicator/loading-indicator.module";
import { CardChildTagsDirective, CardComponent } from "./card.component";

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    ClickOutsideModule
    // TooltipModule.forRoot()
  ],
  declarations: [CardChildTagsDirective, CardComponent],
  exports: [CardChildTagsDirective, CardComponent]
})
export class CardModule {
}
