import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(user: IUser) {
    const resp = await new this.userModel(user).save();
    return resp;
  }

  async findById(id: string) {
    const resp = await this.userModel.findById(id).exec();
    return resp;
  }

  async find() {
    const resp = await this.userModel.find().exec();
    return resp;
  }

  async update(id: string, user: IUser) {
    const resp = await this.userModel.findByIdAndUpdate(id, user).exec();
    return resp;
  }

  async delete(id: string) {
    const resp = this.userModel.findOneAndDelete({ _id: id }).exec();
    return (await resp).remove();
  }
}
