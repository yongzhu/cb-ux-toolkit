import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "cut-result-tabs",
  templateUrl: "./result-tabs.component.html",
  styleUrls: ["./result-tabs.component.css"]
})
export class ResultTabsComponent {

  @Input() public links: any[] = [];
  @Output() public links = new EventEmitter();
  private dataKey: string = 'resultTabs';

  constructor() { }

  clickHandler = (id: number) => {
    this.links.emit(id);
  }
}
