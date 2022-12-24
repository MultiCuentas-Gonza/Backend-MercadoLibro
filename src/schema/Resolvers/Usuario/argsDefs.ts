import { type } from "os";
import { ArgsType, Field, Float, Int } from "type-graphql";

@ArgsType()
export class ArgsLogin 
{
    @Field()
    correo: string = '';

    @Field()
    contrasenia: string = '';

    @Field()
    tokenUser: string = '';
}

@ArgsType()
export class ArgsSingUp 
{
    @Field()
    nombre: string;

    @Field()
    correo: string;

    @Field()
    contrasenia: string;
}

@ArgsType()
export class ArgsInsertFav 
{
    @Field()
    isbn: string = '';

    @Field()
    tokenUser: string = '';
}


@ArgsType()
export class ArgsAgregarProducto
{
    @Field(type => Int)
    cantidad: number;

    @Field()
    isbn: string;

    @Field()
    tokenUser: string;
}


@ArgsType()
export class ArgsAgregarDireccion
{
    
    @Field()
    tokenUser!: string;

    @Field()
    nombre!: string;

    @Field()
    direccion!: string;

    @Field()
    infoAdicional: string;

    @Field(type => Int)
    dni!: number;

    @Field({nullable: true})
    telefono: string;

    @Field(type => Int)
    cp!: number;
}

@ArgsType()
export class ArgsAgregarCupon
{
    @Field()
    codigo_cupon: string;

    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsOpinar
{
    @Field()
    comentario: string;

    @Field()
    isbn: string;
    
    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsPuntuar
{
    @Field(type => Float)
    puntuacion: number;

    @Field()
    isbn: string;
    
    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsOpinoOPuntuo
{
    @Field()
    isbn: string;
    
    @Field()
    tokenUser: string;
}

@ArgsType()
export class ArgsUpdateUsuario 
{
    @Field()
    correo_original: string = '';

    @Field()
    tokenUser: string = '';

    @Field()
    nombre: string = '';

    @Field()
    correo: string = '';

    @Field()
    contrasenia: string = '';
}
