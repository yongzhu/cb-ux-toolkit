import { Component } from "@angular/core";

@Component({

  selector: "app-accordion-item-demo",
  templateUrl: "./accordion-item-demo.component.html",
  styleUrls: ["./accordion-item-demo.component.scss"]
})
export class AccordionItemDemoComponent {

  accordionCode1 = `
  <cut-accordion [closeOthers]="true" [startOpen]="true">
    <cut-accordion-item [heading]=""Title as attribute"">
      Accordion group 1 contents.
    </cut-accordion-item>
    <cut-accordion-item [panelClass]=""hasClick"">
      <accordion-heading (click)="changeView()">
      Title as element
      </accordion-heading>
      Accordion group 2 contents.
    </cut-accordion-item>
  </cut-accordion>
`;

  accordionCode2 = `
  <cut-accordion [closeOthers]="false" [startOpen]="true">
    <cut-accordion-item [heading]=""Title as attribute"">
      Accordion group 1 contents.
    </cut-accordion-item>
    <cut-accordion-item [panelClass]=""hasClick"">
      <accordion-heading (click)="changeView()">
        Title as element
      </accordion-heading>
      Accordion group 2 contents.
    </cut-accordion-item>
  </cut-accordion>
`;
  accordionCode3 = `
          <cut-accordion [closeOthers]="false" [startOpen]="true">
            <cut-accordion-item [heading]=""Title as attribute"" [isOpen]="true">
              Accordion group 1 contents.
            </cut-accordion-item>
            <cut-accordion-item [panelClass]=""hasClick"" [isOpen]="true">
              <accordion-heading (click)="changeView()">
                Title as element
              </accordion-heading>
              Accordion group 2 contents.
            </cut-accordion-item>
          </cut-accordion>


`;
  accordionCode4 = `
          <cut-accordion [closeOthers]="false" [startOpen]="false">
            <cut-accordion-item [heading]=""Title as attribute"">
              Accordion group 1 contents.
            </cut-accordion-item>
            <cut-accordion-item [panelClass]=""hasClick"">
              <accordion-heading (click)="changeView()">
                Title as element
              </accordion-heading>
              Accordion group 2 contents.
            </cut-accordion-item>
          </cut-accordion>

`;

  changeView() {
    alert("Change View Called");
  }
}
