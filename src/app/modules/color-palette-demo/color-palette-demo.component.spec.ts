/* tslint:disable:no-unused-variable */
import { Directive, ElementRef, Input } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ColorPaletteDemoComponent } from "./color-palette-demo.component";

// tslint:disable:directive-selector
@Directive({
  selector: "[cutClipboard]"
})
class MockCbClipboardDirective {
  @Input("cutClipboard") targetElm: ElementRef; // tslint:disable-line:no-input-rename

  @Input() cbContent: string;
}
// tslint:enable:directive-selector

describe("ColorPaletteDemoComponent", () => {
  let component: ColorPaletteDemoComponent;
  let fixture: ComponentFixture<ColorPaletteDemoComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MockCbClipboardDirective,
        ColorPaletteDemoComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
