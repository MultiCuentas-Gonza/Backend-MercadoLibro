import { Field, ID, ObjectType } from 'type-graphql';
import {BaseEntity,
        Column,
        Entity,
        JoinColumn,
        JoinTable,
        ManyToMany,
        OneToMany,
        OneToOne,
        PrimaryGeneratedColumn} from 'typeorm'
import { Direccion } from './Direccion';

import { Libro } from './Libro'
import { Linea_carrito } from './Linea_carrito';
import { Notificacion } from './Notificacion';
import { Opinion } from './Opinion'
import { Orden } from './Orden';
import { Puntuacion } from './Puntuacion'
import { Carrito } from './Carrito';

@ObjectType()
@Entity()
export class Usuario extends BaseEntity
{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    nombre!: string;

    @Field()
    @Column({
        unique: true
    })
    correo!: string;

    @Field()
    @Column()
    contrasenia!: string;

    @Field()
    @Column({
        default: false
    })
    admin: boolean;

    @Field(type => [Libro], {nullable: true})
    @ManyToMany((type) => Libro, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "favorito",
        joinColumn:
        {
            name: 'id_usuario'
        },
        inverseJoinColumn:
        {
            name: 'isbn'
        }
    })
    favorito?: Libro[];

    @Field(type => Direccion, {nullable: true})
    @OneToOne((type) => Direccion, (direccion) => direccion.usuario, {
        onUpdate: 'CASCADE'
    })
    direccion: Direccion;

    @Field(type => [Notificacion], {nullable: true})
    @OneToMany((type) => Notificacion, notificacion => notificacion.usuario)
    public notificacion: Notificacion[];

    @OneToMany((type) => Opinion, opinion => opinion.usuario,
    {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public opinion: Opinion[];

    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.usuario, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public puntuacion: Puntuacion[];

    @Field(type => [Orden], {nullable: true})
    @OneToMany((type) => Orden, orden => orden.usuario, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public orden?: Orden[];

    @Field(type => Carrito, {nullable: true})
    @OneToOne((type) => Carrito, (carrito) => carrito.usuario, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    carrito: Carrito;
}