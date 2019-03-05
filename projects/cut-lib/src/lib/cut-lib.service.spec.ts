import { inject, TestBed } from "@angular/core/testing";

import { CutLibService } from "./cut-lib.service";

describe("CbesVdlLibService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CutLibService]
    });
  });

  it("should be created", inject([CutLibService], (service: CutLibService) => {
    expect(service).toBeTruthy();
  }));
});
