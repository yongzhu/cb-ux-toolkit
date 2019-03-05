import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-codeblock",
  templateUrl: "./codeblock.component.html",
  styleUrls: ["./codeblock.component.scss"]
})
export class CodeblockComponent implements OnInit {
  @Input() codeString: string;
  @Input() language: string;
  btnText: string;

  ngOnInit() {
    this.btnText = "Copy";
  }

  changeBtnText() {
    this.btnText = "Copied";
    setTimeout(() => { this.btnText = "Copy"; }, 1500);
  }
}
