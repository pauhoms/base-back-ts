import "reflect-metadata";

import { Connection, createConnection } from "typeorm";

export const connection = createConnection({
  type: "mariadb",
  host: "127.0.0.1",
  port: 1000,
  username: "root",
  password: "toor",
  database: "authdb",
  entities: [__dirname + "/entity/**/*.entity{.ts,.js}"],
}).then((connection: Connection) => connection) as Promise<Connection>;
