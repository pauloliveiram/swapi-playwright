import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /planets", async ({ request }) => {
  const response = await request.get("/api/planets/");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.count).toBe("number");
  expect(responseBody.next).toContain("https://swapi.dev/api/planets/?page=");
  expect(responseBody.previous).toBeNull();
  expect(Array.isArray(responseBody.results)).toBe(true);
  expect(typeof responseBody.results[0].name).toBe("string");
  expect(typeof responseBody.results[0].rotation_period).toBe("string");
  expect(typeof responseBody.results[0].orbital_period).toBe("string");
  expect(typeof responseBody.results[0].diameter).toBe("string");
  expect(typeof responseBody.results[0].climate).toBe("string");
  expect(typeof responseBody.results[0].gravity).toBe("string");
  expect(typeof responseBody.results[0].terrain).toBe("string");
  expect(typeof responseBody.results[0].surface_water).toBe("string");
  expect(Array.isArray(responseBody.results[0].residents)).toBe(true);
  expect(responseBody.results[0].residents[0]).toContain(
    "https://swapi.dev/api/people/",
  );
  expect(Array.isArray(responseBody.results[0].films)).toBe(true);
  expect(responseBody.results[0].films[0]).toContain(
    "https://swapi.dev/api/films/",
  );
  expect(typeof responseBody.results[0].created).toBe("string");
  expect(typeof responseBody.results[0].edited).toBe("string");
  expect(responseBody.results[0].url).toContain(
    "https://swapi.dev/api/planets/",
  );
});
