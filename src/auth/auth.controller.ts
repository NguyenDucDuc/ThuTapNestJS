import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post('/login')
    async login(@Body() body: any){
        return this.authService.login(body.username, body.password)
    }
}
