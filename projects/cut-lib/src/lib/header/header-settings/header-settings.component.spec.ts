import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { CutHeaderService } from "../header.service";

import { RouterTestingModule } from "@angular/router/testing";
import { CutHeaderSettingsComponent } from "./header-settings.component";

describe("HeaderSettingsComponent", () => {
  let component: CutHeaderSettingsComponent;
  let fixture: ComponentFixture<CutHeaderSettingsComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [DropBoxModule, RouterTestingModule],
      declarations: [CutHeaderSettingsComponent],
      providers: [CutHeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutHeaderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
