import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { SelectComponent } from "./select.component";

describe("SelectComponent", () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  const label = "letters";
  const options = [{name: "a", value: "a"}, {name: "b", value: "b"}, {name: "c", value: "c"}];
  const ngModelValue = "a";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      imports: [ FormsModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.ngModelValue = ngModelValue;
    component.label = label;
    component.options = options;
    fixture.detectChanges();
  });

  it("should create a select component", () => {
    expect(component).toBeTruthy();
  });

  it('should display a label that says "letters"', () => {
    const labelEl = fixture.debugElement.query(By.css("label"));
    expect(labelEl.nativeElement.textContent).toContain(label);
  });

  it("should contain have 3 option elements", () => {
    const optionEl = fixture.debugElement.queryAllNodes(By.css("option"));
    expect(optionEl.length).toEqual(options.length);
  });

  it("should set select value to ngModelValue", () => {
    const selectEl = fixture.debugElement.query(By.css("select"));
    const domVal = selectEl.nativeElement.attributes.getNamedItem("ng-reflect-model").value;
    expect(domVal).toEqual(ngModelValue);
  });

  it("should update the select value when a change event is emitted", () => {
    let selectedOption: any;
    const selectEl = fixture.debugElement.query(By.css("select"));
    component.ngModelValueChange.subscribe((data: any) => {
      selectedOption = data;
    });
    selectEl.triggerEventHandler("ngModelChange", "b");
    expect(selectedOption).toEqual(component.ngModelValue);
  });
});
