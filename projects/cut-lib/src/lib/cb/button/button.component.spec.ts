/* tslint:disable:no-unused-variable */

import { ButtonComponent } from "./button.component";

describe("Component: Button", () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it("should create an instance", () => {
    expect(component).toBeTruthy();
  });

  it("should have appropriate classes bases on inputs", () => {
    component.buttonStyle = "default";
    component.size = "large";
    component.block = "xl";

    component.ngOnInit();

    expect(component.buttonStyleClass.classes).toBe("btn btn-default");
    expect(component.buttonSizeClass.sizeClass).toBe("btn-lg");
    expect(component.buttonBlockClass.blockClass).toBe("btn-block-xl");
  });
});
