import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /films", async ({ request }) => {
  const response = await request.get("/api/films/");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.count).toBe("number");
  expect(responseBody.next).toBeNull();
  expect(responseBody.previous).toBeNull();
  expect(Array.isArray(responseBody.results)).toBe(true);
  expect(typeof responseBody.results[0].title).toBe("string");
  expect(typeof responseBody.results[0].episode_id).toBe("number");
  expect(typeof responseBody.results[0].opening_crawl).toBe("string");
  expect(typeof responseBody.results[0].director).toBe("string");
  expect(typeof responseBody.results[0].producer).toBe("string");
  expect(typeof responseBody.results[0].release_date).toBe("string");
  expect(Array.isArray(responseBody.results[0].characters)).toBe(true);
  expect(responseBody.results[0].characters[0]).toContain(
    "https://swapi.dev/api/people/",
  );
  expect(Array.isArray(responseBody.results[0].planets)).toBe(true);
  expect(responseBody.results[0].planets[0]).toContain(
    "https://swapi.dev/api/planets/",
  );
  expect(Array.isArray(responseBody.results[0].starships)).toBe(true);
  expect(responseBody.results[0].starships[0]).toContain(
    "https://swapi.dev/api/starships/",
  );
  expect(Array.isArray(responseBody.results[0].vehicles)).toBe(true);
  expect(responseBody.results[0].vehicles[0]).toContain(
    "https://swapi.dev/api/vehicles/",
  );
  expect(Array.isArray(responseBody.results[0].species)).toBe(true);
  expect(responseBody.results[0].species[0]).toContain(
    "https://swapi.dev/api/species/",
  );
  expect(typeof responseBody.results[0].created).toBe("string");
  expect(typeof responseBody.results[0].edited).toBe("string");
  expect(responseBody.results[0].url).toContain("https://swapi.dev/api/films/");
});
