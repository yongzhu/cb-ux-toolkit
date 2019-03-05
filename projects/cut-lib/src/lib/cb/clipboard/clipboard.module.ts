import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClipboardDirective } from "./clipboard";

@NgModule({
  imports: [CommonModule],
  declarations: [ClipboardDirective],
  exports: [ClipboardDirective]
})
export class ClipboardModule {
}
