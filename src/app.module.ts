import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, 
    MongooseModule.forRoot('mongodb+srv://kdm:PN5$eRdXw6p8kS@@cluster0.jrxyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
