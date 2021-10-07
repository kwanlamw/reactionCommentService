"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import cors from 'cors';
// import routes from './routes';
const connect_1 = __importDefault(require("./connect"));
const app = (0, express_1.default)();
const port = 8080;
// app.use(cors());
//body-parser config;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// const API_VERSION = '/api/v1';
const routes_1 = require("./routes");
// app.use(API_VERSION, routes);
app.use(routes_1.routes);
app.get('/', (req, res) => {
    res.json({ message: 'test get' });
});
app.post('/', (req, res) => {
    res.json({ message: 'test post' });
});
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
const db = 'mongodb://localhost:27017/commentDB';
(0, connect_1.default)({ db });
// routes({  app });
