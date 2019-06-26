import { Component, OnInit, Input } from '@angular/core';
import { CutVerticalOptionModel } from '../models/data-structures/result-list-model';


@Component({
  selector: 'cut-vertical-option',
  templateUrl: './vertical-option.component.html',
  styleUrls: ['./vertical-option.component.scss'],
})

export class VerticalOption implements OnInit {

  @Input() options: CutVerticalOptionModel[];
  @Input() showIcon: boolean = true;
  @Input() showContent: boolean = false;
  defaultIcon: string = 'blur_on';

  constructor() {

  }

  ngOnInit() {

  }
}
