import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}
    @Post('/')
    async create(@Body() body: any, @Res() res: Response){
        const newUser = await this.userService.create(body)
        return res.status(200).send({
            status: 200,
            data: newUser
        })
    }

    @Get('/')
    @UseGuards(RoleGuard)
    @UseGuards(AuthGuard)
    async getAll(@Res() res: Response){
        const users = await this.userService.getAll()
        return res.status(200).send({
            status: 200,
            data: users
        })
    }

    @Post('/login')
   
    async login(@Body() body: any, @Res() res:Response){
        const user = await this.userService.login(body)
        return res.status(200).send({
            status: 200,
            data: user
        })
    }
}
