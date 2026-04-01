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

### UI / E2E Testing (Frontend)
1. **Login Flows & Edge Cases (Data-Driven):** Validates multiple user personas (Standard, Problem, and Locked-out users) using a single test script with decision logic.
2. **Negative Testing:** Specifically handles authentication failures, ensuring the application displays correct error messages for unauthorized access attempts.
3. **Checkout Flow (E2E):** Complete user journey simulation: cart management, shipping information, and final checkout validation.
4. **Network Interception & Mocking:** Demonstrates advanced network layer control by intercepting API requests to simulate server failures (Status 500) and mocking JSON payloads in real-time to validate UI resilience.

### 📂 Test Scenarios & Architecture

- **Page Object Model (POM):** Implementation of a scalable architecture by separating UI locators and page actions into dedicated classes, ensuring high maintainability.
- **Data-Driven Approach:** Use of dynamic data arrays to execute repetitive test scenarios with different inputs, increasing test coverage while reducing code duplication.

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
Create a `.env` file in the root directory. For security reasons, sensitive URLs and credentials are NOT committed to the repository. Add the following variables to your local file:

```env
# Public API for basic contract testing
API_URL=[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)

# Private API for CRUD and Auth testing
# Obtain your Project ID and Token at the ReqRes dashboard
REQRES_URL=[https://reqres.in/api/collections/users/records?project_id=YOUR_PROJECT_ID](https://reqres.in/api/collections/users/records?project_id=YOUR_PROJECT_ID)
REQRES_TOKEN=your_pro_token_here
```
*Note: These credentials allow the framework to interact with your specific private data collection.*

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