import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  CutSearchResultModule
} from "cut";

import { SearchResultComponentExample } from './search-result.component';

describe('SearchresultComponent', () => {
  let component: SearchResultComponentExample;
  let fixture: ComponentFixture<SearchResultComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CutSearchResultModule, RouterTestingModule],
      declarations: [SearchResultComponentExample]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new ', () => {
    expect(component).toBeTruthy();
  });
});
