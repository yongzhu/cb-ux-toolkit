export class ButtonSizeClass {
  sizeClass = "";

  constructor(buttonSizeClass: string) {
    switch (buttonSizeClass) {
      case "small":
        this.sizeClass = "btn-sm";
        break;
      case "large":
        this.sizeClass = "btn-lg";
        break;
      default:
        this.sizeClass = "";
        break;
    }
  }
}
