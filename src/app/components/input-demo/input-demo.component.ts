import { Component } from "@angular/core";

@Component({
  selector: "app-input-demo",
  templateUrl: "./input-demo.component.html",
  styleUrls: ["./input-demo.component.scss"]
})
export class InputDemoComponent {
  inputValue = "hello";

  fruitName = "";

  codeInput1 = `
    <span>input value: {{inputValue}}</span>
    <cut-input [input-type]=""text"" [hide-label]=""hide-label""
              [label-name]=""Demo Hide Label Name""
              [required]=""true"" [placeholder]=""placeholder hide text label""
              [(ngModelValue)]="inputValue"></cut-input>

  `;

  codeInput2 = `
    <cut-input [label-name]=""Demo Text Label Name"" [input-type]=""text""
              [required]=""true"" [placeholder]=""placeholder text""></cut-input>
  `;

  codeInput3 = `
    <cut-input [label-name]=""Demo Text Label Name"" [input-type]=""text""
              [required]=""true"" [placeholder]=""placeholder text"">
      <label-content>
        : My Customize Label. Extend more description.
      </label-content>
    </cut-input>

  `;

  codeInput4 = `
    <cut-input [label-name]=""Demo Text Label Name With Icon Left"" [input-type]=""text""
      [required]=""true"" [placeholder]=""placeholder text with icon""
      [icon]=""fa fa-check"" [iconPosition]=""left""></cut-input>
`;

  codeInput5 = `
    <cut-input [label-name]=""Demo Text Label Name With Icon Right"" [input-type]=""text""
              [required]=""true"" [placeholder]=""placeholder text with icon""
              [icon]=""fa fa-check"" [iconPosition]=""right""></cut-input>
  `;

  codeInput6 = `
    <cut-input [label-name]=""Demo Success Text Label Name"" [input-type]=""text""
              [required]=""true"" [placeholder]=""placeholder text""
              [status]=""has-success""></cut-input>
  `;

  codeInput7 = `
    <cut-input [label-name]=""Demo Failed Text Label Name"" [input-type]=""text""
              [required]=""true"" [placeholder]=""placeholder text""
              [error-message]=""Customizable error message""
              [status]=""has-error""></cut-input>
  `;

  codeInput8 = `
    <cut-input [input-type]=""text""
              [label-name]=""Demo of type ahead""
              [required]="false"
              [(ngModelValue)]="fruitName"
              [typeahead]="true"
              (keyup.enter)="fakeFruitSearch()"
              [typeaheadFn]="fakeFruitService()"
              [typeaheadOption]=""name""
              [typeaheadWaitTime]="200"
              [typeaheadMinLength]="1"></cut-input>
  `;

  codeInput9 = `
    <cut-input [label-name]=""Demo Number Label Name"" [input-type]=""number""
          [required]=""true"" [placeholder]=""3"" [hide-label]=""hide-label""></cut-input>
  `;

  codeInput10 = `
    <cut-input [label-name]=""Demo Number Label Name"" [input-type]=""number""
          [required]=""true"" [placeholder]=""3""></cut-input>
  `;

  codeInput11 = `
    <cut-input [label-name]=""Demo Number Label Name"" [input-type]=""number""
            [required]=""true"" [placeholder]=""3"">
      <label-content>
        : My Customize Label. Extend more description.
      </label-content>

    </cut-input>
  `;

  codeInput12 = `
    <cut-input [label-name]=""Demo Success Number Label Name"" [input-type]=""number""
            [required]=""required"" [placeholder]=""3"" [status]=""has-success""></cut-input>
  `;

  codeInput13 = `
    <cut-input [label-name]=""Demo Error Number Label Name"" [input-type]=""number""
          [required]=""required"" [placeholder]=""3"" [status]=""has-error""></cut-input>
  `;

  codeInput14 = `
    <cut-input [label-name]=""Demo Radio Label Name"" [input-type]=""radio""
            [input-id]="demoRadioId" [input-value]="demoRadioValue"></cut-input>
  `;

  codeInput15 = `
  <cut-input [label-name]=""Demo Checkbox Label Name"" [input-type]=""checkbox""
        [input-id]="demoCheckboxId" [input-value]="demoCheckboxValue"></cut-input>
  `;

  fakeFruitService() {
    // e.g. Call HTTP service with this.fruitName as a parameter
    return [
      "Apple",
      "Banana",
      "Cantaloupe",
      "Dragon Fruit",
      "Eggplant",
      "Fig",
      "Grapes",
      "Honeydew",
      "Lychee",
      "Mango",
      "Nectarine",
      "Peach",
      "Tangerine",
      "Watermelon",
      "Zucchini"
    ];
  }

  fakeFruitSearch() {
    // tslint:disable-next-line:no-console
    console.log(`Search action using ${this.fruitName}`);
  }
}
