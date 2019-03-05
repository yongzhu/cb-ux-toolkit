import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CbesHeaderComponent } from "./header.component";

describe("CbesHeaderComponent", () => {
  let component: CbesHeaderComponent;
  let fixture: ComponentFixture<CbesHeaderComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
