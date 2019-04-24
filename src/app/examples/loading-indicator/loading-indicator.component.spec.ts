import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
	CutLoadingIndicatorModule
} from "cut";

import { LoadingIndicatorComponentExample } from './loading-indicator.component';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponentExample;
  let fixture: ComponentFixture<LoadingIndicatorComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [CutLoadingIndicatorModule, RouterTestingModule],
      declarations: [ LoadingIndicatorComponentExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new ', () => {
    expect(component).toBeTruthy();
  });
});
