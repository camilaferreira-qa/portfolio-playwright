import { test, expect } from '@playwright/test';

test.describe('Regras de Negócio - Fixed Income & FX', () => {

  // Simulando um cenário de resposta de API 
  const mockAssetResponse = {
    asset: 'NTN-B 2035',
    price: 4125.50,
    yield: 0.0625,
    currency: 'BRL',
    settlementDate: '2026-04-03' // Simulando um T+2 (Hoje é 01/04)
  };

  test('Deve validar a integridade de um ativo de Renda Fixa', async () => {
    const data = mockAssetResponse;

    // 1. Validação de Preço (Não pode ser negativo ou zero)
    expect(data.price).toBeGreaterThan(0);
    
    // 2. Validação de Taxa (Yield deve ser um número para cálculos de juros)
    expect(typeof data.yield).toBe('number');
    
    // 3. Validação de Moeda (Padrão ISO 4217 - 3 caracteres)
    expect(data.currency).toHaveLength(3);
    expect(data.currency).toBe('BRL');

    // 4. Lógica de Data (Deve ser uma data futura/presente, nunca passada)
    const settlement = new Date(data.settlementDate);
    const today = new Date('2026-04-01');
    expect(settlement.getTime()).toBeGreaterThanOrEqual(today.getTime());

    console.log(`Ativo ${data.asset} validado com sucesso sob regras de conformidade financeira.`);
  });
});