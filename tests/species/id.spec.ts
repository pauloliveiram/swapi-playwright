import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /species", async ({ request }) => {
  const response = await request.get("/api/species/3/");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.classification).toBe("string");
  expect(typeof responseBody.designation).toBe("string");
  expect(typeof responseBody.average_height).toBe("string");
  expect(typeof responseBody.skin_colors).toBe("string");
  expect(typeof responseBody.hair_colors).toBe("string");
  expect(typeof responseBody.eye_colors).toBe("string");
  expect(typeof responseBody.average_lifespan).toBe("string");
  expect(responseBody.homeworld).toContain("https://swapi.dev/api/planets/");
  expect(typeof responseBody.language).toBe("string");
  expect(Array.isArray(responseBody.people)).toBe(true);
  expect(responseBody.people[0]).toContain("https://swapi.dev/api/people/");
  expect(Array.isArray(responseBody.films)).toBe(true);
  expect(responseBody.films[0]).toContain("https://swapi.dev/api/films/");
  expect(typeof responseBody.created).toBe("string");
  expect(typeof responseBody.edited).toBe("string");
  expect(responseBody.url).toContain("https://swapi.dev/api/species/");
});

test("Validar status code 404 com espécie não existente", async ({
  request,
}) => {
  const response = await request.get("api/species/90/");
  const responseBody = await response.json();
  expect(response.status()).toBe(404);
  expect(responseBody.detail).toBe("Not found");
});
