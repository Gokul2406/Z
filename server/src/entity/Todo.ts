import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@ObjectType()
@Entity()
export class Todo extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    todo: string;

    @Column()
    @Field()
    isCompleted: boolean;

    @Column({type: "date"})
    @Field()
    deadline: Date

    @Column({type: "date"})
    @Field()
    createdAt: Date

}
