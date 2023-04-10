import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { PostEntity } from './post/entities/post.entity';
import { LikeEntity } from './like/entities/like.entity';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '25251525',
      database: 'thuctap',
      entities: [UserEntity, PostEntity, LikeEntity],
      synchronize: true,
    }),
    UserModule, 
    PostModule, 
    LikeModule, AuthModule, CaslModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
