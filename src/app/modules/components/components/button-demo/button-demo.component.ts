import { Component, OnInit } from "@angular/core";

@Component({

  selector: "app-button-demo",
  templateUrl: "./button-demo.component.html",
  styleUrls: [ "./button-demo.component.scss" ]
})
export class ButtonDemoComponent implements OnInit {

  buttonExample1A = `
    <cb-button [title]="'Default'" [button-style]="'default'"></cb-button>
  `;

  buttonExample1B = `
    <cb-button [title]="'Primary'" [button-style]="'primary'"></cb-button>
  `;

  buttonExample1C = `
    <cb-button [title]="'Secondary'" [button-style]="'secondary'"></cb-button>
  `;

  buttonExample1D = `
    <cb-button [title]="'Negative'" [button-style]="'negative'"></cb-button>
  `;

  anchor1 = `
    <cb-button [title]="'Anchor 1'" [button-style]="'default'" [href]="'http://google.com'"></cb-button>
  `;

  anchor2 = `
    <cb-button [title]="'Anchor 2'" [button-style]="'primary'" [href]="'http://google.com'"></cb-button>
  `;

  anchor3 = `
    <cb-button [title]="'Anchor 3'" [button-style]="'secondary'" [href]="'http://google.com'"></cb-button>
  `;

  anchor4 = `
    <cb-button [title]="'Anchor 4'" [button-style]="'negative'" [href]="'http://google.com'"></cb-button>
  `;

  blockXS = `
    <cb-button [title]="'Block XS'" [button-style]="'default'" [block]="'xs'"></cb-button>
  `;

  blockSM = `
    <cb-button [title]="'Block SM" [button-style]="'primary'" [block]="'sm'"></cb-button>
  `;

  blockMD = `
    <cb-button [title]="'Block MD'" [button-style]="'secondary'" [block]="'md'"></cb-button>
  `;

  blockLG = `
    <cb-button [title]="'Block LG'" [button-style]="'negative'" [block]="'lg'"></cb-button>
  `;

  blockXL = `
    <cb-button [title]="'Block XL'" [button-style]="'negative'" [block]="'xl'"></cb-button>
  `;

  constructor() {
  }

  ngOnInit() {
  }

}
