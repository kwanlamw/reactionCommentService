import { FilterQuery, UpdateQuery } from "mongoose";
import ReactionModel, { IReaction } from "../models/reaction.model";

// export function addReaction(input: FilterQuery<IReaction>) {
//   return ReactionModel.create(input);
// }
export async function addReaction(
  commentId: string,
  newEmoji: any
): Promise<IReaction | undefined> {
  try {
    const newReaction = {
      name: newEmoji.name,
      owner: newEmoji.owner,
      commentId: commentId,
    };
    const newResponse = await new ReactionModel(newReaction).save();
    console.log(newResponse);
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
export async function editReaction(
  _id: string,
  updateEmoji: any
): Promise<any> {
  console.log(_id, updateEmoji);
  try {
    const editResponse = await ReactionModel.findByIdAndUpdate(
      _id,
      updateEmoji
    );
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
export async function removeReaction(_id: string): Promise<any> {
  try {
    const removeResponse = await ReactionModel.findByIdAndRemove(_id);
    return removeResponse;
  } catch (error) {
    console.log(`Could not remove Emoji ${error}`);
  }
}
