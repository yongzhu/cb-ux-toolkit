import { CommonModule } from "@angular/common";
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DropBoxModule } from "../../drop-box/drop-box.module";
import { CutHeaderService } from "../header.service";
import { CutHeaderCompanyComponent } from "./header-company.component";

describe("HeaderCompanyComponent", () => {
  let component: CutHeaderCompanyComponent;
  let fixture: ComponentFixture<CutHeaderCompanyComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DropBoxModule, RouterTestingModule
      ],
      declarations: [CutHeaderCompanyComponent],
      providers: [CutHeaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutHeaderCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call routeToExternalPath", fakeAsync(inject([CutHeaderService], (serv: CutHeaderService) => { {
    spyOn(serv, "routeToExternalPath");
    component.routeToExternalPath("");
    tick(350);
    expect(serv.routeToExternalPath).toHaveBeenCalled();
  }})));

  it("should call emitActionType", fakeAsync(inject([CutHeaderService], (serv: CutHeaderService) => { {
    spyOn(serv, "emitActionType");
    component.emitActionType("");
    tick(350);
    expect(serv.emitActionType).toHaveBeenCalled();
  }})));
});
