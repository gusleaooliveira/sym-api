import { Module } from '@nestjs/common';
import { RevenuesService } from './revenues.service';
import { RevenuesController } from './revenues.controller';

@Module({
  providers: [RevenuesService],
  controllers: [RevenuesController]
})
export class RevenuesModule {}
