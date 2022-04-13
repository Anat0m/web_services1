import { DataSource } from "typeorm";
import { Order } from "./entities/order.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "order-database",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [Order],
  subscribers: [],
  migrations: [],
})