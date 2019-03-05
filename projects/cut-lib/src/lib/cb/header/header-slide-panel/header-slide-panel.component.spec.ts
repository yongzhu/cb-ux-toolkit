import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderModule } from "../header.module";
import { HeaderSlidePanelComponent } from "./header-slide-panel.component";

describe("HeaderSlidePanelComponent", () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderModule, RouterTestingModule]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(HeaderSlidePanelComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
