import { test, expect } from '@playwright/test';

test('E2E checkout flow for saucedemo.com', async ({ page }) => {
  // 1. Infiltração Direta (Acesso direto, sem buscadores)
  await page.goto('https://www.saucedemo.com/');

  // 2. Login Tático
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. Adicionar Alvo ao Carrinho
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 4. Acessar Carrinho e Iniciar Checkout
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // 5. Preencher Coordenadas de Envio
  await page.locator('[data-test="firstName"]').fill('Operadora');
  await page.locator('[data-test="lastName"]').fill('QA');
  await page.locator('[data-test="postalCode"]').fill('10000');
  await page.locator('[data-test="continue"]').click();

  // 6. Finalizar Missão
  await page.locator('[data-test="finish"]').click();

  // 7. Validação de Sucesso (Asserção)
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});