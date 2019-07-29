import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'nice-to-have',
  templateUrl: './nice-to-have.component.html',
  styleUrls: ['./nice-to-have.component.scss']
})
export class NiceToHaveComponent implements OnInit {

  @Input() level: number = 1;
  @Output() currentLevel = new Subject<number>();
  constructor() { }

  ngOnInit() {
  }

  clickHandler = (val: number) => {
    this.level = val;
    this.currentLevel.next(val);
  }

}
