import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../service/auth.service";

@Injectable()
    export class LocalStrategy extends PassportStrategy(Strategy){

        constructor (private authService: AuthService){
            super({
                    usernamefield: 'usuario',
                    passwordfield: 'senha'
            })
        }

        async validate(username: string, password: string): Promise<any>{
            const user = await this.authService.validarUsuario
            if(!user){
                throw new UnauthorizedException();
            }
            return user;
        }
           
    }