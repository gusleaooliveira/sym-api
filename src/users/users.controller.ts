import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IUser } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAll() {
    return this.userService.find();
  }

  @Get(':id')
  async getById(@Param() id: string) {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() user: IUser) {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() user: IUser) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return this.userService.delete(id);
  }
}
