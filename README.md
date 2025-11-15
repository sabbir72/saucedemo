# SauceDemo Playwright Automation


## Features

- Login with valid credentials
- Add product to cart
- Product validation in cart
- Logout
- Single page
- Allure HTML report
- CI/CD ready (GitHub Actions)

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd saucedemo-playwright

##2. Install dependencies
npm install

## 3. Install Playwright browsers
npx playwright install

## 4. Run all tests:

npx playwright test

## 5. Run a specific test file:

npx playwright test tests/test2.spec.js --headed

## 7. Generate report:

npx allure generate allure-results --clean

## 8 .Open report:

npx allure open
