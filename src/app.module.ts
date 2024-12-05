import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
