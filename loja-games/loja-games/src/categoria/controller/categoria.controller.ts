import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";

@Controller('/categoria')
    export class CategoriaController{
        constructor (private readonly categoriaService: CategoriaService) {}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll
    (): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria>{
        return this.categoriaService.findById(id)
    }
    
    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Categoria[]>{
        return this.categoriaService.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() jogo: Categoria): Promise<Categoria>{
        return this.categoriaService.create(jogo)
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Body() jogo: Categoria): Promise<Categoria>{
        return this.categoriaService.update(jogo)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriaService.delete(id)
    }

    } 