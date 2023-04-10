import { LikeEntity } from 'src/like/entities/like.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'post'})
export class PostEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int'
  })
  id: number;

  @Column({
    nullable: true,
    type: 'text'
  })
  content: string;
  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'userId'
  })
  user: UserEntity

  @OneToMany(() => LikeEntity, (like) => like.post)
  likes: LikeEntity[]
}