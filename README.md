# demo-service-webdriver-io

Project created with the [WebdriverIO Starter Toolkit](https://www.npmjs.com/package/create-wdio) using the Image Comparison (Visual Regression Testing) Service.
Please check the [service documentation](https://webdriver.io/docs/wdio-image-comparison-service/#test-result-outputs) for more details.

## How to run it?

1. Clone the project: ``
2. Go to the project directory: `cd demo-service-webdriver-io`
3. Install the dependencies: `npm install`
4. Run the tests: `npx wdio run ./wdio.conf.js`
5. Check the test result and the generated screenshots

## Notes

1. The site used on the tests are available on [GitHub Pages](https://karlambsilva.github.io/demo-percy-java).
1. There is a [page](https://karlambsilva.github.io/demo-percy-java/index-with-changes.html) with some changes already in place to make the build fail;
1. If you want to update the baseline automatically, set **autoSaveBaseline** in the wdio.conf.js to true;
1. Screenshots are being saved on the following directory: ./screenshots/

## Limitations

1. Could not find a way to add a totally custom name to the screenshots. For example, using the scenario title;
