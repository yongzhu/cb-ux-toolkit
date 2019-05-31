import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchbarComponent } from "./searchbar.component";

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ SearchbarComponent ],
  exports: [ SearchbarComponent ]
})
export class SearchbarModule { }
