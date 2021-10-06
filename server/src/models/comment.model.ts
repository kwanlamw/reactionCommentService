import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

// Comment Interface
export interface IComment extends Document {
  text: string;
  owner: IUser['_id'];
}

// mongoose schema
const CommentSchema: Schema = new Schema({
  text: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true }
}, {
  timestamps: true
});

export default mongoose.model<IComment>('Comment', CommentSchema);