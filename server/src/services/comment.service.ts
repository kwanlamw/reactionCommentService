import { 
  CreateQuery, FilterQuery , UpdateQuery } from "mongoose"; //
import CommentModel, { IComment } from "../models/comment.model";

export function createComment(input: CreateQuery<IComment>) {
  return CommentModel.create(input);
}

export function getComment(query: FilterQuery<IComment>) {
  return CommentModel.where(query);
}

export function updateComment(input: UpdateQuery<IComment>) {
    return CommentModel.findByIdAndUpdate(input);
  }

export function deleteComment(id: FilterQuery<IComment>) {
    return CommentModel.findByIdAndDelete(id);
  }