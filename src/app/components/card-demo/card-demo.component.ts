import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-demo",
  templateUrl: "./card-demo.component.html",
  styleUrls: ["./card-demo.component.scss"]
})
export class CardDemoComponent implements OnInit {
  loading = false;
  error = false;
  saveImageOn = true;

  tooltipIconOptions = {
    useTooltipIconType: "fa fa-info-circle",
    fontSize: "14px",
    offsetLeft: "5px",
    color: "#287AB9",
    hoverColor: "#1E5C8B",
    cursorType: "pointer",
    tooltipPosition: "right"
  };

  // menuOptions1: IMenuItem[] = [
  //   {
  //     "label": "Edit Card",
  //     "title": "Edit Title",
  //     "action": "Action 1b",
  //     "icon": "fa-pencil"
  //   },
  //   {
  //     "label": "Settings",
  //     "title": "Settings Title",
  //     "action": "Action 1c",
  //     "icon": "fa-cog"
  //   }
  // ];

  // menuOptions2: IMenuItem[] = [
  //   {
  //     "label": "Profile",
  //     "title": "Manage Alerts Title",
  //     "action": "Action 2a",
  //     "icon": "fa-bell-o"
  //   },
  //   {
  //     "label": "Account",
  //     "title": "Edit Title",
  //     "action": "Action 2b",
  //     "icon": "fa-pencil"
  //   },
  //   {
  //     "label": "No Icon Item",
  //     "title": "Label Title",
  //     "action": "Action 2c",
  //     "icon": "fa-cog"
  //   }
  // ];

  codeCard1 = `
    <cb-card [height]="{md:'2x', lg:'2x'}" [title]="'Card Title1'" [loading]="loading"
             [saveImage]="saveImageOn"
             [menuItems]="menuOptions1"
             [errorStateMessage]="'Sorry, data not available.'"
             [footerMessage]="'Card specific, custom footer message'">
      Card Content
    </cb-card>
`;
  codeCard2 = `
  menuOptions1: IMenuItem[] = [
    {
      "label": "Manage Alerts",
      "title": "Manage Alerts Title",
      "action": "Action 1a",
      "icon": "fa-bell-o"
    },
    {
      "label": "Edit Card",
      "title": "Edit Title",
      "action": "Action 1b",
      "icon": "fa-pencil"
    },
    {
      "label": "Settings",
      "title": "Settings Title",
      "action": "Action 1c",
      "icon": "fa-cog"
    }
`;

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  public cardClicked(event) {
    // tslint:disable-next-line:no-console
    console.log(`Event received: ${event}`);
  }

  public performMenuAction(event) {
    // tslint:disable-next-line:no-console
    console.log(`Menu Action received ${event}`);
  }
}
