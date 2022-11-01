import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

@Injectable()
    export class CategoriaService{
        constructor(
            @InjectRepository(Categoria)
            private categoriaRepository: Repository<Categoria>
        ){}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            relations: {
                jogo: true
            }
        })
    }

    async findById(id: number): Promise<Categoria> {

        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                jogo: true
            }
        })
   

    if (!categoria)
        throw new HttpException('Categoria não existe', HttpStatus.NOT_FOUND)
    return categoria
    }

    async findByDescricao(descricao:string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                jogo: true
            }

        })
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria)
    }

    async update(categoria: Categoria): Promise<Categoria> {
        let buscarCategoria = await this.findById(categoria.id)
    
            throw new HttpException ('Categoria não existe', HttpStatus.NOT_FOUND)

        return await this.categoriaRepository.save(categoria)    
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscarCategoria = await this.findById(id)

        if (!buscarCategoria)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)

        return await this.categoriaRepository.delete(id)
    }
}


