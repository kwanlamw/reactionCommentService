import Comment from "../models/comment.model";

export async function getComment({
  text,
  owner,
  }: any) {
    const comment = await Comment.where({
      text,
      owner,
    });
  
    return comment;
  };

export async function createComment({
text,
owner,
}: any) {
  const comment = await Comment.create({
    text,
    owner,
  });

  return comment;
};