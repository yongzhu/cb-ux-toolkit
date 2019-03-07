import { CommonModule } from "@angular/common";
import { Injectable } from "@angular/core";
import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BehaviorSubject, Subject } from "rxjs";
import { ButtonModule } from "../../button/button.module";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { IHeaderNav } from "../../framework/header.models";
import { HeaderService } from "../header.service";
import { HeaderNavComponent } from "./header-nav.component";
import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";

@Injectable()
export class HSMock {

  headerObservable = new BehaviorSubject<any>({});
  headerObj: any;

  elementObservable = new Subject<any>();

  constructor() {
  }

  sendHeaderData() {
  }

  saveHeaderData(headerObj: any) {
    this.headerObj = headerObj;
  }

  modifyHeaderData(...data) {
  }

  showAsActive(...data) {
  }

  checkRegex(...data) {
  }

  routeToExternalPath(...data) {
  }

  emitActionType(...data) {
  }

  getTargetAttribute(...data) {
  }

  release(params) {
    if (params.obserevableName === "header") {
      if (params.error) {
        return this.headerObservable.error(params.error);
      }
      this.headerObservable.next(params.data);
    }
  }
}

describe("Header. Component. HeaderNavComponent", () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;
  let service: HSMock;
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ButtonModule, DropBoxModule,
        RouterTestingModule.withRoutes([
        ])],
      declarations: [HeaderNavComponent, NavDropdownComponent],
      providers: [
        {
          provide: HeaderService,
          useClass: HSMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    service = TestBed.get(HeaderService);
    service.release({obserevableName: "header", data: {leftNav: []}});
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should add nav items", fakeAsync(inject([HeaderService], (serv: HeaderService) => {
    expect(fixture.nativeElement.querySelectorAll("ul li.main-li").length)
      .toEqual(0);

    const nav: IHeaderNav = {
      leftNav: [
        {
          title: "Test",
          altTxt: "Test",
          internalPath: "/test"
        },
        {
          title: "Test2",
          altTxt: "Test2",
          externalPath: "https://google.com"
        }
      ]
    };

    service.saveHeaderData(nav);
    service.release({obserevableName: "header", data: nav});

    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll("cb-drop-box").length)
      .toEqual(0);

    nav.leftNav.push({
      title: "Test3",
      altTxt: "Test3",
      dropDown: [
        {
          title: "Test",
          altTxt: "Test",
          internalPath: "/test"
        },
        {
          title: "Test2",
          altTxt: "Test2",
          externalPath: "https://google.com"
        }
      ]
    });

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll("cb-drop-box").length)
      .toEqual(1);
  })));

  it("should hide some dropdowns items", () => {
    const nav: IHeaderNav = {
      leftNav: [
        {
          title: "Test3",
          altTxt: "Test3",
          dropDown: [
            {
              title: "Test",
              altTxt: "Test",
              internalPath: "/test1",
              hidden: true
            },
            {
              title: "Test",
              altTxt: "Test",
              internalPath: "/test2",
              hidden: false
            },
            {
              title: "Test2",
              altTxt: "Test2",
              externalPath: "https://google.com"
            }
          ]
        }
      ]
    };
    service.saveHeaderData(nav);
    service.release({obserevableName: "header", data: nav});
    component.ngOnInit();
    fixture.detectChanges();
    const dropdownItems = fixture.nativeElement.querySelectorAll(".headernav-drodown-item-test a");
    expect(dropdownItems.length).toEqual(2);
  });

  it("should show items without dropdowns", fakeAsync(inject([HeaderService], (serv: HeaderService) => {
    const nav: IHeaderNav = {
      leftNav: [
        {
          title: "Test",
          altTxt: "Test",
          internalPath: "/test"
        },
        {
          title: "Test2",
          altTxt: "Test2",
          externalPath: "https://google.com"
        }
      ]
    };
    service.saveHeaderData(nav);
    service.release({obserevableName: "header", data: nav});
    component.ngOnInit();
    fixture.detectChanges();
    const itemNoDropDown = fixture.nativeElement.querySelectorAll("ul.list-style-header-nav li.header-nav-li-test");
    expect(itemNoDropDown.length).toEqual(2);
  })));

  it("should hide some items without dropdowns", fakeAsync(inject([HeaderService], (serv: HeaderService) => {
    const nav: IHeaderNav = {
      leftNav: [
        {
          title: "Test",
          altTxt: "Test",
          internalPath: "/test"
        },
        {
          title: "Test2",
          altTxt: "Test2",
          externalPath: "https://google.com",
          hidden: true
        },
        {
          title: "Test2",
          altTxt: "Test2",
          externalPath: "https://google.com",
          hidden: false
        }
      ]
    };
    service.saveHeaderData(nav);
    service.release({obserevableName: "header", data: nav});
    component.ngOnInit();
    fixture.detectChanges();
    const itemNoDropDown = fixture.nativeElement.querySelectorAll("ul.list-style-header-nav li.header-nav-li-test");
    expect(itemNoDropDown.length).toEqual(2);
  })));

  it("should call emitActionType", fakeAsync(inject([HeaderService], (serv: HeaderService) => {
    {
      spyOn(serv, "emitActionType");
      component.emitActionType("");
      tick(350);
      expect(serv.emitActionType).toHaveBeenCalled();
    }
  })));
});
