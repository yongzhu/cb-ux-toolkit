import { Component } from "@angular/core";
import { Option } from "cut/lib/select/select.component.d";

@Component({
  selector: "app-select-demo",
  templateUrl: "./select-demo.component.html",
  styleUrls: ["./select-demo.component.css"]
})
export class SelectDemoComponent {
  options: Option[];
  greeting: any;

  codeSelect1 = `
    <cut-select [label]="'Select a greeting'" [options]="options" [(ngModelValue)]="greeting"></cut-select>
  `;

  codeSelect2 = `
    options: Option[];
    greeting: any;

    constructor() {
      this.options = [
        {name: 'Hello', value: 'english'},
        {name: 'Salut', value: 'french'},
        {name: 'Hola', value: 'spanish'}
      ];

      this.greeting = 'french';
    }
  `;

  constructor() {
    this.options = [
      {name: "Hello", value: "english"},
      {name: "Salut", value: "french"},
      {name: "Hola", value: "spanish"}
    ];
    this.greeting = "french";
  }
}
