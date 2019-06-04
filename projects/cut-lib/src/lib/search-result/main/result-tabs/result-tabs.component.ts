import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../search-result.service';
import { Link } from '../../shared.modal';
import { log } from 'util';

@Component({
  selector: 'cut-result-tabs',
  templateUrl: './result-tabs.component.html',
  styleUrls: ['./result-tabs.component.css']
})
export class ResultTabsComponent implements OnInit {

  links: Link[] = [];
  activeLink: number;

  constructor(private srDService: SearchResultService) { }

  ngOnInit() {
    this.links = this.srDService.getFilter('resultTabs');
    this.activeLink = this.links[0].id;
  }
}
