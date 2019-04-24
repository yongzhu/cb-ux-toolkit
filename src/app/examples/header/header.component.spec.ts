import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
	CutLoadingIndicatorModule
} from "cut";

import { HeaderComponentExample } from './header.component';

describe('LoadingIndicatorComponent', () => {
  let component: HeaderComponentExample;
  let fixture: ComponentFixture<HeaderComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [CutLoadingIndicatorModule],
      declarations: [ HeaderComponentExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});