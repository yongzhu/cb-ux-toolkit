import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { TitleService } from "./title.service";

describe("TitleService", () => {
  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        TitleService
      ]
    });
  }));

  it("should be created", () => {
    const service: TitleService = TestBed.get(TitleService);
    expect(service).toBeTruthy();
  });
});
