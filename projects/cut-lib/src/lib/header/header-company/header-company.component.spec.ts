import { CommonModule } from "@angular/common";
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ButtonModule } from "../../button/button.module";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { HeaderService } from "../header.service";
import { HeaderCompanyComponent } from "./header-company.component";

describe("HeaderCompanyComponent", () => {
  let component: HeaderCompanyComponent;
  let fixture: ComponentFixture<HeaderCompanyComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ButtonModule, DropBoxModule, RouterTestingModule
      ],
      declarations: [HeaderCompanyComponent],
      providers: [HeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call routeToExternalPath", fakeAsync(inject([HeaderService], (serv: HeaderService) => { {
    spyOn(serv, "routeToExternalPath");
    component.routeToExternalPath("");
    tick(350);
    expect(serv.routeToExternalPath).toHaveBeenCalled();
  }})));

  it("should call emitActionType", fakeAsync(inject([HeaderService], (serv: HeaderService) => { {
    spyOn(serv, "emitActionType");
    component.emitActionType("");
    tick(350);
    expect(serv.emitActionType).toHaveBeenCalled();
  }})));
});
