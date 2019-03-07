import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FOOTER_STANDARD_TAGS } from "./footer-standard.component";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ FOOTER_STANDARD_TAGS ],
  exports: [ FOOTER_STANDARD_TAGS ]

})
export class FooterStandardModule { }
