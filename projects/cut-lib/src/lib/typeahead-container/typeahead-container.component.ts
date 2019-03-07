/* tslint:disable:component-selector */

import { Component, ElementRef, TemplateRef, ViewEncapsulation } from "@angular/core";
import { positionService } from "../type-ahead/position-service";
import { TypeaheadOptions } from "../type-ahead/typeahead-options";
import { getValueFromObject, latinize } from "../type-ahead/typeahead-utils";
import { TypeaheadDirective } from "../type-ahead/typeahead.directive";

@Component({
  selector: "cut-typeahead-container",
  templateUrl: "./typeahead-container.component.html",
  styleUrls: ["./typeahead-container.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadContainerComponent {
  public parent: TypeaheadDirective;
  public query: any;
  public element: ElementRef;
  public isFocused = false;
  public top: string;
  public left: string;
  public display: string;

  private _active: any;
  private _matches: Array<any> = [];
  private _field: string;
  private placement: string;

  public constructor(element: ElementRef, options: TypeaheadOptions) {
    this.element = element;
    Object.assign(this, options);
  }

  public get matches(): Array<any> {
    return this._matches;
  }

  public get itemTemplate(): TemplateRef<any> | undefined {
    return this.parent ? this.parent.typeaheadItemTemplate : undefined;
  }

  public set matches(value: Array<any>) {
    this._matches = value;
    if (this._matches.length > 0) {
      this._active = this._matches[0];
    }
  }

  public set field(value: string) {
    this._field = value;
  }

  public position(hostEl: ElementRef): void {
    this.display = "block";
    this.top = "0px";
    this.left = "0px";
    const p = positionService
      .positionElements(hostEl.nativeElement,
        this.element.nativeElement.children[0],
        this.placement, false);
    this.top = p.top + "px";
    this.left = p.left + "px";
  }

  public selectActiveMatch(): void {
    this.selectMatch(this._active);
  }

  public prevActiveMatch(): void {
    const index = this.matches.indexOf(this._active);
    this._active = this.matches[index - 1 < 0
      ? this.matches.length - 1
      : index - 1];
  }

  public nextActiveMatch(): void {
    const index = this.matches.indexOf(this._active);
    this._active = this.matches[index + 1 > this.matches.length - 1
      ? 0
      : index + 1];
  }

  public selectActive(value: any): void {
    this.isFocused = true;
    this._active = value;
  }

  public hightlight(item: any, query: any): string {
    let itemStr: string = getValueFromObject(item, this._field);
    let itemStrHelper: string = (this.parent.typeaheadLatinize
      ? latinize(itemStr)
      : itemStr).toLowerCase();
    let startIdx: number;
    let tokenLen: number;
    // Replaces the capture string with the same string inside of a "strong" tag
    if (typeof query === "object") {
      const queryLen: number = query.length;
      for (let i = 0; i < queryLen; i += 1) {
        // query[i] is already latinized and lower case
        startIdx = itemStrHelper.indexOf(query[i]);
        tokenLen = query[i].length;
        if (startIdx >= 0 && tokenLen > 0) {
          itemStr = itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) +
            "</strong>" + itemStr.substring(startIdx + tokenLen);
          itemStrHelper = itemStrHelper.substring(0, startIdx) + "        " + " ".repeat(tokenLen) + "         " +
            itemStrHelper.substring(startIdx + tokenLen);
        }
      }
    } else if (query) {
      // query is already latinized and lower case
      startIdx = itemStrHelper.indexOf(query);
      tokenLen = query.length;
      if (startIdx >= 0 && tokenLen > 0) {
        itemStr = itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) +
          "</strong>" + itemStr.substring(startIdx + tokenLen);
      }
    }
    return itemStr;
  }

  public focusLost(): void {
    this.isFocused = false;
  }

  public isActive(value: any): boolean {
    return this._active === value;
  }

  public selectMatch(value: any, e: Event | undefined = void 0): boolean {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.parent.changeModel(value);
    setTimeout(() =>
      this.parent.typeaheadOnSelect.emit({
        item: value
      }), 0
    );
    return false;
  }
}
