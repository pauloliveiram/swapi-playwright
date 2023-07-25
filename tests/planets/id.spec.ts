import { test, expect } from '@playwright/test';

test('Validar o endpoint GET /planets/{id}', async ({ request }) => {
  const response = await request.get('/api/planets/1/');
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.name).toBe('string');
  expect(typeof responseBody.rotation_period).toBe('string');
  expect(typeof responseBody.orbital_period).toBe('string');
  expect(typeof responseBody.diameter).toBe('string');
  expect(typeof responseBody.climate).toBe('string');
  expect(typeof responseBody.gravity).toBe('string');
  expect(typeof responseBody.terrain).toBe('string');
  expect(typeof responseBody.surface_water).toBe('string');
  expect(Array.isArray(responseBody.residents)).toBe(true);
  expect(responseBody.residents[0]).toContain('https://swapi.dev/api/people/');
  expect(Array.isArray(responseBody.films)).toBe(true);
  expect(responseBody.films[0]).toContain('https://swapi.dev/api/films/');
  expect(typeof responseBody.created).toBe('string');
  expect(typeof responseBody.edited).toBe('string');
  expect(responseBody.url).toContain('https://swapi.dev/api/planets/');
});

test('Validar status code 404 com planeta não existente', async ({ request }) => {
  const response = await request.get('api/planets/90/');
  const responseBody = await response.json();
  expect(response.status()).toBe(404);
  expect(responseBody.detail).toBe("Not found")
});