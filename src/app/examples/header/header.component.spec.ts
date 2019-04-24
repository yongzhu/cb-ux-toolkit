import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
	HeaderModule
} from "cut";

import { HeaderComponentExample } from './header.component';

describe('HeaderComponentExample', () => {
  let component: HeaderComponentExample;
  let fixture: ComponentFixture<HeaderComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [HeaderModule, RouterTestingModule],
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