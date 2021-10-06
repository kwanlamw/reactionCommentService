import Comment from "../models/comment.model";

export async function createComment({
text,
owner,
}: any) {
  const comment = await Comment.create({
    text,
    owner,
  });

  return comment;
}