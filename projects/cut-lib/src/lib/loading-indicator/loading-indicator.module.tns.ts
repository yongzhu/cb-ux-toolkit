import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CutLoadingIndicatorComponent } from "./loading-indicator.component";

@NgModule({
  imports: [ NativeScriptCommonModule ],
  declarations: [ CutLoadingIndicatorComponent ],
  exports: [ CutLoadingIndicatorComponent ]
})
export class NSCutLoadingIndicatorModule {}
