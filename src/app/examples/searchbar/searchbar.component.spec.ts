import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CutSearchModule } from "cut";

import { SearchbarComponentExample } from './searchbar.component';
import { ExampleService } from '../example.service';

describe('CutSearchbardModule', () => {
  let component: SearchbarComponentExample;
  let fixture: ComponentFixture<SearchbarComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, CutSearchModule],
      declarations: [ SearchbarComponentExample ],
      providers:[ExampleService]
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
