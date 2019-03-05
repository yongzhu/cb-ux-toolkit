import { InputComponent } from "./input.component";

describe("Component: Input", () => {
  let component: InputComponent;

  beforeAll(() => {
    component = new InputComponent();
  });

  it("should create an instance", () => {
    expect(component).toBeTruthy();
  });

  it("errormessage should be defined", () => {
    expect(component.errormessage).toBe("Invalid Data. Please try again");
  });

  it("should set appropriate classes based on input type", () => {
    component.inputType = "text";
    component.labelName = "Label name";

    component.ngOnInit();

    expect(component.inputTypeClass.classes).toBe("form-control");
    expect(component.classList).toEqual(component.inputTypeClass.classes);
  });

  it("ngModelValueChange callback should be called after model change", () => {
    spyOn(component.ngModelValueChange, "emit");

    component.ngModelChange(new Event(""));

    expect(component.ngModelValueChange.emit).toHaveBeenCalled();
  });
});
