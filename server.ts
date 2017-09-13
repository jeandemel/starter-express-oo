import * as express from 'express';
import * as bodyParser from 'body-parser';

export class Server {
    private app:express.Application;
    
    constructor(private port:number=3000){
        this.app = express();
        this.init();
    }

    protected init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
             extended: false 
        }));
    }

    protected registerRouters() {
        this.app.use('/test');
    }

    run() {
        this.app.listen(this.port, () => console.log('Server listening on port '+this.port));
    }

    

}