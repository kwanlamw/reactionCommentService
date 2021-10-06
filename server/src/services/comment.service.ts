import { CreateQuery, FilterQuery } from "mongoose";
import CommentModel, { IComment } from "../models/comment.model";

export function createComment(input: CreateQuery<IComment>) {
  return CommentModel.create(input);
}

export function getComment(query: FilterQuery<IComment>) {
  return CommentModel.findOne(query);
}