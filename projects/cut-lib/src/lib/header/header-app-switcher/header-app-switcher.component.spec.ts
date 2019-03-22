import { CommonModule } from "@angular/common";
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { HeaderService } from "../header.service";
import { HeaderAppSwitcherComponent } from "./header-app-switcher.component";

describe("HeaderAppSwitcherComponent", () => {
  let component: HeaderAppSwitcherComponent;
  let fixture: ComponentFixture<HeaderAppSwitcherComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonModule, DropBoxModule, RouterModule, RouterTestingModule ],
      declarations: [ HeaderAppSwitcherComponent ],
      providers: [ HeaderService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAppSwitcherComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should NOT show appSwitcher when appSwitcher obj does not exist", () => {
    component.headerObj = {};
    const bentoImg = fixture.nativeElement.querySelector("#appSwitcher-bento");
    expect(bentoImg).toBeNull();
  });

  it("Should NOT show bento box", () => {
    component.headerObj.appSwitcher = [
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false,
        "hidden": true
      }
    ];
    fixture.detectChanges();
    const bentoImg = fixture.nativeElement.querySelector("#appSwitcher-bento");
    expect(bentoImg).toBeNull();
  });

  it("Should show bento box if hidden flag is true", () => {
    component.headerObj.product = {
      "title": "Demo Product Title",
      "altTxt": "Demo title",
      "internalPath": "/platforms"
    };
    component.headerObj.appSwitcher = [
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false,
        "hidden": false
      }
    ];
    fixture.detectChanges();
    const bentoImg = fixture.nativeElement.querySelector("#appSwitcher-bento");
    expect(bentoImg).toBeTruthy();
  });

  it("Should show bento box if hidden flag is absent", () => {
    component.headerObj.product = {
      "title": "Demo Product Title",
      "altTxt": "Demo title",
      "internalPath": "/platforms"
    };
    component.headerObj.appSwitcher = [
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false
      }
    ];
    fixture.detectChanges();
    const bentoImg = fixture.nativeElement.querySelector("#appSwitcher-bento");
    expect(bentoImg).toBeTruthy();
  });

  it("should call emitActionType", fakeAsync(inject([HeaderService], (serv: HeaderService) => { {
    spyOn(serv, "emitActionType");
    component.emitActionType("");
    tick(350);
    expect(serv.emitActionType).toHaveBeenCalled();
  }})));

  it("should call routeToExternalPath", fakeAsync(inject([HeaderService], (serv: HeaderService) => { {
    spyOn(serv, "routeToExternalPath");
    component.routeToExternalPath("");
    tick(350);
    expect(serv.routeToExternalPath).toHaveBeenCalled();
  }})));

  it("should return false when appSwitcher obj is null", () => {
    component.headerObj = {};
    const result = component.showAppSwitcher();
    expect(result).toBeFalsy();
  });

  it("should return true when appSwitcher obj is not null", () => {
    component.headerObj.appSwitcher = [
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false
      },
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false,
        "hidden": true
      }
    ];
    const result = component.showAppSwitcher();
    expect(result).toBeTruthy();
  });

  it("should return false when appSwitcher hidden flags are all true", () => {
    component.headerObj.appSwitcher = [
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false,
        "hidden": true
      },
      {
        "title": "p1 - Action",
        "altTxt": "alt text here",
        "internalPath": "/welcome",
        "navigatePath": "/welcome",
        "redirect": false,
        "hidden": true
      }
    ];
    const result = component.showAppSwitcher();
    expect(result).toBeFalsy();
  });

});
