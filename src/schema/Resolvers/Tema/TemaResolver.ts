import { Resolver, Query, Mutation, Args, Arg} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { SendTema } from "../../../SendTypes/SendTema";
import { EliminarTema } from "../../Mutations/Tema/EliminarTema";
import { InsertTema } from "../../Mutations/Tema/insertTema";
import { UpdateTema } from "../../Mutations/Tema/UpdateTema";
import { GetTemas } from "../../Queries/Tema/getTemas";
import { ArgsInsertTema, ArgsUpdateTema } from "./argsDefs";

@Resolver()
export class TemaResolver
{
    @Query(() => SendTema)
    async getTemas()
    {
        return await GetTemas();
    }

    @Mutation(() => Send)
    async insertTema(@Args() {tema, url_imagen}:ArgsInsertTema)
    {
        return await InsertTema(tema, url_imagen);
    }

    @Mutation(() => Send)
    async updateTema(@Args() {tema_original, tema, url_imagen}:ArgsUpdateTema)
    {
        return await UpdateTema(tema_original, tema, url_imagen);
    }

    @Mutation(() => Send)
    async eliminarTema(@Arg('tema')  tema: string)
    {
        return await EliminarTema(tema);
    }

}