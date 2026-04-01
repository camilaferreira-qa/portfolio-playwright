import { Page, Locator } from '@playwright/test';

// Exportamos a classe para que os testes possam chamá-la
export class LoginPage {
  // 1. O Arsenal: Declaramos quais elementos vamos usar
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // 2. O Construtor: É executado no momento em que a página é chamada
  constructor(page: Page) {
    this.page = page;
    // O Mapa Tático: Mapeamos as coordenadas (locators) de cada elemento uma única vez
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  // 3. As Ordens de Ação (Métodos): O que o robô deve fazer com o mapa
  async acessarPagina() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fazerLogin(usuario: string, senha: string) {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(senha);
    await this.loginButton.click();
  }
}