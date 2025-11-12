import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
