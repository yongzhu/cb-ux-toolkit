import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
	CutLoadingIndicatorModule
} from "cut";

import { LoadingIndicatorComponentExample } from './loading-indicator.component';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponentExample;
  let fixture: ComponentFixture<LoadingIndicatorComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [CutLoadingIndicatorModule],
      declarations: [ LoadingIndicatorComponentExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
