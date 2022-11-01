import { IsEmail, IsNotEmpty, MaxLength } from "class-validator"
import { Postagem } from "src/postagem/entities/postagem.entities"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'tb_usuario'})
    export class Usuario{
        @PrimaryGeneratedColumn()
            id: number
        
        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 100, nullable:false})
            nome: string
        
        @IsEmail()
        @Column({length: 100, nullable:false})
            usuario:string
            
           
        @IsNotEmpty()
        @MaxLength(8)
        @Column({length: 255, nullable:false})
            senha:string
            

        @Column({length: 5000})
                foto:string

        @OneToMany(() => Postagem, (postagem) => postagem.usuario)
        postagem: Postagem[]
           
       
    }