import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_categoria"})
    export class Categoria{

        @PrimaryGeneratedColumn()
        @ApiProperty()
            id: number
        
        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 255, nullable:false})
        @ApiProperty()
            nome: string
        
        @Column({default: false})
        @ApiProperty()
            doacao: boolean
    
    @ApiProperty({type: () => Produto})
    @OneToMany(() => Produto, (Produto) => Produto.categoria,{
        onDelete: "CASCADE"
    })
    produto: Produto[]

    }