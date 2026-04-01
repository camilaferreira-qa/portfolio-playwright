import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 

// 1. O Carregador de Munição Inteligente
// Agora cada usuário é um objeto com uma "expectativa" (expectedOutcome)
const testData = [
  { user: 'standard_user', expectedOutcome: 'success' },
  { user: 'locked_out_user', expectedOutcome: 'error' },
  { user: 'problem_user', expectedOutcome: 'success' }
];

test.describe('SauceDemo - Advanced Data-Driven & Edge Cases', () => {

  for (const data of testData) {
    
    test(`Login validation for user: ${data.user}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      
      await loginPage.acessarPagina();
      await loginPage.fazerLogin(data.user, 'secret_sauce');

      // 2. A Lógica de Decisão (O "Cérebro" do Teste)
      if (data.expectedOutcome === 'success') {
        // Se esperamos sucesso, validamos a URL de inventário
        await expect(page).toHaveURL(/inventory.html/);
      } else {
        // Se esperamos erro, validamos a mensagem de bloqueio na tela
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Sorry, this user has been locked out');
      }
    });
  }
});