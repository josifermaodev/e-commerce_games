import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "./entities/produto.entity";
import { ProdutoController } from "./controller/produto.controller";
import { ProdutoService } from "./service/produto.service";
import { CategoriaModule } from "src/categoria/categoria.module";
import { CategoriaService } from "src/categoria/service/categoria.service";

@Module({
    imports:[ TypeOrmModule.forFeature([Produtos]), CategoriaModule],
    controllers:[ProdutoController],
    providers:[ProdutoService, CategoriaService],
    exports:[TypeOrmModule],
})

export class ProdutoModule {}
