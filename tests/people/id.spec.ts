import { test, expect } from '@playwright/test';

test('Validar o endpoint GET /people/{id}', async ({ request }) => {
  const response = await request.get('/api/people/1/');
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.name).toBe('string');
  expect(typeof responseBody.height).toBe('string');
  expect(typeof responseBody.mass).toBe('string');
  expect(typeof responseBody.hair_color).toBe('string');
  expect(typeof responseBody.skin_color).toBe('string');
  expect(typeof responseBody.eye_color).toBe('string');
  expect(typeof responseBody.birth_year).toBe('string');
  expect(typeof responseBody.gender).toBe('string');
  expect(responseBody.homeworld).toContain('https://swapi.dev/api/planets');
  expect(Array.isArray(responseBody.films)).toBe(true);
  expect(responseBody.films[0]).toContain('https://swapi.dev/api/films/');
  expect(Array.isArray(responseBody.starships)).toBe(true);
  expect(responseBody.starships[0]).toContain('https://swapi.dev/api/starships/');
  expect(Array.isArray(responseBody.species)).toBe(true);
  expect(typeof responseBody.created).toBe('string');
  expect(typeof responseBody.edited).toBe('string');
  expect(responseBody.url).toContain('https://swapi.dev/api/people/');
});

test('Validar status code 404 com personagem não existente', async ({ request }) => {
  const response = await request.get('api/people/90/');
  const responseBody = await response.json();
  expect(response.status()).toBe(404);
  expect(responseBody.detail).toBe("Not found")
})