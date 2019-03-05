import { CommonModule } from "@angular/common";
import { Component, Directive, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";

import { PrismModule } from "@ngx-prism/core";

import { CodeblockComponent } from "./codeblock.component";

// tslint:disable:component-selector directive-selector
@Component({
  selector: "cb-button",
  template: ""
})
class MockButtonComponent {
  @Input()
  title: string;

  @Input()
  id: string;

  @Input()
  icon: string;

  @Input()
  size: "large" | "small" | "default" = "default";

  @Input()
  block: "xl" | "lg" | "md" | "sm" | "xs" | "default" = "default";

  @Input("button-style") // tslint:disable-line:no-input-rename
  buttonStyle: string;

  @Input()
  iconPosition: "left" | "right";

  @Input()
  href: string;

  @Input()
  target = "_self";
}

@Directive({
  selector: "[cb-clipboard]"
})
class MockClipboardDirective {
  @Input("cb-clipboard") targetElm: ElementRef; // tslint:disable-line:no-input-rename

  @Input() cbContent: string;

  // tslint:disable-next-line:no-output-on-prefix no-output-rename
  @Output("cbOnSuccess") onSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  // tslint:disable-next-line:no-output-on-prefix no-output-rename
  @Output("cbOnError") onError: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private elmRef: ElementRef) { }
}

// tslint:enable:component-selector

describe("CodeblockComponent", () => {
  let component: CodeblockComponent;
  let fixture: ComponentFixture<CodeblockComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        PrismModule
      ],
      declarations: [
        MockClipboardDirective,
        MockButtonComponent,
        CodeblockComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeblockComponent);
    component = fixture.componentInstance;
    component.language = "html";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("button text should have an initial value", () => {
    expect(component.btnText).toBe("Copy");
  });

  it("check changing button text", fakeAsync(() => {
    component.changeBtnText();

    expect(component.btnText).toBe("Copied");

    tick(1500);

    expect(component.btnText).toBe("Copy");
  }));
});
