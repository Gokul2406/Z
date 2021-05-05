import "reflect-metadata"
import { Resolver, Query } from "type-graphql";
import { Todo } from "../entity/Todo"

@Resolver()
export default class TodoResolver {
    @Query(() => [Todo])
    async getAllTodos(): Promise<Todo[]> {
        return Todo.find();
    }
}
