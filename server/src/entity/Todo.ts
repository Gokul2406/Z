import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    todo: string;

    @Column()
    isCompleted: boolean;

    @Column({type: "date"})
    deadline: Date

    @Column({type: "date"})
    createdAt: Date

}
