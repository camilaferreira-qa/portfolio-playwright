import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Jornada do Usuário - Checkout de Elite', () => {
  
  // 1. O Gancho (Hook): Isso roda ANTES de cada teste deste bloco
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessarPagina();
    await loginPage.fazerLogin('standard_user', 'secret_sauce');
  });

  test('Deve realizar uma compra completa com sucesso', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    // O teste já começa LOGADO. Foco total na ação do checkout.
    await page.locator('.inventory_item button').first().click();
    await checkoutPage.irParaOCarrinho();
    await checkoutPage.iniciarCheckout();
    await checkoutPage.preencherDadosEnvio('Camila', 'QA', '12345-678');
    await checkoutPage.finalizarCompra();

    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
  });

  test('Deve validar que o carrinho está vazio após o checkout', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    // Aqui poderíamos adicionar uma lógica para validar se o ícone do carrinho zerou
    // Isso demonstra que você pensa em "Estado da Aplicação"
  });
});