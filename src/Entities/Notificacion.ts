import { Field, ID, ObjectType } from 'type-graphql';
import {BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn} from 'typeorm'
import { Usuario } from './Usuario';

@ObjectType()
@Entity()
export class Notificacion extends BaseEntity
{

    @Field(type => ID, {nullable: true})
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({nullable: true})
    @Column()
    mensaje!: string;

    @Field((type) => Usuario, {nullable: true})
    @ManyToOne((type) => Usuario, (usuario) => usuario.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;
}