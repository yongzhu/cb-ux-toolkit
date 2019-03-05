import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { FormControl, NgControl } from "@angular/forms";

import { from, Observable } from "rxjs";
import { debounceTime, filter, mergeMap, toArray } from "rxjs/operators";

import { TypeaheadContainerComponent } from "../typeahead-container/typeahead-container.component";
import { ComponentsHelper } from "../utils/components-helper.service";
import { TypeaheadOptions } from "./typeahead-options";
import { getValueFromObject, latinize, tokenize } from "./typeahead-utils";

@Directive({
  /* tslint:disable */
  selector: "[typeahead][ngModel],[typeahead][formControlName]"
  /* tslint:enable */
})
export class TypeaheadDirective implements OnInit {
  @Output() typeaheadLoading: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() typeaheadNoResults: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() typeaheadOnSelect: EventEmitter<{ item: any }> = new EventEmitter<{ item: any }>(false);

  @Input() typeahead: any;
  @Input() typeaheadMinLength: number | undefined = void 0;
  @Input() typeaheadWaitMs: number;
  @Input() typeaheadOptionsLimit: number;
  @Input() typeaheadOptionField: string;
  @Input() typeaheadAsync: boolean | undefined = void 0;
  @Input() typeaheadLatinize = true;
  @Input() typeaheadSingleWords = true;
  @Input() typeaheadWordDelimiters = " ";
  @Input() typeaheadPhraseDelimiters = "\"";
  @Input() typeaheadItemTemplate: TemplateRef<any>;

  container: TypeaheadContainerComponent | undefined;
  isTypeaheadOptionsListActive = false;

  keyUpEventEmitter: EventEmitter<any> = new EventEmitter();
  _matches: Array<string>;
  placement = "bottom-left";
  popup: ComponentRef<TypeaheadContainerComponent>;

  ngControl: NgControl;
  viewContainerRef: ViewContainerRef;
  element: ElementRef;
  renderer: Renderer2;
  componentsHelper: ComponentsHelper;

  @HostListener("keyup", ["$event"])
  onChange(e: any): void {
    if (this.container) {
      // esc
      if (e.keyCode === 27) {
        this.hide();
        return;
      }

      // up
      if (e.keyCode === 38) {
        this.container.prevActiveMatch();
        return;
      }

      // down
      if (e.keyCode === 40) {
        this.container.nextActiveMatch();
        return;
      }

      // enter
      if (e.keyCode === 13) {
        this.container.selectActiveMatch();
        return;
      }
    }

    // For `<input>`s, use the `value` property. For others that don"t have a
    // `value` (such as `<span contenteditable="true">`, use `innerText`.
    const value = e.target.value !== undefined ? e.target.value : e.target.innerText;
    if (this.typeaheadMinLength && value.trim().length >= this.typeaheadMinLength) {
      this.typeaheadLoading.emit(true);
      this.keyUpEventEmitter.emit(e.target.value);
    } else {
      this.typeaheadLoading.emit(false);
      this.typeaheadNoResults.emit(false);
      this.hide();
    }
  }

  @HostListener("focus")
  onFocus(): void {
    if (this.typeaheadMinLength === 0) {
      this.typeaheadLoading.emit(true);
      this.keyUpEventEmitter.emit("");
    }
  }

  @HostListener("blur")
  onBlur(): void {
    if (this.container && !this.container.isFocused) {
      this.hide();
    }
  }

  @HostListener("keydown", ["$event"])
  onKeydown(e: KeyboardEvent): void {
    // no container - no problems
    if (!this.container) {
      return;
    }

    // if items is visible - prevent form submition
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }

    // if tab default browser behavior will select next input field, and therefore we should close the items list
    if (e.keyCode === 9) {
      this.hide();
      return;
    }
  }

  constructor(control: NgControl, viewContainerRef: ViewContainerRef, element: ElementRef,
    renderer: Renderer2, componentsHelper: ComponentsHelper) {
    this.element = element;
    this.ngControl = control;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.componentsHelper = componentsHelper;
  }

  ngOnInit(): void {
    this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
    this.typeaheadMinLength = this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
    this.typeaheadWaitMs = this.typeaheadWaitMs || 0;

    // async should be false in case of array
    if (this.typeaheadAsync === undefined && !(this.typeahead instanceof Observable)) {
      this.typeaheadAsync = false;
    }

    if (this.typeahead instanceof Observable) {
      this.typeaheadAsync = true;
    }

    if (this.typeaheadAsync) {
      this.asyncActions();
    } else {
      this.syncActions();
    }
  }

  changeModel(value: any): void {
    const valueStr: string = getValueFromObject(value, this.typeaheadOptionField);
    this.ngControl.viewToModelUpdate(valueStr);
    (this.ngControl.control as FormControl).setValue(valueStr);
    this.hide();
  }

  get matches(): Array<any> {
    return this._matches;
  }

  show(matches: Array<any>): void {
    const options = new TypeaheadOptions({
      typeaheadRef: this,
      placement: this.placement,
      animation: false
    });

    // noinspection TypeScriptValidateTypes
    this.popup = this.componentsHelper
      .appendNextToLocation(TypeaheadContainerComponent, this.viewContainerRef, [ { provide: TypeaheadOptions, useValue: options }]);

    this.popup.instance.position(this.viewContainerRef.element);
    this.container = this.popup.instance;
    this.container.parent = this;
    // This improves the speedas it won"t have to be done for each list item
    const normalizedQuery = (this.typeaheadLatinize
      ? latinize(this.ngControl && this.ngControl.control && this.ngControl.control.value)
      : this.ngControl && this.ngControl.control && this.ngControl.control.value).toString()
      .toLowerCase();
    this.container.query = this.typeaheadSingleWords
      ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
      : normalizedQuery;
    this.container.matches = matches;
    this.container.field = this.typeaheadOptionField;
    this.element.nativeElement.focus();
  }

  hide(): void {
    if (this.container) {
      this.popup.destroy();
      this.container = void 0;
    }
  }

  asyncActions(): void {
    this.keyUpEventEmitter.pipe(
      debounceTime(this.typeaheadWaitMs),
      mergeMap<any, any>(() => this.typeahead)
    ).subscribe((matches: string[]) => {
      this._matches = matches.slice(0, this.typeaheadOptionsLimit);
      this.finalizeAsyncCall();
    }, (err: any) => {
      // tslint:disable-next-line:no-console
      console.error(err);
    });
  }

  syncActions(): void {
    // noinspection TypeScriptValidateTypes
    this.keyUpEventEmitter.pipe(
      debounceTime(this.typeaheadWaitMs),
      mergeMap((value: string) => {
        const normalizedQuery = this.normalizeQuery(value);

        return from(this.typeahead)
          .pipe(
            filter((option: any) => {
              return option && this.testMatch(this.prepareOption(option).toLowerCase(), normalizedQuery);
            }),
            toArray()
          );
      })
    ).subscribe((matches: string[]) => {
      this._matches = matches.slice(0, this.typeaheadOptionsLimit);
      this.finalizeAsyncCall();
    }, (err: any) => {
      // tslint:disable-next-line:no-console
      console.error(err);
    });
  }

  prepareOption(option: any): any {
    const match: string = getValueFromObject(option, this.typeaheadOptionField);
    return this.typeaheadLatinize ? latinize(match) : match;
  }

  normalizeQuery(value: string): any {
    // If singleWords, break model here to not be doing extra work on each iteration
    let normalizedQuery: any =
      (this.typeaheadLatinize ? latinize(value) : value)
        .toString()
        .toLowerCase();
    normalizedQuery = this.typeaheadSingleWords ?
      tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters) :
      normalizedQuery;

    return normalizedQuery;
  }

  testMatch(match: string, test: any): boolean {
    let spaceLength: number;

    if (typeof test === "object") {
      spaceLength = test.length;
      for (let i = 0; i < spaceLength; i += 1) {
        if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
          return false;
        }
      }
      return true;
    } else {
      return match.indexOf(test) >= 0;
    }
  }

  finalizeAsyncCall(): void {
    this.typeaheadLoading.emit(false);
    this.typeaheadNoResults.emit(this.matches.length <= 0);

    if (this._matches.length <= 0) {
      this.hide();
      return;
    }

    if (this.container && this._matches.length > 0) {
      // This improves the speedas it won"t have to be done for each list item
      const normalizedQuery = (this.typeaheadLatinize
        ? latinize(this.ngControl && this.ngControl.control && this.ngControl.control.value)
        : this.ngControl && this.ngControl.control && this.ngControl.control.value).toString()
        .toLowerCase();
      this.container.query = this.typeaheadSingleWords
        ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
        : normalizedQuery;
      this.container.matches = this._matches;
    }

    if (!this.container && this._matches.length > 0) {
      this.show(this._matches);
    }
  }

}
