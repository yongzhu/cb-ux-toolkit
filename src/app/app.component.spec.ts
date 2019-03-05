import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

@Component({
  selector: "app-dynamic-body",
  template: `
<div class="container-fluid top-margin">
  <div class="row">
    <section class="col-md-3 col-xl-2">
      HI!
    </section>
    <section class="col-md-9 col-xl-10">
      <router-outlet></router-outlet>
    </section>
  </div>
</div>`
})
export class MockDynamicBodyComponent {
  /* declare used methods and attributes */
}

@Component({
  selector: "cb-framework", // tslint:disable-line:component-selector
  template: `<div><ng-content tabindex="-1" id="mainContent" class="container-dynamic-body"></ng-content></div>`
})
export class MockCbFrameworkComponent {
  @Input() headerObj: any;
  @Input() footerObj: any;
  @Input() hideFooter = false;

  @Output() ngValueChange = new EventEmitter();
}

describe("AppComponent", () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        MockCbFrameworkComponent,
        MockDynamicBodyComponent
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
