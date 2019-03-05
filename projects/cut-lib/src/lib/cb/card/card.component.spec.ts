import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";

describe("Component: Card", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {

  });
  it("should create an instance", () => {
    expect(component).toBeTruthy();
  });

  it("should call menuAction callback after event out emit", () => {
    spyOn(component.menuAction, "emit");

    component.emitEventOut(new Event("click"), "action");

    expect(component.menuAction.emit).toHaveBeenCalledWith("action");
  });

  it("should emit action if clicked", () => {
    spyOn(component.clickedAction, "emit");

    component.clicked();

    expect(component.clickedAction.emit).toHaveBeenCalledWith("clicked");
  });

  it("should call setCardHeight method after component init", () => {
    spyOn(component, "setCardHeight");

    component.ngOnInit();

    expect(component.setCardHeight).toHaveBeenCalled();
  });

  it("classlist string should be generated based on height sm value", () => {
    component.height = {
      sm: "1x"
    };

    component.setCardHeight();

    expect(component.classList).toBe("card-height-sm-1x ");
  });

  it("classlist string should be generated based on height md value", () => {
    component.height = {
      md: "1x"
    };

    component.setCardHeight();

    expect(component.classList).toBe("card-height-md-1x ");
  });

  it("classlist string should be generated based on height lg value", () => {
    component.height = {
      lg: "1x"
    };

    component.setCardHeight();

    expect(component.classList).toBe("card-height-lg-1x ");
  });

  it("toggleOpen should inverse the open value", () => {
    component.toggleOpen();

    expect(component.open).toBeTruthy();
  });

  it("tooltip will be shown if titleTooltip has been passed in", () => {
    component.titleTooltip = "Some text";
    component.title = "Title";

    fixture.detectChanges();

    expect(fixture.elementRef.nativeElement.innerHTML).toContain("Some text");
  });
});
