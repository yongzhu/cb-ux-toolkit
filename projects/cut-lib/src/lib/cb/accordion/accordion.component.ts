import { AfterViewInit, Component, Input } from "@angular/core";
import { Directive } from "@angular/core";
import { AccordionItemComponent } from "../accordion-item/accordion-item.component";

@Component({
  selector: "cb-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent implements AfterViewInit {
  @Input()
  closeOthers = false;

  @Input()
  startOpen = false;

  @Input()
  collapseClassName = "fa-minus";

  @Input()
  expandClassName = "fa-plus";

  groups: Array<AccordionItemComponent> = [];

  public setIconClasses(group: AccordionItemComponent): void {
    group.iconClassNames = {
      expandIconClass: this.expandClassName,
      collapseIconClass: this.collapseClassName
    };
  }

  ngAfterViewInit() {
    this.groups.map(group => this.setIconClasses(group));
  }

  public closeOtherPanels(openGroup: AccordionItemComponent): void {
    if (!this.closeOthers) { return; }

    this.groups.filter(group => group !== openGroup).map(group => group.isOpen = false);
  }

  public addGroup(group: AccordionItemComponent): void {
    this.setIconClasses(group);
    this.groups.push(group);
  }

  public removeGroup(group: AccordionItemComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}

/* tslint:disable:directive-selector */
@Directive({
  selector: "accordion-heading"
})
export class AccordionChildrenTagsDirective {}
/* tslint:enable:directive-selector */

export const ACCORDION_TAGS = [ AccordionComponent, AccordionChildrenTagsDirective ];
