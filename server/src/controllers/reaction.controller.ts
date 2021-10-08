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
    const commentId = "615ff99dde57ba2c58031743";
    //req.params.id;
    //"615fed536f300321fdc8ec75";
    //ObjectId
    const newEmoji = req.body;
    // const owner = req.user?.username as string;
    if (commentId && newEmoji) {
      const reaction = await addReaction(commentId, newEmoji);
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
    const updateId = req.params.id;
    const updateEmoji = req.body;
    // const owner = req.user?.username as string;
    if (updateId && updateEmoji) {
      const reaction = await editReaction(updateId, updateEmoji);
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
    const id = "615ffbf1b066e12e516d3236";
    //ObjectId
    //req.params.id;
    if (id) {
      const removeId = await removeReaction(id);
      return res.json({ message: "success", removeId });
    }
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Error in removeReaction of controller" });
  }
};
