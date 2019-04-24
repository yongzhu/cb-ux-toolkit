import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from "@angular/core/testing";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { CutHeaderService } from "../header.service";
import { CutHeaderNotificationsComponent } from "./header-notifications.component";

describe("HeaderNotificationsComponent", () => {
  let component: CutHeaderNotificationsComponent;
  let fixture: ComponentFixture<CutHeaderNotificationsComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DropBoxModule, RouterTestingModule],
      declarations: [CutHeaderNotificationsComponent],
      providers: [CutHeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutHeaderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call emitActionType", fakeAsync(inject([CutHeaderService], (serv: CutHeaderService) => {
    {
      spyOn(serv, "emitActionType");
      component.emitActionType("");
      tick(350);
      expect(serv.emitActionType).toHaveBeenCalled();
    }
  })));
});
