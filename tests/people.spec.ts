import { test, expect } from '@playwright/test';

test('Validar o endpoint GET /people', async ({ request }) => {
  const response = await request.get('/api/people/');
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.count).toBe('number');
  expect(responseBody.next).toContain('https://swapi.dev/api/people/?page=');
  expect(responseBody.previous).toBeNull();
  expect(Array.isArray(responseBody.results)).toBe(true);
  expect(typeof responseBody.results[0].name).toBe('string');
  expect(typeof responseBody.results[0].height).toBe('string');
  expect(typeof responseBody.results[0].mass).toBe('string');
  expect(typeof responseBody.results[0].hair_color).toBe('string');
  expect(typeof responseBody.results[0].skin_color).toBe('string');
  expect(typeof responseBody.results[0].eye_color).toBe('string');
  expect(typeof responseBody.results[0].birth_year).toBe('string');
  expect(typeof responseBody.results[0].gender).toBe('string');
  expect(responseBody.results[0].homeworld).toContain('https://swapi.dev/api/planets');
  expect(Array.isArray(responseBody.results[0].films)).toBe(true);
  expect(responseBody.results[0].films[0]).toContain('https://swapi.dev/api/films/');
  expect(Array.isArray(responseBody.results[0].starships)).toBe(true);
  expect(responseBody.results[0].starships[0]).toContain('https://swapi.dev/api/starships/');
  expect(Array.isArray(responseBody.results[0].species)).toBe(true);
  expect(typeof responseBody.results[0].created).toBe('string');
  expect(typeof responseBody.results[0].edited).toBe('string');
  expect(responseBody.results[0].url).toContain('https://swapi.dev/api/people/');
});