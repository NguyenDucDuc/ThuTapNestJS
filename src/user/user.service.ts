import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}
    async create(body: any): Promise<any>{
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(body.password, salt)
        const newUser = await this.userRepository.create({
            username: body.username,
            password: hashed,
            avatar: body.avatar,
            fullName: body.fullName,
        })
        await this.userRepository.save(newUser)
        return newUser
    }

    async getAll(): Promise<any>{
        const users = await this.userRepository.find()
        return users
    }

    async login(body: any): Promise<any>{
        const user = await this.userRepository.findOne({
            where: {
                username: body.username
            }
        })
        const validPassword = await bcrypt.compare(body.password, user.password)
        
        if(validPassword && user){
            return user
        }
        return null
    }
}
