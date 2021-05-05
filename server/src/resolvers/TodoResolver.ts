import "reflect-metadata"
import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";
import { Todo } from "../entity/Todo"

@InputType()
class TodoInput {
    @Field()
    todo: string;

    @Field()
    deadline: string;
}

@Resolver()
export default class TodoResolver {
    @Query(() => [Todo])
    async getAllTodos(): Promise<Todo[]> {
        return await Todo.find();
    }

    @Mutation(() => Todo)
    async createTodo(
        @Arg('options') newTodo: TodoInput,
    ): Promise<Todo> {
        const todoDeadline = new Date(newTodo.deadline);
        const todo = Todo.create({todo: newTodo.todo, deadline: todoDeadline}).save()
        return todo;
    }

    @Mutation(() => Boolean)
    async deleteTodo(
        @Arg('todo') todoToDelete: string
    ): Promise<Boolean> {
        try{
            Todo.delete({todo: todoToDelete});
            return true;
        } catch(err) {
        console.log(err)
        return false
        }
    }
}
