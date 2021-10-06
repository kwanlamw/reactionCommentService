import {  FilterQuery , UpdateQuery } from "mongoose"; 
import ReactionModel, { IReaction } from "../models/reaction.model";

export function addReaction(input: FilterQuery<IReaction>) {
  return ReactionModel.create(input);
}

export function getReaction(query: FilterQuery<IReaction>) {
  return ReactionModel.where(query);
}

export function editReaction(input: UpdateQuery<IReaction>) {
    return ReactionModel.findByIdAndUpdate(input);
  }

export function removeReaction(id: FilterQuery<IReaction>) {
    return ReactionModel.findByIdAndRemove(id);
  }