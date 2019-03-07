import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer
} from "@angular/core";

import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: "cb-accordion-item",
  templateUrl: "./accordion-item.component.html",
  styleUrls: ["./accordion-item.component.scss"]
})
export class AccordionItemComponent implements OnInit, OnDestroy {
  @Input()
  heading: string;
  @Input()
  panelClass: string;
  @Input()
  isDisabled: boolean;
  @Input()
  openByTitle = false;

  @Input()
  set iconClassNames(iconClassNames: any) {
    this._expandIconClass = iconClassNames.expandIconClass;
    this._collapseIconClass = iconClassNames.collapseIconClass;

    this.defineIconClassName();
  }

  @Input()
  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
    this.defineIconClassName();
  }

  @Output()
  public onClose: EventEmitter<void> = new EventEmitter<void>(); // tslint:disable-line:no-output-on-prefix

  @Output()
  public onShow: EventEmitter<void> = new EventEmitter<void>(); // tslint:disable-line:no-output-on-prefix

  _isOpen: boolean;

  _collapseIconClass: string;
  _expandIconClass: string;

  constructor(@Inject(AccordionComponent) private accordion: AccordionComponent,
    public el: ElementRef,
    public renderer: Renderer // tslint:disable-line
  ) { }

  ngOnInit() {
    this.panelClass = this.panelClass || "panel-default";

    if (this.accordion.groups.length === 0 && this.accordion.startOpen) {
      this.isOpen = true;
    }
    this.accordion.addGroup(this);
  }

  private defineIconClassName(): void {
    const accordionItemElement = this.el.nativeElement.querySelector(".accordion-item-icon");
    const itemClassName = this.isOpen ? this._collapseIconClass : this._expandIconClass;

    const collapseIconCls = this._collapseIconClass;
    const expandIconCls = this._expandIconClass;

    const clearClasses = () => {
      const isContainsCollapse = accordionItemElement.classList.contains(collapseIconCls);
      const isContainsExpand = accordionItemElement.classList.contains(expandIconCls);

      if (isContainsCollapse) {
        accordionItemElement.classList.remove(collapseIconCls);
      }

      if (isContainsExpand) {
        accordionItemElement.classList.remove(expandIconCls);
      }
    };

    clearClasses();

    this.renderer.setElementClass(accordionItemElement, "fa", true);
    this.renderer.setElementClass(accordionItemElement, itemClassName, true);
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  toggleOpen(event: MouseEvent) {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
    if (this.isOpen) {
      this.onShow.emit();
    } else {
      this.onClose.emit();
    }
    this.defineIconClassName();
  }

  toogleOpenByTitle(event: MouseEvent) {
    if (this.openByTitle) {
      this.toggleOpen(event);
    }
  }
}
