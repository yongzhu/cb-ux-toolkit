import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FOOTER_TAGS } from "./footer.component";
import { FooterService } from "./footer.service";

@NgModule({
  imports: [CommonModule],
  declarations: [FOOTER_TAGS],
  providers: [FooterService],
  exports: [FOOTER_TAGS]
})
export class FooterModule { }
