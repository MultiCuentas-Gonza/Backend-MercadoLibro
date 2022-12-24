import { Resolver, Mutation, Arg, Args, Query} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { SendCiudad } from "../../../SendTypes/SendCiudad";

import { EliminarCiudad } from "../../Mutations/Ciudad/eliminarCiudad";
import { InsertCiudad } from "../../Mutations/Ciudad/insertCiudad";
import { GetAllCiudades } from "../../Queries/Ciudad/getAllCiudades";

import { ArgsInsertCiudad } from "./argsDefs";

@Resolver()
export class CiudadResolver
{
    @Query(() => SendCiudad)
    async getCiudades()
    {
        return await GetAllCiudades();
    }

    @Mutation(() => Send)
    async insertCiudad(@Args() {nombre, nombre_provincia}: ArgsInsertCiudad)
    {
        return await InsertCiudad(nombre, nombre_provincia);
    }

    @Mutation(() => Send)
    async eliminarCiudad(@Arg('nombre') nombre: string)
    {
        return await EliminarCiudad(nombre);
    }
}