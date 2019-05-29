import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchbarComponent } from "./searchbar.component";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ SearchbarComponent ],
  exports: [ SearchbarComponent ]
})
export class SearchbarModule { }
