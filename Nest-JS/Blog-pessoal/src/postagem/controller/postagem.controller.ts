import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../entities/postagem.entities";
import { PostagemService } from "../service/postagem.service";


@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagens')
@ApiBearerAuth()
    export class PostagemController {
        constructor(private readonly PostagemService: PostagemService){}

        @Get()
        @HttpCode(HttpStatus.OK)
        getAll(): Promise<Postagem[]> {
            return this.PostagemService.findAll();
        }

        @Get('/:id')
            @HttpCode(HttpStatus.OK)
                 getById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
                     return this.PostagemService.findById(id)
        }

        @Get('/titulo/:titulo')
            @HttpCode(HttpStatus.OK)
              getByDescricao(@Param('titulo') titulo: string): Promise<Postagem[]>{
                return this.PostagemService.findByDescricao(titulo)
        }

        @Post()
            @HttpCode(HttpStatus.CREATED)
                creat(@Body() postagem: Postagem): Promise<Postagem>{
                    return this.PostagemService.create(postagem)
                }
        
        @Put()
            @HttpCode(HttpStatus.OK)
                update(@Body() postagem: Postagem): Promise<Postagem>{
                    return this.PostagemService.update(postagem)
                }

        @Delete('/:id')
            @HttpCode(HttpStatus.NO_CONTENT)
            delete(@Param('id', ParseIntPipe) id: number){
                return this.PostagemService.delete(id)
            }

    }

   
