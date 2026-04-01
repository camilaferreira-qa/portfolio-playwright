import { test, expect } from '@playwright/test';

test.describe('Regras de Negócio - Fixed Income & FX', () => {

  test('SUCESSO: Deve validar a integridade de um ativo de Renda Fixa', async () => {
    const data = {
      asset: 'NTN-B 2035',
      price: 4125.50,
      yield: 0.0625,
      currency: 'BRL',
      settlementDate: '2026-04-03'
    };

    expect(data.price).toBeGreaterThan(0);
    expect(typeof data.yield).toBe('number');
    expect(data.currency).toHaveLength(3);
    expect(data.currency).toBe('BRL');
  });

  test('NEGATIVO: Deve barrar ativo com preço zerado ou negativo', async () => {
    // Avisa ao Playwright que este teste especificamente deve falhar
    test.fail(true, 'Este teste deve falhar porque o preço zero é uma violação de regra de negócio.');

    const corruptedData = {
      asset: 'NTN-B 2035',
      price: 0, 
      yield: 0.0625,
      currency: 'BRL',
      settlementDate: '2026-04-03'
    };

    // A validação que causará a falha esperada
    expect(corruptedData.price, 'ERRO CRÍTICO: Preço não pode ser zero!').toBeGreaterThan(0);
  });

}); 