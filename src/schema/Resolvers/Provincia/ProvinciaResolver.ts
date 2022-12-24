import { Resolver, Mutation, Arg, Args} from "type-graphql";
import { Send } from "../../../SendTypes/Send";

import { EliminarProvincia } from "../../Mutations/Provincia/eliminarProvincia";
import { InsertProvincia } from "../../Mutations/Provincia/insertProvincia";
import { ArgsInsertProvincia } from "./argsDefs";

@Resolver()
export class ProvinciaResolver
{
    @Mutation(() => Send)
    async insertProvincia(@Args() {nombre, nombre_pais}: ArgsInsertProvincia)
    {
        return await InsertProvincia(nombre, nombre_pais);
    }

    @Mutation(() => Send)
    async eliminarProvincia(@Arg('nombre') nombre: string)
    {
        return await EliminarProvincia(nombre);
    }
}