import * as express from 'express';
import * as bodyParser from 'body-parser';
import { RouterExample } from './router-example';

export class Server {
    private app:express.Application;
    /**
     * The constructor create the Express app
     * @param port the TCP port where the server will listen
     */
    constructor(private port:number=3000){
        this.app = express();
        this.init();
    }

    /**
     * Method for middleware configuration
     */
    protected init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
             extended: false 
        }));
        this.registerRouters();
    }

    /**
     * Method for registering the Routers to attach to this Server
     */
    protected registerRouters() {
        this.app.use('/test', new RouterExample().getRouter());
    }

    
    run() {
        this.app.listen(this.port, () => console.log('Server listening on port '+this.port));
    }

    

}