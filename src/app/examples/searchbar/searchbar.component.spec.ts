import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
	CutLoadingIndicatorModule
} from "cut";

import { SearchbarComponentExample } from './searchbar.component';

describe('LoadingIndicatorComponent', () => {
  let component: SearchbarComponentExample;
  let fixture: ComponentFixture<SearchbarComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [SearchbarComponentExample, RouterTestingModule],
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
