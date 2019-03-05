import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CutLibComponent } from "./cut-lib.component";

describe("CbesVdlLibComponent", () => {
  let component: CutLibComponent;
  let fixture: ComponentFixture<CutLibComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
