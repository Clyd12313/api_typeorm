"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const db_config_1 = require("./config/db.config");
const PORT = process.env.PORT || 4000;
// Initialize TypeORM connection
db_config_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    // Start the server
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
