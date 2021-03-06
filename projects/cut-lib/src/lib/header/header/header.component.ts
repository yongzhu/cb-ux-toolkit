import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { Observable } from "rxjs";

import { CutHeaderService } from "../header.service";

@Component({
	selector: "cut-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class CutHeaderComponent implements OnInit {
	@Output() sidenavButtonClick = new EventEmitter<null>();

	@Input() isFixed = false;
	@Input() isFlattened = false;

	headerObj: any;
	validHeaderObj$: Observable<boolean>;

	constructor(private headerService: CutHeaderService) { }

	ngOnInit(): void {
		this.validHeaderObj$ = this.headerService.validHeaderSourceObservable;
		this.headerService.headerSource.subscribe(headerObj => this.headerObj = { ...headerObj });
	}

	trigger() {
		this.sidenavButtonClick.emit();
	}

	emitActionType(action: string, element?: string, payload?: any) {
		let subItem;
		if (!element) {
			subItem = "";
		} else {
			subItem = ":" + element;
		}
		this.headerService.emitActionType(action, "header" + subItem, payload);
	}
}
