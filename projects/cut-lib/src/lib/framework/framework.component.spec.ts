import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { CutHeaderService } from "../header/header.service";
import { FooterService } from "../footer/footer.service";
import { FrameworkComponent } from "./framework.component";

describe("FrameworkComponent", () => {
  let component: FrameworkComponent;
  let fixture: ComponentFixture<FrameworkComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkComponent ],
      providers: [FooterService, CutHeaderService],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("check initial values", () => {
    expect(component.hideFooter).toBeFalsy();
    expect(component.showSidePanel).toBeFalsy();
    expect(component.screenTrigger).toBe(991);
  });

  it("openSidenav method", () => {
    component.showSidePanel = false;

    component.openSidenav();

    expect(component.showSidePanel).toEqual(true);
  });

  it("closeSidenav method", () => {
    component.showSidePanel = true;

    component.closeSidenav();

    expect(component.showSidePanel).toEqual(false);
  });

  it("closeSidenav method", () => {
    component.showSidePanel = true;

    component.closeSidenav();

    expect(component.showSidePanel).toEqual(false);
  });

  it("isSidenavOpen method", () => {
    component.showSidePanel = true;

    const res = component.isSidenavOpen();

    expect(res).toEqual(true);
  });

  it("toggleSidenav method, sidenav is open", () => {
    const closeSidenavCall = spyOn(component, "closeSidenav");
    const openSidenavCall = spyOn(component, "openSidenav");
    component.showSidePanel = true;

    component.toggleSidenav();

    expect(closeSidenavCall).toHaveBeenCalled();
    expect(openSidenavCall).not.toHaveBeenCalled();
  });

  it("toggleSidenav method, sidenav is closed", () => {
    const closeSidenavCall = spyOn(component, "closeSidenav");
    const openSidenavCall = spyOn(component, "openSidenav");
    component.showSidePanel = false;

    component.toggleSidenav();

    expect(closeSidenavCall).not.toHaveBeenCalled();
    expect(openSidenavCall).toHaveBeenCalled();
  });

  it("onWindowResize method, sidenav is not open", () => {
    const closeSidenavCall = spyOn(component, "closeSidenav");
    component.showSidePanel = false;

    component.onWindowResize({target: window} as any);

    expect(closeSidenavCall).not.toHaveBeenCalled();
  });

  it("onWindowResize method, sidenav is open, mobile screen", () => {
    const windowMock = {innerWidth: 300};
    const closeSidenavCall = spyOn(component, "closeSidenav");
    component.showSidePanel = true;

    component.onWindowResize({target: windowMock} as any);

    expect(closeSidenavCall).not.toHaveBeenCalled();
  });

  it("onWindowResize method, sidenav is open, desktop screen", () => {
    const windowMock = {innerWidth: 1366};
    const closeSidenavCall = spyOn(component, "closeSidenav");
    component.showSidePanel = true;

    component.onWindowResize({target: windowMock} as any);

    expect(closeSidenavCall).toHaveBeenCalled();
  });
});
