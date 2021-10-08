import { ObjectId } from "bson";
import express, { Request, Response } from "express";
import Comment from "../models/comment.model";
import {
  getComment,
  addComment,
  editComment,
  removeComment,
} from "../services/comment.service";

export const getAll = async (req: Request, res: Response) => {
  try {
    const all = await getComment();
    return res.json({ message: "success", all });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in getAll of controller" });
  }
};

export const addItem = async (req: Request, res: Response) => {
  try {
    const newData = req.body;
    // const owner = req.user?.username as string;
    if (newData) {
      const text = await addComment(newData);
      return res.json({ message: "success", text });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in addItem of controller" });
  }
};

export const editItem = async (req: Request, res: Response) => {
  try {
    const updateId = req.params.id;
    const updateData = req.body;
    // const owner = req.user?.username as string;
    if (updateId && updateData) {
      const text = await editComment(updateId, updateData);
      return res.json({ message: "success", text });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in editItem of controller" });
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (id) {
      const removeId = await removeComment(id);
      return res.json({ message: "success", removeId });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in removeItem of controller" });
  }
};
