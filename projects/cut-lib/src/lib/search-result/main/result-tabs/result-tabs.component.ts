import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchResultService } from '../../search-result.service';

import { Subscription } from 'rxjs';
import { CutLinkModel } from '../../../models/data-structures/link-model';

@Component({
  selector: 'cut-result-tabs',
  templateUrl: './result-tabs.component.html',
  styleUrls: ['./result-tabs.component.css']
})
export class ResultTabsComponent implements OnInit, OnDestroy {

  links: CutLinkModel[] = [];
  private dataKey: string = 'resultTabs';
  dataSubs: Subscription;

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    this.links = this.srService.getFilter(this.dataKey);
    this.dataSubs = this.srService.tabChangeDetectWithData.subscribe(data => {
      this.links = data;
    })
  }

  ngOnDestroy() {
    this.dataSubs.unsubscribe();
  }

  clickHandler = (id: number) => {
    this.srService.tabChangedHandler(id, this.dataKey);
  }
}
