import { FilterQuery, UpdateQuery } from "mongoose";
import CommentModel, { IComment } from "../models/comment.model";

// export function addComment(input: FilterQuery<IComment>) {
//   return CommentModel.create(input);
// }
export async function addComment(newData:any) {
  try {
    const newComment = {
      text: newData.body,
      owner:newData.owner,
    };
    const newResponse = await new CommentModel(newComment).save();
    console.log(newResponse)
    return newResponse;
  } catch (error) {
    console.log(`Could not add Comment ${error}`);
  }
}

// export function getComment(query: FilterQuery<IComment>) {
//   return CommentModel.where(query);
// }
export async function getComment() {
  try {
    const allCommentReaction = await CommentModel.find();
    // const allCommentReaction = await CommentModel.where();
    return allCommentReaction;
  } catch (error) {
    console.log(`Could not fetch any comment ${error}`);
  }
}

// export function editComment(input: UpdateQuery<IComment>) {
//   return CommentModel.findByIdAndUpdate(input);
// }
export async function editComment(updateData:any) {
  try {
    const editResponse = await CommentModel.findByIdAndUpdate( updateData );
    // const editResponse = await CommentModel.updateOne(
    //   { updateData }
    //   // {$set: {date: new Date.now()}}
    // );
    return editResponse;
  } catch (error) {
    console.log(`Could not edit Comment ${error}`);
  }
}


// export function removeComment(id: FilterQuery<IComment>) {
//   return CommentModel.findByIdAndRemove(id);
// }
export async function removeComment(commentId: any) {
  try {
    const removeResponse = await CommentModel.findByIdAndRemove(commentId);
    return removeResponse;
  } catch (error) {
    console.log(`Could not remove comment ${error}`);
  }
}