import request from "supertest";

import app from "../main/app";
import {baseUrl} from "../main/configuration";

describe("GET /api", () => {
  it("should return 200 OK", () => {
    return request(app).get(baseUrl).expect(200);
  });
});
