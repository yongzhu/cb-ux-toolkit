import { AccordionItemComponent } from "../accordion-item/accordion-item.component";
import { AccordionComponent } from "./accordion.component";

describe("Component: Accordion", () => {
  let component: AccordionComponent;

  beforeEach(() => {
    component = new AccordionComponent();
  });

  it("should create an instance", () => {
    expect(component).toBeTruthy();
  });

  it("setIconClasses method should be called after adding a group", () => {
    component.groups = [];
    spyOn(component, "setIconClasses");

    component.addGroup({} as AccordionItemComponent);

    expect(component.setIconClasses).toHaveBeenCalledWith({});
    expect(component.groups.length).toBe(1);
  });

  it("groups should have appropriate css classes after view initialization", () => {
    component.groups = [{} as AccordionItemComponent, {} as AccordionItemComponent];
    spyOn(component, "setIconClasses");

    component.ngAfterViewInit();

    expect(component.setIconClasses).toHaveBeenCalledTimes(2);
  });

  it("the rest of the groups should be closed", () => {
    component.groups = [{} as AccordionItemComponent];

    component.closeOtherPanels({} as AccordionItemComponent);

    expect(component.groups[0].isOpen).toBeFalsy();
  });

  it("accrodion should be removed after removeGroup method was called", () => {
    const itemToRemove = {} as AccordionItemComponent;
    component.groups = [itemToRemove];

    component.removeGroup(itemToRemove);

    expect(component.groups.length).toBe(0);
  });
});
