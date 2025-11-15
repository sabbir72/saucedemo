/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: [
    ['list'],                 // Console reporter
    ['allure-playwright']     // Allure reporter
  ],
  use: {
    headless: true,          // Browser visible mode
    screenshot: 'only-on-failure',  
    video: 'retain-on-failure'
  }
};

module.exports = config;
