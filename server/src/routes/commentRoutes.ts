import express from "express";
import {
  getAll,
  addItem,
  editItem,
  removeItem,
} from "../controllers/comment.controller";
export const commentRoutes = express.Router();

commentRoutes.get("/all", getAll);
commentRoutes.post("/", addItem);
commentRoutes.put("/:id", editItem);
commentRoutes.delete("/:id", removeItem);
