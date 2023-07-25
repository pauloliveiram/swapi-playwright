import { test, expect } from '@playwright/test';

test('Validar o endpoint GET /species', async ({ request }) => {
  const response = await request.get('/api/species/');
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.count).toBe('number');
  expect(responseBody.next).toContain('https://swapi.dev/api/species/?page=');
  expect(responseBody.previous).toBeNull();
  expect(Array.isArray(responseBody.results)).toBe(true);
  expect(typeof responseBody.results[0].name).toBe('string');
  expect(typeof responseBody.results[0].classification).toBe('string');
  expect(typeof responseBody.results[0].designation).toBe('string');
  expect(typeof responseBody.results[0].average_height).toBe('string');
  expect(typeof responseBody.results[0].skin_colors).toBe('string');
  expect(typeof responseBody.results[0].hair_colors).toBe('string');
  expect(typeof responseBody.results[0].eye_colors).toBe('string');
  expect(typeof responseBody.results[0].average_lifespan).toBe('string');
  expect(responseBody.results[0].homeworld).toContain('https://swapi.dev/api/planets/');
  expect(typeof responseBody.results[0].language).toBe('string');
  expect(Array.isArray(responseBody.results[0].people)).toBe(true);
  expect(responseBody.results[0].people[0]).toContain('https://swapi.dev/api/people/');
  expect(Array.isArray(responseBody.results[0].films)).toBe(true);
  expect(responseBody.results[0].films[0]).toContain('https://swapi.dev/api/films/');
  expect(typeof responseBody.results[0].created).toBe('string');
  expect(typeof responseBody.results[0].edited).toBe('string');
  expect(responseBody.results[0].url).toContain('https://swapi.dev/api/species/');
});