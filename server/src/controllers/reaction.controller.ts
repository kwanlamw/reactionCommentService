import Reaction from "../models/reaction.model";

export async function createReaction({
name,
owner,

}: any) {
  const reaction = await Reaction.create({
    name,
    owner,
  });

  return reaction;
}