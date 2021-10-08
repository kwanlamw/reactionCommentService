import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

// Reaction Interface
export interface IReaction extends Document {
  name: string;
  owner: IUser["_id"];
  commentId: string;
}

// mongoose schema
const ReactionSchema: Schema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  // name: String,
  name: { type: String, required: true },
  // owner: { type: Schema.Types.ObjectId, required: true },
  owner: { type: String, required: true },
  commentId: String,
});

export default mongoose.model<IReaction>("Reaction", ReactionSchema);
