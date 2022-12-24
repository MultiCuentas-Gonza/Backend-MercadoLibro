import { Resolver, Mutation, Arg} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { EliminarPais } from "../../Mutations/Pais/eliminarPais";
import { InsertPais } from "../../Mutations/Pais/insertPais";

@Resolver()
export class PaisResolver
{
    @Mutation(() => Send)
    async insertPais(@Arg('nombre') nombre: string)
    {
        return await InsertPais(nombre);
    }

    @Mutation(() => Send)
    async eliminarPais(@Arg('nombre') nombre: string)
    {
        return await EliminarPais(nombre);
    }
}