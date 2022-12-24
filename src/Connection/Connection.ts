import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../config";
import { Autor } from "../Entities/Autor";
import { Ciudad } from "../Entities/Ciudad";
import { Cupon } from "../Entities/Cupon";
import { Direccion } from "../Entities/Direccion";
import { Direccion_entrega } from "../Entities/Direccion_entrega";
import { Editorial } from "../Entities/Editorial";
import { Idioma } from "../Entities/Idioma";
import { Libro } from "../Entities/Libro";
import { Linea_carrito } from "../Entities/Linea_carrito";
import { Notificacion } from "../Entities/Notificacion";
import { Opinion } from "../Entities/Opinion";
import { Orden } from "../Entities/Orden";
import { Orden_detalle } from "../Entities/Orden_detalle";
import { Pais } from "../Entities/Pais";

import { Provincia } from "../Entities/Provincia";
import { Puntuacion } from "../Entities/Puntuacion";
import { Tema } from "../Entities/Tema";

//Entities
import { Usuario } from "../Entities/Usuario";
import { Carrito } from "../Entities/Carrito";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [Pais, 
               Provincia,
               Ciudad,
               Idioma,
               Autor,
               Tema,
               Editorial,
               Opinion,
               Puntuacion,
               Direccion,
               Direccion_entrega,
               Cupon,
               Orden,
               Orden_detalle,
               Linea_carrito,
               Libro,
               Carrito,
               Usuario,
               Notificacion],
    synchronize: true,
    logging: true,
});