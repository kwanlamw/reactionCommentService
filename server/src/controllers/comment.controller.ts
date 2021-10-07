import express, { Request, Response } from 'express';
import Comment from "../models/comment.model";

export const createComment = async (req: Request, res: Response) => {
  // req. ???

  // const comment = await Comment.create({
  //   text,
  //   owner,
  // });

  // return comment;

  res.json({ message:'success' })
}

// export class commentController {
//   constructor (private Comment:commentService) {}

//   addComment = async (req: any, res: any) => {

//     try {
//         // const userID = req.user?.id;
//         // let listItems;
//         // if (userID) {
//         //     listItems = await this.commentService.getListItemsByUserID(req.user?.id as number);
//         //     // may also need to include group ide 
//         // }
//         // // console.log("UserID",userID)
//         // res.json({ listItems });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ message: "Error in addComment of controller" });
//     }
// };

// }