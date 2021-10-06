import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

// Reaction Interface
export interface IReaction extends Document {
  name: string;
  owner: IUser['_id'];
}

// mongoose schema
const ReactionSchema: Schema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<IReaction>('Reaction', ReactionSchema);