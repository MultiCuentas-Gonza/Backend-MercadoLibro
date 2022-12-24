import { Field, Float, ID, ObjectType } from "type-graphql";
import { BaseEntity,
        Column,
        Entity,
        JoinColumn,
        ManyToOne,
        OneToMany,
        OneToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Cupon } from "./Cupon";
import { Direccion_entrega } from "./Direccion_entrega";
import { Orden_detalle } from "./Orden_detalle";
import { Usuario } from "./Usuario";

@ObjectType()
@Entity()
export class Orden extends BaseEntity
{
    
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", nullable: true})
    payment_id_mp!: string;

    @Field(type => String)
    @Column({nullable: true})
    fecha!: String;
    
    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 18, 
        scale: 2,
    })
    total!: number;

    @Field(type => Cupon, {nullable: true})
    @ManyToOne((type) => Cupon, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'codigo_cupon'})
    cupon?: Cupon;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @Field(type => Direccion_entrega, {nullable: true})
    @OneToOne((type) => Direccion_entrega, (direccion) => direccion.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_direccion_entrega'})
    direccion_entrega!: Direccion_entrega;
    
    @Field(type => [Orden_detalle], {nullable: true})
    @OneToMany(() => Orden_detalle, (orden_detalle) => orden_detalle.orden, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    orden_detalle!: Orden_detalle[];
}
