import { async, TestBed } from "@angular/core/testing";
import { filter } from "rxjs/operators";

import { FooterConfig } from "./footer.model";
import { FooterService } from "./footer.service";

const UseAPI: FooterConfig = {
  useApi: true
};

const NoUseAPI: FooterConfig = {
  useApi: false
};

describe("FooterService", () => {
  let service: FooterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FooterService
      ],
      imports: []
    });

    service = TestBed.get(FooterService);
  }));

  it("should create service", () => {
    expect(service).toBeDefined();
  });

  it("should update subscriber with flag enabled", () => {
    service.saveFooterData(UseAPI);

    service.footerObservable
      .pipe(filter(data => !!data))
      .subscribe((data: FooterConfig) => {
        expect(data.useApi).toBeTruthy();
      });
  });

  it("should update subscriber with flag disabled", () => {
    service.saveFooterData(NoUseAPI);

    service.footerObservable
      .pipe(filter(data => !!data))
      .subscribe((data: FooterConfig) => {
        expect(data.useApi).toBeFalsy();
      });
  });
});
