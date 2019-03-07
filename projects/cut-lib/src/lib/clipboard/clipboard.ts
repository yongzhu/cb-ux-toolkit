/* tslint:disable:no-output-rename directive-selector */
import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import * as Clipboard from "clipboard";

@Directive({
  selector: "[cb-clipboard]"
})
export class ClipboardDirective implements OnInit, OnDestroy {
  clipboard: Clipboard;

  @Input("cb-clipboard") targetElm: ElementRef; // tslint:disable-line:no-input-rename

  @Input() cbContent: string;

  @Output("cbOnSuccess") onSuccess: EventEmitter<boolean> = new EventEmitter<boolean>(); // tslint:disable-line:no-output-on-prefix

  @Output("cbOnError") onError: EventEmitter<boolean> = new EventEmitter<boolean>(); // tslint:disable-line:no-output-on-prefix

  constructor(private elmRef: ElementRef) { }

  ngOnInit() {
    let option: Clipboard.Options;
    option = !!this.targetElm ? { target: () => this.targetElm as any } : { text: () => this.cbContent };
    this.clipboard = new Clipboard(this.elmRef.nativeElement, option);
    this.clipboard.on("success", () => this.onSuccess.emit(true));
    this.clipboard.on("error", () => this.onError.emit(true));
  }

  ngOnDestroy() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }
}
