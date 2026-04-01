import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Operações de Guerra Eletrônica - Network Interception', () => {

  test('Simular Falha Crítica de API (Erro 500) no Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. O SEQUESTRO: Antes de qualquer ação, dizemos ao Playwright:
    // "Se alguém tentar falar com a API de login, responda com Erro 500 (Falha no Servidor)"
    await page.route('**/api/login/**', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error - Simulação de QA' }),
      });
    });

    await loginPage.acessarPagina();
    await loginPage.fazerLogin('standard_user', 'secret_sauce');

    // 2. A VALIDAÇÃO: O site deve lidar com o erro sem "crashar" a aba.
    // (Nota: O SauceDemo é estático, então ele pode ignorar o 500, mas em apps Reais/Next.js, 
    // isso validaria a resiliência do sistema).
    console.log('Intercepção concluída. Verifique se o sistema tratou o erro 500.');
  });

  test('MOCKING - Alterar nome do produto em tempo real', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. A INFILTRAÇÃO: Vamos mudar o nome do produto no "vôo"
    // Interceptamos a carga de dados e injetamos um valor falso (Mock)
    await page.route('**/*.js', async route => {
      const response = await route.fetch();
      let body = await response.text();
      // Trocamos o texto original por um personalizado
      body = body.replace('Sauce Labs Backpack', 'PRODUTO EXCLUSIVO CAMILA QA');
      
      await route.fulfill({
        response,
        body,
      });
    });

    await loginPage.acessarPagina();
    await loginPage.fazerLogin('standard_user', 'secret_sauce');

    // O primeiro item agora deve ter o nome que nós injetamos via rede!
    await expect(page.locator('.inventory_item_name').first()).toContainText('PRODUTO EXCLUSIVO');
  });
});