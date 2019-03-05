export class ButtonBlockClass {
  blockClass = "";

  constructor(buttonSizeClass: string) {
    switch (buttonSizeClass) {
      case "xs":
        this.blockClass = "btn-block-xs";
        break;
      case "sm":
        this.blockClass = "btn-block-sm";
        break;
      case "md":
        this.blockClass = "btn-block-md";
        break;
      case "lg":
        this.blockClass = "btn-block-lg";
        break;
      case "xl":
        this.blockClass = "btn-block-xl";
        break;
      default:
        this.blockClass = "";
        break;
    }
  }
}
