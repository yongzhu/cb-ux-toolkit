import { AfterContentInit, Component, Directive, ElementRef, HostListener, Input } from "@angular/core";

@Component({
  selector: "cut-drop-box",
  templateUrl: "./drop-box.component.html",
  styleUrls: ["./drop-box.component.scss"]
})
export class DropBoxComponent implements AfterContentInit {
  @Input() open = {isOpen: false};
  @Input() hoverEnable = false;
  @Input() dropStyle?: string;

  private selfElement: Element;
  private anchorElement: Element | null;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    this.selfElement = this.el.nativeElement;
    this.anchorElement = this.selfElement.querySelector("cut-drop-box-anchor");
  }

  @HostListener("document:click", ["$event"])
  public toggleDropBox(event: MouseEvent): void {
    if (this.anchorElement && this.anchorElement.contains(event.target as HTMLElement)) {
      this.open.isOpen = !this.open.isOpen;
    }

    if (!this.el.nativeElement.contains(event.target)) {
      this.open.isOpen = false;
    }
  }
}

@Directive({selector: "cut-drop-box-anchor, cut-drop-box-content"}) // tslint:disable-line:directive-selector
export class DropBoxTagsDirective {}

export const DROPBOX_TAGS = [DropBoxComponent, DropBoxTagsDirective];
