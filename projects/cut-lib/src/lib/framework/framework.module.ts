import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";

import { FooterModule } from "../footer/footer.module";
import { CutHeaderModule } from "../header/header.module";
import { FrameworkComponent } from "./framework.component";

@NgModule({
  imports: [CommonModule, MatSidenavModule, FooterModule, CutHeaderModule],
  exports: [FrameworkComponent],
  declarations: [FrameworkComponent]
})

export class FrameworkModule {
}
