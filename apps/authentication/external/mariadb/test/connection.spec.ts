import { expect } from "@jest/globals";
import { Connection } from "typeorm";

import { connection } from "../main";

describe("Mariadb connection", () => {
  it("connection should connected", () => {
    connection.then((connection: Connection) =>
      expect(connection.isConnected).toBe(true)
    );
  });

  it("connection should be closed", async () => {
    expect(connection.then((connection: Connection) => connection.close()));
  });
});
