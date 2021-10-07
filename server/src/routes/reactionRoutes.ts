import express from "express";
import {
//   getAll,
  addItem,
  editItem,
  removeItem,
} from "../controllers/reaction.controller";
export const reactionRoutes = express.Router();

reactionRoutes.post("/", addItem);
reactionRoutes.put("/:id", editItem);
reactionRoutes.delete("/:id", removeItem);