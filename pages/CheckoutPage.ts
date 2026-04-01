import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly cartButton: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async irParaOCarrinho() {
    await this.cartButton.click();
  }

  async iniciarCheckout() {
    await this.checkoutButton.click();
  }

  async preencherDadosEnvio(nome: string, sobrenome: string, cep: string) {
    await this.firstNameInput.fill(nome);
    await this.lastNameInput.fill(sobrenome);
    await this.postalCodeInput.fill(cep);
    await this.continueButton.click();
  }

  async finalizarCompra() {
    await this.finishButton.click();
  }
}