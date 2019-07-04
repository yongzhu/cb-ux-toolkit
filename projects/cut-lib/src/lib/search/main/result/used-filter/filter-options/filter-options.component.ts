import { Component, OnInit, Input } from '@angular/core';


import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { CutNameIdModel } from '../../../../../models/data-structures/name-id-model';

@Component({
  selector: 'cut-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit {

  @Input() visible = true;
  @Input() selectable = false;
  @Input() removable = true;
  @Input() addOnBlur = true;

  @Input() filters: CutNameIdModel[];
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

  remove(filter: CutNameIdModel): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
