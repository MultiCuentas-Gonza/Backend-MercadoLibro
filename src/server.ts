import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { LibroResolver } from "./schema/Resolvers/Libro/LibroResolver";
import { UsuarioResolver } from "./schema/Resolvers/Usuario/UsuarioResolver";
import { TemaResolver } from "./schema/Resolvers/Tema/TemaResolver";

import bodyParser from "body-parser";
import { CuponResolver } from "./schema/Resolvers/Cupon/CuponResolver";
import { OrdenRsolver } from "./schema/Resolvers/Orden/OrdenResolver";
import { CiudadResolver } from "./schema/Resolvers/Ciduad/CiudadResolver";
import { PaisResolver } from "./schema/Resolvers/Pais/PaisResolver";
import { ProvinciaResolver } from "./schema/Resolvers/Provincia/ProvinciaResolver";
import { notificar } from "./notificar";

const mercadopago = require("mercadopago")

export async function startServer() {

    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    const server = new ApolloServer({
        schema: await buildSchema({
          resolvers: [LibroResolver, 
                      UsuarioResolver, 
                      TemaResolver, 
                      CuponResolver,
                      OrdenRsolver,
                      CiudadResolver,
                      PaisResolver, 
                      ProvinciaResolver],
                      
        validate: false
        }),
        context: ({ req, res }) => ({ req, res })
    });

    await server.start()

    app.post('/notificar', async (req: any, res: any) => {
        await notificar(req, res)
    })


    server.applyMiddleware({ app, path: "/graphql" });

    return app;
}