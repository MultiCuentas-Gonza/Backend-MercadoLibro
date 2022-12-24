import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsInsertProvincia
{
    @Field()
    nombre: string;
    
    @Field()
    nombre_pais: string;
}