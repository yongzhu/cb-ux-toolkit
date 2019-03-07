import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "cut-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent {
  @Input()
  options: Option[];

  @Input()
  label = "";

  @Input()
  ngModelValue: any;

  @Input()
  disabled: boolean;

  @Output()
  ngModelValueChange = new EventEmitter();

  ngModelChange(event: any): void {
    this.ngModelValue = event;
    this.ngModelValueChange.emit(event);
  }
}

export interface Option {
  name: string;
  value: any;
}
