import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_jogo1"})
    export class Jogo{
        @PrimaryGeneratedColumn()
            id: number
        @IsNotEmpty()

        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 255, nullable: false})
            Nome: string

        @Column({length: 255, nullable: false})
            Classificação: string

        @IsNotEmpty()
        @Column({length: 255, nullable: false})
            descricao: string
            
        @OneToMany(() => Categoria, (Categoria) => Categoria.jogo,{
            onDelete: "CASCADE"
        })
        categoria: Categoria[]

    }