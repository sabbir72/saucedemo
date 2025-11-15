# SauceDemo Playwright Automation

This repository contains **Playwright automation tests** for [SauceDemo](https://www.saucedemo.com/) website.  
The tests follow **Page Object Model (POM)** structure, include **Allure reporting**, and are configured for **GitHub Actions CI/CD**.

---

## Features

- Login with valid credentials
- Add product to cart
- Product validation in cart
- Logout
- Single page
- Allure HTML report
- CI/CD ready (GitHub Actions)

---
## Prerequisites

- Node.js >= 18
- npm
- Git
- Optional: Allure Commandline (`npm install -g allure-commandline`)

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
