import { Component, Input } from "@angular/core";

@Component({
  selector: "cut-result-tabs",
  templateUrl: "./result-tabs.component.html",
  styleUrls: ["./result-tabs.component.css"]
})
export class ResultTabsComponent {

  @Input() links: any[] = [];
  private dataKey: string = 'resultTabs';

  constructor() { }

  clickHandler = (id: number) => {
    console.log('results tab', id);
  }
}
