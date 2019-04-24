/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { HeaderAppSwitcherComponent } from "../header-app-switcher/header-app-switcher.component";
import { HeaderCompanyComponent } from "../header-company/header-company.component";
import { HeaderNavComponent } from "../header-nav/header-nav.component";
import { HeaderNotificationsComponent } from "../header-notifications/header-notifications.component";
import { HeaderUserProfileComponent } from "../header-user-profile/header-user-profile.component";
import { HeaderService } from "../header.service";
import {HeaderComponent } from "./header.component";

describe("Component: Header", () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let serv: HeaderService;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [DropBoxModule, RouterTestingModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
      declarations: [
        HeaderComponent,
        HeaderAppSwitcherComponent,
        HeaderNavComponent,
        HeaderNotificationsComponent,
        HeaderUserProfileComponent,
				HeaderCompanyComponent
      ],
      providers: [HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    serv = TestBed.get(HeaderService);
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
