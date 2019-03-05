export class ButtonStyleClass {
  classes = "";

  constructor(buttonStyleClass: string) {
    switch (buttonStyleClass) {
      case "default":
        this.classes = "btn btn-default";
        break;
      case "primary":
        this.classes = "btn btn-primary";
        break;
      case "secondary":
        this.classes = "btn btn-secondary";
        break;
      case "tertiary":
        this.classes = "btn btn-tertiary";
        break;
      case "negative":
        this.classes = "btn btn-negative";
        break;
      case "link":
        this.classes = "btn btn-link";
        break;
      case "success":
        this.classes = "btn btn-success";
        break;
      case "info":
        this.classes = "btn btn-info";
        break;
      case "warning":
        this.classes = "btn btn-warning";
        break;
      case "error":
        this.classes = "btn btn-error";
        break;
      default:
        this.classes = "btn btn-default";
        break;
    }
  }
}
