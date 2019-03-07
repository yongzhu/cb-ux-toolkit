import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";

import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { CBFrameworkComponent } from "./cb-framework.component";

@NgModule({
  imports: [CommonModule, MatSidenavModule, FooterModule, HeaderModule],
  exports: [CBFrameworkComponent],
  declarations: [CBFrameworkComponent]
})

export class CBFrameworkModule {
}
