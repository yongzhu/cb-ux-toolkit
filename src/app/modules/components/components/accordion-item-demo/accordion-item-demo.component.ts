import { Component } from "@angular/core";

@Component({

  selector: "app-accordion-item-demo",
  templateUrl: "./accordion-item-demo.component.html",
  styleUrls: ["./accordion-item-demo.component.scss"]
})
export class AccordionItemDemoComponent {

  accordionCode1 = `
  <cb-accordion [closeOthers]="true" [startOpen]="true">
    <cb-accordion-item [heading]=""Title as attribute"">
      Accordion group 1 contents.
    </cb-accordion-item>
    <cb-accordion-item [panelClass]=""hasClick"">
      <accordion-heading (click)="changeView()">
      Title as element
      </accordion-heading>
      Accordion group 2 contents.
    </cb-accordion-item>
  </cb-accordion>
`;

  accordionCode2 = `
  <cb-accordion [closeOthers]="false" [startOpen]="true">
    <cb-accordion-item [heading]=""Title as attribute"">
      Accordion group 1 contents.
    </cb-accordion-item>
    <cb-accordion-item [panelClass]=""hasClick"">
      <accordion-heading (click)="changeView()">
        Title as element
      </accordion-heading>
      Accordion group 2 contents.
    </cb-accordion-item>
  </cb-accordion>
`;
  accordionCode3 = `
          <cb-accordion [closeOthers]="false" [startOpen]="true">
            <cb-accordion-item [heading]=""Title as attribute"" [isOpen]="true">
              Accordion group 1 contents.
            </cb-accordion-item>
            <cb-accordion-item [panelClass]=""hasClick"" [isOpen]="true">
              <accordion-heading (click)="changeView()">
                Title as element
              </accordion-heading>
              Accordion group 2 contents.
            </cb-accordion-item>
          </cb-accordion>


`;
  accordionCode4 = `
          <cb-accordion [closeOthers]="false" [startOpen]="false">
            <cb-accordion-item [heading]=""Title as attribute"">
              Accordion group 1 contents.
            </cb-accordion-item>
            <cb-accordion-item [panelClass]=""hasClick"">
              <accordion-heading (click)="changeView()">
                Title as element
              </accordion-heading>
              Accordion group 2 contents.
            </cb-accordion-item>
          </cb-accordion>

`;

  changeView() {
    alert("Change View Called");
  }
}
