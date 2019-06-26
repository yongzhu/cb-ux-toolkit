import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing';

import {
  CutSearchbarModule,
  CutSearchResultModule
} from "cut";

import { SearchbarComponentExample } from './searchbar.component';

describe('CutSearchbardModule', () => {
  let component: SearchbarComponentExample;
  let fixture: ComponentFixture<SearchbarComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, CutSearchbarModule, CutSearchResultModule],
      declarations: [ SearchbarComponentExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new ', () => {
    expect(component).toBeTruthy();
  });
});
