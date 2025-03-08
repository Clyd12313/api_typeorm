"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
const config_1 = require("./config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: config_1.config.database.host,
    port: config_1.config.database.port,
    username: config_1.config.database.user,
    password: config_1.config.database.password,
    database: config_1.config.database.database,
    synchronize: true,
    logging: false,
    entities: [user_entity_1.User],
    migrations: [],
    subscribers: [],
});
