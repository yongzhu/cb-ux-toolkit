import { TestBed } from '@angular/core/testing';

import { CutApiService } from './cut-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('CutApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    const service: CutApiService = TestBed.get(CutApiService);
    expect(service).toBeTruthy();
  });
});
