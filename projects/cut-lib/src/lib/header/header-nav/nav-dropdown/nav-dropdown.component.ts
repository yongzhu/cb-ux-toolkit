import { Component, ElementRef, HostListener, Input } from "@angular/core";

@Component({
  selector: "cb-nav-dropdown",
  templateUrl: "./nav-dropdown.component.html",
  styleUrls: [ "./nav-dropdown.component.scss" ]
})
export class CutNavDropdownComponent {
  open = false;

  @Input()
  item: any;

  @HostListener("document:click", [ "$event" ])
  closeDropdown(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  constructor(private el: ElementRef) {
  }

  // tslint:disable-next-line
  routeToExternalPath(...data: any[]) {
  }

  // tslint:disable-next-line
  emitActionType(...data: any[]) {
  }
}
