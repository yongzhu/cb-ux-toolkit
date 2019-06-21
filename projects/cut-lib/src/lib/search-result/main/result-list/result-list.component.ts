import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchResultService } from '../../search-result.service';
import { CutCandidateModel } from '../../../models/data-structures/candidate-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cut-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit, OnDestroy {

  resultList?: CutCandidateModel[];
  listSub: Subscription;
  private dataKey: string = 'resultList';

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    this.resultList = this.srService.getFilter(this.dataKey);
    this.listSub = this.srService.listDetectWithData.subscribe((data: CutCandidateModel[]) => {
      this.resultList = data;
    })
  }
  ngOnDestroy() {
    this.listSub.unsubscribe();
  }

}
