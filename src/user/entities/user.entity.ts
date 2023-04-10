import { LikeEntity } from 'src/like/entities/like.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity({name: 'user'})
export class UserEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int'
  })
  id: number;

  @Column({
    nullable: true,
    type: 'text'
  })
  username: string;

  @Column({
    nullable: true,
    type: 'text'
  })
  password: string;

  @Column({
    nullable: true,
    type: 'text'
  })
  avatar: string;

  @Column({
    nullable: true,
    type: 'text'
  })
  fullName: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[]

  @OneToMany(() => LikeEntity, (like) => like.user)
  likes: LikeEntity[]
}