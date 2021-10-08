import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

// Comment Interface
export interface IComment extends Document {
  text: string;
  owner: IUser["_id"];
}

// mongoose schema
const CommentSchema: Schema = new Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    // text: { type: String, required: true },
    text: String,
    // owner: { type: Schema.Types.ObjectId, required: true, ref: "Comment" },
    owner: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IComment>("Comment", CommentSchema);
