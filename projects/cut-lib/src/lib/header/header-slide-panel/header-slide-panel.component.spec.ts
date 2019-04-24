import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CutHeaderModule } from "../header.module";
import { CutHeaderSlidePanelComponent } from "./header-slide-panel.component";

describe("HeaderSlidePanelComponent", () => {
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [CutHeaderModule, RouterTestingModule]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(CutHeaderSlidePanelComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
