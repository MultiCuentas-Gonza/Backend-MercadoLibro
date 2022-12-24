
import { Resolver, Query, Args, Mutation, Arg } from "type-graphql";
import { ArgsAgregarCupon, ArgsAgregarDireccion, ArgsAgregarProducto, ArgsInsertFav, ArgsLogin, ArgsOpinar, ArgsOpinoOPuntuo, ArgsPuntuar, ArgsSingUp, ArgsUpdateUsuario } from "./argsDefs";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

import { selectLoginType } from "../../Queries/Usuario/login";
import { SignUp } from "../../Mutations/Usuario/SignUp";

import { InsertFav } from "../../Mutations/Usuario/insertFav";
import { RealizarCompra } from "../../Mutations/Usuario/realizarCompra";
import { SendMercadoPago } from "../../../SendTypes/SendMercadoPago";
import { RemoveFav } from "../../Mutations/Usuario/removeFav";

import { QuitarProducto } from "../../Mutations/Usuario/quitarProducto";
import { EliminarProducto } from "../../Mutations/Usuario/eliminarProducto";
import { AgregarDireccion } from "../../Mutations/Usuario/agregarDireccion";
import { AgregarProducto } from "../../Mutations/Usuario/agregarProductos";
import { EliminarNotificacion } from "../../Mutations/Usuario/eliminarNotificaciones"

import { SendCupon } from "../../../SendTypes/SendCupon";
import { AgregarCupon } from "../../Mutations/Usuario/agregarCupon";

import { Opinar } from "../../Mutations/Usuario/opinar";
import { Puntuar } from "../../Mutations/Usuario/puntuar";
import { Puntuo } from "../../Mutations/Usuario/puntuo";
import { Opino } from "../../Mutations/Usuario/opino";
import { SendOpino } from "../../../SendTypes/SendOpino";
import { SendPuntuo } from "../../../SendTypes/SendPuntuo";
import { Send } from "../../../SendTypes/Send";
import { SendFavoritos } from "../../../SendTypes/SendFavoritos";
import { GetFavoritos } from "../../Mutations/Usuario/getFavoritos";
import { EliminarUsuario } from "../../Mutations/Usuario/eliminarUsuario";
import { selectUpdateType } from "../../Mutations/Usuario/updateUsuario";


@Resolver()
export class UsuarioResolver
{
    @Query(() => SendUsuario)
    async login(@Args() args: ArgsLogin)
    {
        return await selectLoginType(args);
    }

    @Query(() => SendFavoritos)
    async getFavoritos(@Arg('tokenUser') tokenUser: string)
    {
        return await GetFavoritos(tokenUser);
    }

    @Mutation(() => SendUsuario)
    async singUp(@Args() {nombre, correo, contrasenia}: ArgsSingUp)
    {
        return await SignUp(nombre, correo, contrasenia);
    }
    
    @Mutation(() => Send)
    async insertFav(@Args() {isbn, tokenUser}: ArgsInsertFav)
    {
        return await InsertFav(isbn, tokenUser);
    }

    @Mutation(() => Send)
    async removeFav(@Args() {isbn, tokenUser}: ArgsInsertFav)
    {
        return await RemoveFav(isbn, tokenUser);
    }

    @Mutation(() => Send)
    async agregarProducto(@Args() {cantidad, isbn, tokenUser}: ArgsAgregarProducto)
    {
        return await AgregarProducto(cantidad, isbn, tokenUser);
    }

    @Mutation(() => Send)
    async quitarProducto(@Args() {cantidad, isbn, tokenUser}: ArgsAgregarProducto)
    {
        return await QuitarProducto(cantidad, isbn, tokenUser);
    }

    @Mutation(() => Send)
    async eliminarProducto(@Args() {isbn, tokenUser}: ArgsInsertFav)
    {
        return await EliminarProducto(isbn, tokenUser);
    }

    @Mutation(() => SendUsuario)
    async agregarDireccion(@Args() {tokenUser, nombre,direccion, infoAdicional, dni, telefono, cp}: ArgsAgregarDireccion)
    {
        return await AgregarDireccion(tokenUser, 
                                        nombre,
                                        direccion,
                                        infoAdicional,
                                        dni,
                                        telefono,
                                        cp);
    }

    @Mutation(() => SendCupon)
    async agregarCupon(@Args() {codigo_cupon, tokenUser}: ArgsAgregarCupon)
    {
        return await AgregarCupon(codigo_cupon, tokenUser);
    }

    @Mutation(() => SendMercadoPago)
    async realizarCompra(@Arg("tokenUser") tokenUser: string)
    {
        return await RealizarCompra(tokenUser);
    }

    @Mutation(() => Send)
    async opinar(@Args() {comentario, isbn, tokenUser}: ArgsOpinar)
    {
        return await Opinar(comentario, isbn, tokenUser);
    }
    
    @Mutation(() => Send)
    async puntuar(@Args() {puntuacion, isbn, tokenUser}: ArgsPuntuar)
    {
        return await Puntuar(puntuacion, isbn, tokenUser);
    }

    @Query(() => SendOpino)
    async opino(@Args() {isbn, tokenUser}: ArgsOpinoOPuntuo)
    {
        return await Opino(isbn, tokenUser);
    }

    @Query(() => SendPuntuo)
    async puntuo(@Args() {isbn, tokenUser}: ArgsOpinoOPuntuo)
    {
        return await Puntuo(isbn, tokenUser);
    }

    @Mutation(() => Send)
    async eliminarNotificacion(@Arg('id') id: number)
    {
        return await EliminarNotificacion(id);
    }

    @Mutation(() => Send)
    async eliminarUsuario(@Arg('correo') correo: string)
    {
        return await EliminarUsuario(correo)
    }

    @Mutation(() => Send)
    async updateUsuario(@Args() args: ArgsUpdateUsuario)
    {
        return await selectUpdateType(args)
    }
}