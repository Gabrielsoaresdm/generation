import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tb_usuario'})
    export class Usuario{
        @PrimaryGeneratedColumn()
        @ApiProperty()
            id: number
        
        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 100, nullable:false})
        @ApiProperty()
            nome: string
        
        @IsEmail()
        @Column({length: 255, nullable:false})
        @ApiProperty({example: "email@email.com.br"})
            usuario:string
            
           
        @IsNotEmpty()
        @MinLength(8)
        @Column({length: 255, nullable:false})
        @ApiProperty()
            senha:string
            

        @Column({length: 5000})
        @ApiProperty()
                foto:string

        @ApiProperty({ type: () => Produto})
        @OneToMany(() => Produto, (Produto) => Produto.usuario)
        Produto: Produto[]
           
    }