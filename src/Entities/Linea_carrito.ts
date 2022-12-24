
import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm"
import { Cupon } from "./Cupon";
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"
import { Carrito } from "./Carrito";

@ObjectType()
@Entity()
export class Linea_carrito extends BaseEntity
{
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    nro_linea!: number;

    @Field(type => Int)
    @Column()
    cantidad!: number;

    @Field(type => Libro, {nullable: true})
    @ManyToOne((type) => Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    libro: Libro;

    @ManyToOne((type) => Carrito, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_carrito'})
    carrito: Carrito;

}