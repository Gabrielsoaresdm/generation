import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Usuario } from "../../usuario/entities/usuario.entity"

@Entity({name:'tb_produto'})
    export class Produto{
        @PrimaryGeneratedColumn()
        @ApiProperty()
            id: number
            
        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 255, nullable: false})
        @ApiProperty()
            nome: string

      @Column()
      @ApiProperty()
            preco: number

        
           
        @Column({default: false})
        @ApiProperty()
            disponibilidade: boolean

            
        @Column({default: false})
        @ApiProperty()
            reutilizavel: boolean

        @ApiProperty({ type: () => Categoria})
        @ManyToOne(() => Categoria, (Categoria) => Categoria.produto,{
            onDelete: "CASCADE"
        })
        categoria: Categoria[]
        
        @ApiProperty({type: () => Usuario})
        @ManyToOne(() => Usuario, (usuario) => usuario.Produto, {
            onDelete: "CASCADE"
        })
        usuario: Usuario

    }
