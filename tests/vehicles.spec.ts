import { test, expect } from '@playwright/test';

test('Validar o endpoint GET /vehicles', async ({ request }) => {
  const response = await request.get('/api/vehicles/');
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.count).toBe('number');
  expect(responseBody.next).toContain('https://swapi.dev/api/vehicles/?page=');
  expect(responseBody.previous).toBeNull();
  expect(Array.isArray(responseBody.results)).toBe(true);
  expect(typeof responseBody.results[0].name).toBe('string');
  expect(typeof responseBody.results[0].model).toBe('string');
  expect(typeof responseBody.results[0].manufacturer).toBe('string');
  expect(typeof responseBody.results[0].cost_in_credits).toBe('string');
  expect(typeof responseBody.results[0].length).toBe('string');
  expect(typeof responseBody.results[0].max_atmosphering_speed).toBe('string');
  expect(typeof responseBody.results[0].crew).toBe('string');
  expect(typeof responseBody.results[0].passengers).toBe('string');
  expect(typeof responseBody.results[0].cargo_capacity).toBe('string');
  expect(typeof responseBody.results[0].consumables).toBe('string');
  expect(typeof responseBody.results[0].vehicle_class).toBe('string');
  expect(Array.isArray(responseBody.results[0].films)).toBe(true);
  expect(responseBody.results[0].films[0]).toContain('https://swapi.dev/api/films/');
  expect(typeof responseBody.results[0].created).toBe('string');
  expect(typeof responseBody.results[0].edited).toBe('string');
  expect(responseBody.results[0].url).toContain('https://swapi.dev/api/vehicles/');
});