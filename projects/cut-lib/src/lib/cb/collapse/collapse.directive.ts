/* tslint:disable:directive-selector */

import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[collapse]"
})
export class CollapseDirective {
  // style
  @HostBinding("style.height")
  height: string;
  // shown
  @HostBinding("class.in")
  @HostBinding("attr.aria-expanded")
  isExpanded = true;
  // hidden
  @HostBinding("attr.aria-hidden")
  isCollapsed = false;
  // stale state
  @HostBinding("class.collapse")
  isCollapse = true;
  // animation state
  @HostBinding("class.collapsing")
  isCollapsing = false;

  @Input()
  set collapse(value: boolean) {
    this.isExpanded = value;
    this.toggle();
  }

  get collapse(): boolean {
    return this.isExpanded;
  }

  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide() {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = false;
    this.isCollapsed = true;
    setTimeout(() => {
      this.height = "0";
      this.isCollapse = true;
      this.isCollapsing = false;
    }, 4);
  }

  show() {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = true;
    this.isCollapsed = false;
    setTimeout(() => {
      this.height = "auto";

      this.isCollapse = true;
      this.isCollapsing = false;
    }, 4);
  }
}
