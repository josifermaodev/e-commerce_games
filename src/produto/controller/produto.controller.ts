import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { Produtos } from "../entities/produto.entity";


@Controller('/produtos')
export class ProdutoController{
    constructor(
        private readonly produtoService: ProdutoService,
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]>{
        return this.produtoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Produtos[]> {
        return this.produtoService.findByNome(nome);
    }

    // Método para filtrar produtos do maior preço para o menor
    @Get('/preco/crescente')
    @HttpCode(HttpStatus.OK)
    findByPriceAsc(): Promise<Produtos[]> {
        return this.produtoService.findByPriceAsc();
    }

    // Método para ordenar produtos pelo nome (A-Z ou Z-A)
    @Get('/nome/ordenar')
    @HttpCode(HttpStatus.OK)
    findByNameOrder(@Query('order') order: 'ASC' | 'DESC'): Promise<Produtos[]> {
        return this.produtoService.findByNameOrder(order);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produtos): Promise<Produtos> {
        return this.produtoService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produtos): Promise<Produtos> {
        return this.produtoService.update(produto);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id);
    }

}