import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from "@angular/core/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { HeaderService } from "../header.service";

import { RouterTestingModule } from "@angular/router/testing";
import { HSMock } from "../header-nav/header-nav.component.spec";
import { HeaderUserProfileComponent } from "./header-user-profile.component";

describe("HeaderUserProfileComponent", () => {
  let component: HeaderUserProfileComponent;
  let fixture: ComponentFixture<HeaderUserProfileComponent>;
  let service: HSMock;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [DropBoxModule, RouterTestingModule],
      declarations: [HeaderUserProfileComponent],
      providers: [{
        provide: HeaderService,
        useClass: HSMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserProfileComponent);
    component = fixture.componentInstance;
    service = TestBed.get(HeaderService);
    service.headerObservable.next({
      userProfile: {
        user: {}
      }
    });
    fixture.detectChanges();
  });

  it("should create", () => {

    expect(component).toBeTruthy();
  });

  it("should show options", () => {
    component.headerObj.userProfile = {
      user: {
        first_name: "John",
        last_name: "Doe",
        email: "testemail@gmail.com"
      },
      options: [
        {
          title: "title 1",
          action: "TITLE1_ACTION",
          hidden: true
        },
        {
          title: "title 2",
          action: "TITLE2_ACTION",
          hidden: false
        }
      ]
    };
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll("ul.list-style-header-sub-nav li > a");
    expect(options.length).toEqual(1);
  });

  it("should show options", () => {
    component.headerObj.userProfile = {
      user: {
        first_name: "John",
        last_name: "Doe",
        email: "testemail@gmail.com"
      },
      options: [
        {
          title: "title 1",
          action: "TITLE1_ACTION",
          hidden: true
        },
        {
          title: "title 1",
          action: "TITLE1_ACTION",
          hidden: false
        },
        {
          title: "title 1",
          action: "TITLE1_ACTION"
        }
      ]
    };
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll("ul.list-style-header-sub-nav li > a");
    expect(options.length).toEqual(2);
  });

  it("should NOT show options if object not given", () => {
    component.headerObj.userProfile = {
      user: {
        first_name: "John",
        last_name: "Doe",
        email: "testemail@gmail.com"
      }
    };
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll("ul.list-style-header-sub-nav li > a");
    expect(options.length).toEqual(0);
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
