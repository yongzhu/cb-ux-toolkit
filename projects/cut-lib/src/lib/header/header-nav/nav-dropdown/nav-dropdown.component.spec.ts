import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { CutNavDropdownComponent } from "./nav-dropdown.component";

describe("NavDropdownComponent", () => {
  let component: CutNavDropdownComponent;
  let fixture: ComponentFixture<CutNavDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CutNavDropdownComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(CutNavDropdownComponent);
    component = fixture.componentInstance;
  }));

  it("should create", () => {
    component.item = {
      title: "title",
      dropDown: [{
        title: "sub title",
        internalPath: "",
        externalPath: "",
        altTxt: "text"
      }]
    };
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

});
