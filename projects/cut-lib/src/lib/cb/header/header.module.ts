import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ButtonModule } from "../button/button.module";
import { DropBoxModule } from "../drop-box/drop-box.module";

import { HeaderAppSwitcherComponent } from "./header-app-switcher/header-app-switcher.component";
import { HeaderCompanyComponent } from "./header-company/header-company.component";
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { NavDropdownComponent } from "./header-nav/nav-dropdown/nav-dropdown.component";
import { HeaderNotificationsComponent } from "./header-notifications/header-notifications.component";
import { HeaderSettingsComponent } from "./header-settings/header-settings.component";
import { HeaderSlidePanelComponent } from "./header-slide-panel/header-slide-panel.component";
import { HeaderUserProfileComponent } from "./header-user-profile/header-user-profile.component";
import { HeaderService } from "./header.service";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [CommonModule, ButtonModule, DropBoxModule, RouterModule],
  declarations: [
    HeaderComponent,
    HeaderAppSwitcherComponent,
    HeaderNavComponent,
    HeaderNotificationsComponent,
    HeaderSettingsComponent,
    HeaderSlidePanelComponent,
    HeaderUserProfileComponent,
    HeaderCompanyComponent,
    NavDropdownComponent
  ],
  providers: [HeaderService],
  exports: [HeaderComponent, HeaderSlidePanelComponent]
})
export class HeaderModule {
}
