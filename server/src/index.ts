import "reflect-metadata";
import {createConnection} from "typeorm";
import { Todo } from "./entity/Todo"

createConnection().then(() => {
    console.log("Successfully connected")
}).catch(error => console.log(error));
