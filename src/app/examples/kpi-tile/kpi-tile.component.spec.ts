import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
	CutKpiTileModule
} from "cut";

import { KpiTileComponentExample } from './kpi-tile.component';

describe('KpiTileComponent', () => {
  let component: KpiTileComponentExample;
  let fixture: ComponentFixture<KpiTileComponentExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [CutKpiTileModule, RouterTestingModule],
      declarations: [ KpiTileComponentExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiTileComponentExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new ', () => {
    expect(component).toBeTruthy();
  });
});
