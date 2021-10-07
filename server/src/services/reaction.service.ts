import { FilterQuery, UpdateQuery } from "mongoose";
import ReactionModel, { IReaction } from "../models/reaction.model";

// export function addReaction(input: FilterQuery<IReaction>) {
//   return ReactionModel.create(input);
// }
export async function addReaction(newEmoji: any) {
  try {
    const newReaction = {
      name: newEmoji.name,
      owner: newEmoji.owner,
    };
    const newResponse = await new ReactionModel(newReaction).save();
    return newResponse;
  } catch (error) {
    console.log(`Could not add Reaction ${error}`);
  }
}

// export function getReaction(query: FilterQuery<IReaction>) {
//   return ReactionModel.where(query);
// }

// export function editReaction(input: UpdateQuery<IReaction>) {
//   return ReactionModel.findByIdAndUpdate(input);
// }
export async function editReaction(updateEmoji: any) {
  try {
    const editResponse = await ReactionModel.findByIdAndUpdate(updateEmoji);
    // const editResponse = await ReactionModel.updateOne(
    //   { updateEmoji }
    //   // {$set: {date: new Date.now()}}
    // );
    return editResponse;
  } catch (error) {
    console.log(`Could not edit Emoji ${error}`);
  }
}

// export function removeReaction(id: FilterQuery<IReaction>) {
//   return ReactionModel.findByIdAndRemove(id);
// }
export async function removeReaction(removeId: any) {
  try {
    const removeResponse = await ReactionModel.findByIdAndRemove(removeId);
    return removeResponse;
  } catch (error) {
    console.log(`Could not remove Emoji ${error}`);
  }
}
