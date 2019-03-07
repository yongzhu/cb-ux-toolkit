import { CbModule } from "./cb.module";

describe("CbModule", () => {
  let cbModule: CbModule;

  beforeEach(() => {
    cbModule = new CbModule();
  });

  it("should create an instance", () => {
    expect(cbModule).toBeTruthy();
  });
});
