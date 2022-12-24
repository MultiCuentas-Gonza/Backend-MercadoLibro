import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsInsertTema
{
    @Field()
    tema: string;
    
    @Field()
    url_imagen: string;
}

@ArgsType()
export class ArgsUpdateTema
{
    @Field()
    tema_original: string;

    @Field()
    tema: string;
    
    @Field()
    url_imagen: string;
}