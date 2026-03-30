import { test, expect } from '@playwright/test';

test('E2E login flow for saucedemo.com', async ({ page }) => {
  // Acessar a página inicial
  await page.goto('https://www.saucedemo.com/');

  // Preencher usuário e senha
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[data-test="password"]', 'secret_sauce');

  // Clicar em Login
  await page.click('input[data-test="login-button"]');

  // Validar se o texto 'Products' está visível na tela
  const productsTitle = page.getByText('Products', { exact: true });
  await expect(productsTitle).toBeVisible();
});