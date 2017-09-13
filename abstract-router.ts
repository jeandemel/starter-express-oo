import { Router, Request, Response } from "express";


/**
 * The AbstractRouter define common code for all routers.
 */
export abstract class AbstractRouter {
    private router:Router = Router();

    constructor(){
        this.registerRoutes();
    }

    protected abstract registerRoutes();

    /**
     * Method that the Express.Router associated to the instance
     */
    getRouter(): Router {
        return this.router;
    }

    /**
     * A method for handling the request
     * @param method The HTTP method of the request
     * @param path The url path of the request
     * @param action The action to execute for this request
     */
    protected requestHandler(method:string, path:string, action:Function) {
        let argsObject = 'params';
        if(method === 'post' || method === 'put') {
            argsObject = 'body'
        }
        this.router[method](path, (req:Request,resp:Response) => {
            let parameters = req[argsObject];
            
            resp.json(action(parameters));
        });
    }

}