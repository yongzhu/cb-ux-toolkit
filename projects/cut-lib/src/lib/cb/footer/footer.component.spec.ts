import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { DropBoxModule } from "./../drop-box/drop-box.module";
import { HEADER_DATA } from "./../header/header.model.mock";
import { HeaderService } from "./../header/header.service";
import { FooterComponent } from "./footer.component";
import { FOOTER_DATA } from "./footer.model.mock";
import { FooterService } from "./footer.service";

describe("Component: Footer", () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  let serv: HeaderService;
  let footerService: FooterService;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [DropBoxModule, RouterTestingModule],
      declarations: [
        FooterComponent
      ],
      providers: [HeaderService, FooterService]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    serv = TestBed.get(HeaderService);
    footerService = TestBed.get(FooterService);
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(serv).toBeTruthy();
    expect(footerService).toBeTruthy();
  });

  it("if inverted is false footerClasses should be default", () => {
    component.inverted = false;

    component.ngOnInit();

    expect(component.footerClasses).toBe("footer-default");
  });

  it("if inverted is true footerClasses should be inverted", () => {
    component.inverted = true;

    component.ngOnInit();

    expect(component.footerClasses).toBe("footer-inverted");
  });

  it("should call service to get headeritems", () => {
    const expectedData = HEADER_DATA;
    let result;

    serv.headerObservable
      .subscribe(
        data => result = data,
        error => console.error(error), // tslint:disable-line:no-console
        () => expect(result).toBe(expectedData)
      );
  });

  it("should call footer service to get flag for use API", () => {
    const expectedData = FOOTER_DATA;
    let result;

    footerService.footerObservable
      .subscribe(
        data => result = data,
        error => console.error(error), // tslint:disable-line:no-console
        () => expect(result).toBe(expectedData)
      );
  });

  it("getTargetAttribute if false should be _self", () => {
    const expectedString = "_self";

    expect(component.getTargetAttribute(false)).toBe(expectedString);
  });

  it("getTargetAttribute if true should be _blank", () => {
    const expectedString = "_blank";

    expect(component.getTargetAttribute(true)).toBe(expectedString);
  });
});
