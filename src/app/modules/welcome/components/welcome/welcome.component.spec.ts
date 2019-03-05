import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { WelcomeComponent } from "./welcome.component";

@Component({
  selector: "cb-button",  // tslint:disable-line:component-selector
  template: `
<span (click)="stopPropagationIfDisabled($event)">
  <span [ngSwitch]="buttonType">
    <ng-template ngSwitchCase="default">
      <button [id]="id" [title]="title" [ngClass]="classList" [disabled]="disabled">
        <ng-container *ngTemplateOutlet="buttonContent"></ng-container>
      </button>
    </ng-template>
    <ng-template ngSwitchCase="link">
      <a [id]="id" [href]="href" [target]="target" [title]="title" [ngClass]="classList">
        <ng-container *ngTemplateOutlet="buttonContent"></ng-container>
      </a>
    </ng-template>
  </span>
  <ng-template #buttonContent>
    <span *ngIf="icon && !iconPosition" [ngClass]="icon"></span>
    <span *ngIf="icon && iconPosition=='left'" [ngClass]="icon" class="icon-left"></span>
    <span [innerText]="title"></span>
    <span *ngIf="icon && iconPosition=='right'" [ngClass]="icon" class="icon-right"></span>
  </ng-template>
</span>`
})
export class MockCbButtonComponent {
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

  @Input()
  disabled = false;
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

describe("WelcomeComponent", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        MockCbButtonComponent,
        MockCbCardComponent,
        WelcomeComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
