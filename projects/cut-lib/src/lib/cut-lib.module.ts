import { NgModule } from "@angular/core";
import { CutLibComponent } from "./cut-lib.component";
import { CbesHeaderComponent } from "./header/header.component";

@NgModule({
  imports: [
  ],
  declarations: [
    CutLibComponent,
    CbesHeaderComponent
  ],
  exports: [
    CutLibComponent,
    CbesHeaderComponent
  ]
})
export class CbesVdlLibModule { }
