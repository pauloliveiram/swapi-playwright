import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /vehicles/{id}", async ({ request }) => {
  const response = await request.get("/api/vehicles/4/");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.model).toBe("string");
  expect(typeof responseBody.manufacturer).toBe("string");
  expect(typeof responseBody.cost_in_credits).toBe("string");
  expect(typeof responseBody.length).toBe("string");
  expect(typeof responseBody.max_atmosphering_speed).toBe("string");
  expect(typeof responseBody.crew).toBe("string");
  expect(typeof responseBody.passengers).toBe("string");
  expect(typeof responseBody.cargo_capacity).toBe("string");
  expect(typeof responseBody.consumables).toBe("string");
  expect(typeof responseBody.vehicle_class).toBe("string");
  expect(Array.isArray(responseBody.films)).toBe(true);
  expect(responseBody.films[0]).toContain("https://swapi.dev/api/films/");
  expect(typeof responseBody.created).toBe("string");
  expect(typeof responseBody.edited).toBe("string");
  expect(responseBody.url).toContain("https://swapi.dev/api/vehicles/");
});

test("Validar status code 404 com veículo não existente", async ({
  request,
}) => {
  const response = await request.get("api/vehicles/90/");
  const responseBody = await response.json();
  expect(response.status()).toBe(404);
  expect(responseBody.detail).toBe("Not found");
});
