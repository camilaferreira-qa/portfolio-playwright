import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

// Carrega o cofre
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

test.describe('Artilharia de API - Portfólio de Elite', () => {

  const URL = process.env.API_URL || '';

  test('GET - Validar contrato e integridade de dados', async ({ request }) => {
    // Garante que o cofre foi lido
    expect(URL).not.toBe('');

    const response = await request.get(URL);
    
    console.log(`Alvo atingido! Status: ${response.status()}`);
    
    // Validação de Status
    expect(response.status()).toBe(200);

    const body = await response.json();
    
    // Validação de Dados (Integridade)
    expect(body).toHaveProperty('id', 1);
    expect(body.title).toBeDefined();
    
    console.log('Conteúdo validado com sucesso!');
  });
});