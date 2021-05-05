import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn} from "typeorm";

@ObjectType()
@Entity()
export class Todo extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    todo: string;

    @Column({default: false})
    @Field()
    isCompleted: boolean;

    //TODO probably make a better system for deadline management

    @Column()
    @Field()
    deadline: Date

    @CreateDateColumn()
    @Field()
    createdAt: Date

}
