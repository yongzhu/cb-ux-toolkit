//NOTE: I don't believe we need this component
import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { Directive, Output } from "@angular/core";

export class InputTypeClass {
  classes: string;

  constructor(inputTypeClass: string) {
    switch (inputTypeClass) {
      case "text":
        this.classes = "form-control";
        break;
      case "radio":
        this.classes = "radio";
        break;
      case "checkbox":
        this.classes = "checkbox";
        break;
      default:
        this.classes = "form-control";
        break;
    }
  }
}

@Component({
  selector: "cut-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  // tslint:disable:no-input-rename
  @Input("input-type") inputType: string;
  @Input("label-name") labelName: string;
  @Input("label-position") labelPosition: string;
  @Input("input-id") inputId: string;
  @Input("input-value") inputValue: string;
  @Input("hide-label") hidelabel: string;
  @Input("placeholder") placeholderText: string;
  @Input("required") required: string;
  @Input("status") status: string;
  @Input("error-message") errormessage: string;
  @Input("icon") icon: string;
  @Input() iconPosition: "left" | "right";
  @Input() enterFn: any;
  @Input() typeahead = false;
  @Input() typeaheadFn: any;
  @Input() typeaheadOption: string;
  @Input() typeaheadWaitTime: number;
  @Input() typeaheadMinLength: number;
  @Input() ngModelValue: string;
  // tslint:enable:no-input-rename

  @Output() ngModelValueChange = new EventEmitter();

  classList: string;

  inputTypeClass: InputTypeClass;

  constructor() {
    this.errormessage = "Invalid Data. Please try again";
  }

  ngOnInit() {
    if (typeof this.labelName === "undefined") {
      throw new Error("labelname is undefined. property labelname does not have a value. labelname needs to have a value.");
    }

    this.inputTypeClass = new InputTypeClass(this.inputType);
    this.classList = this.inputTypeClass.classes;

  }

  ngModelChange(event: any): void {
    this.ngModelValue = event;
    this.ngModelValueChange.emit(event);
  }
}

/* tslint:disable:directive-selector */
@Directive({
  selector: "label-content"
})
export class InputChildTagsDirective { }

export const INPUT_TAGS = [InputComponent, InputChildTagsDirective];
