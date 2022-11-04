import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Res } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any){
    return resposta.redirect('/swagger')
  }
  
}
