import "reflect-metadata";
import {startServer} from "./server";
import { AppDataSource } from "./Connection/Connection";
import { PORT } from "./config";
import { cronResetContraseniasTemporales } from "./resetContraseniasTemporales";

const puerto = Number(PORT);

async function main()
{
    try
    {
        AppDataSource.initialize();
        const app = await startServer();
        app.listen(puerto);

        await cronResetContraseniasTemporales()

        console.log(`server on http://localhost:${puerto}/graphql`);
    }
    catch(err)
    {
        console.error(err);
    }
}

main();
