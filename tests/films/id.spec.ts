import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /films/{id}/", async ({ request }) => {
  const response = await request.get("/api/films/1/");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.title).toBe("string");
  expect(typeof responseBody.episode_id).toBe("number");
  expect(typeof responseBody.opening_crawl).toBe("string");
  expect(typeof responseBody.director).toBe("string");
  expect(typeof responseBody.producer).toBe("string");
  expect(typeof responseBody.release_date).toBe("string");
  expect(Array.isArray(responseBody.characters)).toBe(true);
  expect(responseBody.characters[0]).toContain("https://swapi.dev/api/people/");
  expect(Array.isArray(responseBody.planets)).toBe(true);
  expect(responseBody.planets[0]).toContain("https://swapi.dev/api/planets/");
  expect(Array.isArray(responseBody.starships)).toBe(true);
  expect(responseBody.starships[0]).toContain(
    "https://swapi.dev/api/starships/",
  );
  expect(Array.isArray(responseBody.vehicles)).toBe(true);
  expect(responseBody.vehicles[0]).toContain("https://swapi.dev/api/vehicles/");
  expect(Array.isArray(responseBody.species)).toBe(true);
  expect(responseBody.species[0]).toContain("https://swapi.dev/api/species/");
  expect(typeof responseBody.created).toBe("string");
  expect(typeof responseBody.edited).toBe("string");
  expect(responseBody.url).toContain("https://swapi.dev/api/films/");
});

test("Validar status code 404 com filme não existente", async ({ request }) => {
  const response = await request.get("api/films/10/");
  const responseBody = await response.json();
  expect(response.status()).toBe(404);
  expect(responseBody.detail).toBe("Not found");
});
