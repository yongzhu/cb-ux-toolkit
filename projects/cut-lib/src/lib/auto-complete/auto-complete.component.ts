import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'cut-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CutAutoCompleteComponent implements OnInit {

  @Input() options: string[];
  @Output() inputValve = new Subject();
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();


  constructor() { }

  ngOnInit() {
    if (this.options) {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }

    this.myControl.valueChanges.subscribe(value => {
      this.inputValve.next(value);
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
