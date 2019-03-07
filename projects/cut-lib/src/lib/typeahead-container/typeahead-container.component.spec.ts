import { EventEmitter } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PositionService, TypeaheadOptions } from "../type-ahead";
import { TypeaheadContainerComponent } from "./typeahead-container.component";

export class TypeaheadOptionsMock {
  parent = {
    changeModel: () => { },
    typeaheadOnSelect: new EventEmitter()
  };

}

describe("TypeaheadContainerComponent", () => {
  let fixture: ComponentFixture<TypeaheadContainerComponent>;
  let component: TypeaheadContainerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeaheadContainerComponent],
      providers: [
        { provide: TypeaheadOptions, useClass: TypeaheadOptionsMock }
      ]
    });

    fixture = TestBed.createComponent(TypeaheadContainerComponent);
    component = fixture.componentInstance;
  });

  it("position method", () => {
    const positionObj = { width: 0, height: 0, top: 0, left: 0 };
    const positionElementsCall = spyOn(PositionService.prototype, "positionElements").and.returnValue(positionObj);
    const el: any = { nativeElement: document.createElement("div") };

    component.position(el);

    expect(positionElementsCall).toHaveBeenCalled();
    expect(component.display).toEqual("block");
    expect(component.top).toEqual("0px");
    expect(component.left).toEqual("0px");
  });

  it("selectActiveMatch method", () => {
    const matches = [{}, {}];
    const selectMatchCall = spyOn(component, "selectMatch");
    component.matches = matches;

    component.selectActiveMatch();

    expect(selectMatchCall).toHaveBeenCalledWith(matches[0]);
  });

  it("prevActiveMatch method", () => {
    const matches = [{}, {}];
    component.matches = matches;
    component.selectActive(matches[1]);

    component.prevActiveMatch();

    expect(component.isActive(matches[0])).toBeTruthy();
  });

  it("nextActiveMatch method", () => {
    const matches = [{}, {}];
    component.matches = matches;

    component.nextActiveMatch();

    expect(component.isActive(matches[1])).toBeTruthy();
  });

  it("selectActive method", () => {
    const matches = [{}, {}, {}, {}];
    component.matches = matches;

    component.selectActive(matches[2]);

    expect(component.isFocused).toBeTruthy();
    expect(component.isActive(matches[2])).toBeTruthy();
  });

  it("hightlight method: query is array", () => {
    const result = component.hightlight("test", ["t", "e"]);

    expect(result).toEqual("<strong>t</strong><strong>e</strong>st");
  });

  it("hightlight method: query is string", () => {
    const result = component.hightlight("test", "e");

    expect(result).toEqual("t<strong>e</strong>st");
  });

  it("focusLost method", () => {
    component.isFocused = true;

    component.focusLost();

    expect(component.isFocused).toBeFalsy();
  });

  it("isActive method", () => {
    const matches = [{}, {}];
    component.matches = matches;

    const result = component.isActive(matches[0]);

    expect(result).toBeTruthy();
  });

  it("selectMatch method", () => {
    component.matches = [{}, {}, {}, {}];
    const event = new Event("click");
    const changeModelCall = spyOn(component.parent, "changeModel");
    spyOn(event, "stopPropagation");
    spyOn(event, "preventDefault");

    const result = component.selectMatch(component.matches[2], event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(changeModelCall).toHaveBeenCalled();
    expect(result).toBeFalsy();
  });
});
