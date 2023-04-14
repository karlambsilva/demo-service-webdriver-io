const { join } = require("path");

exports.config = {
  // Runner Configuration
  runner: "local",

  // Specify Test Files
  specs: ["./test/specs/**/*.js"],
  exclude: [],

  // Capabilities
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      chromeOptions: {
        args: ["--headless"],
      },
    },
  ],

  // Test Configurations
  logLevel: "info",
  bail: 0,
  baseUrl: "https://karlambsilva.github.io/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    "chromedriver",
    [
      "image-comparison",
      // The options
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), "./screenshots/baseline/"),
        formatImageName: "{tag}-{browserName}-{logName}-{width}x{height}",
        screenshotPath: join(process.cwd(), "./screenshots/builds/"),
        clearRuntimeFolder: true,
        savePerInstance: true,
        autoSaveBaseline: false,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        // NOTE: When you are testing a hybrid app please use this setting
        isHybridApp: true,
        // Options for the tabbing image
        tabbableOptions: {
          circle: {
            size: 18,
            fontSize: 18,
            // ...
          },
          line: {
            color: "#ff221a", // hex-code or for example words like `red|black|green`
            width: 3,
          },
        },
        // ... more options
      },
    ],
  ],
  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
