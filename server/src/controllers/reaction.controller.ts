import express, { Request, Response } from "express";
import Reaction from "../models/reaction.model";
import {
  // getReaction,
  addReaction,
  editReaction,
  removeReaction,
} from "../services/reaction.service";



export const addItem = async (req: Request, res: Response) => {
  try {
    const newEmoji = req.body;
    // const owner = req.user?.username as string;
    if (newEmoji) {
      const reaction = await addReaction(newEmoji);
      // const reaction = await addReaction({newEmoji, owner});
      return res.json({ message: "success", reaction });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in addReaction of controller" });
  }
};

export const editItem = async (req: Request, res: Response) => {
  try {
    const updateEmoji = req.body;
    // const owner = req.user?.username as string;
    if (updateEmoji) {
      const reaction = await editReaction(updateEmoji);
      // const reaction = await editReaction({updateEmoji,owner});
      return res.json({ message: "success", reaction });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in editReaction of controller" });
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const id = req.body;
      // const id = req.params.id;
    if (id) {
      const removeId = await removeReaction(id);
      return res.json({ message: "success", removeId });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in removeReaction of controller" });
  }
};