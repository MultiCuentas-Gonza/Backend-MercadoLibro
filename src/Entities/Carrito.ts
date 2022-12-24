import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cupon } from "./Cupon";
import { Usuario } from "./Usuario";
import { Linea_carrito } from "./Linea_carrito";


@ObjectType()
@Entity()
export class Carrito extends BaseEntity
{
    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field(type => Cupon, {nullable: true})
    @OneToOne((type) => Cupon, (cupon) => cupon.codigo_cupon, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({
        name: 'codigo_cupon'
    })
    cupon: Cupon;

    @OneToOne((type) => Usuario, (usuario) => usuario.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({
        name: 'id_usuario'
    })
    usuario: Usuario;

    @Field(type => [Linea_carrito], {nullable: true})
    @OneToMany((type) => Linea_carrito, linea_carrito => linea_carrito.carrito, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public items?: Linea_carrito[];
}