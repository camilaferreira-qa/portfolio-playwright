# 🎯 Playwright QA Automation Portfolio

This repository contains a comprehensive test automation framework built with Playwright and TypeScript. It serves as a practical portfolio demonstrating advanced QA engineering skills across different layers of the application:

- **UI / E2E Testing:** Automated validation of e-commerce flows on SauceDemo.
- **API Testing:** Backend contract validation and data integrity checks.
- **Security Best Practices:** Implementation of environment variables (`.env`) for safe credential management.
- **CI/CD Pipeline:** Automated test execution configured via GitHub Actions.

## 🚀 Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Environment Management:** dotenv
- **CI/CD:** GitHub Actions

## 📂 Test Scenarios Covered

### UI Testing (Frontend)
1. **Login Flow:** Validates successful authentication with standard credentials.
2. **Checkout Flow (E2E):** Simulates a complete user journey: adding an item to the cart, filling out shipping information, and completing the checkout process.

### API Testing (Backend)
3. **Data Integrity & Contracts:** Validates HTTP status codes (200 OK) and response body structure on public endpoints.
4. **CRUD Operations & Authentication:** Full lifecycle management (POST, GET, DELETE) on private endpoints, handling custom authentication headers (`x-api-key`) and complex JSON payload structures.

## ⚙️ How to Run Locally

1. Clone the repository:
```bash
git clone [https://github.com/camilaferreira-qa/portfolio-playwright.git](https://github.com/camilaferreira-qa/portfolio-playwright.git)
cd portfolio-playwright
```

2. Install dependencies:
```bash
npm install
```

3. **[CRITICAL STEP] Configure Environment Variables:**
Create a `.env` file in the root directory of the project and add the required test variables. Example:
```env
API_URL=[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)
```

4. Run the tests (Headless mode):
```bash
npx playwright test
```

5. Run the tests (UI mode):
```bash
npx playwright test --ui
```

## 🔄 Continuous Integration (CI)
This project is integrated with **GitHub Actions**. Every push to the `main` branch automatically triggers the test suite across multiple browsers (Chromium, Firefox, WebKit). Infrastructure secrets are securely managed via GitHub Repository Secrets, ensuring continuous quality and preventing regressions.