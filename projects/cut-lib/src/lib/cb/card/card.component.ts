import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Directive } from "@angular/core";

import { IMenuItem } from "./menu-item";

export interface UseTooltipOptions {
  useTooltipIconType?: string;
  fontSize?: string;
  offsetLeft?: string;
  color?: string;
  hoverColor?: string;
  cursorType?: string;
  tooltipPosition?: "left" | "right" | "bottom" | "top" | "auto";
}

@Component({
  selector: "cb-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  open = false;
  internalHeaderLink = false;
  hover: boolean;
  useTooltipIconOptionsDefault: UseTooltipOptions = {
    useTooltipIconType: "fa fa-info-circle",
    fontSize: "14px",
    offsetLeft: "5px",
    color: "black",
    hoverColor: "dark-grey",
    cursorType: "default",
    tooltipPosition: "right"
  };

  @Input() title = "";
  @Input() height: HeightOptions;
  @Input() chart = false;
  @Input() customTitle = false;
  @Input() loading = false;
  @Input() errorState = false;
  @Input() errorStateMessage = "Sorry, data not available.";
  @Input() footerMessage = "";
  @Input() menuItems: IMenuItem[];
  @Input() errorImage: string;
  @Input() saveImage = false;
  @Input() dropdownBoxId?: string;
  @Input() isHeader: boolean;
  @Input() titleTooltip: string;
  @Input() useTooltipIcon: boolean;
  @Input() isClickable = false;
  @Input() useTooltipIconOptions: UseTooltipOptions = this.useTooltipIconOptionsDefault;
  @Output() menuAction = new EventEmitter();
  @Output() clickedAction = new EventEmitter();

  classList = "";

  ngOnInit() {
    if (this.useTooltipIcon) {
      if (!this.useTooltipIconOptions) {
        this.useTooltipIconOptions = this.useTooltipIconOptionsDefault;
      }

      this.useTooltipIconOptions.useTooltipIconType = this.useTooltipIconOptions.useTooltipIconType
        || this.useTooltipIconOptionsDefault.useTooltipIconType;
      this.useTooltipIconOptions.fontSize = this.useTooltipIconOptions.fontSize || this.useTooltipIconOptionsDefault.fontSize;
      this.useTooltipIconOptions.offsetLeft = this.useTooltipIconOptions.offsetLeft || this.useTooltipIconOptionsDefault.offsetLeft;
      this.useTooltipIconOptions.color = this.useTooltipIconOptions.color || this.useTooltipIconOptionsDefault.color;
      this.useTooltipIconOptions.hoverColor = this.useTooltipIconOptions.hoverColor || this.useTooltipIconOptionsDefault.hoverColor;
      this.useTooltipIconOptions.cursorType = this.useTooltipIconOptions.cursorType || this.useTooltipIconOptionsDefault.cursorType;
      this.useTooltipIconOptions.tooltipPosition = this.useTooltipIconOptions.tooltipPosition
        || this.useTooltipIconOptionsDefault.tooltipPosition;
    }

    this.setCardHeight();
  }

  emitEventOut(event: Event, action: any) {
    event.stopPropagation();
    this.menuAction.emit(action);
  }

  clicked() {
    this.clickedAction.emit("clicked");
  }

  setCardHeight() {
    if (typeof this.height !== "undefined" && typeof this.height.sm !== "undefined") {
      this.classList += "card-height-sm-" + this.height.sm + " ";
    }
    if (typeof this.height !== "undefined" && typeof this.height.md !== "undefined") {
      this.classList += "card-height-md-" + this.height.md + " ";
    }
    if (typeof this.height !== "undefined" && typeof this.height.lg !== "undefined") {
      this.classList += "card-height-lg-" + this.height.lg + " ";
    }

    if (this.isClickable) {
      this.classList += "clickable";
    }
  }

  toggleOpen() {
    this.open = !this.open;
  }

  closeDropdown($event: any): void {
    /*
     * TODO : Implement functionality that closes the dropdown
     * */
  }
}

/* tslint:disable */
@Directive({
  selector: 'cb-card-title, cb-card-error'
})
export class CardChildTagsDirective {}

/* tslint:enable */

export const CARD_TAGS = [CardComponent, CardChildTagsDirective];

export interface HeightOptions {
  sm?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x";
  md?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x";
  lg?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x";
}
