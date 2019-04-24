import { inject, TestBed } from "@angular/core/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { CutHeaderService } from "./header.service";

describe("CutHeaderService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CutHeaderService],
      imports: [RouterTestingModule]
    });
  });

  it("should ...", inject([CutHeaderService], (service: CutHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
