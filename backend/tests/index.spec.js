const request = require("supertest");
const express = require("express");
const router = require("../src/routes");
const app = express();

app.use("/", router);

describe("GET /", () => {
  test("responds with ok", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ "message": "ok" });
  });
});
