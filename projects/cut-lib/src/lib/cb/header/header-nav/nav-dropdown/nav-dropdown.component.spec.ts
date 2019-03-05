import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { NavDropdownComponent } from "./nav-dropdown.component";

describe("NavDropdownComponent", () => {
  let component: NavDropdownComponent;
  let fixture: ComponentFixture<NavDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavDropdownComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(NavDropdownComponent);
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
