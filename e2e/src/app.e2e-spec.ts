import { async } from "@angular/core/testing";
import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", async(async () => {
    await page.navigateTo();
    await expect(await page.getParagraphText()).toEqual("Welcome to cb-ux-toolkit-app!");
  }));
});
