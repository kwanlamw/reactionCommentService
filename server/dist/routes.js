"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
// import { commentRoutes } from "./routes/commentRoutes";
// import { reactionRoutes } from "./routes/reactionRoutes";
exports.routes = express_1.default.Router();
// routes.use("/comment", commentRoutes);
// routes.use('/reaction', reactionRoutes);
