import { ArgsType, Field, Float, Int } from "type-graphql";

@ArgsType()
export class ArgsGetLibro {
    @Field()
    categoria: string = '';

    @Field()
    isbn: string = '';

    @Field()
    titulo: string = '';

    @Field()
    autor: string = '';

    @Field()
    descuento: boolean = false;
    
}

@ArgsType()
export class ArgsInsertLibro
{
    @Field()
    isbn: string

    @Field()
    imagen: string

    @Field()
    titulo: string

    @Field()
    fecha_edicion: string

    @Field(type => Float)
    precio: number

    @Field(type => Int)
    stock: number

    @Field()
    descripcion: string

    @Field({nullable: true})
    fecha_ingreso: string

    @Field(type => Float, {nullable: true})
    descuento?: number

    @Field()
    idioma: string

    @Field()
    editorial: string

    @Field(type => [String])
    autor: Array<string>

    @Field(type => [String])
    tema: Array<string>
}

@ArgsType()
export class ArgsUpdateLibro
{
    @Field({nullable: true})
    isbn_original: string

    @Field()
    isbn: string

    @Field()
    imagen: string

    @Field()
    titulo: string

    @Field()
    fecha_edicion: string

    @Field(type => Float)
    precio: number

    @Field(type => Int)
    stock: number

    @Field()
    descripcion: string

    @Field({nullable: true})
    fecha_ingreso: string

    @Field(type => Float, {nullable: true})
    descuento?: number

    @Field()
    idioma: string

    @Field()
    editorial: string

    @Field(type => [String])
    autor: Array<string>

    @Field(type => [String])
    tema: Array<string>
}