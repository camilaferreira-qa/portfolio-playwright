# 🎯 Playwright E2E Automation Portfolio

This repository contains automated End-to-End (E2E) tests built with **Playwright** and **TypeScript**. It serves as a practical portfolio demonstrating test automation skills, specifically targeting e-commerce flows on [SauceDemo](https://www.saucedemo.com/).

## 🚀 Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **CI/CD:** GitHub Actions

## 📂 Test Scenarios Covered
1. **Login Flow:** Validates successful authentication with standard credentials.
2. **Checkout Flow (E2E):** Simulates a complete user journey: adding an item to the cart, filling out shipping information, and completing the checkout process.

## ⚙️ How to Run Locally

1. Clone the repository:
git clone https://github.com/camilaferreira-qa/portfolio-playwright.git

2. Install dependencies:
npm install

3. Run the tests (Headless mode):
npx playwright test

4. Run the tests (UI mode):
npx playwright test --ui

## 🔄 Continuous Integration (CI)
This project is integrated with **GitHub Actions**. Every push to the `main` branch automatically triggers the test suite across multiple browsers (Chromium, Firefox, WebKit), ensuring continuous quality and preventing regressions.