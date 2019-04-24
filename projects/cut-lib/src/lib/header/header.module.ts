import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatMenuModule, MatButtonModule, MatIconModule, MatToolbarModule } from "@angular/material";

import { DropBoxModule } from "../drop-box/drop-box.module";

import { CutHeaderAppSwitcherComponent } from "./header-app-switcher/header-app-switcher.component";
import { CutHeaderCompanyComponent } from "./header-company/header-company.component";
import { CutHeaderNavComponent } from "./header-nav/header-nav.component";
import { CutNavDropdownComponent } from "./header-nav/nav-dropdown/nav-dropdown.component";
import { CutHeaderNotificationsComponent } from "./header-notifications/header-notifications.component";
import { CutHeaderSettingsComponent } from "./header-settings/header-settings.component";
import { CutHeaderSlidePanelComponent } from "./header-slide-panel/header-slide-panel.component";
import { CutHeaderUserProfileComponent } from "./header-user-profile/header-user-profile.component";
import { CutHeaderService } from "./header.service";
import { CutHeaderComponent } from "./header/header.component";

@NgModule({
	imports: [
		CommonModule, 
		DropBoxModule, 
		RouterModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule
	],
  declarations: [
    CutHeaderComponent,
    CutHeaderAppSwitcherComponent,
    CutHeaderNavComponent,
    CutHeaderNotificationsComponent,
    CutHeaderSettingsComponent,
    CutHeaderSlidePanelComponent,
    CutHeaderUserProfileComponent,
    CutHeaderCompanyComponent,
    CutNavDropdownComponent
  ],
  providers: [CutHeaderService],
  exports: [CutHeaderComponent, CutHeaderSlidePanelComponent]
})
export class CutHeaderModule {
}
