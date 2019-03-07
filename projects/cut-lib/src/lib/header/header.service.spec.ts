import { inject, TestBed } from "@angular/core/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { HeaderService } from "./header.service";

describe("HeaderService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderService],
      imports: [RouterTestingModule]
    });
  });

  it("should ...", inject([HeaderService], (service: HeaderService) => {
    expect(service).toBeTruthy();
  }));
});
