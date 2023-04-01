"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personaje_route_1 = require("./routes/personaje.route");
const db_config_1 = require("../db-config");
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_config_1.dbConnection)();
app.get('/', (req, res) => {
    res.json('ok');
});
app.use('/personaje', personaje_route_1.personajeRoute);
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
