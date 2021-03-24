import express, { Express } from "express";
import request from "supertest";
import { Connection } from "typeorm";
import routes from "../src/api";

describe("it should initialize express server ", () => {
  let app: Express;
  let conn: Connection;

  beforeAll(async () => {
    app = express();
    jest.useFakeTimers();
    process.env.NODE_ENV = "test";
    await app.use(routes());
  });

  it("should fail on sending incorrect url as query param", async (done) => {
    request(app).get("/").expect(200);
    done();
  });
});
