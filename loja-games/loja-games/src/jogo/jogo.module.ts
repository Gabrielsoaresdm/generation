import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogoController } from "./controller/jogo.controller";
import { Jogo } from "./entities/jogo.entity";
import { JogoService } from "./service/jogo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Jogo])],
    providers: [JogoService],
    controllers: [JogoController],
    exports: [TypeOrmModule]
})
export class JogoModule {}