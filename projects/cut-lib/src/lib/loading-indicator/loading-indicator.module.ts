import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CutLoadingIndicatorComponent } from "./loading-indicator.component";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ CutLoadingIndicatorComponent ],
  exports: [ CutLoadingIndicatorComponent ]
})
export class CutLoadingIndicatorModule {}
