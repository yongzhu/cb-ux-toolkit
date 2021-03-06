import { CommonModule } from "@angular/common";
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { MatIconModule, MatMenuModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { CutHeaderService } from "../header.service";
import { CutHeaderAppSwitcherComponent } from "./header-app-switcher.component";

describe("HeaderAppSwitcherComponent", () => {
  let component: CutHeaderAppSwitcherComponent;
  let fixture: ComponentFixture<CutHeaderAppSwitcherComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DropBoxModule, RouterModule, RouterTestingModule, MatIconModule, MatMenuModule],
      declarations: [CutHeaderAppSwitcherComponent],
      providers: [CutHeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutHeaderAppSwitcherComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should NOT show appSwitcher when appSwitcher obj does not exist", () => {
    component.headerObj = {};
    const bentoImg = fixture.nativeElement.querySelector(".app-switcher-icon");
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
    const bentoImg = fixture.nativeElement.querySelector(".app-switcher-icon");
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
    const bentoImg = fixture.nativeElement.querySelector(".app-switcher-icon");
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
    const bentoImg = fixture.nativeElement.querySelector(".app-switcher-icon");
    expect(bentoImg).toBeTruthy();
  });

  it("should call routeToExternalPath", fakeAsync(inject([CutHeaderService], (serv: CutHeaderService) => {
    {
      spyOn(serv, "routeToExternalPath");
      component.routeToExternalPath("");
      tick(350);
      expect(serv.routeToExternalPath).toHaveBeenCalled();
    }
  })));

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
