import { async, TestBed } from "@angular/core/testing";
import { DropBoxComponent } from "./drop-box.component";

describe("Component: DropBoxComponent", () => {
  let fixture;
  let dropBoxComponent: DropBoxComponent;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropBoxComponent ],
      imports: []
    }).compileComponents();
    fixture = TestBed.createComponent(DropBoxComponent);
    dropBoxComponent = fixture.componentInstance;
  }));

  it("should create an instance", () => {
    expect(dropBoxComponent).toBeTruthy();
  });

  it("should call a callback after clicking outside", () => {
    spyOn(dropBoxComponent, "toggleDropBox");

    document.documentElement.click();
    fixture.detectChanges();

    expect(dropBoxComponent.toggleDropBox).toHaveBeenCalled();
    expect(dropBoxComponent.open).not.toBeNull();
  });
});
