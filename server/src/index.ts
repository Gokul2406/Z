import "reflect-metadata";
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express"
import TodoResolver from "./resolvers/TodoResolver";
import { buildSchema } from "type-graphql"
import express from "express";
import UserResolver from "./resolvers/UserResolver";

createConnection().then(async() => {
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [TodoResolver, UserResolver],
		})
	})
	const app = express()
	apolloServer.applyMiddleware({app})
	app.get('/', (_, res) => {
		res.send('Hello')
	})

	app.listen(4000, () => console.log("Server started at port 4000"))

}).catch(error => console.log(error));
