import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { DynamicBodyComponent } from "./dynamic-body.component";

@Component({
  selector: "cb-accordion", // tslint:disable-line:component-selector
  template: `<ng-content></ng-content>`
})
export class MockCbAccordionComponent {
  @Input()
  closeOthers = false;

  @Input()
  startOpen = false;

  @Input()
  collapseClassName = "fa-minus";

  @Input()
  expandClassName = "fa-plus";
}

@Component({
  selector: "cb-accordion-item", // tslint:disable-line:component-selector
  template: `<div class="panel" [ngClass]="panelClass"><ng-content></ng-content></div>`
})
export class MockCbAccordionItemComponent {
  _isOpen = false;

  @Input()
  heading: string;
  @Input()
  panelClass: string;
  @Input()
  isDisabled: boolean;
  @Input()
  openByTitle = false;

  @Input()
  set iconClassNames(iconClassNames: any) {

  }

  @Input()
  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }

  @Output()
  public onClose: EventEmitter<void> = new EventEmitter<void>(); // tslint:disable-line:no-output-on-prefix

  @Output()
  public onShow: EventEmitter<void> = new EventEmitter<void>(); // tslint:disable-line:no-output-on-prefix
}

@Component({
  selector: "cb-card", // tslint:disable-line:component-selector
  template: `
<div class="cb-card {{classList}}" (click)="clicked()" [ngClass]="{'has-title':title !=='', 'has-chart':chart,'custom-title':customTitle}">
</div>`
})
export class MockCbCardComponent {
  @Input() title = "";
  @Input() height: any;
  @Input() chart = false;
  @Input() customTitle = false;
  @Input() loading = false;
  @Input() errorState = false;
  @Input() errorStateMessage = "Sorry, data not available.";
  @Input() footerMessage = "";
  @Input() menuItems: any[];
  @Input() errorImage: string;
  @Input() saveImage = false;
  @Input() dropdownBoxId?: string;
  @Input() isHeader: boolean;
  @Input() titleTooltip: string;
  @Input() useTooltipIcon: boolean;
  @Input() isClickable = false;
  @Input() useTooltipIconOptions: any = {};
  @Output() menuAction = new EventEmitter();
  @Output() clickedAction = new EventEmitter();
}

describe("DynamicBodyComponent", () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        DynamicBodyComponent,
        MockCbAccordionComponent,
        MockCbAccordionItemComponent,
        MockCbCardComponent
      ]
    }).compileComponents();
  }));

  it("should create an instance", () => {
    const component = new DynamicBodyComponent();
    expect(component).toBeTruthy();
  });
});
