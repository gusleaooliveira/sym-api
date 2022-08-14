import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';
import { RevenuesModule } from './revenues/revenues.module';
import { TasksModule } from './tasks/tasks.module';
import { AlertsModule } from './alerts/alerts.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [UsersModule, ExpensesModule, RevenuesModule, TasksModule, AlertsModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
