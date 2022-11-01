import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Jogo } from "../entities/jogo.entity";
import { JogoService } from "../service/jogo.service";

@Controller('/jogo')
    export class JogoController{
        constructor (private readonly jogoService: JogoService) {}
    

@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<Jogo[]> {
    return this.jogoService.findAll();
}

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<Jogo>{
    return this.jogoService.findById(id)
}
@Get('/descricao/:descricao')
@HttpCode(HttpStatus.OK)
findByDescricao(@Param('descricao') descricao: string): Promise<Jogo[]>{
    return this.jogoService.findByDescricao(descricao)
}

@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() categoria: Jogo): Promise<Jogo>{
    return this.jogoService.create(categoria)
}

@Put('/:id')
@HttpCode(HttpStatus.OK)
update(@Body() categoria: Jogo): Promise<Jogo>{
    return this.jogoService.update(categoria)
}
@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number) {
    return this.jogoService.delete(id)
}

}