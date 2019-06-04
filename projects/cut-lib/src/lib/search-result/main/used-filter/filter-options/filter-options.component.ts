import { Component, OnInit, Input } from '@angular/core';


import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Filter } from '../../../shared.modal';

@Component({
  selector: 'cut-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {


  @Input() visible = true;
  @Input() selectable = false;
  @Input() removable = true;
  @Input() addOnBlur = true;

  @Input() filters: Filter[];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.filters.push({ name: value.trim(), id: this.filters.length });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(filter: Filter): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
