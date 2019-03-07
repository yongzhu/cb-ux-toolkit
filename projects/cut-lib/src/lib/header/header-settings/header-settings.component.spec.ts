import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../../button/button.module";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { HeaderService } from "../header.service";

import { RouterTestingModule } from "@angular/router/testing";
import { HeaderSettingsComponent } from "./header-settings.component";

describe("HeaderSettingsComponent", () => {
  let component: HeaderSettingsComponent;
  let fixture: ComponentFixture<HeaderSettingsComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModule, DropBoxModule, RouterTestingModule],
      declarations: [HeaderSettingsComponent],
      providers: [HeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
