/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { CutHeaderAppSwitcherComponent } from "../header-app-switcher/header-app-switcher.component";
import { CutHeaderCompanyComponent } from "../header-company/header-company.component";
import { CutHeaderNavComponent } from "../header-nav/header-nav.component";
import { CutHeaderNotificationsComponent } from "../header-notifications/header-notifications.component";
import { CutHeaderUserProfileComponent } from "../header-user-profile/header-user-profile.component";
import { CutHeaderService } from "../header.service";
import { CutHeaderComponent } from "./header.component";

describe("Component: Header", () => {
  let fixture: ComponentFixture<CutHeaderComponent>;
  let component: CutHeaderComponent;
  let serv: CutHeaderService;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [DropBoxModule, RouterTestingModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
      declarations: [
        CutHeaderComponent,
        CutHeaderAppSwitcherComponent,
        CutHeaderNavComponent,
        CutHeaderNotificationsComponent,
        CutHeaderUserProfileComponent,
				CutHeaderCompanyComponent
      ],
      providers: [CutHeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutHeaderComponent);
    component = fixture.componentInstance;
    serv = TestBed.get(CutHeaderService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("trigger method", () => {
    const emitCall = spyOn(component.sidenavButtonClick, "emit");

    component.trigger();

    expect(emitCall).toHaveBeenCalled();
  });

  it("should call emitActionType", fakeAsync(() => {
    spyOn(serv, "emitActionType");

    component.emitActionType("");
    tick(350);

    expect(serv.emitActionType).toHaveBeenCalled();
  }));
});
