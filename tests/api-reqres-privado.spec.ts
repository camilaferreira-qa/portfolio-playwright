import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

test.describe('Operações Táticas - CRUD na API Privada', () => {

  const URL = process.env.REQRES_URL || '';
  const TOKEN = process.env.REQRES_TOKEN || '';
  let recordId = ''; 

  test('POST - Criar novo registro (Infiltração de Dados)', async ({ request }) => {
    const response = await request.post(URL, {
      headers: { 
        'x-api-key': TOKEN, 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      // A carga agora está blindada dentro do objeto "data", como exigido
      data: {
        data: {
          name: 'Camila',
          job: 'QA Automation Engineer'
        }
      }
    });

    const body = await response.json();
    console.log('Resposta do Servidor (Log de Depuração):', JSON.stringify(body, null, 2));

    expect(response.status()).toBe(201); 
    
    // Captura o ID navegando pela caixa "data", se ela existir na resposta
    recordId = body.data ? body.data.id : body.id; 
    console.log(`Alvo criado com sucesso. ID: ${recordId}`);
  });

  test('GET - Validar a existência do registro (Reconhecimento)', async ({ request }) => {
    if (!recordId) test.skip(); 

    const response = await request.get(`${URL}/${recordId}`, {
      headers: { 'x-api-key': TOKEN, 'Accept': 'application/json' }
    });

    expect(response.status()).toBe(200);
  });

  test('DELETE - Apagar o registro (Limpeza de Rastros)', async ({ request }) => {
    if (!recordId) test.skip();

    const response = await request.delete(`${URL}/${recordId}`, {
      headers: { 'x-api-key': TOKEN }
    });

    expect([200, 204]).toContain(response.status());
    console.log(`Rastros do alvo ${recordId} eliminados.`);
  });
});