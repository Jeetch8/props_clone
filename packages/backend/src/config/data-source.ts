import { DataSource } from "typeorm";
import { Users } from "../api/v1/entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "props",
  entities: [Users],
  synchronize: true,
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data source initialized");
  })
  .catch((err) => {
    console.error("Error initializing data source", err);
  });
