import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
});

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}
