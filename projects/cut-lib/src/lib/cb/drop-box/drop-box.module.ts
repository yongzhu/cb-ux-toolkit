import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DROPBOX_TAGS } from "./drop-box.component";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ DROPBOX_TAGS ],
  exports: [ DROPBOX_TAGS ]
})
export class DropBoxModule {}
