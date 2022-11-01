import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
    export class ProdutoService{
        constructor(
            @InjectRepository(Produto)
            private produtoRepository: Repository<Produto>
        ){}



        async findAll(): Promise<Produto[]>{
            return await this.produtoRepository.find({})
        }
        
        async findById(id: number): Promise<Produto> {
    
            let produto = await this.produtoRepository.findOne({
                where: {
                    id
                },
                relations: {
                    categoria: true
                }
            })
    
        if (!produto)
            throw new HttpException('Não temos esse produto', HttpStatus.NOT_FOUND)
        return produto
        }

        async findByNome(nome: string):Promise<Produto[]>{
            return await this.produtoRepository.find({
                where: {
                    nome: ILike(`%${nome}%`)
                },
                relations: {
                    categoria: true
                }
            })
        }

        async findByPreco(preco: number): Promise<Produto[]>{
            return await this.produtoRepository.find({
                where: {
                    preco
                },
                relations: {
                    categoria: true
                }
            })
        }

        async findByDisponibilidade(disponibilidade: boolean): Promise<Produto> {
            let produto = await this.produtoRepository.findOne({
              
            })
            if (!produto)
            throw new HttpException('Este produto não está disponível', HttpStatus.NOT_FOUND)
        return produto
            
        }

        async findByReutilizavel(reutilizavel: boolean): Promise<Produto> {
            let produto = await this.produtoRepository.findOne({
                relations: {
                    categoria: true
                }
              
            })
            if (!produto)
            throw new HttpException('Este produto não é reutilizavel', HttpStatus.NOT_FOUND)
        return produto
            
        }
      
      
        async create(usuario: Produto): Promise<Produto> {
            return await this.produtoRepository.save(usuario)
        }
    
        async update(usuario: Produto): Promise<Produto> {
            let buscarproduto = await this.findById(usuario.id)
        
                throw new HttpException ('Usuário não existe', HttpStatus.NOT_FOUND)
    
            return await this.produtoRepository.save(usuario)    
        }
    
        async delete(id: number): Promise<DeleteResult>{
            let buscarproduto = await this.findById(id)
    
            if (!buscarproduto)
                throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND)
    
            return await this.produtoRepository.delete(id)
        }
       
       
    }