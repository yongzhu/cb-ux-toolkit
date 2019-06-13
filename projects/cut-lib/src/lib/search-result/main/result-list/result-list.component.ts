import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../search-result.service';
import { ResultListModal } from '../../shared.modal';

@Component({
  selector: 'cut-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  resultList: ResultListModal;

  constructor(private srService: SearchResultService) { }

  ngOnInit() {
    this.resultList = this.srService.getFilter('resultList');
  }

}
