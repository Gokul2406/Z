import { Response, Request, Express } from "express"
import User from "./entity/User"

export type MyContext = {
    res: Response;
    req: Request & {session: Express.Session<User>}; 
}
