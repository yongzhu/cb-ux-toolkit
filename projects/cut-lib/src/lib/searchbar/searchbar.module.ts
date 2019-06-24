import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CutSearchbarComponent } from "./searchbar.component";
import { CutApiService } from "../utils/cut-api.service";

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ CutSearchbarComponent ],
  exports: [ CutSearchbarComponent ],
  providers: [ CutApiService ]
})
export class CutSearchbarModule { }
