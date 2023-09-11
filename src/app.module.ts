import { Module } from '@nestjs/common';
import { UsersMoudule } from './users/users.module';

@Module({
  imports: [UsersMoudule],
  controllers: [],
  providers: [],
})
export class AppModule {}
