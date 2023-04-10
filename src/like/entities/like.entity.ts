import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'like'})
export class LikeEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int'
  })
  id: number;

  content: string;
  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'userId'
  })
  user: UserEntity

  @ManyToOne(() => PostEntity, (post) => post.id)
  @JoinColumn({
    name: 'postId'
  })
  post: PostEntity
}