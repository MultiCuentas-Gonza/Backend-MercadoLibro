import { ArgsType, Field, Float } from "type-graphql";

@ArgsType()
export class ArgsInsertCupon
{
    @Field()
    codigo_cupon: string;
    
    @Field(type => Float)
    descuento: number;
}
