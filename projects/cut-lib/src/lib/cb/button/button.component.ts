import { Component, Input, OnInit } from "@angular/core";
import { ButtonBlockClass } from "./models/button-block.class";
import { ButtonSizeClass } from "./models/button-size.class";
import { ButtonStyleClass } from "./models/button-style.class";

@Component({
  selector: "cb-button",
  templateUrl: "./button.component.html",
  styleUrls: [ "./button.component.scss" ]
})
export class ButtonComponent implements OnInit {

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

  buttonType = "default";

  classList: string;

  buttonStyleClass: ButtonStyleClass;
  buttonSizeClass: ButtonSizeClass;
  buttonBlockClass: ButtonBlockClass;

  ngOnInit(): void {
    this.buttonStyleClass = new ButtonStyleClass(this.buttonStyle);
    this.buttonSizeClass = new ButtonSizeClass(this.size);
    this.buttonBlockClass = new ButtonBlockClass(this.block);
    this.classList = this.buttonStyleClass.classes + " " + this.buttonSizeClass.sizeClass + " " + this.buttonBlockClass.blockClass;
    if (this.href) {
      this.buttonType = "link";
    }
  }

  stopPropagationIfDisabled(event: MouseEvent): void {
    if (this.disabled) {
      event.stopPropagation();
    }
  }
}
