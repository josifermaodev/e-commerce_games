import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, Min } from "class-validator";
import { Categorias } from "src/categoria/entities/categoria.entity";
import { NumericTransformer } from "src/util/numerictransformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produtos{
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @Column({length: 2000, nullable: false})
    imagem: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @IsPositive()
    @Column({type: 'decimal', precision: 10, scale:2, transformer: new NumericTransformer()})
    preco: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @Column({length: 255, nullable: false})
    desenvolvedor: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @Column({length: 2000, nullable: false})
    demonstracao: string;

    @IsNotEmpty()
    @Min(0)
    @Column({ type: 'int', nullable: false, transformer: new NumericTransformer()})
    estoque: number;

    @ManyToOne(() => Categorias, (categoria) => categoria.produto,{
        onDelete: "CASCADE"
    })
    categoria: Categorias;

}