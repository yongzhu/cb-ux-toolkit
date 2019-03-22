import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from "@angular/core/testing";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { HeaderService } from "../header.service";
import { HeaderNotificationsComponent } from "./header-notifications.component";

describe("HeaderNotificationsComponent", () => {
  let component: HeaderNotificationsComponent;
  let fixture: ComponentFixture<HeaderNotificationsComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DropBoxModule, RouterTestingModule],
      declarations: [HeaderNotificationsComponent],
      providers: [HeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call emitActionType", fakeAsync(inject([HeaderService], (serv: HeaderService) => {
    {
      spyOn(serv, "emitActionType");
      component.emitActionType("");
      tick(350);
      expect(serv.emitActionType).toHaveBeenCalled();
    }
  })));
});
