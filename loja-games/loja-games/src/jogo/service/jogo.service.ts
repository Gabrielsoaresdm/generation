import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Jogo } from "../entities/jogo.entity";

@Injectable()
    export class JogoService{
        constructor(
            @InjectRepository(Jogo)
                                                                                                   private jogoRepository: Repository<Jogo>
        ){}

    async create(jogo: Jogo): Promise<Jogo>{
        return await this.jogoRepository.save(jogo)
    }

    async update(jogo: Jogo): Promise<Jogo> {
        let buscarJogo = await this.findById(jogo.id)
            if(!buscarJogo || !buscarJogo.id)
                throw new HttpException('Jogo não existente', HttpStatus.NOT_FOUND)
                    return await this.jogoRepository.save(jogo)
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscarJogo = await this.findById(id)

        if (!buscarJogo)
            throw new HttpException ('Jogo não encontrado!', HttpStatus.NOT_FOUND)

        return await this.jogoRepository.delete(id)
    }

    async findAll(): Promise<Jogo[]> {
        return await this.jogoRepository.find({
            relations: {
                categoria: true
            }
        })
    }

    async findById(id: number): Promise<Jogo> {

        let categoria = await this.jogoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        })
   

    if (!categoria)
        throw new HttpException('Categoria não existe', HttpStatus.NOT_FOUND)
    return categoria
    }

    async findByDescricao(descricao:string): Promise<Jogo[]> {
        return await this.jogoRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                categoria: true
            }

        })
    }



    }