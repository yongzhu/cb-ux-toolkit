import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterStandardComponent } from "./footer-standard.component";

describe("FooterStandardComponent", () => {
  let component: FooterStandardComponent;
  let fixture: ComponentFixture<FooterStandardComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("check currentYear", () => {
    expect(component.currentYear).toEqual(new Date().getFullYear());
  });
});
