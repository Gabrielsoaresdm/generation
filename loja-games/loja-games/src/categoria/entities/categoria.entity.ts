import { IsNotEmpty, MaxLength } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_categoria"})
    export class Categoria{

        @PrimaryGeneratedColumn()
            id: number

        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 255, nullable: false})
            Categoria: string
            
        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 255, nullable: false})
            Modo: string

        @IsNotEmpty()
        @Column({length: 255, nullable: false})
            descricao: string

          

        @OneToMany(() => Jogo, (Jogo) => Jogo.categoria,{
            onDelete: "CASCADE"
        })
        jogo: Jogo[]

    }