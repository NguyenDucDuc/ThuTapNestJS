import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}

  async login(username: string, pass: string): Promise<any> {
    const body = {
        username: username,
        password: pass,
    }
    const user = await this.userService.login(body)
    if(!user) throw new UnauthorizedException()
    const payload = { user: user, sub: user.userId };
    return {
        ...user,
        access_token: await this.jwtService.signAsync(payload),
    };
  }
}
