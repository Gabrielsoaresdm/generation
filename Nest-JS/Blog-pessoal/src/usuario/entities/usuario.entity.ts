import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MaxLength } from "class-validator"
import { Postagem } from "../../postagem/entities/postagem.entities"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'tb_usuario'})
    export class Usuario{

        @PrimaryGeneratedColumn()
        @ApiProperty()
            id: number
        
        @IsNotEmpty()
        @Column({length: 100, nullable:false})
        @ApiProperty()
            nome: string
        
        @IsEmail()
        @Column({length: 100, nullable:false})
        @ApiProperty({ example: "email@email.com.br"})
            usuario:string
            
           
        @IsNotEmpty()
        @MaxLength(8)
        @Column({length: 255, nullable:false})
        @ApiProperty()
            senha:string
            

        @Column({length: 5000})
        @ApiProperty()
                foto:string

        
        @ApiProperty({ type: () => Postagem})
        @OneToMany(() => Postagem, (postagem) => postagem.usuario)
        postagem: Postagem[]
           
       
    }