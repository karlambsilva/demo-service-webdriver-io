const TodoPage = require("../pages/todo.page");
const appPath = "demo-percy-java";
//const appPath = "demo-percy-java/index-with-changes.html";

describe("To Do application", () => {
  it("should load home page", async () => {
    await TodoPage.open(appPath);

    element = await TodoPage.container;
    await expect(element).toBeDisplayed();

    result = await browser.checkFullPageScreen("fullPage", {
      returnAllCompareData: true,
    });

    await expect(result.misMatchPercentage).toEqual(0);
  });
});
