"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: true,
    entities: [order_entity_1.Order],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-source.js.map